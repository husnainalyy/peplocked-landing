import type { CSSProperties } from "react";

const pillStyle: CSSProperties = {
  position: "relative",
  ["--border-gradient" as string]:
    "linear-gradient(180deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))",
  ["--border-radius-before" as string]: "9999px",
};

export default function Navbar() {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 animate-on-scroll [animation:animationIn_0.8s_ease-out_0s_both]">
      <nav className="flex md:gap-12 bg-neutral-950 w-full h-14 max-w-5xl border-white/10 border rounded-full mr-auto ml-auto pr-3 pl-6 shadow-lg backdrop-blur-xl gap-x-6 gap-y-6 items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="#" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://peplocked.com/wordmark-dark.svg"
              alt="Peplocked"
              className="h-14 w-auto"
            />
          </a>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
          <a href="#features" className="hover:text-white transition-colors">
            Features
          </a>
          <a href="#coverage" className="hover:text-white transition-colors">
            Compounds
          </a>
          <a href="#pricing" className="hover:text-white transition-colors">
            Pricing
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            FAQ
          </a>
        </div>

        <div className="flex items-center gap-3 text-sm font-medium">
          <a
            href="#"
            className="hidden sm:block text-neutral-400 hover:text-white px-3"
          >
            Sign in
          </a>

          <button
            className="hover:bg-red-600 transition-all flex text-sm font-medium text-white bg-red-500 rounded-full px-4 py-2 shadow-[0_2px_12px_rgba(239,68,68,0.35)] gap-x-2 gap-y-x-2 items-center"
            style={pillStyle}
          >
            <span className="text-xs font-semibold tracking-tight">
              Start free
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white/80"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
}
