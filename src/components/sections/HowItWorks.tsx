"use client";

import { useEffect, useRef, useState } from "react";

const ACTIVE_TAB =
  "step-tab relative h-12 rounded-xl border border-red-500/30 bg-red-500/[0.08] px-4 text-left text-xs md:text-sm text-red-300 font-medium ring-1 ring-inset ring-red-500/30 active";
const INACTIVE_TAB =
  "step-tab group h-12 rounded-xl border border-white/10 bg-white/[0.02] px-4 text-left text-xs md:text-sm text-neutral-400 font-medium hover:border-white/20 hover:bg-white/[0.04] transition";

const TOTAL_STEPS = 3;

export default function HowItWorks() {
  const [currentStep, setCurrentStep] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const autoAdvanceRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const restartRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startAutoAdvance = () => {
    if (autoAdvanceRef.current) clearInterval(autoAdvanceRef.current);
    autoAdvanceRef.current = setInterval(() => {
      setCurrentStep((s) => (s + 1) % TOTAL_STEPS);
    }, 4000);
  };

  useEffect(() => {
    startAutoAdvance();
    return () => {
      if (autoAdvanceRef.current) clearInterval(autoAdvanceRef.current);
      if (restartRef.current) clearTimeout(restartRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    interface ChartWindow extends Window {
      Chart?: new (ctx: HTMLCanvasElement, cfg: unknown) => { destroy: () => void };
    }
    let chartInstance: { destroy: () => void } | null = null;

    const init = () => {
      const w = window as ChartWindow;
      if (!canvasRef.current || !w.Chart || chartInstance) return;
      chartInstance = new w.Chart(canvasRef.current, {
        type: "bar",
        data: {
          labels: ["Wk 1", "Wk 2", "Wk 3", "Wk 4", "Wk 5", "Wk 6"],
          datasets: [
            {
              label: "Research confidence",
              data: [15, 35, 50, 68, 75, 92],
              backgroundColor: "rgba(239, 68, 68, 0.55)",
              borderRadius: 4,
              borderSkipped: false,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: { duration: 0 },
          transitions: { active: { animation: { duration: 0 } } },
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: "rgba(0,0,0,0.8)",
              borderColor: "rgba(255,255,255,0.08)",
              borderWidth: 1,
              padding: 8,
              titleColor: "#e5e7eb",
              bodyColor: "#d1d5db",
              displayColors: false,
            },
          },
          scales: {
            y: {
              grid: { color: "rgba(255,255,255,0.06)", drawBorder: false },
              ticks: { color: "#9ca3af", font: { size: 9 } },
              suggestedMax: 100,
            },
            x: {
              grid: { display: false, drawBorder: false },
              ticks: { color: "#9ca3af", font: { size: 9 } },
            },
          },
        },
      });
    };

    const w = window as ChartWindow;
    if (w.Chart) {
      init();
    } else {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/chart.js";
      script.onload = init;
      document.body.appendChild(script);
    }

    return () => {
      if (chartInstance) chartInstance.destroy();
    };
  }, []);

  const handleTabClick = (index: number) => {
    if (autoAdvanceRef.current) clearInterval(autoAdvanceRef.current);
    if (restartRef.current) clearTimeout(restartRef.current);
    setCurrentStep(index);
    restartRef.current = setTimeout(startAutoAdvance, 8000);
  };

  return (
    <section
      className="relative bg-[#050505] text-white overflow-hidden border-b border-white/5"
      id="how-it-works"
    >
      <div className="relative overflow-hidden text-neutral-100">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-red-500/10 via-red-500/5 to-transparent blur-3xl"></div>
        </div>
        <div className="max-w-5xl sm:px-6 lg:px-8 md:py-28 mr-auto ml-auto pt-20 pr-4 pb-20 pl-4">
          <div className="mb-6 flex items-center justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-neutral-300 backdrop-blur">
              HOW IT WORKS
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
                className="h-3.5 w-3.5 text-red-500"
                style={{ strokeWidth: 1.5 }}
              >
                <rect width="8" height="8" x="3" y="3" rx="2"></rect>
                <path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
                <rect width="8" height="8" x="13" y="13" rx="2"></rect>
              </svg>
            </span>
          </div>
          <div className="text-center">
            <h2 className="md:text-5xl text-4xl text-white tracking-tight">
              From scattered to{" "}
              <span className="font-normal italic text-red-400 font-instrument-serif">
                dialed-in.
              </span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-neutral-200 font-normal">
              The fastest path from &quot;what should I take?&quot; to
              &quot;here&apos;s exactly what to do&quot; — across three focused
              steps, backed by real research.
            </p>
          </div>
          <div className="mt-10 md:mt-14 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent p-4 sm:p-6 md:p-8 relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3" id="stepTabs">
              <button
                type="button"
                className={currentStep === 0 ? ACTIVE_TAB : INACTIVE_TAB}
                onClick={() => handleTabClick(0)}
              >
                <div className="flex items-center gap-2 h-full">
                  <span className="tracking-tight">STEP 1</span>
                  <span className="ml-auto text-[10px] text-red-300/80">
                    Sign up
                  </span>
                </div>
                {currentStep === 0 && (
                  <span className="pointer-events-none absolute inset-0 rounded-xl shadow-[0_0_0_1px_rgba(239,68,68,0.2),0_10px_30px_-12px_rgba(239,68,68,0.45)]"></span>
                )}
              </button>
              <button
                type="button"
                className={currentStep === 1 ? ACTIVE_TAB : INACTIVE_TAB}
                onClick={() => handleTabClick(1)}
              >
                <div className="flex items-center gap-2 h-full">
                  <span className="tracking-tight">STEP 2</span>
                  <span className="ml-auto text-[10px] text-neutral-500 group-hover:text-neutral-400">
                    Analyze
                  </span>
                </div>
                {currentStep === 1 && (
                  <span className="pointer-events-none absolute inset-0 rounded-xl shadow-[0_0_0_1px_rgba(239,68,68,0.2),0_10px_30px_-12px_rgba(239,68,68,0.45)]"></span>
                )}
              </button>
              <button
                type="button"
                className={currentStep === 2 ? ACTIVE_TAB : INACTIVE_TAB}
                onClick={() => handleTabClick(2)}
              >
                <div className="flex items-center gap-2 h-full">
                  <span className="tracking-tight">STEP 3</span>
                  <span className="ml-auto text-[10px] text-neutral-500 group-hover:text-neutral-400">
                    Refine
                  </span>
                </div>
                {currentStep === 2 && (
                  <span className="pointer-events-none absolute inset-0 rounded-xl shadow-[0_0_0_1px_rgba(239,68,68,0.2),0_10px_30px_-12px_rgba(239,68,68,0.45)]"></span>
                )}
              </button>
            </div>
            <div
              className="relative mt-8 md:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
              id="stepContent"
            >
              <div className="relative">
                {/* Visual 0 */}
                <div
                  className="step-visual relative w-full max-w-sm md:max-w-md rounded-2xl border border-white/10 bg-neutral-900/60 p-4 backdrop-blur h-96"
                  style={{ display: currentStep === 0 ? "block" : "none" }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium text-neutral-300">
                        Intake
                      </span>
                    </div>
                    <div className="text-[11px] text-neutral-400">Step 1</div>
                  </div>
                  <div className="mt-6 space-y-4">
                    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                      <div className="flex items-center gap-2">
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
                          className="h-4 w-4 text-red-500"
                          style={{ strokeWidth: 1.5 }}
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                        </svg>
                        <div className="text-xs text-neutral-400">Your Goals</div>
                      </div>
                      <div className="mt-2 text-xl font-semibold tracking-tight">
                        Recovery + Recomp
                      </div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                      <div className="flex items-center gap-2">
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
                          className="h-4 w-4 text-red-500"
                          style={{ strokeWidth: 1.5 }}
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <circle cx="12" cy="12" r="6"></circle>
                          <circle cx="12" cy="12" r="2"></circle>
                        </svg>
                        <div className="text-xs text-neutral-400">Bloodwork</div>
                      </div>
                      <div className="mt-2 text-xl font-semibold tracking-tight">
                        Optional
                      </div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                      <div className="flex items-center gap-2">
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
                          className="h-4 w-4 text-red-500"
                          style={{ strokeWidth: 1.5 }}
                        >
                          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                          <path d="M9 18h6"></path>
                          <path d="M10 22h4"></path>
                        </svg>
                        <div className="text-xs text-neutral-400">
                          Compounds Matched
                        </div>
                      </div>
                      <div className="mt-2 text-xl font-semibold tracking-tight">
                        12 options
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual 1 */}
                <div
                  className="step-visual relative w-full max-w-sm md:max-w-md rounded-2xl border border-white/10 bg-neutral-900/60 p-4 backdrop-blur h-96"
                  style={{ display: currentStep === 1 ? "block" : "none" }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium text-neutral-300">
                        Protocol
                      </span>
                    </div>
                    <div className="text-[11px] text-neutral-400">Step 2</div>
                  </div>
                  <div className="mt-4">
                    <div className="relative h-20">
                      <canvas
                        ref={canvasRef}
                        id="activityChart"
                        className="absolute inset-0"
                      ></canvas>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
                      <div className="text-xs text-neutral-400">Match</div>
                      <div className="flex gap-1 mt-1 items-baseline">
                        <span className="text-xl font-semibold tracking-tight">
                          92%
                        </span>
                        <span className="text-xs text-red-500 inline-flex items-center gap-1">
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
                            className="h-3 w-3"
                            style={{ strokeWidth: 1.5 }}
                          >
                            <path d="M16 7h6v6"></path>
                            <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
                      <div className="text-xs text-neutral-400">Citations</div>
                      <div className="mt-1 flex items-baseline gap-1">
                        <span className="text-xl font-semibold tracking-tight">
                          18
                        </span>
                        <span className="text-xs text-red-500 inline-flex items-center gap-1">
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
                            className="h-3 w-3"
                            style={{ strokeWidth: 1.5 }}
                          >
                            <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                            <path d="m9 11 3 3L22 4"></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.02] p-3">
                    <div className="text-xs text-neutral-400">
                      Protocol Summary
                    </div>
                    <div className="mt-2 flex items-center justify-between text-sm">
                      <span className="text-neutral-200">Compounds</span>
                      <span className="text-neutral-200 font-medium">
                        3 selected
                      </span>
                    </div>
                    <div className="mt-1 flex items-center justify-between text-sm">
                      <span className="text-neutral-200">Status</span>
                      <span className="text-red-500 font-medium">Ready</span>
                    </div>
                  </div>
                </div>

                {/* Visual 2 */}
                <div
                  className="step-visual relative w-full max-w-sm md:max-w-md rounded-2xl border border-white/10 bg-neutral-900/60 p-4 backdrop-blur h-96"
                  style={{ display: currentStep === 2 ? "block" : "none" }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium text-neutral-300">
                        Tracking
                      </span>
                    </div>
                    <div className="text-[11px] text-neutral-400">Step 3</div>
                  </div>
                  <div className="mt-6 space-y-4">
                    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                      <div className="flex items-center gap-2">
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
                          className="h-4 w-4 text-red-500"
                          style={{ strokeWidth: 1.5 }}
                        >
                          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                        </svg>
                        <div className="text-xs text-neutral-400">
                          Protocol Status
                        </div>
                      </div>
                      <div className="mt-2 text-xl font-semibold tracking-tight text-red-500">
                        Active
                      </div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                      <div className="flex items-center gap-2">
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
                          className="h-4 w-4 text-red-500"
                          style={{ strokeWidth: 1.5 }}
                        >
                          <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                        </svg>
                        <div className="text-xs text-neutral-400">
                          Markers Tracked
                        </div>
                      </div>
                      <div className="mt-2 text-xl font-semibold tracking-tight">
                        IGF-1 &middot; hs-CRP
                      </div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                      <div className="flex items-center gap-2">
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
                          className="h-4 w-4 text-red-500"
                          style={{ strokeWidth: 1.5 }}
                        >
                          <path d="m12 14 4-4"></path>
                          <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
                        </svg>
                        <div className="text-xs text-neutral-400">
                          Next Retest
                        </div>
                      </div>
                      <div className="mt-2 text-xl font-semibold tracking-tight">
                        Week 6
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="mx-auto lg:mx-0 max-w-xl">
                  {/* Info 0 */}
                  <div
                    className="step-info"
                    style={{ display: currentStep === 0 ? "block" : "none" }}
                  >
                    <div className="text-sm text-neutral-500">01</div>
                    <h3 className="mt-2 text-2xl md:text-3xl tracking-tight text-white">
                      Tell us your goals
                    </h3>
                    <p className="mt-3 text-sm md:text-base text-neutral-400 font-normal">
                      Sign up in seconds, then share your stats, training, and
                      goals. No quiz, no friction — just the inputs the AI needs
                      to tailor your research.
                    </p>
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-neutral-200">
                            Your Profile
                          </span>
                        </div>
                        <p className="mt-2 text-xs text-neutral-400">
                          Stats, training, and goals in under a minute.
                        </p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-neutral-200">
                            Optional Bloodwork
                          </span>
                        </div>
                        <p className="mt-2 text-xs text-neutral-400">
                          Upload labs for sharper, personalized output.
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center gap-3">
                      <button className="inline-flex items-center gap-2 rounded-xl bg-red-500 text-white px-4 py-2.5 text-sm font-medium hover:bg-red-600 transition">
                        Start free
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
                          style={{ strokeWidth: 1.5 }}
                        >
                          <path d="m21 21-4.34-4.34"></path>
                          <circle cx="11" cy="11" r="8"></circle>
                        </svg>
                      </button>
                      <button className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2.5 text-sm font-medium text-neutral-200 hover:bg-white/[0.04] transition">
                        See how it works
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
                          style={{ strokeWidth: 1.5 }}
                        >
                          <path d="M12 7v14"></path>
                          <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Info 1 */}
                  <div
                    className="step-info"
                    style={{ display: currentStep === 1 ? "block" : "none" }}
                  >
                    <div className="text-sm text-neutral-500">02</div>
                    <h3 className="mt-2 text-2xl md:text-3xl tracking-tight text-white">
                      Get your protocol
                    </h3>
                    <p className="mt-3 text-sm md:text-base text-neutral-400 font-normal">
                      The AI cross-references verified peptide research to build
                      a personalized protocol — dosing, stacking, and timing,
                      all cited.
                    </p>
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-neutral-200">
                            Cited Research
                          </span>
                        </div>
                        <p className="mt-2 text-xs text-neutral-400">
                          Every recommendation backed by real studies.
                        </p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-neutral-200">
                            Smart Stacking
                          </span>
                        </div>
                        <p className="mt-2 text-xs text-neutral-400">
                          Minimum effective compounds, not shotgun stacks.
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center gap-3">
                      <button className="inline-flex items-center gap-2 rounded-xl bg-red-500 text-white px-4 py-2.5 text-sm font-medium hover:bg-red-600 transition">
                        View Protocol
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
                          style={{ strokeWidth: 1.5 }}
                        >
                          <path d="m16 18 6-6-6-6"></path>
                          <path d="m8 6-6 6 6 6"></path>
                        </svg>
                      </button>
                      <button className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2.5 text-sm font-medium text-neutral-200 hover:bg-white/[0.04] transition">
                        Compound Library
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
                          style={{ strokeWidth: 1.5 }}
                        >
                          <path d="M12 7v14"></path>
                          <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Info 2 */}
                  <div
                    className="step-info"
                    style={{ display: currentStep === 2 ? "block" : "none" }}
                  >
                    <div className="text-sm text-neutral-500">03</div>
                    <h3 className="mt-2 text-2xl md:text-3xl tracking-tight text-white">
                      Refine with your data
                    </h3>
                    <p className="mt-3 text-sm md:text-base text-neutral-400 font-normal">
                      Upload bloodwork, run COA and protocol reviews, and adjust
                      based on real results — tracked end to end.
                    </p>
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-neutral-200">
                            Bloodwork Analysis
                          </span>
                        </div>
                        <p className="mt-2 text-xs text-neutral-400">
                          Research-grade reads with flagged markers.
                        </p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-neutral-200">
                            Ongoing Tracking
                          </span>
                        </div>
                        <p className="mt-2 text-xs text-neutral-400">
                          Monitor IGF-1, hs-CRP, and more over time.
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center gap-3">
                      <button className="inline-flex items-center gap-2 rounded-xl bg-red-500 text-white px-4 py-2.5 text-sm font-medium hover:bg-red-600 transition">
                        Upload Bloodwork
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
                          style={{ strokeWidth: 1.5 }}
                        >
                          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                        </svg>
                      </button>
                      <button className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2.5 text-sm font-medium text-neutral-200 hover:bg-white/[0.04] transition">
                        Track Markers
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
                          style={{ strokeWidth: 1.5 }}
                        >
                          <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                          <path d="M18 17V9"></path>
                          <path d="M13 17V5"></path>
                          <path d="M8 17v-3"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
