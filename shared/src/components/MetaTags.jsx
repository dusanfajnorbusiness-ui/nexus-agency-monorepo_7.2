
// ============================================================================
// 👑 PROJECT NEXUS — NEXUS AGENCY EDITION
// Súbor: shared/src/components/MetaTags.jsx
// Status: STRICTLY GROUNDED // DYNAMIC SEO CHAMELEON // OPEN GRAPH & TWITTER
// Core Version: META-TAGS-AGENCY V20.95
// Autor: Dušan Fajnor @nexus-core2Mb (CyberTech Architect)
// ============================================================================

import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { SEO_REGISTRY, AGENCY_URL, CDN_BASE } from "@shared/data/seoRegistry.js";

export const MetaTags = ({
  title,
  description,
  image,
  color,
  url,
  ogTitle,
  ogDescription,
  twitterTitle,
  twitterDescription,
}) => {
  const location = useLocation();
  const currentPath = location.pathname;

  // ⚡ SÉMANTICKÉ DEDENIE SEO DÁT
  const getActiveSeo = (path) => {
    if (!SEO_REGISTRY) return {};
    if (SEO_REGISTRY[path]) return SEO_REGISTRY[path];

    const pathParts = path.split("/").filter(Boolean);
    const parentPath = pathParts.length > 0 ? `/${pathParts}` : "/";

    if (SEO_REGISTRY[parentPath]) return SEO_REGISTRY[parentPath];
    return SEO_REGISTRY["/"] || {};
  };

  const inheritedSeo = getActiveSeo(currentPath);

  // 🛡️ V20 PRIORITIZAČNÝ PROTOKOL
  const finalTitle =
    title || inheritedSeo.title || "[ NEXUS AGENCY ]: B2B Digitálna Infraštruktúra";
  const finalDesc =
    description ||
    inheritedSeo.description ||
    "18 inžinierskych služieb s fixnou cenou, SLA doručením a bez zbytočných porád.";
  const finalImage =
    image ||
    inheritedSeo.ogImage ||
    `${CDN_BASE}/nexusAgency_BrandManifesto/nexus_agency_thumb_16x9.png`;
  const finalColor = color || inheritedSeo.themeColor || "#00F3FF";

  const finalOgTitle = ogTitle || inheritedSeo.ogTitle || finalTitle;
  const finalOgDesc = ogDescription || inheritedSeo.ogDescription || finalDesc;
  const finalTwitterTitle =
    twitterTitle || inheritedSeo.twitterTitle || finalOgTitle;
  const finalTwitterDesc =
    twitterDescription || inheritedSeo.twitterDescription || finalOgDesc;

  // 🛡️ DYNAMICKÁ ZÁKLADNÁ DOMÉNA (AGENCY B2B FIRST)
  const defaultDomain = AGENCY_URL || "https://agency.projekt-nexus.sk";
  const baseUrl =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : defaultDomain;

  const fullImageUrl = finalImage.startsWith("http")
    ? finalImage
    : `${baseUrl}${finalImage.startsWith("/") ? "" : "/"}${finalImage}`;

  const fullUrl = url
    ? url.startsWith("http")
      ? url
      : `${baseUrl}${url.startsWith("/") ? "" : "/"}${url}`
    : `${baseUrl}${currentPath}`;

  return (
    <Helmet>
      {/* 🔮 ZÁKLADNÉ SEO */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDesc} />
      <meta name="theme-color" content={finalColor} />
      <link rel="canonical" href={fullUrl} />

      {/* 🌐 OPEN GRAPH / FACEBOOK / LINKEDIN */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDesc} />
      <meta property="og:image" content={fullImageUrl} />

      {/* 🔖 TWITTER / X CARD PROTOCOL */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={finalTwitterTitle} />
      <meta name="twitter:description" content={finalTwitterDesc} />
      <meta name="twitter:image" content={fullImageUrl} />
    </Helmet>
  );
};

export default MetaTags;