import Image from "next/image";
import type { Product } from "@/data/products";
import { formatInr, whatsappOrderUrl } from "@/lib/site";

type Props = { product: Product };

export function ProductCard({ product }: Props) {
  const prefill = `Hi! I'm interested in: ${product.name} (code: ${product.id}). Please confirm price in ₹ and availability.`;
  const href = whatsappOrderUrl(prefill);

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-sky-200 hover:shadow-md">
      <div className="relative aspect-square bg-slate-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition group-hover:scale-[1.02]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="text-base font-semibold text-slate-900">{product.name}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-slate-600">{product.description}</p>
        <p className="mt-3 text-lg font-bold text-sky-700">{formatInr(product.price)}</p>
        <p className="text-xs text-slate-500">Indicative price — confirm on WhatsApp</p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-800 transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-800"
        >
          Enquire on WhatsApp
        </a>
      </div>
    </article>
  );
}
