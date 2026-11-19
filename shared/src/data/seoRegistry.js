
// ============================================================================
// 👑 PROJECT NEXUS — NEXUS AGENCY (DIGITAL INFRASTRUCTURE V20.95)
// Súbor: shared/src/data/seoRegistry.js
// Status: STRICTLY GROUNDED // 100% SUPABASE CDN READY // B2B READY
// Core Version: SEO-REGISTRY-AGENCY V20.95_STABLE
// Autor: Dušan Fajnor @nexus-core2Mb (CyberTech Architect)
// ============================================================================

export const CDN_BASE =
  "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images";

// 🌐 KÁNONICKÝ REGISTER ADRIES PRE TLAČIDLÁ A NAVIGÁCIU
export const AGENCY_URL = "https://agency.projekt-nexus.sk";
export const HOME = "https://agency.projekt-nexus.sk/home";
export const UPLINK = "https://agency.projekt-nexus.sk/login";
export const BLOG = "https://agency.projekt-nexus.sk/blog";
export const OPERATORS = "https://agency.projekt-nexus.sk/operators";
export const ORGANIZER = "https://agency.projekt-nexus.sk/organizer";
export const SETTINGS = "https://agency.projekt-nexus.sk/settings";

export const SEO_REGISTRY = {
  // 🏢 1. HLAVNÝ ROOT ("/")
  "/": {
    title:
      "[ NEXUS AGENCY | DIGITAL INFRASTRUCTURE ]: Digitálna Infraštruktúra & B2B IT Exekúcia | Jedno-členná IT Armáda",
    description:
      "Komerčný Work UI Space a taktická základňa Jedno-člennej IT armády. Front-end chirurgia, UI/UX audity webov, dátová organizácia a vývoj softvéru na mieru.",
    themeColor: "#00F3FF",
    ogUrl: AGENCY_URL,
    ogType: "website",
    ogTitle:
      "[ NEXUS AGENCY | DIGITAL INFRASTRUCTURE ]: Digitálna Infraštruktúra & B2B IT Exekúcia | Jedno-členná IT Armáda",
    ogDescription:
      "Komerčný Work UI Space a taktická základňa Jedno-člennej IT armády. Front-end chirurgia, UI/UX audity webov, dátová organizácia a vývoj softvéru na mieru.",
    ogImage: `${CDN_BASE}/nexusAgency_BrandManifesto/nexus_agency_thumb_16x9.png`,
    twitterCard: "summary_large_image",
    twitterTitle:
      "[ NEXUS AGENCY | DIGITAL INFRASTRUCTURE ]: Digitálna Infraštruktúra & B2B IT Exekúcia | Jedno-členná IT Armáda",
    twitterDescription:
      "Komerčný Work UI Space a taktická základňa Jedno-člennej IT armády. Front-end chirurgia, UI/UX audity webov, dátová organizácia a vývoj softvéru na mieru.",
    twitterImage: `${CDN_BASE}/nexusAgency_BrandManifesto/nexus_agency_thumb_16x9.png`,
  },

  // 🏠 2. HOME UZOL ("/home")
  "/home": {
    title:
      "[ NEXUS AGENCY | HOME ]: Taktická Základňa & Prehľad B2B Operácií",
    description:
      "Centrálny uzol agentúry Nexus Agency. Prehľad technologických kapacít, portfólio 18 inžinierskych služieb a priamy prístup k exekúcii.",
    themeColor: "#00F3FF",
    ogUrl: HOME,
    ogType: "website",
    ogTitle: "[ NEXUS AGENCY | HOME ]: Taktická Základňa B2B Operácií",
    ogDescription:
      "Prehľad technologických kapacít a 18 inžinierskych služieb Jedno-člennej IT armády.",
    ogImage: `${CDN_BASE}/nexusAgency_BrandManifesto/nexus_agency_thumb_16x9.png`,
    twitterCard: "summary_large_image",
    twitterTitle: "[ NEXUS AGENCY | HOME ]: Taktická Základňa B2B Operácií",
    twitterDescription:
      "Prehľad technologických kapacít a 18 inžinierskych služieb Jedno-člennej IT armády.",
    twitterImage: `${CDN_BASE}/nexusAgency_BrandManifesto/nexus_agency_thumb_16x9.png`,
  },

  // 🔑 3. UPLINK / LOGIN ("/login")
  "/login": {
    title: "AGENCY UPLINK: Prihlásenie & Klientska Zóna | NEXUS AGENCY",
    description:
      "Vstupná brána klientskej zóny Nexus Agency. Autorizácia identity klienta a operátora, prístup k zmluvným projektom a komunikácii.",
    themeColor: "#A855F7",
    ogUrl: UPLINK,
    ogType: "website",
    ogTitle: "AGENCY UPLINK: Prihlásenie & Klientska Zóna | NEXUS AGENCY",
    ogDescription:
      "Vstupná brána klientskej zóny Nexus Agency. Autorizácia identity a správa zákaziek.",
    ogImage: `${CDN_BASE}/pagesMaster/16x9_desktop/UplinkModal-16x9.jpg`,
    twitterCard: "summary_large_image",
    twitterTitle: "AGENCY UPLINK: Prihlásenie & Klientska Zóna | NEXUS AGENCY",
    twitterDescription:
      "Vstupná brána klientskej zóny Nexus Agency. Autorizácia identity a správa zákaziek.",
    twitterImage: `${CDN_BASE}/pagesMaster/16x9_desktop/UplinkModal-16x9.jpg`,
  },

  // 📝 4. BLOG / SÉMANTICKÉ VYSIELANIE ("/blog")
  "/blog": {
    title: "AGENCY BLOG: Technologické Analýzy & IT Architektúra | NEXUS AGENCY",
    description:
      "Inžinierske prípadové štúdie, analýzy moderných webových technológií, Ghost-Mode exekúcie a optimalizácie digitálnej infraštruktúry.",
    themeColor: "#FF1493",
    ogUrl: BLOG,
    ogType: "website",
    ogTitle: "AGENCY BLOG: Technologické Analýzy & IT Architektúra | NEXUS AGENCY",
    ogDescription:
      "Inžinierske prípadové štúdie, analýzy technológií a optimalizácia digitálnej infraštruktúry.",
    ogImage: `${CDN_BASE}/pagesMaster/16x9_desktop/BlogPage-16x9.jpg`,
    twitterCard: "summary_large_image",
    twitterTitle: "AGENCY BLOG: Technologické Analýzy & IT Architektúra | NEXUS AGENCY",
    twitterDescription:
      "Inžinierske prípadové štúdie, analýzy technológií a optimalizácia digitálnej infraštruktúry.",
    twitterImage: `${CDN_BASE}/pagesMaster/16x9_desktop/BlogPage-16x9.jpg`,
  },

  // 👥 5. OPERATORS ("/operators")
  "/operators": {
    title: "SIEŤ ENTÍT: Zoznam Operátorov & B2B Partneri | NEXUS AGENCY",
    description:
      "Prehľad aktívnych operátorov, certifikovaných vývojárov a technologických partnerov zapojených do siete Nexus Agency.",
    themeColor: "#00F3FF",
    ogUrl: OPERATORS,
    ogType: "website",
    ogTitle: "SIEŤ ENTÍT: Zoznam Operátorov & B2B Partneri | NEXUS AGENCY",
    ogDescription:
      "Prehľad aktívnych operátorov a partnerov zapojených do siete Nexus Agency.",
    ogImage: `${CDN_BASE}/pagesMaster/16x9_desktop/OperatorsPage-16x9.jpg`,
    twitterCard: "summary_large_image",
    twitterTitle: "SIEŤ ENTÍT: Zoznam Operátorov & B2B Partneri | NEXUS AGENCY",
    twitterDescription:
      "Prehľad aktívnych operátorov a partnerov zapojených do siete Nexus Agency.",
    twitterImage: `${CDN_BASE}/pagesMaster/16x9_desktop/OperatorsPage-16x9.jpg`,
  },

  // 🗂️ 6. ORGANIZER / THE WORKFLOW ("/organizer")
  "/organizer": {
    title: "AGENCY ORGANIZER: Ghost-Mode Task Manager & Exekúcia | NEXUS AGENCY",
    description:
      "Interný a klientsky riadiaci systém pre sledovanie fáz projektov, SLA termínov doručenia a asynchrónnej hlbokej práce (Deep Work).",
    themeColor: "#FF9900",
    ogUrl: ORGANIZER,
    ogType: "website",
    ogTitle: "AGENCY ORGANIZER: Task Manager & Exekúcia | NEXUS AGENCY",
    ogDescription:
      "Riadiaci systém pre sledovanie fáz projektov a SLA termínov v Ghost-Móde.",
    ogImage: `${CDN_BASE}/pagesMaster/16x9_desktop/SettingsPage-16x9.jpg`,
    twitterCard: "summary_large_image",
    twitterTitle: "AGENCY ORGANIZER: Task Manager & Exekúcia | NEXUS AGENCY",
    twitterDescription:
      "Riadiaci systém pre sledovanie fáz projektov a SLA termínov v Ghost-Móde.",
    twitterImage: `${CDN_BASE}/pagesMaster/16x9_desktop/SettingsPage-16x9.jpg`,
  },

  // ⚙️ 7. SETTINGS ("/settings")
  "/settings": {
    title: "AGENCY SETUP: Konfigurácia Klientskej Zóny | NEXUS AGENCY",
    description:
      "Správa klientskeho profilu, API prepojení, bezpečnostných kľúčov a preferencií notifikácií v systéme Nexus Agency.",
    themeColor: "#39FF14",
    ogUrl: SETTINGS,
    ogType: "website",
    ogTitle: "AGENCY SETUP: Konfigurácia Klientskej Zóny | NEXUS AGENCY",
    ogDescription:
      "Správa klientskeho profilu, API kľúčov a bezpečnostných nastavení.",
    ogImage: `${CDN_BASE}/pagesMaster/16x9_desktop/SettingsPage-16x9.jpg`,
    twitterCard: "summary_large_image",
    twitterTitle: "AGENCY SETUP: Konfigurácia Klientskej Zóny | NEXUS AGENCY",
    twitterDescription:
      "Správa klientskeho profilu, API kľúčov a bezpečnostných nastavení.",
    twitterImage: `${CDN_BASE}/pagesMaster/16x9_desktop/SettingsPage-16x9.jpg`,
  },

  // 📑 8. PRÁVNE UZLY A CHYBA
  "/vop": {
    title: "OBCHODNÉ PODMIENKY & SLA GARANCIE | NEXUS AGENCY",
    description:
      "Všeobecné obchodné podmienky, zmluvné SLA lehoty dodania a licenčné práva B2B IT služieb Nexus Agency.",
    themeColor: "#39FF14",
    ogUrl: `${AGENCY_URL}/vop`,
    ogType: "website",
    ogTitle: "OBCHODNÉ PODMIENKY & SLA GARANCIE | NEXUS AGENCY",
    ogDescription:
      "Všeobecné obchodné podmienky, zmluvné SLA lehoty dodania a licenčné práva.",
    ogImage: `${CDN_BASE}/pagesMaster/16x9_desktop/homePage-16x9.jpg`,
    twitterCard: "summary_large_image",
    twitterTitle: "OBCHODNÉ PODMIENKY & SLA GARANCIE | NEXUS AGENCY",
    twitterDescription:
      "Všeobecné obchodné podmienky, zmluvné SLA lehoty dodania a licenčné práva.",
    twitterImage: `${CDN_BASE}/pagesMaster/16x9_desktop/homePage-16x9.jpg`,
  },
  "/privacy": {
    title: "OCHRANA FIREMNÝCH DÁT & GDPR | NEXUS AGENCY",
    description:
      "Pravidlá ochrany osobných údajov a klientskych dát, NDA štandardy a kryptografická bezpečnosť v Nexus Agency.",
    themeColor: "#39FF14",
    ogUrl: `${AGENCY_URL}/privacy`,
    ogType: "website",
    ogTitle: "OCHRANA FIREMNÝCH DÁT & GDPR | NEXUS AGENCY",
    ogDescription:
      "Pravidlá ochrany osobných údajov, NDA štandardy a kryptografická bezpečnosť.",
    ogImage: `${CDN_BASE}/pagesMaster/16x9_desktop/homePage-16x9.jpg`,
    twitterCard: "summary_large_image",
    twitterTitle: "OCHRANA FIREMNÝCH DÁT & GDPR | NEXUS AGENCY",
    twitterDescription:
      "Pravidlá ochrany osobných údajov, NDA štandardy a kryptografická bezpečnosť.",
    twitterImage: `${CDN_BASE}/pagesMaster/16x9_desktop/homePage-16x9.jpg`,
  },
  "/404.html": {
    title: "404 TERMINAL ERROR | Uzol Nenájdený | NEXUS AGENCY",
    description:
      "Požadovaný uzol nebol v infraštruktúre agentúry lokalizovaný. Obnovte spojenie s hlavným terminálom.",
    themeColor: "#FF003C",
    ogUrl: `${AGENCY_URL}/404.html`,
    ogType: "website",
    ogTitle: "404 TERMINAL ERROR | Uzol Nenájdený | NEXUS AGENCY",
    ogDescription:
      "Požadovaný uzol nebol v infraštruktúre agentúry lokalizovaný.",
    ogImage: `${CDN_BASE}/nexusAgency_BrandManifesto/nexus_agency_thumb_16x9.png`,
    twitterCard: "summary_large_image",
    twitterTitle: "404 TERMINAL ERROR | Uzol Nenájdený | NEXUS AGENCY",
    twitterDescription:
      "Požadovaný uzol nebol v infraštruktúre agentúry lokalizovaný.",
    twitterImage: `${CDN_BASE}/nexusAgency_BrandManifesto/nexus_agency_thumb_16x9.png`,
  },
};

export default SEO_REGISTRY;