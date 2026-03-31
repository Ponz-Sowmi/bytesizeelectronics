import {
  BUSINESS_GEO,
  CONTACT,
  GOOGLE_MAPS_OPEN_URL,
  SITE_META_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

/**
 * JSON-LD for schema.org ComputerStore (LocalBusiness subtype).
 * Inject once in root layout. Refine coordinates in site.ts if needed.
 */
export function getLocalBusinessJsonLd(): Record<string, unknown> {
  const streetAddress = [CONTACT.addressLine1, CONTACT.addressLine2].filter(Boolean).join(", ");

  return {
    "@context": "https://schema.org",
    "@type": "ComputerStore",
    "@id": `${SITE_URL}/#business`,
    name: SITE_NAME,
    description: SITE_META_DESCRIPTION,
    url: SITE_URL,
    telephone: CONTACT.phoneTel,
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: streetAddress || CONTACT.addressLine1,
      addressLocality: CONTACT.city,
      addressRegion: CONTACT.region,
      postalCode: CONTACT.postal,
      addressCountry: CONTACT.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS_GEO.latitude,
      longitude: BUSINESS_GEO.longitude,
    },
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Harur",
        containedInPlace: { "@type": "State", name: "Tamil Nadu", containedInPlace: { "@type": "Country", name: "India" } },
      },
      { "@type": "State", name: "Tamil Nadu" },
    ],
    hasMap: GOOGLE_MAPS_OPEN_URL,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:30",
      closes: "19:30",
    },
    priceRange: "₹₹",
    sameAs: [] as string[],
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Computer and laptop sales, printer repair, CCTV installation, AMC for businesses and schools",
        areaServed: { "@type": "City", name: "Harur" },
      },
    },
  };
}
