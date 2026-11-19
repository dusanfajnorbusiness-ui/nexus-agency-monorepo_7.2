/* eslint-disable no-undef */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");
const AGENCY_BASE_URL = "https://agency.projekt-nexus.sk";

function resolveDistDir() {
  const possible = [path.join(ROOT_DIR, "dist"), path.join(ROOT_DIR, "apps/agency/dist")];
  return possible.find((p) => fs.existsSync(path.join(p, "index.html"))) || possible;
}

async function executeAgencyPrerender() {
  console.log("⚡ [NEXUS AGENCY SEO]: Generujem statické snapshoty...");
  const DIST_DIR = resolveDistDir();
  const templatePath = path.join(DIST_DIR, "index.html");

  if (!fs.existsSync(templatePath)) {
    console.error(`🔴 Šablóna ${templatePath} neexistuje! Najprv spusti build.`);
    process.exit(1);
  }

  const templateHtml = fs.readFileSync(templatePath, "utf8");

  // Načítanie SEO Registra
  const regPath = path.join(ROOT_DIR, "shared/src/data/seoRegistry.js");
  const mod = await import(`file://${regPath.replace(/\\/g, "/")}`);
  const SEO_REGISTRY = mod.SEO_REGISTRY || mod.default || {};

  let count = 0;
  for (const [route, seo] of Object.entries(SEO_REGISTRY)) {
    const cleanRoute = route.startsWith("/") ? route : `/${route}`;
    const title = seo.ogTitle || seo.title || "[ NEXUS AGENCY ]";
    const desc = seo.ogDescription || seo.description || "B2B Digitálna Infraštruktúra";
    const ogUrl = seo.ogUrl || `${AGENCY_BASE_URL}${cleanRoute}`;
    const image = seo.ogImage || `${AGENCY_BASE_URL}/img/thumb.png`;
    const themeColor = seo.themeColor || "#00F3FF";

    const ogTags = `
    <link rel="canonical" href="${ogUrl}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${ogUrl}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${desc}" />
    <meta property="og:image" content="${image}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${desc}" />
    <meta name="twitter:image" content="${image}" />`;

    let customHtml = templateHtml
      .replace(/<title>.*?<\/title>/i, `<title>${title}</title>`)
      .replace(/<meta name="description" content=".*?"\s*\/?>/i, `<meta name="description" content="${desc}" />`)
      .replace(/<meta name="theme-color" content=".*?"\s*\/?>/i, `<meta name="theme-color" content="${themeColor}" />`)
      .replace("</head>", `${ogTags}\n</head>`);

    if (cleanRoute === "/" || cleanRoute === "/index.html") {
      fs.writeFileSync(templatePath, customHtml, "utf8");
    } else {
      const targetDir = path.join(DIST_DIR, cleanRoute.replace(/^\//, ""));
      fs.mkdirSync(targetDir, { recursive: true });
      fs.writeFileSync(path.join(targetDir, "index.html"), customHtml, "utf8");
    }
    count++;
  }
  console.log(`✅ [HOTOVO]: Vytvorených ${count} statických priečinkov s index.html!`);
}

executeAgencyPrerender().catch(console.error);