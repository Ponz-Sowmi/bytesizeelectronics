import Link from "next/link";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SITE_NAME } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgb(14 165 233 / 0.35), transparent 45%), radial-gradient(circle at 80% 60%, rgb(99 102 241 / 0.25), transparent 40%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <p className="text-sm font-medium uppercase tracking-widest text-sky-300">{SITE_NAME}</p>
        <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl lg:leading-tight">
          Sales &amp; Service for Computers, Printers &amp; CCTV
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
          Trusted IT support for Harur and nearby areas. Whether you need a reliable{" "}
          <strong className="font-semibold text-slate-100">computer shop in Harur</strong> for
          laptop and desktop sales, ongoing <strong className="font-semibold text-slate-100">printer service in Harur</strong>, or{" "}
          <strong className="font-semibold text-slate-100">CCTV installation in Harur</strong>, we
          combine sales and service so homes, schools, and businesses stay connected.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100"
          >
            View products &amp; services
          </Link>
          <WhatsAppButton label="WhatsApp us" variant="primary" />
        </div>
      </div>
    </section>
  );
}
