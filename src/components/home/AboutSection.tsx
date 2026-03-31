import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export function AboutSection() {
  return (
    <section className="border-t border-slate-200 bg-white py-16 sm:py-20" id="about">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              About {SITE_NAME}
            </h2>
            <p className="mt-2 text-lg font-medium text-sky-700">{SITE_TAGLINE}</p>
            <p className="mt-6 text-slate-600 leading-relaxed">
              Many customers first find us when they search for a dependable{" "}
              <strong className="font-medium text-slate-800">computer shop in Harur</strong> — then
              stay for printer troubleshooting, network basics, and follow-up service. We keep
              explanations plain and pricing in ₹ so you know what you are paying for.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Alongside <strong className="font-medium text-slate-800">laptop and desktop sales in Harur</strong>,
              we handle <strong className="font-medium text-slate-800">printer service in Harur</strong>{" "}
              and <strong className="font-medium text-slate-800">CCTV installation in Harur</strong>{" "}
              for small offices, retail, and institutions. Message on WhatsApp with your layout or
              fault description — we will suggest the next step, whether it is a visit or an AMC
              plan.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Desktop & laptop sales",
                "Printer sales, refill & service",
                "CCTV supply & installation",
                "AMC: schools, companies, offices",
              ].map((text) => (
                <li key={text} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-100 to-sky-50 p-8 shadow-inner sm:p-10">
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-sky-200/60 blur-2xl" />
            <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-indigo-200/50 blur-2xl" />
            <blockquote className="relative text-lg font-medium leading-relaxed text-slate-800">
              &ldquo;Right-sized IT for Harur — fair prices in ₹, clear service, and long-term support
              for schools and businesses.&rdquo;
            </blockquote>
            <p className="relative mt-6 text-sm font-semibold text-slate-600">
              — {SITE_NAME}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
