import type { CSSProperties } from "react";

const ctaStyle: CSSProperties = {
  boxShadow:
    "0 0 0 1px rgba(239, 68, 68, 0.4), 0 4px 20px rgba(239, 68, 68, 0.35)",
  position: "relative",
  ["--border-gradient" as string]:
    "linear-gradient(180deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))",
  ["--border-radius-before" as string]: "9999px",
};

export default function Hero() {
  return (
    <div className="text-center max-w-5xl mx-auto mb-24">
      <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-semibold mb-8">
        <span className="flex h-2 w-2 rounded-full bg-red-500 shadow-[0_0_8px_2px_rgba(239,68,68,0.6)]"></span>
        Research-grade, not bro-science
      </div>

      <h1 className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both] md:text-8xl leading-[1] text-7xl font-medium text-white tracking-tight mb-8">
        Dial in your protocol <br className="hidden md:block" />
        with peptide intelligence.
      </h1>

      <p className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both] md:text-2xl leading-relaxed text-xl font-light text-neutral-300 tracking-tight max-w-2xl mr-auto mb-12 ml-auto">
        Skip the Reddit rabbit holes and conflicting advice. Get cited,
        personalized research on peptides, dosing, stacking, and recovery — in
        minutes.
      </p>

      <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.5s_both] flex flex-col sm:flex-row gap-3 group max-w-lg mr-auto ml-auto relative gap-x-3 gap-y-3 items-center justify-center">
        <input
          type="email"
          placeholder="you@email.com"
          className="w-full sm:flex-1 bg-[#161616] border border-white/10 rounded-full px-6 py-3.5 text-base outline-none focus:ring-1 focus:ring-white/20 focus:border-white/20 transition-all placeholder:text-neutral-600 shadow-lg h-[52px] text-white"
        />

        <button
          className="group flex overflow-hidden transition-all duration-300 hover:from-red-500 hover:to-red-600 focus:ring-2 focus:ring-red-500/40 focus:outline-none sm:w-auto bg-gradient-to-b from-red-500 to-red-600 w-full h-[52px] rounded-full pt-3 pr-6 pb-3 pl-6 relative gap-x-2 gap-y-2 items-center justify-center"
          style={ctaStyle}
        >
          <span className="text-sm font-semibold tracking-tight relative z-10 text-white transition-colors">
            Start Researching
          </span>
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
            className="w-4 h-4 relative z-10 text-white/80 group-hover:text-white transition-colors group-hover:translate-x-0.5"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </button>
      </div>

      <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.6s_both] mt-8 flex items-center justify-center gap-2 text-sm text-neutral-500 font-medium">
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
          className="text-neutral-300"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
          <path d="m9 12 2 2 4-4"></path>
        </svg>
        <span className="text-neutral-300">
          Private &amp; encrypted • Educational research only
        </span>
      </div>
    </div>
  );
}
