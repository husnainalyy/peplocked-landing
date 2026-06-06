const tools = [
  {
    anim: "[animation:animationIn_0.8s_ease-out_0.2s_both]",
    icon: "solar:chart-square-linear",
    title: "Lab Marker Reference",
    desc: 'Look up optimal ranges, not just "normal" ranges, for the markers serious lifters track.',
  },
  {
    anim: "[animation:animationIn_0.8s_ease-out_0.3s_both]",
    icon: "solar:test-tube-linear",
    title: "Bloodwork Analysis",
    desc: "Upload your lab panel. Get a research-grade read against your protocol with flagged markers.",
  },
  {
    anim: "[animation:animationIn_0.8s_ease-out_0.4s_both]",
    icon: "solar:shield-check-linear",
    title: "COA Verification",
    desc: "Drop a vendor COA. Get a structured analysis of purity, identity, and red flags.",
  },
  {
    anim: "[animation:animationIn_0.8s_ease-out_0.5s_both]",
    icon: "solar:clipboard-check-linear",
    title: "Protocol Review",
    desc: "Submit your written protocol. Get a critique on dose, sequencing, and risk.",
  },
];

export default function LockedIn() {
  return (
    <section className="relative bg-[#050505] border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-neutral-300">
            Locked In
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-white tracking-tight">
            Your full protocol command center.
          </h2>
          <p className="mt-4 text-base md:text-lg text-neutral-200 font-light leading-relaxed">
            Premium tools that turn Peplocked into your private protocol lab.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {tools.map((t) => (
            <div
              key={t.title}
              className={`animate-on-scroll ${t.anim} rounded-2xl border border-white/5 bg-[#0A0A0A] p-6 hover:border-white/10 transition-colors`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 border border-red-500/20">
                  <iconify-icon
                    icon={t.icon}
                    className="text-red-500 text-xl"
                  ></iconify-icon>
                </span>
                <h3 className="text-base font-semibold text-white">{t.title}</h3>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {t.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 text-sm font-semibold text-red-500 hover:text-red-400 transition-colors"
          >
            Explore all plans
            <iconify-icon
              icon="solar:arrow-right-linear"
              className="text-base"
            ></iconify-icon>
          </a>
        </div>
      </div>
    </section>
  );
}
