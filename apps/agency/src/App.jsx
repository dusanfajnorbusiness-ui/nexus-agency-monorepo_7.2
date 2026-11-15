/* eslint-disable no-undef */
/* eslint-enable no-redeclare */

// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (AGENCY AUTONOMOUS MASTER V20.95)
// Súbor: apps/agency/src/App.jsx
// Status: 100% GROUNDED // B2B AUTONOMOUS ROUTING // ZERO SUBDOMAINS BALAST
// CORE_VERSION: AGENCY-STANDALONE-V20.95
// ============================================================================

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import {
  Shield,
  Grid,
  Terminal,
  Users,
  Calendar,
  Settings,
  Mail,
  User,
  LogOut,
  ExternalLink,
  Briefcase,
  PlaySquare,
  FileText,
  PhoneCall,
  Loader2,
  CheckCircle2,
} from "lucide-react";

// ============================================================================
// ⚠️ OSTRÉ IMPORTY PRE AGENCY
// ============================================================================
import { GlobalComponents } from "@shared/components/GlobalComponents.jsx";
import { GlobalFooter } from "@shared/components/GlobalFooter.jsx";
import { SystemLogModal } from "@shared/components/SystemLogModal.jsx";
import { SoundFX } from "@shared/utils/SoundEngine.js";
import PrivacyPage from "@shared/pages/PrivacyPage.jsx";
import VopPage from "@shared/pages/VopPage.jsx";
import { GlobalNexusDropdown } from "@shared/components/GlobalNexusDropdown.jsx";
import { MediaDropdownMenu } from "@shared/components/MediaDropdownMenu.jsx";
import { GlobalSystemsAudioPlayer } from "@shared/components/GlobalSystemsAudioPlayer.jsx";
import {
  NexusThemePropsProvider,
  useNexusThemeProps,
} from "@shared/components/NexusThemePropsContext.jsx";
import { GlobalHamburgerMenu } from "@shared/components/GlobalHamburgerMenu.jsx";

// HLAVNÁ B2B STRÁNKA AGENTÚRY (18 SLUŽIEB + HERO + FILTRE)
import { NexusAgencyPage } from "./pages/NexusAgencyPage.jsx";

const NEXUS_GIT_PUSH_ID = "PUSH-V20.95-AGENCY-AUTONOMOUS";

export function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // Kánonická B2B Cyan farba Nexus Agency
  const themeColor = "#00f3ff";
  const activeSubId = "AGENCY";

  // Kontrola domovskej stránky pre hamburger a hero
  const currentPath = String(location?.pathname || "/");
  const isDefaultHome = currentPath === "/" || currentPath === "/home" || currentPath === "";

  // Sektorová identifikácia pre Footer a modály
  const currentSector = isDefaultHome
    ? "NEXUS AGENCY // B2B INFRASTRUCTURE"
    : `AGENCY // ${currentPath.replace("/", "").toUpperCase()}`;
  const currentTier = "ARCHITECT";

  // 1. SYSTEM LOG MODAL: V20 LAZY INITIALIZER (OTVORENIE IBA 1x NA OKNO BEZ CRASHU)
  const [isSystemLogOpen, setIsSystemLogOpen] = useState(() => {
    if (typeof window === "undefined") return false;
    const sessionSeen = sessionStorage.getItem("nexus_system_log_session_seen");
    if (!sessionSeen) {
      sessionStorage.setItem("nexus_system_log_session_seen", "true");
      return true; // Otvorí sa 1x pri štarte okna
    }
    return false;
  });

  const handleAcknowledgeSystemLog = () => {
    sessionStorage.setItem("nexus_system_log_session_seen", "true");
    localStorage.setItem("nexus_system_log_ack", NEXUS_GIT_PUSH_ID);
    setIsSystemLogOpen(false);
  };

  // Handler pre voľbu v GlobalNexusDropdown
  const handleSelectSub = (targetSub) => {
    if (SoundFX?.click) SoundFX.click();
    if (!targetSub) return;
    const cleanNum = String(targetSub || "")
      .replace(/\D/g, "")
      .padStart(2, "0");
    window.location.href = `https://sub${cleanNum}.projekt-nexus.sk`;
  };

  // 2. BLESKOVÁ SYSTÉMOVÁ INICIALIZÁCIA
  const [systemStatus, setSystemStatus] = useState("LOADING SUPABASE MATRIX...");
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    const sequence = [
      { status: "LOADING SUPABASE MATRIX...", delay: 250 },
      { status: "VERIFYING SECURITY & SHA-256...", delay: 500 },
      { status: "AWAITING B2B CLIENT UPLINK...", delay: 750 },
    ];

    sequence.forEach((step) => {
      setTimeout(() => setSystemStatus(step.status), step.delay);
    });

    const finishTimeout = setTimeout(() => {
      setIsInitializing(false);
      if (SoundFX?.click) SoundFX.click();
    }, 950);

    return () => clearTimeout(finishTimeout);
  }, []);

  // 3. IDENTITA OPERÁTORA (B2B HODNOSŤ)
  const [userState] = useState({
    tier: "ARCHITECT",
    credits: 0,
    isGuest: false,
    displayName: "ARCHITECT",
    email: "agency@projekt-nexus.sk",
  });

  return (
    <HelmetProvider>
      <NexusThemePropsProvider defaultSubId="AGENCY">
        <div className="min-h-screen bg-[#03080a] text-[#b3d4d6] font-mono overflow-x-hidden flex flex-col justify-between text-left relative selection:bg-[#00f3ff] selection:text-black">
          <style>{`
          ::selection { background-color: ${themeColor}; color: #000; }
          .hide-scroll::-webkit-scrollbar { display: none; }
          .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>

          {/* ==================================================================== */}
          {/* 🧭 1. GLOBÁLNA LIŠTA (CYBER-DOCK PROTOTYP)                           */}
          {/* ==================================================================== */}
          <nav
            style={{ zIndex: 1000 }}
            className="fixed top-0 left-0 w-full border-b border-cyan-500/30 bg-[#030609]/95 backdrop-blur-xl px-3 py-2 flex justify-between items-center shadow-[0_4px_25px_rgba(0,180,216,0.15)] text-left"
          >
            {/* LOGO MATERSKEJ LODE (VIZUÁLNY DOCK) */}
            <div className="flex items-center gap-1.5 sm:gap-2 min-w-0 shrink">
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 px-2 py-1 rounded-xl bg-[#080E14] border border-cyan-500/40 shadow-[0_0_12px_rgba(0,180,216,0.2)]">
                <div
                  className="p-1 sm:p-1.5 rounded-lg text-black transition-colors shrink-0"
                  style={{ backgroundColor: themeColor }}
                >
                  <Shield size={13} className="font-black" />
                </div>
                <span className="text-white font-black tracking-widest uppercase italic text-[11px] sm:text-xs hidden md:inline-block">
                  NEXUS <span style={{ color: themeColor }}>AGENCY</span>
                </span>
              </div>

              {/* NAVIGAČNÉ TLAČIDLÁ (NA MOBILE LEN HOME, OSTATNÉ OD MD+) */}
              <div className="flex items-center gap-1 py-0.5">
                {/* 🟢 DYNAMICKÉ TLAČIDLO HOME (NAVIGUJE NA /home) */}
                <button
                  type="button"
                  onClick={() => {
                    if (SoundFX?.click) SoundFX.click();
                    navigate("/home");
                    if (typeof window !== "undefined") {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className="px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-1 sm:gap-1.5 cursor-pointer active:scale-95 shrink-0"
                  style={{
                    color: "#FFFFFF",
                    borderColor: `${themeColor}60`,
                    borderWidth: "1px",
                    borderStyle: "solid",
                    backgroundColor: `${themeColor}15`,
                    boxShadow: `0 0 12px ${themeColor}25`,
                  }}
                  title="[ 🏠 RESET NA DOMOVSKÝ UZOL // /home ]"
                >
                  <Grid size={12} style={{ color: themeColor }} />
                  <span>Home</span>
                </button>

                {/* 🛑 HLUCHÉ TLAČIDLO: BLOG */}
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  title="[ ⚠️ BLOG // MODUL VO VÝVOJI // V20 PROTOKOL ]"
                  className="hidden md:flex px-2.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider text-zinc-600 opacity-40 hover:opacity-50 items-center gap-1 cursor-not-allowed border border-white/5 bg-white/[0.02] select-none transition-opacity shrink-0"
                >
                  <Terminal size={13} />
                  <span>Blog</span>
                </button>

                {/* 🛑 HLUCHÉ TLAČIDLO: OPERATORS */}
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  title="[ ⚠️ OPERÁTORI // SYSTÉMOVÁ MATRIX VO VÝVOJI ]"
                  className="hidden lg:flex px-2.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider text-zinc-600 opacity-40 hover:opacity-50 items-center gap-1 cursor-not-allowed border border-white/5 bg-white/[0.02] select-none transition-opacity shrink-0"
                >
                  <Users size={13} />
                  <span>Operators</span>
                </button>

                {/* 🛑 HLUCHÉ TLAČIDLO: ORGANIZER (PRIDANÉ ZA OPERATORS) */}
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  title="[ ⚠️ ORGANIZER // AGENTÚRNY DIÁR & WORKFLOW VO VÝVOJI ]"
                  className="hidden lg:flex px-2.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider text-zinc-600 opacity-40 hover:opacity-50 items-center gap-1 cursor-not-allowed border border-white/5 bg-white/[0.02] select-none transition-opacity shrink-0"
                >
                  <Calendar size={13} />
                  <span>Organizer</span>
                </button>

                {/* 🛑 HLUCHÉ TLAČIDLO: SETTINGS */}
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  title="[ ⚠️ NASTAVENIA // KONFIGURAČNÁ BRÁNA VO VÝVOJI ]"
                  className="hidden xl:flex px-2.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider text-zinc-600 opacity-40 hover:opacity-50 items-center gap-1 cursor-not-allowed border border-white/5 bg-white/[0.02] select-none transition-opacity shrink-0"
                >
                  <Settings size={13} />
                  <span>Settings</span>
                </button>
              </div>
            </div>

            {/* PRAVÝ BLOK (DROPDOWN + MULTIMEDIA + STATUS OPERÁTORA) */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 ml-2">
              {/* ODDELOVAČ */}
              <div className="hidden sm:block h-4 w-[1px] bg-white/10 mx-0.5 sm:mx-1" />

              {/* DROPDOWN SUBDOMÉN */}
              <div className="shrink-0 max-w-[150px] xs:max-w-[180px] sm:max-w-none">
                <GlobalNexusDropdown
                  currentSubId={activeSubId || "AGENCY"}
                  subId={activeSubId || "AGENCY"}
                  activeColor={themeColor}
                  themeColor={themeColor}
                  color={themeColor}
                  onSelectSub={handleSelectSub}
                />
              </div>

              {/* 🎧 MULTIMEDIÁLNY HUD PREHRÁVAČ */}
              <div className="shrink-0">
                <MediaDropdownMenu themeColor={themeColor} />
              </div>

              {/* OPERÁTOR STATUS BADGE */}
              <div className="flex items-center gap-1 sm:gap-2 shrink-0">
                {/* INBOX (SKRYTÝ NA MOBILE) */}
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  title="[ ⚠️ INBOX // KOMUNIKAČNÝ UZOL VO VÝVOJI ]"
                  className="hidden sm:flex p-1.5 sm:p-2 rounded-lg bg-blue-500/5 text-blue-400/40 border border-blue-500/10 cursor-not-allowed select-none transition-all shrink-0"
                >
                  <Mail size={14} />
                </button>

                {/* AVATAR OPERÁTORA */}
                <div
                  title="[ 👤 OPERÁTOR PROFIL // AUTORIZOVANÝ PRÍSTUP ]"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center bg-black shrink-0 cursor-help transition-all duration-300"
                  style={{
                    borderColor: `${themeColor}80`,
                    boxShadow: `0 0 10px ${themeColor}20`,
                  }}
                >
                  <User size={13} style={{ color: themeColor }} />
                </div>

                {/* LOGOUT (SKRYTÝ NA MOBILE A TABLETE) */}
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  title="[ ⚠️ LOGOUT // ODHLÁSENIE RELÁCIE VO VÝVOJI ]"
                  className="hidden md:flex px-2 py-1.5 rounded-lg bg-red-500/5 text-red-400/40 border border-red-500/10 shrink-0 items-center gap-1 text-[9px] font-black uppercase tracking-wider cursor-not-allowed select-none transition-all"
                >
                  <LogOut size={12} />
                  <span className="hidden xl:inline">LOGOUT</span>
                </button>
              </div>
            </div>
          </nav>

          {/* ==================================================================== */}
          {/* 🧭 2. HLAVNÝ OBSAH (S BLESKOVÝM STATUS LOADEROM)                     */}
          {/* ==================================================================== */}
          <main className="pt-20 flex-1 px-2 md:px-6 pb-8 relative z-10 w-full max-w-7xl mx-auto">
            {isInitializing ? (
              <div className="min-h-[50vh] flex flex-col items-center justify-center font-mono text-center p-4">
                <div className="p-6 rounded-2xl bg-[#03060a]/90 border border-[#00f3ff]/30 shadow-[0_0_30px_rgba(0,243,255,0.15)] flex flex-col items-center gap-3 max-w-md w-full">
                  <Loader2 size={32} className="animate-spin text-[#00f3ff]" />
                  <div className="text-xs tracking-widest text-[#00f3ff] uppercase font-bold">
                    {systemStatus}
                  </div>
                  <div className="text-[10px] text-zinc-500">
                    GHOST-MODE B2B ENGINE // NEXUS AGENCY
                  </div>
                </div>
              </div>
            ) : (
              <div className="animate-fadeIn">
                <Routes>
                  {/* Hlavná trasa agentúry (One-Pager s 18 kartami a detailom cez ?srv=) */}
                  <Route
                    path="/"
                    element={
                      <NexusAgencyPage
                        userState={userState}
                        themeColor={themeColor}
                      />
                    }
                  />
                  <Route
                    path="/home"
                    element={
                      <NexusAgencyPage
                        userState={userState}
                        themeColor={themeColor}
                      />
                    }
                  />

                  {/* Samostatné právne podstránky */}
                  <Route
                    path="/vop"
                    element={<VopPage onBack={() => navigate("/")} />}
                  />
                  <Route
                    path="/privacy"
                    element={<PrivacyPage onBack={() => navigate("/")} />}
                  />

                  {/* Záchranný fallback */}
                  <Route
                    path="*"
                    element={
                      <NexusAgencyPage
                        userState={userState}
                        themeColor={themeColor}
                      />
                    }
                  />
                </Routes>
              </div>
            )}
          </main>

          {/* ==================================================================== */}
          {/* 📡 3. GLOBÁLNY FOOTER A KOMPONENTY                                  */}
          {/* ==================================================================== */}

          <div className="w-full">
            {isSystemLogOpen && (
              <SystemLogModal
                isOpen={isSystemLogOpen}
                onClose={handleAcknowledgeSystemLog}
                onAcknowledge={handleAcknowledgeSystemLog}
                themeColor={themeColor}
                buildPushId={NEXUS_GIT_PUSH_ID}
              />
            )}

            {/* 🍔 GLOBÁLNE HAMBURGER MENU */}
            <GlobalHamburgerMenu
              activeTab="agency"
              themeColor={themeColor}
              activeSubId="AGENCY"
              currentSector={currentSector}
            />

            <GlobalSystemsAudioPlayer
              themeColor={themeColor}
              autoPromptDelay={10000}
            />

             <GlobalFooter
              sector={currentSector}
              tier={currentTier}
              themeColor={themeColor}
              onOpenSystemLog={() => setIsSystemLogOpen(true)}
              onOpenLog={() => setIsSystemLogOpen(true)}
            />

            <GlobalComponents themeColor={themeColor} activeSubId="AGENCY" />
          </div>
        </div>
      </NexusThemePropsProvider>
    </HelmetProvider>
  );
}

export default App;
