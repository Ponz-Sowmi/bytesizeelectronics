import { AboutSection } from "@/components/home/AboutSection";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { ContactCtaSection } from "@/components/home/ContactCtaSection";
import { FeaturedSection } from "@/components/home/FeaturedSection";
import { HeroSection } from "@/components/home/HeroSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";

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
