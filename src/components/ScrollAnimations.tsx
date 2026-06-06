"use client";

import { useEffect } from "react";

/**
 * Re-implements the original page's scroll-reveal behavior: every element with
 * the `animate-on-scroll` class starts paused and begins its CSS animation once
 * it enters the viewport.
 */
export default function ScrollAnimations() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
    );

    document
      .querySelectorAll(".animate-on-scroll")
      .forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return null;
}
