import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import HrefsSection from "@/components/HrefsSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <HrefsSection />
    </div>
  );
}
