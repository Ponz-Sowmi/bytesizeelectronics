import { SITE_NAME } from "@/lib/site";

const POINTS: { title: string; description: string; icon: "one" | "cctv" | "printer" | "amc" | "local" | "genuine" }[] =
  [
    {
      title: "Sales & Service in One Place",
      description: "Buy new equipment and get repairs, tuning, and advice from the same trusted team.",
      icon: "one",
    },
    {
      title: "CCTV Installation Experts",
      description: "Site survey, cabling, camera placement, and recorder setup done with care.",
      icon: "cctv",
    },
    {
      title: "Printer Repair & Support",
      description: "Paper jams, connectivity, ink and toner — we help keep your office printing.",
      icon: "printer",
    },
    {
      title: "AMC for Schools & Companies",
      description: "Planned maintenance for desktops, CCTV, and printers so downtime stays low.",
      icon: "amc",
    },
    {
      title: "Fast Local Service in Harur",
      description: "We’re based in Meena Doctor Complex — quick response for Harur and nearby areas.",
      icon: "local",
    },
    {
      title: "Genuine Products & Best Price",
      description: "Fair pricing in ₹ with transparent quotes — ask on WhatsApp anytime.",
      icon: "genuine",
    },
  ];

function PointIcon({ kind }: { kind: (typeof POINTS)[number]["icon"] }) {
  const className = "h-7 w-7 text-sky-600";
  switch (kind) {
    case "one":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      );
    case "cctv":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      );
    case "printer":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
          />
        </svg>
      );
    case "amc":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      );
    case "local":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case "genuine":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
    default:
      return null;
  }
}

export function WhyChooseSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16 sm:py-20" id="why-us">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Why Choose {SITE_NAME}
        </h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          Whether you need <strong className="font-semibold text-slate-800">printer service in Harur</strong>, a
          new PC, or <strong className="font-semibold text-slate-800">CCTV installation in Harur</strong>, we
          keep communication clear and stand behind our work after the invoice is paid.
        </p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POINTS.map((item) => (
            <li
              key={item.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50/50 p-6 transition hover:border-sky-200 hover:bg-white hover:shadow-sm"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100">
                <PointIcon kind={item.icon} />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
