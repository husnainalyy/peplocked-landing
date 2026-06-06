export default function Features() {
  return (
    <div id="features" className="relative border-b border-white/5 bg-[#050505]">
      <div className="absolute inset-y-0 left-0 right-0 mx-auto max-w-7xl border-l border-r border-white/5 pointer-events-none z-0 hidden md:block">
        <div className="absolute left-1/3 top-0 bottom-0 w-px bg-white/5 hidden md:block"></div>
        <div className="absolute right-1/3 top-0 bottom-0 w-px bg-white/5 hidden md:block"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-medium mb-8">
            Features
          </div>

          <h2 className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both] md:text-6xl text-4xl font-medium text-white tracking-tight mb-6">
            Tools built for serious protocols
          </h2>

          <p className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both] text-lg text-neutral-400 font-light leading-relaxed max-w-xl mx-auto">
            Credible, intentional, and genuinely useful — everything you need to
            research, dose, and dial in real protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
          {/* Column 1 */}
          <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.5s_both] relative md:px-8 group">
            <div className="h-64 w-full bg-[#0A0A0A] rounded-2xl border border-white/5 mb-8 flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]"></div>

              <div className="relative z-10 w-48 bg-[#0F0F0F] rounded-lg border border-white/10 shadow-2xl p-4 flex flex-col gap-3 transition-transform duration-500 group-hover:-translate-y-2">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-white/20"></div>
                  <div className="h-1 w-12 bg-white/10 rounded-full"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-1.5 w-full bg-neutral-800 rounded-full"></div>
                  <div className="h-1.5 w-2/3 bg-neutral-800 rounded-full"></div>
                </div>

                <div className="mt-2 self-center bg-white/5 border border-white/10 rounded-full px-3 py-1 flex items-center gap-1.5">
                  <iconify-icon
                    icon="solar:check-circle-bold"
                    className="text-white text-xs"
                  ></iconify-icon>
                  <span className="text-[10px] font-medium text-neutral-300">
                    Answer cited
                  </span>
                </div>
              </div>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-white mb-3">
                AI Research Chat
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Ask anything — peptides, dosing, stacking, recovery. Get fast,
                cited answers grounded in real research, not forum guesswork.
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.6s_both] relative md:px-8 group">
            <div className="h-64 w-full bg-[#0A0A0A] rounded-2xl border border-white/5 mb-8 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50"></div>

              <div className="relative z-10 w-24 h-24 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <svg
                  viewBox="0 0 100 100"
                  className="absolute inset-0 w-full h-full text-white/10 drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                >
                  <path
                    d="M50 0 L95 25 L95 75 L50 100 L5 75 L5 25 Z"
                    fill="#0F0F0F"
                    stroke="currentColor"
                    strokeWidth="1"
                  ></path>
                </svg>

                <iconify-icon
                  icon="solar:users-group-rounded-linear"
                  className="text-white text-3xl relative z-20"
                ></iconify-icon>
              </div>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-white mb-3">
                Compound Library
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                40+ compound profiles with mechanism, half-life, storage,
                stacks, and research tier — organized by the goals you actually
                care about.
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.7s_both] relative md:px-8 group">
            <div className="h-64 w-full bg-[#0A0A0A] rounded-2xl border border-white/5 mb-8 flex items-end justify-center pb-8 px-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <div className="text-center">
                  <div className="text-2xl font-semibold text-red-500 tracking-tight">
                    +38%
                  </div>
                  <div className="text-[10px] text-neutral-500 font-medium uppercase tracking-wide">
                    IGF-1 Trend
                  </div>
                </div>
              </div>

              <svg
                className="w-full h-32 overflow-visible"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="chartGradient"
                    x1="0"
                    x2="0"
                    y1="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#ef4444"
                      stopOpacity="0.25"
                    ></stop>
                    <stop
                      offset="100%"
                      stopColor="transparent"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                </defs>
                <path
                  d="M0 120 L 50 100 L 100 105 L 150 60 L 200 20"
                  fill="url(#chartGradient)"
                  stroke="none"
                ></path>
                <path
                  d="M0 120 L 50 100 L 100 105 L 150 60 L 200 20"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="drop-shadow-[0_0_10px_rgba(239,68,68,0.4)]"
                ></path>

                <circle cx="0" cy="120" r="2" fill="#262626" stroke="#ef4444" strokeWidth="1.5"></circle>
                <circle cx="50" cy="100" r="2" fill="#262626" stroke="#ef4444" strokeWidth="1.5"></circle>
                <circle cx="100" cy="105" r="2" fill="#262626" stroke="#ef4444" strokeWidth="1.5"></circle>
                <circle cx="150" cy="60" r="2" fill="#262626" stroke="#ef4444" strokeWidth="1.5"></circle>
                <circle
                  cx="200"
                  cy="20"
                  r="3"
                  fill="#ef4444"
                  className="group-hover:scale-150 transition-transform origin-center"
                ></circle>

                <rect
                  x="175"
                  y="0"
                  width="40"
                  height="20"
                  rx="4"
                  fill="#ef4444"
                  fillOpacity="0.15"
                  stroke="rgba(239,68,68,0.4)"
                ></rect>
                <text
                  x="195"
                  y="14"
                  fontFamily="sans-serif"
                  fontSize="10"
                  fill="#ef4444"
                  textAnchor="middle"
                >
                  100%
                </text>
              </svg>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-white mb-3">
                Vision Tools
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Upload bloodwork, COAs, and protocols. Get a research-grade read
                with flagged markers and clear next steps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
