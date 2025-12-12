"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DemoModal } from "@/components/demo-modal";
import { ArrowRight, Play, Zap, Shield, BarChart3, Truck } from "lucide-react";
import heroImage from "@/assets/hero-logistics.png";

export function HeroSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const logisticsSteps = [
    { icon: Truck, label: "Plant Vehicle Induction", color: "text-primary" },
    { icon: Shield, label: "AI Quality Validation", color: "text-success" },
    { icon: BarChart3, label: "Real-time Plant Tracking", color: "text-warning" },
    { icon: Zap, label: "Proof of Delivery & Receipt", color: "text-primary" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % logisticsSteps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex flex-col justify-center min-h-screen bg-gradient-to-br from-background via-background to-background-secondary overflow-hidden px-4 sm:px-6 lg:px-12 pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10 animate-pulse-glow" />
      <div className="absolute top-16 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-16 right-10 w-40 h-40 bg-success/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div className="space-y-8 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <Zap className="h-4 w-4 mr-2" />
            OPTIMA — Intelligent Plant Logistics
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              OPTIMA
            </span>
            <br />
            <span className="text-foreground">Intelligent Plant Logistics &</span>{" "}
            <span className="text-primary">Transportation Management</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Streamline plant-level transportation — from induction and AI validation
            of shipments to real-time tracking and automated proof of delivery.
            Reduce plant idle time, cut logistics overhead, and ensure traceable,
            paperless handoffs across your manufacturing network.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <Button
              size="lg"
              onClick={() => setIsDemoModalOpen(true)}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90 transition-all duration-300 shadow-lg group mt-4 md:mt-6"            >
              Request OPTIMA Demo
              <Play className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-sm text-muted-foreground mt-6">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span>Reduce Plant Logistics Cost</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>100% Paperless Handoffs</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-warning rounded-full animate-pulse" />
              <span>Real-time Fleet & Plant Visibility</span>
            </div>
          </div>
        </div>

        {/* Right: Visual */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[600px]">
            <Image
              src={heroImage}
              alt="OPTIMA — Intelligent Plant Logistics & Transportation Management"
              width={1200}
              height={700}
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-hero opacity-20 rounded-2xl" />

            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-card border border-border rounded-lg p-3 shadow-lg animate-float">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                <span className="text-sm font-medium whitespace-nowrap">
                  Live Plant & Fleet Tracking
                </span>
              </div>
            </div>
            <div
              className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-3 shadow-lg animate-float"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium whitespace-nowrap">
                  AI Route & Load Optimization
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Modal */}
      <DemoModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </section>
  );
}
