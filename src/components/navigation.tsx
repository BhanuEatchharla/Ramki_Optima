"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { DemoModal } from "@/components/demo-modal";
import { Rocket, Home, Grid, BarChart, Layers, User } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showBottomNav, setShowBottomNav] = useState(true);
  const lastScroll = useRef(0);

  /* 🔹 Force scroll to Home on refresh */
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, behavior: "auto" });
    setActiveSection("home");
  }, []);

  /* 🔹 Navbar scroll behavior */
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 20);

      if (currentScroll > lastScroll.current && currentScroll > 50) {
        setShowBottomNav(false);
      } else {
        setShowBottomNav(true);
      }
      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* 🔹 Intersection Observer (stable + correct) */
  useEffect(() => {
    const timeout = setTimeout(() => {
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>(
          '[id="home"], [id="about"], [id="industries"], [id="features"], [id="analytics"], [id="roadmap"]'
        )
      );

      if (!sections.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          let mostVisible: IntersectionObserverEntry | null = null;

          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            if (
              !mostVisible ||
              entry.intersectionRatio > mostVisible.intersectionRatio
            ) {
              mostVisible = entry;
            }
          }

          if (mostVisible?.target instanceof HTMLElement) {
            setActiveSection(mostVisible.target.id);
          }
        },
        {
          threshold: [0.3, 0.5, 0.7],
          rootMargin: "-80px 0px -40% 0px",
        }
      );

      sections.forEach((s) => observer.observe(s));
      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  /* 🔹 Smooth scroll helper */
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    setActiveSection(id);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
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
      {/* 🔹 Floating Navbar */}
      <nav
        className={`fixed top-1 left-4 right-4 z-[90] rounded-2xl transition-all duration-500 backdrop-blur-md shadow-xl ${
          isScrolled
            ? "bg-background/85 border border-border dark:bg-background/70 h-12"
            : "bg-background/70 border border-border/30 h-16"
        }`}
      >
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="flex items-center justify-between w-full">
            {/* 🔹 Logo (smooth scroll to Home) */}
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-3 md:gap-4 min-w-0 transition-all duration-300"
            >
              <span
                className={`relative rounded-xl overflow-hidden ring-1 ring-border shadow-sm bg-background/60 transition-all duration-300 ${
                  isScrolled
                    ? "h-6 w-6 md:h-8 md:w-8"
                    : "h-8 w-8 md:h-10 md:w-10"
                }`}
              >
                <Image
                  src={logo}
                  alt="OPTIMA logo"
                  fill
                  className="object-contain"
                  priority
                />
              </span>

              <span className=" flex flex-col items-start leading-tight pt-[1px]">
                <span
                  className={`font-bold tracking-tight bg-gradient-hero bg-clip-text text-transparent ${
                    isScrolled ? "text-sm md:text-base" : "text-base md:text-lg"
                  }`}
                >
                  OPTIMA
                </span>

                <span
                  className={`text-muted-foreground ${
                    isScrolled
                      ? "text-[8px] md:text-[10px]"
                      : "text-[10px] md:text-xs"
                  }`}
                >
                  Ramki Technologies Pvt Ltd
                </span>
              </span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-hero transition-all ${
                      activeSection === item.id ? "w-full" : "w-0 hover:w-full"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />
              <Button
                size="sm"
                onClick={() => setIsDemoModalOpen(true)}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg"
              >
                <Rocket className="h-4 w-4 mr-2" />
                Book Demo
              </Button>
            </div>

            {/* Mobile Theme */}
            <div className="lg:hidden">
              <ThemeToggle />
            </div>
          </div>
        </div>

        <DemoModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
      </nav>

      {/* 🔹 Bottom Nav (mobile) */}
      <div
        className={`fixed bottom-4 left-4 right-4 lg:hidden z-[100] transition-transform ${
          showBottomNav ? "translate-y-0" : "translate-y-24"
        }`}
      >
        <div className="bg-background/95 backdrop-blur-md shadow-xl rounded-2xl flex justify-between px-6 py-2">
          {[
            { icon: Home, label: "Home", id: "home" },
            { icon: Grid, label: "Industries", id: "industries" },
            { icon: BarChart, label: "Features", id: "features" },
            { icon: Layers, label: "Analytics", id: "analytics" },
            { icon: User, label: "Roadmap", id: "roadmap" },
          ].map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex flex-col items-center ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <item.icon className="h-6 w-6" />
                <span className="text-[10px]">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
