import Link from "next/link";
import { CONTACT, SITE_NAME, SITE_URL } from "@/lib/site";

const footerNav = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-slate-900">{SITE_NAME}</p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-600">
              Computers, laptops, printers, and CCTV — sales, service, and AMC for schools and
              companies. Visit us in Harur or message on WhatsApp.
            </p>
            <p className="mt-4 text-xs text-slate-500">
              <a href={SITE_URL} className="hover:text-sky-700">
                bytesizeelectronics.com
              </a>
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Explore
            </p>
            <ul className="mt-4 space-y-2">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-700 hover:text-sky-700"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-sky-700">
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT.phoneTel}`} className="hover:text-sky-700">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="leading-relaxed text-slate-600">
                {CONTACT.addressLine1}
                <br />
                {CONTACT.addressLine2}
                <br />
                {CONTACT.city} – {CONTACT.postal}
                <br />
                {CONTACT.region}, {CONTACT.country}
              </li>
              <li className="text-slate-600">{CONTACT.hours}</li>
              <li className="pt-1 text-xs text-slate-500">
                GSTIN: {CONTACT.gstin}
                <br />
                State: {CONTACT.stateCode} – {CONTACT.region}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
