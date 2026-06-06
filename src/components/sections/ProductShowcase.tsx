export default function ProductShowcase() {
  return (
    <div className="max-w-6xl mx-auto mb-32 relative">
      <div className="text-center max-w-2xl mx-auto mb-12 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-neutral-300">
          The Assistant
        </span>
        <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-white tracking-tight">
          Ask anything. Get research-grade answers.
        </h2>
        <p className="mt-3 text-base text-neutral-100 font-light leading-relaxed">
          Cited, structured, and tuned to how deep you want to go — from a quick
          TL;DR to a full mechanism breakdown.
        </p>
      </div>

      <div className="relative animate-on-scroll [animation:pepPopIn_0.9s_cubic-bezier(0.22,1,0.36,1)_0.15s_both]">
        <div className="absolute -inset-6 bg-red-500/10 blur-3xl rounded-[3rem] pointer-events-none"></div>

        <div className="pep-float-slow relative rounded-[1.5rem] border border-white/10 p-2 shadow-2xl bg-white/[0.03]">
          <div className="rounded-2xl border border-white/10 overflow-hidden bg-[#0A0A0A]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/chatbot.png"
              alt="Peplocked AI research chat"
              className="w-full block"
              loading="lazy"
            />
          </div>
        </div>

        <div className="hidden md:block absolute -top-10 -right-4 lg:-right-16 w-44 lg:w-56 rotate-[4deg] z-20">
          <div className="animate-on-scroll [animation:pepCardLoop_6s_ease-in-out_0.2s_infinite] rounded-2xl border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/options.png"
              alt="Answer modes: Quick Answer, Protocol Mode, Deep Dive"
              className="w-full block"
              loading="lazy"
            />
          </div>
        </div>

        <div className="hidden md:block absolute -bottom-12 -left-4 lg:-left-16 w-48 lg:w-60 rotate-[-5deg] z-20">
          <div className="animate-on-scroll [animation:pepCardLoop_6s_ease-in-out_1.1s_infinite] rounded-2xl border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/settings.png"
              alt="Account menu: Health Profile, Subscription, Theme"
              className="w-full block"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
