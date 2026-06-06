function Check() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5"></path>
    </svg>
  );
}

export default function Comparison() {
  return (
    <section
      id="comparison"
      className="border-b border-white/5"
      style={{
        backgroundColor: "#050505",
        color: "#e5e5e5",
        padding: "8rem 0",
        lineHeight: 1.4,
      }}
    >
      <div className="container-slim animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
        <div className="text-center mb-16">
          <div className="mono text-xs mb-4" style={{ color: "#ef4444" }}>
            ◆ Why Peplocked
          </div>
          <h2 className="serif text-4xl md:text-5xl mb-4 text-white">
            Peplocked vs the alternatives.
          </h2>
          <p style={{ color: "#9CA3AF", fontWeight: 300 }}>
            There are other ways to figure out peptides. None of them work like
            this.
          </p>
        </div>

        <div className="cmp-scroll">
          <div
            className="cmp-table"
            style={{ borderTop: "2px solid rgba(255,255,255,0.9)" }}
          >
            <div
              className="cmp-row mono"
              style={{
                fontSize: "0.7rem",
                borderBottom: "2px solid rgba(255,255,255,0.9)",
                fontWeight: 600,
              }}
            >
              <span className="muted">Capability</span>
              <span className="pep">Peplocked</span>
              <span className="text-neutral-400">Generic AI</span>
              <span className="text-neutral-400">TRT Clinic</span>
              <span className="text-neutral-400">Reddit &amp; Forums</span>
            </div>

            <div className="cmp-row">
              <span className="font-medium text-neutral-100">
                Personalized to your bloodwork
              </span>
              <span className="pep">
                <Check />
              </span>
              <span className="muted">—</span>
              <span className="muted">—</span>
              <span className="muted">—</span>
            </div>

            <div className="cmp-row">
              <span className="font-medium text-neutral-100">
                Tracks your research plan over time
              </span>
              <span className="pep">
                <Check />
              </span>
              <span className="muted">—</span>
              <span className="muted">—</span>
              <span className="muted">—</span>
            </div>

            <div className="cmp-row">
              <span className="font-medium text-neutral-100">
                Current peptide research
              </span>
              <span className="pep">Always current</span>
              <span className="muted">Outdated</span>
              <span className="muted">Limited</span>
              <span className="muted">Mixed</span>
            </div>

            <div className="cmp-row">
              <span className="font-medium text-neutral-100">
                Safety guardrails on dosing
              </span>
              <span className="pep">
                <Check />
              </span>
              <span className="muted">—</span>
              <span className="muted">—</span>
              <span className="muted">—</span>
            </div>

            <div className="cmp-row">
              <span className="font-medium text-neutral-100">Cost</span>
              <span className="pep">Free</span>
              <span className="muted">Free</span>
              <span className="muted">$200–500/visit</span>
              <span className="muted">Free</span>
            </div>

            <div className="cmp-row" style={{ borderBottom: "none" }}>
              <span className="font-medium text-neutral-100">
                Time to a personalized summary
              </span>
              <span className="pep">3 minutes</span>
              <span className="muted">Never</span>
              <span className="muted">2–6 weeks</span>
              <span className="muted">Hours</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a href="#join" className="btn-secondary">
            START RESEARCHING FREE
          </a>
          <div className="mono text-[0.6rem] mt-6 opacity-40">
            EDUCATIONAL RESEARCH ONLY &middot; NOT MEDICAL ADVICE
          </div>
        </div>
      </div>
    </section>
  );
}
