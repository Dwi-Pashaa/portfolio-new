import React from "react";
import { ArrowRight, Download, MapPin, Code2, Cpu, Wrench } from "lucide-react";
import { BrutalistButton } from "../common/BrutalistButton";
import { useLanguage } from "../../context/LanguageContext";
import { portfolioData } from "../../data/portfolioData";

export const Hero = () => {
  const { language, t } = useLanguage();

  return (
    <section
      id="home"
      className="pt-10 sm:pt-14 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Hero Main Grid: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headlines & Call to Actions (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* Status badge with lively mint accent */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#dcfce7] border-2 border-ink rounded-full text-xs sm:text-sm font-mono font-bold text-emerald-900 shadow-[2px_2px_0_#111111]">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 border border-ink animate-ping"></span>
              <span>{t("hero.statusBadge")}</span>
            </div>

            {/* Main Heading with playful multi-color highlights */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-ink tracking-tight leading-[1.25]">
              {language === "id" ? (
                <>
                  Halo, saya Dwi Pasha{" "}
                  <span className="inline-block bg-[#ffd43b] px-3 py-1 border-2 border-ink rounded-lg shadow-[3px_3px_0_#111111] -rotate-1">
                    Software Engineer
                  </span>{" "}
                </>
              ) : (
                <>
                  Hi, I'm Dwi Pasha{" "}
                  <span className="inline-block bg-[#ffd43b] px-3 py-1 border-2 border-ink rounded-lg shadow-[3px_3px_0_#111111] -rotate-1">
                    Software Engineer
                  </span>{" "}
                </>
              )}
            </h1>

            {/* Subtitle / Bio summary */}
            <p className="text-base sm:text-lg text-muted font-normal leading-relaxed max-w-xl">
              {t("hero.description")}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <BrutalistButton
                variant="yellow"
                size="lg"
                href="#projects"
                icon={ArrowRight}
                withConfetti={true}
              >
                {t("hero.ctaProjects")}
              </BrutalistButton>

              <BrutalistButton
                variant="outline"
                size="lg"
                href={portfolioData.profile.cvUrl || "/cv-dwipasha.pdf"}
                download="CV-Dwi-Pasha.pdf"
                target="_blank"
                rel="noopener noreferrer"
                icon={Download}
                className="bg-accent-mint-light hover:bg-accent-mint"
              >
                {t("hero.ctaCv")}
              </BrutalistButton>
            </div>
          </div>

          {/* Right Column: Layered 3D Avatar Card (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              {/* Colorful Underlay Background Cards */}
              <div className="absolute inset-0 bg-accent-coral-light border-2 border-ink rounded-2xl transform rotate-3 translate-x-1 translate-y-2"></div>
              <div className="absolute inset-0 bg-[#ffd43b] border-2 border-ink rounded-2xl transform -rotate-2 -translate-x-1"></div>

              {/* Main Top White Card */}
              <div className="relative bg-surface border-2 border-ink rounded-2xl p-6 shadow-brutal text-center space-y-4">
                {/* Photo Frame */}
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 mx-auto rounded-xl bg-gradient-to-tr from-accent-yellow-light via-brand-blue-light to-accent-coral-light border-2 border-ink overflow-hidden flex items-center justify-center shadow-brutal-sm group">
                  <img
                    src={portfolioData.profile.avatarUrl || "/profile.svg"}
                    alt={portfolioData.profile.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-2 right-2 px-2.5 py-0.5 bg-accent border-2 border-ink rounded-md text-[11px] font-mono font-black shadow-[1px_1px_0_#111111]">
                    Available
                  </div>
                </div>

                {/* Name & Roles */}
                <div className="space-y-2.5 pt-1">
                  <h3 className="font-display font-black text-xl sm:text-2xl text-ink">
                    {portfolioData.profile.name}
                  </h3>

                  <div className="flex flex-wrap justify-center gap-2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-brand-blue-light border-2 border-ink rounded-full text-xs font-mono font-bold text-ink shadow-[1px_1px_0_#111111]">
                      <Code2 className="w-3.5 h-3.5 text-brand-blue" />
                      <span>Software Engineer</span>
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent-purple-light border-2 border-ink rounded-full text-xs font-mono font-bold text-ink shadow-[1px_1px_0_#111111]">
                      <Cpu className="w-3.5 h-3.5 text-accent-purple" />
                      <span>AI & Support</span>
                    </span>
                  </div>

                  <div className="flex items-center justify-center gap-1.5 pt-1 text-xs sm:text-sm font-semibold text-muted">
                    <MapPin className="w-4 h-4 text-accent-coral shrink-0" />
                    <span>Cirebon, Indonesia (WIB / GMT+7)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
