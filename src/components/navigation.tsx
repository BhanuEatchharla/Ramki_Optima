"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { DemoModal } from "@/components/demo-modal";
import { Rocket, Home, Grid, BarChart, Layers, User } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [showBottomNav, setShowBottomNav] = useState(true);
  const lastScroll = useRef(0);

  // Scroll for navbar background + bottom nav hide/show
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 20);

      if (currentScroll > lastScroll.current && currentScroll > 50) {
        setShowBottomNav(false); // scrolling down
      } else {
        setShowBottomNav(true); // scrolling up
      }
      lastScroll.current = currentScroll;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.6, rootMargin: "-100px 0px" }
    );

    const sections = document.querySelectorAll(
      '[id="about"], [id="industries"], [id="features"], [id="analytics"], [id="roadmap"]'
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Industries", id: "industries" },
    { label: "Features", id: "features" },
    { label: "Analytics", id: "analytics" },
    { label: "Roadmap", id: "roadmap" },
  ];

  return (
    <>
      {/* Floating Navbar */}
      <nav
        className={`fixed top-2 left-4 right-4 z-[90] rounded-2xl transition-all duration-500 backdrop-blur-md shadow-xl ${
          isScrolled
            ? "bg-background/85 border border-border dark:bg-background/70 h-12"
            : "bg-background/70 border border-border/30 h-16"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="flex items-center justify-between w-full">
            {/* Logo + Name */}
            <Link
              href="/"
              className="flex items-center gap-2 md:gap-3 min-w-0 transition-all duration-300"
            >
              <span
                className={`relative rounded-xl overflow-hidden ring-1 ring-border shadow-sm bg-background/60 transition-all duration-300 ${
                  isScrolled ? "h-6 w-6 md:h-8 md:w-8" : "h-8 w-8 md:h-10 md:w-10"
                }`}
              >
                <Image
                  src={logo}
                  alt="OPTIMA logo"
                  fill
                  sizes="(min-width: 768px) 40px, 32px"
                  className="object-contain"
                  priority
                />
              </span>
              <span className="flex flex-col leading-[1.1] transition-all duration-300">
                <span
                  className={`font-bold tracking-tight bg-gradient-hero bg-clip-text text-transparent transition-all duration-300 ${
                    isScrolled ? "text-sm md:text-base" : "text-base md:text-lg"
                  }`}
                >
                  OPTIMA
                </span>
                <span
                  className={`text-muted-foreground -mt-0.5 transition-all duration-300 ${
                    isScrolled ? "text-[8px] md:text-[10px]" : "text-[10px] md:text-xs"
                  }`}
                >
                  AI Logistics
                </span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-foreground hover:text-primary transition-colors duration-200 font-medium relative group ${
                    activeSection === item.id ? "text-primary" : ""
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-hero transition-all duration-300 ${
                      activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <ThemeToggle />
              <Button
                size="sm"
                onClick={() => setIsDemoModalOpen(true)}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90 transition-all duration-300 shadow-lg group"
              >
                <Rocket className="h-4 w-4 mr-2" />
                Book Demo
              </Button>
            </div>

            {/* Theme toggle for mobile/tablet */}
            <div className="flex items-center space-x-2 lg:hidden">
              <ThemeToggle />
            </div>
          </div>
        </div>

        <DemoModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
      </nav>

      {/* Bottom Navigation for Mobile + Tablet */}
      <div
        className={`fixed bottom-4 left-4 right-4 lg:hidden z-[100] transition-transform duration-300 ${
          showBottomNav ? "translate-y-0" : "translate-y-24"
        }`}
      >
        <div className="bg-background/95 backdrop-blur-md shadow-xl rounded-2xl flex justify-between items-center px-6 py-2">
          {[
            { icon: Home, label: "Home", id: "about" },
            { icon: Grid, label: "Industries", id: "industries" },
            { icon: BarChart, label: "Features", id: "features" },
            { icon: Layers, label: "Analytics", id: "analytics" },
            { icon: User, label: "Roadmap", id: "roadmap" },
          ].map((item, idx) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={idx}
                onClick={() => scrollToSection(item.id)}
                className={`flex flex-col items-center justify-center relative transition-all duration-300 ${
                  isActive ? "text-white" : "text-muted-foreground"
                } group`}
              >
                <span
                  className={`absolute -top-2 w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
                <item.icon
                  className={`h-6 w-6 mb-1 transition-transform duration-300 ${
                    isActive ? "scale-125 text-gradient-hero" : "hover:scale-110"
                  }`}
                />
                <span
                  className={`text-[10px] font-medium transition-colors duration-300 ${
                    isActive ? "text-gradient-hero" : "group-hover:text-primary"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
