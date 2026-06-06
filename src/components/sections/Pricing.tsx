function CheckWhite() {
  return (
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
      className="text-white/60"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}

function CheckRed() {
  return (
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
      className="text-red-500"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="md:pt-32 md:pb-32 overflow-hidden bg-[#050505] border-white/5 border-b pt-12 pb-24 relative">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">
            Pick your level
          </h2>
          <p className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both] text-lg text-neutral-400 font-light leading-relaxed">
            Start free, upgrade when you&apos;re ready to track everything. No
            card required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both] p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] flex flex-col relative group hover:border-white/10 transition-colors">
            <div className="mb-2 text-neutral-300 font-medium tracking-tight">
              Free
            </div>
            <div className="mb-6 flex items-baseline gap-1">
              <span className="text-4xl font-semibold text-white tracking-tight">
                $0
              </span>
              <span className="text-neutral-500 font-medium">/mo</span>
            </div>
            <p className="text-sm text-neutral-400 mb-8 leading-relaxed">
              Start exploring peptide research, free forever.
            </p>

            <button className="w-full py-3 rounded-full border border-white/10 text-white text-sm font-semibold hover:bg-white/5 transition-colors mb-8">
              Get started free
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-neutral-400">
                <CheckWhite />
                <span>10 AI chat messages / day</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-400">
                <CheckWhite />
                <span>Reconstitution Calculator</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-400">
                <CheckWhite />
                <span>Compound Library preview (5)</span>
              </div>
            </div>
          </div>

          {/* Explorer Plan */}
          <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.5s_both] p-8 rounded-[2rem] border border-white/10 bg-[#0A0A0A] flex flex-col relative shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-[2rem] pointer-events-none"></div>

            <div className="relative z-10">
              <div className="flex justify-between items-center mb-2">
                <div className="text-white font-medium tracking-tight">
                  Explorer
                </div>
                <div className="px-3 py-1 rounded-full bg-red-500 text-[10px] text-white font-bold uppercase tracking-wide">
                  Most Popular
                </div>
              </div>
              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-4xl font-semibold text-white tracking-tight">
                  $19
                </span>
                <span className="text-neutral-500 font-medium">/mo</span>
              </div>
              <p className="text-sm text-neutral-400 mb-8 leading-relaxed">
                Unlimited research for serious lifters. Or $190/yr — 2 months
                free.
              </p>

              <button className="w-full py-3 rounded-full bg-red-500 text-white text-sm font-semibold hover:bg-red-600 transition-colors mb-8 shadow-[0_0_24px_rgba(239,68,68,0.4)]">
                Start Explorer
              </button>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-neutral-300">
                  <CheckRed />
                  <span>Unlimited AI Research Chat</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-300">
                  <CheckRed />
                  <span>30 tool credits / month</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-300">
                  <CheckRed />
                  <span>Full Compound Library (40+)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-300">
                  <CheckRed />
                  <span>Custom hormone protocol field</span>
                </div>
              </div>
            </div>
          </div>

          {/* Locked In Plan */}
          <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.6s_both] p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] flex flex-col relative group hover:border-white/10 transition-colors">
            <div className="mb-2 text-neutral-300 font-medium tracking-tight">
              Locked In
            </div>
            <div className="mb-6 flex items-baseline gap-1">
              <span className="text-4xl font-semibold text-white tracking-tight">
                $39
              </span>
              <span className="text-neutral-500 font-medium">/mo</span>
            </div>
            <p className="text-sm text-neutral-400 mb-8 leading-relaxed">
              Your full protocol command center. Or $349/yr — save $119.
            </p>

            <button className="w-full py-3 rounded-full border border-white/10 text-white text-sm font-semibold hover:bg-white/5 transition-colors mb-8">
              Get Locked In
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-neutral-400">
                <CheckWhite />
                <span>Everything in Explorer</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-400">
                <CheckWhite />
                <span>120 tool credits / month</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-400">
                <CheckWhite />
                <span>Lab Marker Reference + priority queue</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
