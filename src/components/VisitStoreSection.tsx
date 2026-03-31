import Link from "next/link";
import { GOOGLE_MAPS_EMBED_URL, GOOGLE_MAPS_OPEN_URL } from "@/lib/site";

/** Displayed under “Visit Our Store” */
export const STORE_ADDRESS_LINES = [
  "Meena Doctor Complex",
  "Harur - 636903",
  "Tamil Nadu, India",
] as const;

export function VisitStoreSection() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Visit Our Store
        </h2>
        <address className="mt-4 not-italic leading-relaxed text-slate-700">
          {STORE_ADDRESS_LINES.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </address>

        <div className="relative mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {/* Google Maps: replace `src` with your final embed URL from Maps → Share → Embed a map, or set GOOGLE_MAPS_EMBED_URL in src/lib/site.ts */}
          <iframe
            title="Byte Size Electronics on Google Maps"
            className="aspect-[16/10] h-auto min-h-[260px] w-full border-0 sm:min-h-[320px]"
            src={GOOGLE_MAPS_EMBED_URL || "about:blank"}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          {!GOOGLE_MAPS_EMBED_URL ? (
            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-2 bg-slate-100/95 px-6 text-center backdrop-blur-[2px]">
              <p className="text-sm font-medium text-slate-800">Map embed area</p>
              <p className="max-w-md text-xs leading-relaxed text-slate-600">
                Set <code className="rounded bg-white px-1 py-0.5 font-mono text-slate-800 shadow-sm">GOOGLE_MAPS_EMBED_URL</code> in{" "}
                <code className="rounded bg-white px-1 py-0.5 font-mono text-slate-800 shadow-sm">src/lib/site.ts</code> to your embed{" "}
                <code className="rounded bg-white px-1 py-0.5 font-mono text-slate-800 shadow-sm">src</code> — see the comment above this iframe in{" "}
                <code className="rounded bg-white px-1 py-0.5 font-mono text-slate-800 shadow-sm">VisitStoreSection.tsx</code>.
              </p>
            </div>
          ) : null}
        </div>

        <div className="mt-6">
          <Link
            href={GOOGLE_MAPS_OPEN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2"
          >
            Open in Google Maps
          </Link>
        </div>
      </div>
    </section>
  );
}
