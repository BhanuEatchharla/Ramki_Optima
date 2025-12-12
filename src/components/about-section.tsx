"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionNav } from "@/components/section-nav";
import {
  Brain,
  Zap,
  Shield,
  Globe,
  ArrowRight,
  CheckCircle,
  TrendingUp,
} from "lucide-react";

export function AboutSection() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "30% Cost Reduction",
      description:
        "Optimize routes, reduce fuel costs, and minimize operational overhead with AI-driven insights.",
    },
    {
      icon: Zap,
      title: "100% Paperless Workflows",
      description:
        "Eliminate manual documentation with digital processes and automated compliance tracking.",
    },
    {
      icon: Globe,
      title: "Real-time GPS Tracking",
      description:
        "Monitor every vehicle with precision location data and predictive arrival times.",
    },
    {
      icon: Shield,
      title: "AI-Powered Validation",
      description:
        "Automated document verification, compliance checks, and anomaly detection.",
    },
  ];

  const features = [
    "Centralized Logistics Management",
    "Vehicle Induction to Delivery Automation",
    "ERP Integration (SAP, Oracle, Tally)",
    "Mobile Dashboard & Alerts",
    "Predictive Analytics & Insights",
    "Multi-plant Enterprise Visibility",
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-background-secondary scroll-smooth"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            <Brain className="h-4 w-4 mr-2" />
            Why Choose OPTIMA
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Revolutionizing{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Logistics Management
            </span>{" "}
            with AI
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            OPTIMA transforms traditional logistics operations into intelligent,
            automated workflows. From vehicle induction to proof of delivery,
            every step is powered by AI to maximize efficiency and minimize
            costs.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group hover:shadow-glow transition-all duration-500 border-border/50 hover:border-primary/50"
            >
              <CardContent className="p-6 text-center flex flex-col items-center justify-center">
                <div className="bg-gradient-button p-3 rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                  <benefit.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Split Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: AI Automation Visual */}
          <div className="relative animate-slide-in-left">
            <div className="bg-gradient-card rounded-2xl p-6 sm:p-8 border border-border shadow-lg">
              <h3 className="text-2xl font-bold mb-6 flex items-center justify-center sm:justify-start">
                <Brain className="h-7 w-7 text-primary mr-3" />
                AI-First Automation
              </h3>

              <div className="space-y-4">
                {[
                  {
                    step: "01",
                    title: "Vehicle Induction",
                    desc: "Automated entry validation",
                  },
                  {
                    step: "02",
                    title: "Document Processing",
                    desc: "AI-powered verification",
                  },
                  {
                    step: "03",
                    title: "Route Optimization",
                    desc: "Smart dispatch planning",
                  },
                  {
                    step: "04",
                    title: "Real-time Tracking",
                    desc: "GPS monitoring & alerts",
                  },
                  {
                    step: "05",
                    title: "Proof of Delivery",
                    desc: "Digital confirmation",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 group transition-all duration-500 hover:translate-x-1"
                  >
                    <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform duration-500">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                    <CheckCircle className="h-5 w-5 text-success" />
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Glows */}
            <div className="absolute -top-4 -right-4 bg-success/20 w-16 h-16 rounded-full blur-2xl animate-pulse"></div>
            <div
              className="absolute -bottom-4 -left-4 bg-primary/20 w-20 h-20 rounded-full blur-2xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          {/* Right: Features & Stats */}
          <div className="space-y-8 animate-slide-in-right text-center lg:text-left">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Comprehensive{" "}
                <span className="text-primary">Logistics Suite</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                OPTIMA provides end-to-end visibility and control over your
                logistics operations, integrating seamlessly with ERP systems
                while adding AI intelligence.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center lg:justify-start space-x-3 group transition-all duration-300"
                >
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-foreground group-hover:text-primary transition-colors">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { number: "30%", label: "Cost Savings" },
                { number: "100%", label: "Paperless" },
                { number: "24/7", label: "Monitoring" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-card border border-border rounded-xl hover:shadow-glow transition-all duration-300"
                >
                  <div className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
