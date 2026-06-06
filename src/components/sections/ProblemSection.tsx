export default function ProblemSection() {
  return (
    <section className="relative bg-[#050505] border-b border-white/5 overflow-hidden">
      <div className="absolute top-24 -left-40 h-96 w-96 rounded-full bg-red-500/[0.06] blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 -right-32 h-96 w-96 rounded-full bg-red-500/[0.08] blur-[120px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 py-28 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both] inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-medium mb-6">
            <span className="flex h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_8px_2px_rgba(239,68,68,0.6)]"></span>
            The Problem
          </div>
          <h2 className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] md:text-6xl text-4xl font-medium text-white tracking-tight mb-5">
            Stop drowning in <span className="text-red-500">conflicting</span>{" "}
            advice.
          </h2>
          <p className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both] text-lg text-neutral-400 font-light leading-relaxed max-w-xl mx-auto">
            Most guys waste weeks piecing together Reddit threads, ChatGPT
            disclaimers, and bro-science videos. Here&apos;s what changes the
            moment you switch to Peplocked.
          </p>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-stretch">
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 h-14 w-14 items-center justify-center rounded-full bg-[#0C0D0F] border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.6)]">
            <span className="font-mono text-xs font-bold tracking-widest text-neutral-500">
              VS
            </span>
          </div>

          {/* Without Peplocked */}
          <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both] group relative overflow-hidden rounded-[2rem] border border-white/5 bg-[#0C0D0F] p-7 md:p-8 flex flex-col hover:border-white/10 transition-colors">
            <div className="flex items-center justify-between mb-7">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-neutral-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                    <path d="M12 9v4"></path>
                    <path d="M12 17h.01"></path>
                  </svg>
                </span>
                <span className="text-sm font-semibold text-neutral-300 tracking-tight">
                  Without Peplocked
                </span>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-600 px-2 py-1 rounded-full border border-white/5">
                Noise
              </span>
            </div>

            <div className="space-y-3 flex-1">
              <div className="flex items-start gap-3">
                <span className="shrink-0 h-9 w-9 rounded-xl bg-orange-500/15 text-orange-400 flex items-center justify-center text-[11px] font-bold">
                  r/
                </span>
                <div className="rounded-2xl rounded-tl-md border border-white/5 bg-[#0F0F0F] px-4 py-2.5 grayscale group-hover:grayscale-0 transition-all">
                  <div className="text-[10px] font-medium text-neutral-600 mb-0.5">
                    reddit.com/r/Peptides
                  </div>
                  <div className="text-sm text-neutral-400">
                    &ldquo;Has anyone tried 500mcg BPC 2x/day? Pinned a new
                    thread&hellip;&rdquo;
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="shrink-0 h-9 w-9 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="m12 3 1.9 4.8L18.7 9l-3.9 2.6.9 5L12 14l-3.7 2.6.9-5L5.3 9l4.8-1.2z" />
                  </svg>
                </span>
                <div className="rounded-2xl rounded-tl-md border border-white/5 bg-[#0F0F0F] px-4 py-2.5">
                  <div className="text-[10px] font-medium text-neutral-600 mb-0.5">
                    ChatGPT
                  </div>
                  <div className="text-sm text-neutral-400">
                    &ldquo;As an AI, I can&apos;t provide medical
                    advice&hellip;&rdquo;
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="shrink-0 h-9 w-9 rounded-xl bg-red-500/15 text-red-400 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <div className="rounded-2xl rounded-tl-md border border-white/5 bg-[#0F0F0F] px-4 py-2.5">
                  <div className="text-[10px] font-medium text-neutral-600 mb-0.5">
                    YouTube &middot; Bro stack 2024
                  </div>
                  <div className="text-sm text-neutral-400">
                    &ldquo;Take ALL the peptides bro, trust me&hellip;&rdquo;
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="shrink-0 h-9 w-9 rounded-xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center text-[11px] font-bold">
                  D
                </span>
                <div className="rounded-2xl rounded-tl-md border border-white/5 bg-[#0F0F0F] px-4 py-2.5">
                  <div className="text-[10px] font-medium text-neutral-600 mb-0.5">
                    Discord &middot; Peptide Lab
                  </div>
                  <div className="text-sm text-neutral-400">
                    &ldquo;My buddy ran 10mg, no sides, send it.&rdquo;
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-2.5 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-neutral-600 mt-0.5 shrink-0"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m15 9-6 6"></path>
                <path d="m9 9 6 6"></path>
              </svg>
              <span className="text-xs text-neutral-500 leading-relaxed">
                Hours of conflicting advice. No structure. No tracking. No idea
                what&apos;s actually working.
              </span>
            </div>
          </div>

          {/* With Peplocked */}
          <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both] group relative overflow-hidden rounded-[2rem] border border-red-500/25 bg-[#0C0D0F] p-7 md:p-8 flex flex-col ring-1 ring-red-500/10 hover:border-red-500/40 transition-colors">
            <div className="absolute -top-28 -right-24 h-56 w-56 rounded-full bg-red-500/15 blur-[90px] pointer-events-none"></div>

            <div className="flex items-center justify-between mb-7 relative z-10">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-b from-red-500 to-red-600 text-white shadow-[0_0_12px_rgba(239,68,68,0.4)]">
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
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </span>
                <span className="text-sm font-semibold text-white tracking-tight">
                  With Peplocked
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-red-400 px-2 py-1 rounded-full border border-red-500/20 bg-red-500/[0.06]">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse"></span>
                Active
              </span>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0F0F0F] p-5 flex-1 relative z-10 shadow-inner">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
                <div className="text-sm font-semibold text-white">
                  Your research plan
                </div>
                <span className="text-[11px] font-medium text-neutral-500">
                  Recovery + Recomp &middot; 8 wk
                </span>
              </div>
              <div className="space-y-3.5">
                <div className="flex items-center justify-between gap-3">
                  <span className="flex items-center gap-2.5 text-sm font-medium text-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500"></span>
                    BPC-157
                  </span>
                  <span className="text-[11px] text-neutral-400 px-2 py-0.5 rounded-md bg-white/5 border border-white/5">
                    250mcg &middot; 2x daily
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="flex items-center gap-2.5 text-sm font-medium text-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-400"></span>
                    CJC-1295 / Ipa
                  </span>
                  <span className="text-[11px] text-neutral-400 px-2 py-0.5 rounded-md bg-white/5 border border-white/5">
                    100/200mcg &middot; PM
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="flex items-center gap-2.5 text-sm font-medium text-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-300"></span>
                    Retatrutide
                  </span>
                  <span className="text-[11px] text-neutral-400 px-2 py-0.5 rounded-md bg-white/5 border border-white/5">
                    2mg weekly
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-5">
                <div className="rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2.5">
                  <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wide text-red-500 font-semibold mb-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 3v18h18"></path>
                      <path d="m19 9-5 5-4-4-3 3"></path>
                    </svg>
                    Track
                  </div>
                  <div className="text-xs text-neutral-300">
                    Weight &middot; IGF-1 &middot; hs-CRP
                  </div>
                </div>
                <div className="rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2.5">
                  <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wide text-red-500 font-semibold mb-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                      <path d="M3 3v5h5"></path>
                    </svg>
                    Retest
                  </div>
                  <div className="text-xs text-neutral-300">
                    Week 6 bloodwork
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2.5 rounded-xl border border-red-500/20 bg-red-500/[0.05] px-4 py-3 relative z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-red-500 shrink-0"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span className="text-xs text-neutral-300 leading-relaxed">
                One personalized summary in{" "}
                <span className="text-white font-semibold">3 minutes</span> —
                tracked end-to-end, adjusted with your bloodwork.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
