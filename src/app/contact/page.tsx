import type { Metadata } from "next";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { VisitStoreSection, STORE_ADDRESS_LINES } from "@/components/VisitStoreSection";
import { CONTACT, SITE_NAME } from "@/lib/site";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: `Contact | ${SITE_NAME}`,
  description: `Reach ${SITE_NAME} in Harur — phone, WhatsApp, or email. GSTIN ${CONTACT.gstin}.`,
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Contact us
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-slate-600">
            New purchases, repairs, CCTV projects, or AMC for your school or office — call, WhatsApp,
            or email. Prices discussed in Indian Rupees (₹).
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Get in touch</h2>
          <ul className="mt-6 space-y-4 text-slate-700">
            <li>
              <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">
                Email
              </span>
              <a href={`mailto:${CONTACT.email}`} className="text-sky-700 hover:underline">
                {CONTACT.email}
              </a>
            </li>
            <li>
              <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">
                Phone / WhatsApp
              </span>
              <a href={`tel:${CONTACT.phoneTel}`} className="text-sky-700 hover:underline">
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">
                Address
              </span>
              <span className="leading-relaxed">
                {STORE_ADDRESS_LINES.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </li>
            <li>
              <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">
                Hours
              </span>
              {CONTACT.hours}
            </li>
            <li>
              <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">
                GST &amp; state
              </span>
              <span className="text-sm">
                GSTIN: {CONTACT.gstin}
                <br />
                State: {CONTACT.stateCode} – {CONTACT.region}
              </span>
            </li>
          </ul>
          <div className="mt-8">
            <WhatsAppButton label="WhatsApp us" variant="primary" />
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-slate-900">Send a message</h2>
          <p className="mt-1 text-sm text-slate-600">
            Opens your email app with your message pre-filled to {CONTACT.email}.
          </p>
          <ContactForm />
        </div>
      </div>

      <VisitStoreSection />
    </div>
  );
}
