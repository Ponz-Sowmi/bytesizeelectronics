import Link from "next/link";
import type { ReactNode } from "react";
import { CATEGORIES } from "@/data/products";

const icons: Record<string, ReactNode> = {
  desktops: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  ),
  laptops: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 18h.01M8 21h8a1 1 0 001-1v-4H7v4a1 1 0 001 1zm11-13V8a2 2 0 00-2-2H5a2 2 0 00-2 2v1h18z"
      />
    </svg>
  ),
  printers: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
      />
    </svg>
  ),
  cctv: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
      />
    </svg>
  ),
};

export function CategoriesSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16 sm:py-20" id="categories">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What we offer
          </h2>
          <p className="mt-3 text-slate-600">
            Sales and service under one roof — from desktops and laptops to printers and CCTV, plus
            AMC for institutions and businesses.
          </p>
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((cat) => (
            <li key={cat.slug}>
              <Link
                href={`/products#${cat.slug}`}
                className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50/50 p-6 transition hover:border-sky-200 hover:bg-white hover:shadow-md"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                  {icons[cat.slug]}
                </span>
                <span className="mt-4 text-lg font-semibold text-slate-900">{cat.title}</span>
                <span className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {cat.description}
                </span>
                <span className="mt-4 text-sm font-medium text-sky-700">View products →</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
