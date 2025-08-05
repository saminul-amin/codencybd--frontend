import { useEffect, useState } from "react";
import HeroSection from "../../components/HeroSection";
import AboutSection from "../../components/AboutSection";
import StatsSection from "../../components/StatsSection";
import TestimonialsSection from "../../components/TestimonialsSection";
import CTASection from "../../components/CTASection";
import ServicesPreview from "../../components/ServicesPreview";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      <HeroSection isVisible={isVisible} />
      <AboutSection />
      <ServicesPreview />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
