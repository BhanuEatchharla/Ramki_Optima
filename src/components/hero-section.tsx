"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DemoModal } from "@/components/demo-modal";
import { Play, Zap } from "lucide-react";
import heroImage from "@/assets/hero-logistics.png";

export function HeroSection() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative max-w-9xl min-h-screen flex items-center bg-gradient-to-br from-background via-background to-background-secondary overflow-hidden pt-24 scroll-mt-[60px]"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />

      {/* MAIN CONTAINER */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-6 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <Zap className="h-4 w-4 mr-2" />
              OPTIMA — Plant Logistics Platform
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                OPTIMA
              </span>
              <br />
              Intelligent Plant Logistics &{" "}
              <span className="text-primary">Transportation Management</span>
            </h1>

            {/* Caption / Description (UPDATED) */}
            <p className="text-sm sm:text-base xl:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              OPTIMA simplifies plant-level logistics and transportation
              management by digitizing vehicle induction, compliance checks,
              dispatch coordination, and delivery confirmation — helping
              enterprises reduce delays, cut operational overhead, and run
              paperless logistics across manufacturing locations.
            </p>

            {/* CTA */}
            <div className="flex justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => setIsDemoModalOpen(true)}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg"
              >
                Request OPTIMA Demo
                <Play className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col items-center lg:items-end space-y-6">
            {/* Image */}
            <div className="relative w-full max-w-[640px]">
              <Image
                src={heroImage}
                alt="OPTIMA Logistics Platform"
                width={1200}
                height={700}
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-hero opacity-20 rounded-2xl" />
            </div>

            {/* Trust Indicators — SINGLE ROW */}
            <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-end gap-4 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-success rounded-full" />
                Reduced Plant Logistics Cost
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                100% Paperless Operations
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-warning rounded-full" />
                Real-time Fleet & Plant Visibility
              </div>
            </div>
          </div>
        </div>
      </div>

      <DemoModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </section>
  );
}