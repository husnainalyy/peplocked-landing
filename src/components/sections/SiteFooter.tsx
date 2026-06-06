const columns = [
  {
    title: "Product",
    links: ["Features", "Compound Library", "Pricing", "FAQ"],
  },
  {
    title: "Tools",
    links: [
      "Dose Calculator",
      "Bloodwork Analysis",
      "COA Verification",
      "Protocol Review",
    ],
  },
  {
    title: "Company",
    links: ["About", "Contact", "Disclaimer", "Refund Policy"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Disclaimer"],
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-12 md:gap-8 mb-20">
          <div className="col-span-2 md:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://peplocked.com/wordmark-dark.svg"
                alt="Peplocked"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-sm text-neutral-200 leading-relaxed max-w-xs">
              Research-grade peptide intelligence for serious lifters.
              Educational research only — not medical advice.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="col-span-1 md:col-span-2">
              <h4 className="text-sm font-semibold text-white mb-6">
                {col.title}
              </h4>
              <ul className="space-y-4 text-sm text-neutral-500">
                {col.links.map((link, i) => (
                  <li key={`${link}-${i}`}>
                    <a href="#" className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-neutral-600 font-medium">
            © 2026 Peplocked. All rights reserved. Educational research only —
            not medical advice.
          </p>

          <div className="flex gap-6">
            <a href="#" className="text-neutral-600 hover:text-white transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="#" className="text-neutral-600 hover:text-white transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
            <a href="#" className="text-neutral-600 hover:text-white transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
