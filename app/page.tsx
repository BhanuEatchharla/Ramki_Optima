"use client";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { IndustriesSection } from "@/components/industries-section";
import { FeaturesSection } from "@/components/features-section";
import { AnalyticsSection } from "@/components/analytics-section";
import { RoadmapSection } from "@/components/roadmap-section";
import { Footer } from "@/components/footer";
import { useEffect } from "react";
import CTASection from "@/components/cta-section";
// import { Home } from "lucide-react";

export default function Page() {
  useEffect(() => {
    // Update document title and meta tags for SEO
    document.title = "OPTIMA - AI-Powered Logistics & Transportation Management | Reduce Costs by 30%";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", 
        "Transform your logistics with OPTIMA's AI-powered platform. Automate vehicle induction to proof of delivery, reduce costs by 30%, achieve 100% paperless workflows. Trusted by 500+ enterprises."
      );
    }

    // Update Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    
    if (ogTitle) {
      ogTitle.setAttribute("content", "OPTIMA - AI-Powered Logistics & Transportation Management");
    }
    if (ogDescription) {
      ogDescription.setAttribute("content", 
        "Transform your logistics with AI automation. Reduce costs by 30%, achieve 100% paperless workflows, and get real-time visibility across your entire supply chain."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      <Navigation />
      <main>
      
        <HeroSection />
        <AboutSection />
        <IndustriesSection />
        <FeaturesSection />
        <AnalyticsSection />
        <RoadmapSection />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};


