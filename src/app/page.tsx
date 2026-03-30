import { AboutSection } from "@/components/home/AboutSection";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { FeaturedSection } from "@/components/home/FeaturedSection";
import { HeroSection } from "@/components/home/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <FeaturedSection />
      <AboutSection />
    </>
  );
}
