export const SITE_NAME = "Byte Size Electronics";
/** Canonical site origin — use https and preferred host (www) for metadata & JSON-LD */
export const SITE_URL = "https://www.bytesizeelectronics.com";

export const SITE_TAGLINE =
  "Computers, laptops, printers & CCTV — sales, service, and AMC for schools and businesses in Harur.";

/** Default meta description (used in root layout + Open Graph fallback) */
export const SITE_META_DESCRIPTION =
  "Byte Size Electronics in Harur provides sales and service for computers, laptops, printers and CCTV systems. We offer desktop and laptop sales, printer repair, CCTV installation and AMC services for homes, schools and businesses.";

export const SITE_KEYWORDS = [
  "Byte Size Electronics",
  "computer shop in Harur",
  "laptop sales Harur",
  "printer service Harur",
  "CCTV installation Harur",
  "computer service Harur",
  "AMC services Harur",
] as const;

export const CONTACT = {
  email: "bse2k21@gmail.com",
  phone: "+91 95005 29782",
  phoneTel: "+919500529782",
  whatsappE164: "919500529782",
  addressLine1: "Meena Doctor Complex",
  addressLine2: "",
  city: "Harur",
  region: "Tamil Nadu",
  postal: "636903",
  country: "India",
  hours: "Mon–Sat 9:30–19:30 (call for Sunday)",
  gstin: "33EDDPP6499G1Z3",
  stateCode: "33",
} as const;

/** Approximate centre of Harur for geo / structured data (refine if you have exact shop coordinates) */
export const BUSINESS_GEO = {
  latitude: 12.0524,
  longitude: 78.4978,
} as const;

/** Your Google Maps place link (Share). Used for “Open in Google Maps”. */
export const GOOGLE_MAPS_OPEN_URL = "https://share.google/higZHyTinLTxtqjos";

/**
 * Iframe `src` for the embedded map.
 * If the share link does not show inside the frame, open your link in Google Maps → Share →
 * “Embed a map” and paste only the `src` URL here (starts with https://www.google.com/maps/embed).
 */
export const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.8250156169834!2d78.4782157750613!3d12.055557788181886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac652ff5b23387%3A0x8576033665a284f1!2sByte%20Size%20Electronics!5e0!3m2!1sen!2sin!4v1774937395546!5m2!1sen!2sin";

/** Absolute URL for canonicals, Open Graph, and JSON-LD (path must start with /). */
export function absoluteSiteUrl(path = "/"): string {
  const origin = SITE_URL.replace(/\/$/, "");
  const normalized = path === "" || path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `${origin}${normalized === "" ? "/" : normalized}`;
}

/** Indian Rupees — uses en-IN grouping */
export function formatInr(amount: number): string {
  return `₹${amount.toLocaleString("en-IN", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })}`;
}

/** Standard WhatsApp template; replace {name} with product or service label. */
export function whatsappInterestMessage(productOrServiceName: string): string {
  return `Hello, I am interested in ${productOrServiceName}. Please share price and availability.`;
}

const WHATSAPP_DEFAULT_INTEREST = "your products and services";

export function whatsappOrderUrl(prefill?: string): string {
  const text = prefill ?? whatsappInterestMessage(WHATSAPP_DEFAULT_INTEREST);
  const params = new URLSearchParams({ text });
  return `https://wa.me/${CONTACT.whatsappE164}?${params.toString()}`;
}
