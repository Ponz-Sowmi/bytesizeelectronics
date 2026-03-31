import type { Metadata } from "next";
import { AboutSection } from "@/components/home/AboutSection";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { ContactCtaSection } from "@/components/home/ContactCtaSection";
import { FeaturedSection } from "@/components/home/FeaturedSection";
import { HeroSection } from "@/components/home/HeroSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { SITE_META_DESCRIPTION, absoluteSiteUrl } from "@/lib/site";

const homeTitle = "Byte Size Electronics | Computers, Printers & CCTV in Harur";

export const metadata: Metadata = {
  title: { absolute: homeTitle },
  description: SITE_META_DESCRIPTION,
  alternates: { canonical: absoluteSiteUrl("/") },
  openGraph: {
    title: homeTitle,
    description: SITE_META_DESCRIPTION,
    url: absoluteSiteUrl("/"),
  },
  twitter: {
    title: homeTitle,
    description: SITE_META_DESCRIPTION,
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <WhyChooseSection />
      <FeaturedSection />
      <AboutSection />
      <ContactCtaSection />
    </>
  );
}
