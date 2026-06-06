type Testimonial = {
  quote: string;
  img: string;
  name: string;
  role: string;
};

function QuoteIcon() {
  return (
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
      className="w-4 h-4 shrink-0 mt-1.5 text-red-500"
    >
      <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
      <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
    </svg>
  );
}

function Card({ t }: { t: Testimonial }) {
  return (
    <article
      data-card="testimonial"
      className="rounded-2xl border p-6 border-white/10 bg-neutral-900/70"
    >
      <blockquote className="text-[16px] sm:text-[18px] text-neutral-100">
        <span className="inline-flex items-start gap-2">
          <QuoteIcon />
          {t.quote}
        </span>
      </blockquote>
      <div className="mt-5 flex items-center gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10"
          src={t.img}
          alt={t.name}
        />
        <div>
          <div className="text-sm font-medium">{t.name}</div>
          <div className="text-xs text-neutral-400">{t.role}</div>
        </div>
      </div>
    </article>
  );
}

const col1: Testimonial[] = [
  {
    quote:
      '"I stopped guessing. Peplocked built me a recovery stack in minutes that actually made sense — cited, dosed, and dialed in."',
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=256&auto=format&fit=crop",
    name: "Alex R.",
    role: "Natural Lifter",
  },
  {
    quote:
      '"Cancelled my $300 \'optimization\' consults. The bloodwork analysis flagged things my clinic glossed right over."',
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&auto=format&fit=crop",
    name: "Marcus T.",
    role: "Entrepreneur",
  },
  {
    quote:
      '"The COA scanner caught a low-purity batch before I touched it. That alone paid for the whole year."',
    img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=256&auto=format&fit=crop",
    name: "David K.",
    role: "Masters Athlete",
  },
];

const col2: Testimonial[] = [
  {
    quote:
      '"Went from 15 Reddit tabs to one clear protocol. BPC-157 timing finally makes sense."',
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop",
    name: "Jordan M.",
    role: "Powerlifter",
  },
  {
    quote:
      '"The compound library is the first place I trust. Mechanism, half-life, stacks — all in one spot."',
    img: "https://images.unsplash.com/photo-1546456073-6712f79251bb?q=80&w=256&auto=format&fit=crop",
    name: "Ethan L.",
    role: "Strength Coach",
  },
  {
    quote:
      '"Asked about CJC-1295 + Ipamorelin and got a straight, cited answer instead of bro-science."',
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&auto=format&fit=crop",
    name: "Ryan P.",
    role: "CrossFit Athlete",
  },
];

const col3: Testimonial[] = [
  {
    quote:
      '"Pre-TRT guidance helped me delay TRT another two years with a real plan, not a forum guess."',
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&auto=format&fit=crop",
    name: "Daniel S.",
    role: "Age 47 · Pre-TRT",
  },
  {
    quote:
      '"Tracked IGF-1 and hs-CRP across 8 weeks and adjusted based on data. Total game changer."',
    img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=256&auto=format&fit=crop",
    name: "Chris H.",
    role: "Bodybuilder",
  },
  {
    quote:
      '"Dose calculator killed my reconstitution anxiety. No more napkin math at midnight."',
    img: "https://images.unsplash.com/photo-1546456073-6712f79251bb?q=80&w=256&auto=format&fit=crop",
    name: "Sam W.",
    role: "Recreational Lifter",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-20 bg-[#050505] border-b border-white/5 overflow-hidden">
      <div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-neutral-300">
            Testimonials
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-white">
            Real results from guys who stopped guessing.
          </h2>
          <div className="mt-6 inline-flex items-center gap-3 rounded-full border px-4 py-2 border-white/10 bg-white/5">
            <span className="inline-flex items-center -space-x-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full ring-2 ring-neutral-900 bg-neutral-800 text-[10px] font-bold text-neutral-200">
                A
              </span>
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full ring-2 ring-neutral-900 bg-neutral-700 text-[10px] font-bold text-neutral-100">
                M
              </span>
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full ring-2 ring-neutral-900 bg-neutral-800 text-[10px] font-bold text-neutral-200">
                J
              </span>
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full ring-2 ring-neutral-900 bg-red-500 text-[10px] font-bold text-white">
                D
              </span>
            </span>
            <span className="inline-flex items-center gap-1 text-sm text-neutral-300">
              {[0, 1, 2, 3].map((i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-red-500"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              ))}
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
                className="w-4 h-4 text-red-500"
              >
                <path d="M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2"></path>
              </svg>
              <span className="ml-1">4.9/5 • 2,400+ members</span>
            </span>
          </div>
        </div>

        <div
          className="grid grid-cols-1 overflow-hidden md:grid-cols-3 h-[520px] gap-x-6 gap-y-6"
          style={{
            maskImage:
              "linear-gradient(180deg, transparent, black 12%, black 88%, transparent)",
            WebkitMaskImage:
              "linear-gradient(180deg, transparent, black 12%, black 88%, transparent)",
          }}
        >
          <div className="overflow-hidden">
            <div data-scroll-column="1" className="space-y-6">
              {[...col1, col1[0]].map((t, i) => (
                <Card key={`c1-${i}`} t={t} />
              ))}
            </div>
          </div>

          <div className="overflow-hidden">
            <div data-scroll-column="2" className="space-y-6">
              {[...col2, col2[0]].map((t, i) => (
                <Card key={`c2-${i}`} t={t} />
              ))}
            </div>
          </div>

          <div className="overflow-hidden">
            <div data-scroll-column="3" className="space-y-6">
              {[...col3, col3[0]].map((t, i) => (
                <Card key={`c3-${i}`} t={t} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
