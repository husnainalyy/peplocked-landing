"use client";

import { useState, type CSSProperties } from "react";

type CatKey = "recovery" | "body" | "cognitive" | "longevity";

const cats: Record<
  CatKey,
  { name: string; focus: string; compounds: string[] }
> = {
  recovery: {
    name: "Recovery",
    focus: "Healing, repair, regeneration",
    compounds: ["BPC-157", "TB-500", "GHK-Cu", "KPV", "Thymosin Alpha-1"],
  },
  body: {
    name: "Body Composition",
    focus: "Fat loss, muscle retention, GH optimization",
    compounds: [
      "Retatrutide",
      "Tirzepatide",
      "Semaglutide",
      "CJC-1295",
      "Ipamorelin",
      "Tesamorelin",
    ],
  },
  cognitive: {
    name: "Cognitive",
    focus: "Focus, memory, neuroprotection",
    compounds: ["Semax", "Selank", "Dihexa", "Cerebrolysin"],
  },
  longevity: {
    name: "Longevity",
    focus: "Cellular health, aging, senescence",
    compounds: ["Epitalon", "GHK-Cu", "NAD+", "Foxo4-DRI", "Humanin"],
  },
};

const order: CatKey[] = ["recovery", "body", "cognitive", "longevity"];

const btnGradient: CSSProperties = {
  position: "relative",
  ["--border-gradient" as string]:
    "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))",
  ["--border-radius-before" as string]: "16px",
};

const panelGradient: CSSProperties = {
  position: "relative",
  ["--border-gradient" as string]:
    "linear-gradient(135deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))",
  ["--border-radius-before" as string]: "16px",
};

const innerPanelGradient: CSSProperties = {
  position: "relative",
  ["--border-gradient" as string]:
    "linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))",
  ["--border-radius-before" as string]: "16px",
};

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 text-red-500"
    >
      <path d="M20 6 9 17l-5-5"></path>
    </svg>
  );
}

export default function Coverage() {
  const [active, setActive] = useState<CatKey>("recovery");
  const cfg = cats[active];

  return (
    <section
      className="sm:px-6 lg:px-8 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll z-10 max-w-7xl mr-auto ml-auto pt-20 pr-4 pb-16 pl-4 relative"
      id="coverage"
    >
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-neutral-300">
          Coverage
        </span>
        <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-white tracking-tight">
          40+ compounds, expanding weekly
        </h2>
        <p className="mt-4 text-base md:text-lg text-neutral-400 font-light leading-relaxed">
          Organized by what you actually want. Browse by goal — each profile
          includes mechanism, dosing, half-life, stacks, and research tier.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-neutral-950 backdrop-blur">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-red-500/10 blur-3xl"></div>
        <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-red-500/[0.06] blur-3xl"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
          {/* LEFT */}
          <div className="sm:p-10 flex flex-col pt-6 pr-6 pb-6 pl-6">
            <h3 className="text-xl font-semibold text-white tracking-tight">
              Browse by goal
            </h3>
            <p className="mt-2 text-sm text-neutral-400">
              Pick a focus to see the compounds we cover and what each profile
              includes.
            </p>

            <div className="mt-10 space-y-3">
              {order.map((key) => {
                const isActive = key === active;
                return (
                  <button
                    key={key}
                    onClick={() => setActive(key)}
                    className={`cat-select-btn group hover:bg-white/[0.07] transition flex text-left bg-gradient-to-br from-white/10 to-white/0 w-full rounded-2xl ring-0 pt-5 pr-5 pb-5 pl-5 items-center justify-between${
                      isActive ? " bg-white/[0.08] ring-1 ring-red-500/40" : ""
                    }`}
                    style={btnGradient}
                  >
                    <div>
                      <p className="text-white text-lg tracking-tight font-semibold">
                        {cats[key].name}
                      </p>
                      <p className="text-[12px] tracking-tight text-neutral-300 mt-1 uppercase">
                        {cats[key].focus}
                      </p>
                    </div>
                    <span className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/5 ring-1 ring-white/10 text-neutral-200 group-hover:bg-white/10 transition">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-[18px] h-[18px]"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-auto"></div>
          </div>

          {/* RIGHT */}
          <div
            className="flex flex-col sm:p-8 bg-gradient-to-br from-white/0 via-white/10 to-white/0 max-w-xl rounded-2xl mt-8 mr-8 mb-8 ml-8 pt-6 pr-6 pb-6 pl-6 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] gap-x-6 gap-y-6"
            style={panelGradient}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                background:
                  "radial-gradient(900px 360px at 20% -10%, rgba(239,68,68,0.25) 15%, transparent 60%)",
              }}
            ></div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <h3 className="text-2xl text-white font-semibold tracking-tight text-center sm:text-left">
                {cfg.name}
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-6">
              <div className="flex items-end gap-2 justify-center sm:justify-start">
                <span className="text-6xl text-white tracking-tight">
                  {cfg.compounds.length}
                </span>
                <span className="text-neutral-300 mb-2 text-sm">compounds</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-[12px] tracking-tight text-neutral-200 uppercase text-center sm:text-left">
                {cfg.focus.toUpperCase()}
              </p>
              <span className="hidden md:inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-2 py-0.5 text-[11px] tracking-tight text-red-400">
                Expanding weekly
              </span>
            </div>

            <div
              className="bg-gradient-to-br from-white/10 to-white/0 rounded-2xl pt-6 pr-6 pb-6 pl-6"
              style={innerPanelGradient}
            >
              <ul className="space-y-3 text-sm text-neutral-100">
                {cfg.compounds.map((c, i) => (
                  <li key={`${c}-${i}`} className="flex items-start gap-2">
                    <CheckIcon />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-white/10 text-[12px] text-neutral-300/90 text-center sm:text-left">
                Every profile includes mechanism, dosing, half-life, stacks &amp;
                research tier.
              </div>

              <div className="mt-6">
                <a
                  href="#"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-500 text-white hover:bg-red-600 h-11 px-5 text-sm font-semibold transition shadow-[0_8px_24px_-8px_rgba(239,68,68,0.5)]"
                >
                  Browse {cfg.name} compounds
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
