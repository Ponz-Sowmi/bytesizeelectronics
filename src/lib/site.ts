export const SITE_NAME = "Byte Size Electronics";
export const SITE_URL = "https://bytesizeelectronics.com";
export const SITE_TAGLINE =
  "Computers, laptops, printers & CCTV — sales, service, and AMC for schools and businesses in Harur.";

export const CONTACT = {
  email: "bse2k21@gmail.com",
  /** Display */
  phone: "95005 29782",
  /** tel: / WhatsApp (India) */
  phoneTel: "+919500529782",
  /** wa.me — country code + number without + */
  whatsappE164: "919500529782",
  addressLine1: "Varnathertham, Near Indian Bank",
  addressLine2: "Meena Doctor Complex",
  city: "Harur",
  region: "Tamil Nadu",
  postal: "636903",
  country: "India",
  hours: "Mon–Sat 9:30–19:30 (call for Sunday)",
  gstin: "33EDDPP6499G1Z3",
  stateCode: "33",
} as const;

/** Indian Rupees — uses en-IN grouping */
export function formatInr(amount: number): string {
  return `₹${amount.toLocaleString("en-IN", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })}`;
}

export function whatsappOrderUrl(prefill?: string): string {
  const text =
    prefill ??
    `Hi ${SITE_NAME}, I'd like a quote / service. Please share details.`;
  const params = new URLSearchParams({ text });
  return `https://wa.me/${CONTACT.whatsappE164}?${params.toString()}`;
}
