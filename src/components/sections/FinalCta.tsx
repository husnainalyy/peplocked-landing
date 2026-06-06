export default function FinalCta() {
  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/[0.12] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] text-5xl md:text-7xl font-medium text-white tracking-tight mb-8">
          Ready to lock in your protocol?
        </h2>
        <p className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both] text-xl text-neutral-400 font-light max-w-2xl mx-auto mb-12">
          Join serious lifters using Peplocked to cut the noise, research
          smarter, and dial in faster. One personalized summary in 3 minutes.
        </p>

        <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both] flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-4 rounded-full bg-red-500 text-white text-sm font-semibold tracking-tight hover:scale-105 hover:bg-red-600 transition-all shadow-[0_0_30px_rgba(239,68,68,0.4)]">
            Start researching free
          </button>
          <button className="px-8 py-4 rounded-full bg-transparent border border-white/10 text-white text-sm font-semibold tracking-tight hover:bg-white/5 transition-colors flex items-center gap-2">
            Explore all plans
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
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
