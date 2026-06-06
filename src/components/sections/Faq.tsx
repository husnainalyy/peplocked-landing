"use client";

import { useState } from "react";

const items = [
  {
    q: "Is this medical advice?",
    a: "No. Peplocked is an educational research tool only — never a substitute for medical care. Always consult a licensed physician before starting, stopping, or changing any protocol.",
  },
  {
    q: "Do you sell or ship peptides?",
    a: "Never. We're a pure research and education platform. We don't sell, source, or ship any compounds — we just help you understand them.",
  },
  {
    q: "Is the free plan really free?",
    a: "Yes — free forever, no card required. You get daily AI chat, the reconstitution calculator, and a compound library preview. Upgrade only when you want unlimited access.",
  },
  {
    q: "How current is your research?",
    a: "Continuously updated. Our library now covers 40+ compounds and expands weekly, cross-referenced against peer-reviewed studies and protocol literature.",
  },
  {
    q: "What can the Vision tools analyze?",
    a: "Upload bloodwork panels, vendor COAs, or a written protocol. You'll get a research-grade read with flagged markers, purity checks, and clear next steps.",
  },
  {
    q: "How does the AI personalize my protocol?",
    a: "It factors in your stats, training, goals, and bloodwork to tailor dosing, stacking, and timing — built around minimum effective compounds, not generic copy-paste stacks.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<Record<number, boolean>>({
    0: true,
    5: true,
  });

  const toggle = (i: number) => setOpen((o) => ({ ...o, [i]: !o[i] }));

  return (
    <section
      id="faq"
      className="relative py-32 bg-[#050505] overflow-hidden border-b border-white/5"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <section className="ring-1 ring-white/5 md:p-10 bg-white/[0.02] border-white/5 border rounded-[2.5rem] pt-6 pr-6 pb-6 pl-6 shadow-2xl backdrop-blur-xl">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-red-500"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m14.31 8 5.74 9.94"></path>
                <path d="M9.69 8h11.48"></path>
                <path d="m7.38 12 5.74-9.94"></path>
                <path d="M9.69 16 3.95 6.06"></path>
                <path d="M14.31 16H2.83"></path>
                <path d="m16.62 12-5.74 9.94"></path>
              </svg>
            </span>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">
              Help &amp; FAQs
            </h2>
            <p className="mt-3 text-sm md:text-base text-neutral-200">
              Quick answers about how Peplocked works, pricing, and safety.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            {items.map((item, i) => {
              const isOpen = !!open[i];
              return (
                <div
                  key={i}
                  className="group rounded-2xl border border-white/5 bg-[#0C0D0F] p-4 md:p-5 transition-all duration-200 hover:border-red-500/30 hover:bg-[#0F0F0F]"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 text-left cursor-pointer"
                    aria-expanded={isOpen}
                    onClick={() => toggle(i)}
                  >
                    <span className="text-base md:text-lg font-semibold leading-6 tracking-tight text-white">
                      {item.q}
                    </span>
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors group-hover:border-red-500/40 group-hover:bg-red-500/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-[16px] h-[16px] text-red-500"
                      >
                        <path d="M5 12h14"></path>
                        {!isOpen && <path d="M12 5v14"></path>}
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`mt-3 text-sm leading-6 text-neutral-400${
                      isOpen ? "" : " hidden"
                    }`}
                  >
                    {item.a}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/5 bg-[#0C0D0F] p-4 sm:flex-row">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-red-500"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <path d="M12 17h.01"></path>
                </svg>
              </span>
              <p className="text-sm text-neutral-300">
                Still have a question? We&apos;re here to help.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-neutral-200 hover:bg-white/10 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                </svg>
                Contact Support
              </button>
              <a
                href="#"
                className="inline-flex items-center rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600 transition-colors shadow-[0_0_24px_rgba(239,68,68,0.4)]"
              >
                Ask a Question
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
