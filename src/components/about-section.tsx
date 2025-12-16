"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Brain,
  Zap,
  Shield,
  Globe,
  CheckCircle,
  TrendingUp,
} from "lucide-react";

export function AboutSection() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "30% Cost Reduction",
      description: "AI-driven route optimization.",
    },
    {
      icon: Zap,
      title: "100% Paperless",
      description: "Fully digital workflows.",
    },
    {
      icon: Globe,
      title: "Live GPS Tracking",
      description: "Real-time vehicle ETA.",
    },
    {
      icon: Shield,
      title: "AI Validation",
      description: "Smart compliance checks.",
    },
  ];

  const features = [
    "Centralized Logistics Control",
    "Vehicle Induction Automation",
    "ERP Integrations",
    "Mobile Alerts",
    "Predictive Analytics",
    "Multi-plant Visibility",
  ];

  return (
    <section id="about" className="bg-background-secondary scroll-mt-[60px]">
      <div
        className="w-full max-w-9xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-16
                      min-h-[calc(100vh-80px)] flex flex-col py-8"
      >
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <Zap className="h-4 w-4 mr-2" />
            OPTIMA — Intelligent Plant Logistics
          </div>

          <h2 className="mt-2 py-4 text-lg sm:text-xl md:text-2xl font-semibold tracking-tight">
            Built for Modern, AI-Driven Logistics
          </h2>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {benefits.map((item, i) => (
            <Card
              key={i}
              className="transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <CardContent className="p-3 text-center">
                <div className="mx-auto mb-2 w-fit rounded-full bg-gradient-button p-2">
                  <item.icon className="h-4 w-4 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-sm mb-0.5">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-tight">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Automation */}
          <div className="bg-gradient-card rounded-xl p-4 border border-border">
            <h3 className="text-sm sm:text-base font-semibold flex items-center gap-2 mb-3">
              <Brain className="h-4 w-4 text-primary" />
              AI-First Automation Flow
            </h3>

            <div className="space-y-2">
              {[
                "Vehicle Induction",
                "Document Processing",
                "Route Optimization",
                "Live Tracking",
                "Digital Proof of Delivery",
              ].map((step, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-2 rounded-md hover:bg-primary/5 transition"
                >
                  <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-[10px] font-bold">
                    {`0${i + 1}`}
                  </div>
                  <span className="flex-1 text-xs font-medium">{step}</span>
                  <CheckCircle className="h-3.5 w-3.5 text-success" />
                </div>
              ))}
            </div>
          </div>

          {/* Features + Stats */}
          <div className="space-y-4">
            <h3 className="text-sm sm:text-base font-semibold">
              Complete Logistics Suite
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 p-2 rounded-md border border-border hover:bg-primary/5 transition"
                >
                  <CheckCircle className="h-3.5 w-3.5 text-success" />
                  <span className="text-xs">{f}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {[
                { n: "30%", l: "Cost" },
                { n: "100%", l: "Paperless" },
                { n: "24/7", l: "Tracking" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-border p-2 text-center"
                >
                  <div className="text-sm font-bold bg-gradient-hero bg-clip-text text-transparent">
                    {s.n}
                  </div>
                  <div className="text-[10px] text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
