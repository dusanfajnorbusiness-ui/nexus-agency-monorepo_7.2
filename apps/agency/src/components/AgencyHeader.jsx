/* eslint-disable no-undef */
// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (AGENCY HEADER — CLEAN B2B HUD V20.95)
// Súbor: apps/agency/src/components/AgencyHeader.jsx
// Status: 100% GROUNDED // PROTOKOL V20 // CLEAN KO-FI UPLINK
// CORE_VERSION: AGENCY-NAV-V20.95
// ============================================================================

import React from "react";
import { SoundFX } from "@shared/utils/SoundEngine.js";
import { Cpu, ExternalLink } from "lucide-react";

export const AgencyHeader = ({
  themeColor,
  dimensionName = "NEXUS AGENCY // DIGITAL INFRASTRUCTURE",
  userState,
}) => {
  const AGENCY_CYAN = themeColor || "#00f3ff";

  const handleAgencyHomeClick = () => {
    if (typeof SoundFX !== "undefined" && SoundFX?.click) SoundFX.click();
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="w-full bg-[#03070A]/95 border-b border-[#00f3ff]/30 backdrop-blur-2xl sticky top-0 z-40 font-mono text-white py-2.5 px-3 md:px-6 select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        {/* LOGO & BRAND TITLE */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div
            onClick={handleAgencyHomeClick}
            className="flex items-center gap-2.5 group cursor-pointer"
            title="Nexus Agency // B2B Digital Infrastructure"
          >
            <div className="w-8 h-8 rounded-xl bg-[#00f3ff]/10 border border-[#00f3ff] flex items-center justify-center shadow-[0_0_12px_#00f3ff] group-hover:scale-105 transition-transform">
              <Cpu className="w-4 h-4 text-[#00f3ff]" />
            </div>
            <div>
              <h1 className="text-xs md:text-sm font-extrabold tracking-widest text-white uppercase flex items-center gap-1.5 leading-none">
                NEXUS AGENCY{" "}
                <span className="text-[9px] text-[#00f3ff] bg-[#00f3ff]/10 px-1.5 py-0.2 rounded-full border border-[#00f3ff]/30">
                  V20.95
                </span>
              </h1>
              <p className="text-[9px] font-semibold tracking-wider uppercase text-[#00f3ff] hidden sm:block mt-0.5">
                {dimensionName}
              </p>
            </div>
          </div>
        </div>

        {/* 🛡️ PRAVÁ ČASŤ: LEN OFICIÁLNY KO-FI B2B COMMISSIONS UPLINK */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="https://ko-fi.com/cybertech_architect/commissions"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => SoundFX?.playSuccess?.()}
            onMouseEnter={() => SoundFX?.playHover?.()}
            className="px-3 py-1.5 text-[11px] font-bold bg-[#00f3ff] text-black rounded-xl hover:bg-white transition-all shadow-[0_0_12px_rgba(0,243,255,0.3)] flex items-center gap-1.5 uppercase tracking-wider cursor-pointer"
          >
            <span>Ko-Fi Shop</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default AgencyHeader;