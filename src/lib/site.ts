export const SITE_NAME = "Byte Size Electronics";
export const SITE_URL = "https://bytesizeelectronics.com";
export const SITE_TAGLINE =
  "Computers, laptops, printers & CCTV — sales, service, and AMC for schools and businesses in Harur.";

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

/** Your Google Maps place link (Share). Used for “Open in Google Maps”. */
export const GOOGLE_MAPS_OPEN_URL = "https://share.google/higZHyTinLTxtqjos";

/**
 * Iframe `src` for the embedded map.
 * If the share link does not show inside the frame, open your link in Google Maps → Share →
 * “Embed a map” and paste only the `src` URL here (starts with https://www.google.com/maps/embed).
 */
export const GOOGLE_MAPS_EMBED_URL = "https://share.google/higZHyTinLTxtqjos";

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

const WHATSAPP_DEFAULT_INTEREST =
  "your products and services";

export function whatsappOrderUrl(prefill?: string): string {
  const text =
    prefill ??
    whatsappInterestMessage(WHATSAPP_DEFAULT_INTEREST);
  const params = new URLSearchParams({ text });
  return `https://wa.me/${CONTACT.whatsappE164}?${params.toString()}`;
}
