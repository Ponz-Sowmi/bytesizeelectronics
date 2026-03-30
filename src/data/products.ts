export type CategorySlug = "desktops" | "laptops" | "printers" | "cctv";

export type Product = {
  id: string;
  name: string;
  category: CategorySlug;
  /** Price in INR (indicative — confirm on WhatsApp) */
  price: number;
  description: string;
  image: string;
  featured?: boolean;
};

export const CATEGORIES: {
  slug: CategorySlug;
  title: string;
  description: string;
}[] = [
  {
    slug: "desktops",
    title: "Desktops & computers",
    description:
      "Office and home PCs, upgrades, and on-site support. AMC available for schools and companies.",
  },
  {
    slug: "laptops",
    title: "Laptops",
    description: "New laptops, accessories, and repair services — quick turnaround when parts allow.",
  },
  {
    slug: "printers",
    title: "Printers",
    description: "Ink tank and laser printers, supplies, and service. AMC plans for high-volume users.",
  },
  {
    slug: "cctv",
    title: "CCTV",
    description: "HD cameras, DVR/NVR kits, and installation. Annual maintenance for commercial sites.",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "pc-office-i5",
    name: "Office desktop (Intel i5, 8GB RAM, 512GB SSD)",
    category: "desktops",
    price: 32499,
    description: "Ready for everyday office work; OS and software as per availability. GST extra as applicable.",
    image: "https://placehold.co/600x600/0f172a/38bdf8/png?text=Office+PC",
    featured: true,
  },
  {
    id: "pc-aio",
    name: "All-in-one desktop 24\"",
    category: "desktops",
    price: 42999,
    description: "Space-saving AIO for front desks and classrooms — ideal where cable clutter matters.",
    image: "https://placehold.co/600x600/0f172a/a5b4fc/png?text=All-in-One",
    featured: true,
  },
  {
    id: "pc-service-visit",
    name: "Desktop service — visit (Harur area)",
    category: "desktops",
    price: 499,
    description: "Diagnosis and basic service; parts quoted separately. AMC customers billed per contract.",
    image: "https://placehold.co/600x600/0f172a/34d399/png?text=PC+Service",
  },
  {
    id: "laptop-student-14",
    name: 'Laptop 14" (student / everyday use)',
    category: "laptops",
    price: 28999,
    description: "Balanced specs for study and browsing; exact model depends on stock — message for current options.",
    image: "https://placehold.co/600x600/0f172a/fbbf24/png?text=Laptop+14in",
    featured: true,
  },
  {
    id: "laptop-business-15",
    name: 'Laptop 15.6" (business)',
    category: "laptops",
    price: 45999,
    description: "Faster storage and RAM options available; ideal for offices and teachers.",
    image: "https://placehold.co/600x600/0f172a/f472b6/png?text=Laptop+15in",
    featured: true,
  },
  {
    id: "laptop-repair",
    name: "Laptop repair (screen / board / charging)",
    category: "laptops",
    price: 899,
    description: "Starting from — final estimate after inspection. Pickup/drop in Harur on request.",
    image: "https://placehold.co/600x600/0f172a/c4b5fd/png?text=Laptop+Repair",
  },
  {
    id: "printer-ink-tank",
    name: "Ink tank colour printer (Wi‑Fi)",
    category: "printers",
    price: 13999,
    description: "Low cost per page for schools and small offices; installation help available.",
    image: "https://placehold.co/600x600/0f172a/22d3ee/png?text=Ink+Tank",
    featured: true,
  },
  {
    id: "printer-laser",
    name: "Laser printer (monochrome)",
    category: "printers",
    price: 12499,
    description: "Sharp text for invoices and forms; toner and AMC options on request.",
    image: "https://placehold.co/600x600/0f172a/f87171/png?text=Laser+Printer",
  },
  {
    id: "printer-amc",
    name: "Printer AMC (annual — quote)",
    category: "printers",
    price: 3500,
    description: "Indicative per device/year for standard usage; covers periodic service — schools & companies welcome.",
    image: "https://placehold.co/600x600/0f172a/fcd34d/png?text=Printer+AMC",
    featured: true,
  },
  {
    id: "cctv-kit-4",
    name: "HD CCTV kit — 4 cameras + DVR",
    category: "cctv",
    price: 18999,
    description: "Basic indoor/outdoor setup; cable length and HDD capacity adjusted to your site.",
    image: "https://placehold.co/600x600/0f172a/94a3b8/png?text=CCTV+4+Cam",
    featured: true,
  },
  {
    id: "cctv-ip-2mp",
    name: "IP bullet camera 2MP (single)",
    category: "cctv",
    price: 2499,
    description: "Add-on or replacement camera; compatible with common NVR brands — confirm before purchase.",
    image: "https://placehold.co/600x600/0f172a/fb923c/png?text=IP+Camera",
  },
  {
    id: "cctv-amc",
    name: "CCTV AMC (annual — quote)",
    category: "cctv",
    price: 4500,
    description: "Cleaning, alignment check, and recorder health — tailored for shops, schools, and offices.",
    image: "https://placehold.co/600x600/0f172a/86efac/png?text=CCTV+AMC",
  },
];

export function featuredProducts(): Product[] {
  return PRODUCTS.filter((p) => p.featured);
}

export function productsByCategory(slug: CategorySlug): Product[] {
  return PRODUCTS.filter((p) => p.category === slug);
}
