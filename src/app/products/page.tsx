import type { Metadata } from "next";
import { CATEGORIES, PRODUCTS, type CategorySlug } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { SITE_NAME, absoluteSiteUrl } from "@/lib/site";

const productsTitle = "Products & Services | Byte Size Electronics Harur";
const productsDescription = `${SITE_NAME} in Harur lists computers, laptops, printers, CCTV kits, repairs, and AMC plans. Browse indicative prices in ₹ and enquire on WhatsApp for availability and school or business packages.`;

export const metadata: Metadata = {
  title: { absolute: productsTitle },
  description: productsDescription,
  alternates: { canonical: absoluteSiteUrl("/products") },
  openGraph: {
    title: productsTitle,
    description: productsDescription,
    url: absoluteSiteUrl("/products"),
    locale: "en_IN",
    siteName: SITE_NAME,
  },
  twitter: {
    title: productsTitle,
    description: productsDescription,
  },
};

function productsInCategory(slug: CategorySlug) {
  return PRODUCTS.filter((p) => p.category === slug);
}

export default function ProductsPage() {
  return (
    <div className="bg-white">
      <div className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Products &amp; services
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-slate-600">
            From laptop and desktop sales to printer service and{" "}
            <strong>CCTV installation in Harur</strong>, these are sample listings with indicative
            prices in ₹ — tap <strong>Enquire on WhatsApp</strong> for stock, GST, and AMC options
            for schools and companies.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl space-y-16 px-4 py-14 sm:px-6 lg:px-8">
        {CATEGORIES.map((cat) => {
          const list = productsInCategory(cat.slug);
          return (
            <section key={cat.slug} id={cat.slug} className="scroll-mt-24" aria-labelledby={`heading-${cat.slug}`}>
              <h2 id={`heading-${cat.slug}`} className="text-2xl font-bold text-slate-900">
                {cat.title}
              </h2>
              <p className="mt-2 max-w-2xl text-slate-600">{cat.description}</p>
              <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
