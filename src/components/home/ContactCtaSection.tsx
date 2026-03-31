import Link from "next/link";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function ContactCtaSection() {
  return (
    <section className="border-t border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-14 text-white sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Ready to get started?</h2>
            <p className="mt-3 max-w-xl text-slate-300">
              Visit us at Meena Doctor Complex, Harur, or reach out for a quote, repair, or AMC
              discussion.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100"
            >
              Contact &amp; location
            </Link>
            <WhatsAppButton label="WhatsApp us" variant="primary" className="justify-center sm:min-w-[11rem]" />
          </div>
        </div>
      </div>
    </section>
  );
}
