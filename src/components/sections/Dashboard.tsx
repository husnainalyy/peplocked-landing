export default function Dashboard() {
  return (
    <>
      {/* Dashboard Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both]">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-neutral-300">
          Your Research Dashboard
        </span>
        <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-white tracking-tight">
          Everything in one place.
        </h2>
        <p className="mt-4 text-base md:text-lg text-neutral-400 font-light leading-relaxed">
          Track your active protocol, browse 40+ compounds, and let the AI flag
          risks from your bloodwork — all from a single dashboard.
        </p>
      </div>

      {/* Dashboard / Bento Grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
        <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.6s_both] absolute -left-12 top-0 text-xs font-mono text-neutral-700 hidden xl:block">
          01
        </div>

        <svg
          className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.6s_both] absolute -left-12 -top-16 w-32 h-32 text-neutral-700 hidden lg:block"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
        >
          <path
            d="M80 80 C 40 80, 20 60, 20 20"
            strokeWidth="1"
            strokeDasharray="4 4"
            markerEnd="url(#arrowhead)"
          ></path>
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="0"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 10 3.5, 0 7" fill="currentColor"></polygon>
            </marker>
          </defs>
        </svg>
        <span className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.7s_both] absolute -left-20 -top-20 text-sm text-neutral-600 font-handwriting hidden lg:block rotate-[-10deg]">
          Track markers
        </span>

        {/* LEFT COLUMN */}
        <div className="md:col-span-4 flex flex-col gap-6">
          {/* Calendar Card */}
          <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.5s_both] bg-[#0C0D0F] rounded-[2rem] p-8 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors">
            <div className="flex justify-between items-start mb-6">
              <div className="px-3 py-1 bg-white/5 rounded-full border border-white/5 text-xs text-neutral-400 font-semibold uppercase tracking-wider">
                Active Protocol
              </div>
              <button className="text-neutral-600 hover:text-neutral-300 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m15 9-6 6"></path>
                  <path d="m9 9 6 6"></path>
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"></path>
                  <path d="M15 3v6h6"></path>
                  <path d="M2 13.5h20"></path>
                </svg>
              </div>
              <span className="text-sm text-neutral-400 font-medium">
                Recovery + Recomp
              </span>
            </div>

            <h3 className="text-2xl text-white mb-2 font-medium tracking-tight">
              BPC-157 + CJC/Ipa
            </h3>
            <p className="text-base text-neutral-500 mb-8 font-medium">
              250mcg · 2x daily · 8 weeks
            </p>

            <div className="border-t border-white/5 pt-5 flex items-center justify-between">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-neutral-800 border-[3px] border-[#0C0D0F] flex items-center justify-center text-[10px] text-neutral-300 font-bold">
                  IGF
                </div>
                <div className="w-10 h-10 rounded-full bg-neutral-700 border-[3px] border-[#0C0D0F] flex items-center justify-center text-[10px] text-white font-bold">
                  CRP
                </div>
                <div className="w-10 h-10 rounded-full bg-neutral-900 border-[3px] border-[#0C0D0F] flex items-center justify-center text-xs text-white font-bold">
                  +2
                </div>
              </div>
              <button className="bg-white/5 text-white hover:bg-white/10 text-sm px-5 py-2.5 rounded-full font-semibold transition-colors border border-white/5">
                View
              </button>
            </div>
          </div>

          {/* Shortcuts Card */}
          <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.6s_both] bg-[#0C0D0F] rounded-[2rem] p-6 border border-white/5 flex items-center justify-between hover:border-white/10 transition-colors">
            <div>
              <div className="text-base font-semibold text-white">
                Dose Calculator
              </div>
              <div className="text-sm text-neutral-500 mt-1 font-medium">
                Reconstitution made simple
              </div>
            </div>
            <div className="flex gap-2">
              <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-neutral-400 hover:bg-white/10 hover:text-white transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </button>
              <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-neutral-400 hover:bg-white/10 hover:text-white transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                  <line x1="12" x2="12" y1="8" y2="16"></line>
                  <line x1="8" x2="16" y1="12" y2="12"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* MIDDLE COLUMN */}
        <div className="md:col-span-3 relative">
          <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.6s_both] absolute -top-10 left-0 text-xs font-mono text-neutral-700 hidden xl:block">
            02
          </div>
          <span className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.7s_both] absolute -top-14 left-12 text-sm text-neutral-600 font-handwriting hidden lg:block rotate-[-8deg]">
            See coverage
          </span>
          <svg
            className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.7s_both] absolute -top-9 left-20 w-12 h-12 text-neutral-600 hidden lg:block z-20 rotate-[10deg]"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M30 10 C 20 40, 30 65, 60 85"
              strokeWidth="2"
              strokeDasharray="5 5"
              markerEnd="url(#arrowhead)"
            ></path>
          </svg>

          <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.7s_both] h-full bg-[#0C0D0F] rounded-[2.5rem] p-8 border border-white/5 flex flex-col justify-between relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4 opacity-80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-red-500"
                >
                  <path d="M3 3v18h18"></path>
                  <path d="m19 9-5 5-4-4-3 3"></path>
                </svg>
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Coverage
                </span>
              </div>
              <h2 className="text-7xl text-white leading-none font-medium tracking-tight">
                40<span className="text-red-500">+</span>
              </h2>
            </div>

            <div className="relative z-10 mt-12">
              <div className="flex mb-6 space-x-1.5">
                <div className="h-1.5 w-8 bg-neutral-800 rounded-full"></div>
                <div className="h-1.5 w-8 bg-neutral-700 rounded-full"></div>
                <div className="h-1.5 w-12 bg-red-500 rounded-full shadow-[0_0_12px_rgba(239,68,68,0.6)]"></div>
              </div>
              <p className="text-xl text-neutral-200 leading-snug font-semibold tracking-tight">
                Compounds profiled with mechanism, dosing &amp; research tier.
              </p>
              <p className="text-sm text-neutral-500 mt-3 font-medium">
                Expanding weekly.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.8s_both] md:col-span-5 relative flex items-center justify-center bg-white/[0.02] rounded-[2.5rem] border border-white/5 border-dashed">
          <div className="absolute -top-10 right-0 text-xs font-mono text-neutral-700 hidden xl:block">
            03
          </div>

          <svg
            className="absolute -right-12 -top-12 w-32 h-32 text-neutral-700 hidden lg:block rotate-90"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M20 80 C 60 80, 80 60, 80 20"
              strokeWidth="1"
              strokeDasharray="4 4"
              markerEnd="url(#arrowhead)"
            ></path>
          </svg>
          <span className="absolute -right-16 -top-16 text-sm text-neutral-600 font-handwriting hidden lg:block rotate-[10deg]">
            Flag the risks
          </span>

          <div className="relative w-full max-w-sm h-80 flex items-center justify-center scale-95 md:scale-100">
            {/* Card 3 (Back) */}
            <div className="absolute top-0 left-8 right-8 h-56 bg-[#1A1A1A] rounded-3xl border border-white/5 shadow-sm opacity-60 scale-90 translate-y-6 -z-20 flex p-6">
              <div className="flex items-center gap-2 text-neutral-500">
                <iconify-icon
                  icon="solar:test-tube-bold"
                  width="18"
                  height="18"
                  className="text-neutral-500"
                ></iconify-icon>
                <span className="text-xs font-semibold">COA Verify</span>
              </div>
            </div>

            {/* Card 2 (Middle) */}
            <div className="absolute top-5 left-4 right-4 h-60 bg-[#1A1A1A] rounded-3xl border border-white/10 shadow-sm opacity-90 scale-95 translate-y-3 -z-10 p-6">
              <div className="flex items-center gap-2 mb-4">
                <iconify-icon
                  icon="solar:graph-up-bold"
                  width="18"
                  height="18"
                  className="text-neutral-300"
                ></iconify-icon>
                <span className="text-xs font-bold text-neutral-200">
                  Bloodwork
                </span>
              </div>
              <div className="h-2.5 w-2/3 bg-white/10 rounded-full mb-3"></div>
              <div className="h-2.5 w-1/2 bg-white/10 rounded-full"></div>
            </div>

            {/* Card 1 (Front) */}
            <div className="absolute top-10 left-0 right-0 bg-[#0C0D0F] rounded-3xl border border-white/10 shadow-xl p-8 z-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-1.5 rounded-lg bg-white/5 text-neutral-300">
                  <iconify-icon
                    icon="solar:document-medicine-bold"
                    width="18"
                    height="18"
                    className="text-red-500"
                  ></iconify-icon>
                </div>
                <span className="text-sm font-bold text-neutral-200">
                  Protocol Review
                </span>
                <span className="ml-auto text-xs text-neutral-500 font-medium">
                  Just now
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-xs text-neutral-500 font-semibold mb-1.5 uppercase tracking-wide">
                    AI Insight
                  </p>
                  <p className="text-xl font-semibold text-neutral-100 leading-tight">
                    hs-CRP elevated — adjust BPC-157 timing, recheck in 4 weeks.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center text-neutral-500 text-xs font-semibold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 text-neutral-600"
                      >
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                        <line x1="16" x2="16" y1="2" y2="6"></line>
                        <line x1="8" x2="8" y1="2" y2="6"></line>
                        <line x1="3" x2="21" y1="10" y2="10"></line>
                      </svg>
                      Week 6
                    </div>
                    <div className="flex items-center text-neutral-500 text-xs font-semibold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 text-neutral-600"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      Retest due
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
