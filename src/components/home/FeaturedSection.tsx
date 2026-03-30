import Link from "next/link";
import { featuredProducts } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export function FeaturedSection() {
  const items = featuredProducts();

  return (
    <section className="bg-slate-50 py-16 sm:py-20" id="featured">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Featured products
            </h2>
            <p className="mt-3 max-w-xl text-slate-600">
              Sample picks with prices in ₹ — message us on WhatsApp for current models, AMC, and
              on-site service in Harur.
            </p>
          </div>
          <Link
            href="/products"
            className="text-sm font-semibold text-sky-700 hover:text-sky-800"
          >
            View all →
          </Link>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
