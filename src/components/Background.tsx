"use client";

import { useEffect } from "react";

/**
 * Ambient Unicorn Studio background + the fixed grid lines, ported from the
 * original markup.
 */
export default function Background() {
  useEffect(() => {
    interface UnicornWindow extends Window {
      UnicornStudio?: { isInitialized: boolean; init: () => void };
    }
    const w = window as UnicornWindow;
    if (w.UnicornStudio) return;
    w.UnicornStudio = { isInitialized: false, init: () => {} };
    const i = document.createElement("script");
    i.src =
      "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
    i.onload = function () {
      if (!w.UnicornStudio!.isInitialized) {
        w.UnicornStudio!.init();
        w.UnicornStudio!.isInitialized = true;
      }
    };
    (document.head || document.body).appendChild(i);
  }, []);

  return (
    <>
      {/* Background (component) added by Aura */}
      <div
        className="aura-background-component top-0 w-full h-screen mix-blend-screen -z-20 absolute"
        data-alpha-mask="80"
        style={{
          filter:
            "grayscale(1) sepia(1) saturate(6) hue-rotate(-30deg) brightness(1.15)",
          WebkitFilter:
            "grayscale(1) sepia(1) saturate(6) hue-rotate(-30deg) brightness(1.15)",
          maskImage:
            "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)",
        }}
      >
        <div className="aura-background-component top-0 w-full -z-10 absolute h-full">
          <div
            data-us-project="7WRlj4TRuUxuldc6GVDM"
            className="absolute w-full h-full left-0 top-0 -z-10"
          ></div>
        </div>
      </div>

      {/* Background Grid Lines */}
      <div className="fixed inset-0 pointer-events-none z-0 mx-auto max-w-7xl grid-lines hidden md:block border-r border-l border-white/[0.03]"></div>
    </>
  );
}
