"use client";

import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Hammer,
  ShoppingCart,
  Car,
  Factory,
  ArrowRight,
  TrendingUp,
  Shield,
  Clock,
  Users,
} from "lucide-react";

export function IndustriesSection() {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const industries = [
    {
      icon: Building2,
      title: "Cement Plants",
      subtitle: "Bulk Dispatch Solutions",
      description:
        "Optimize high-volume cement transportation with automated dispatch systems, real-time load tracking, and compliance management for heavy industrial operations.",
      features: ["Bulk material tracking", "Load optimization", "Dust control compliance", "Multi-destination routing"],
      benefits: { cost: "35%", efficiency: "40%", compliance: "100%" },
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Hammer,
      title: "Steel & Heavy Manufacturing",
      subtitle: "Safety + Compliance Focus",
      description:
        "Manage complex steel logistics with enhanced safety protocols, hazardous material handling, and strict regulatory compliance across all transportation stages.",
      features: ["Hazmat handling", "Safety protocols", "Quality assurance", "Regulatory compliance"],
      benefits: { cost: "28%", efficiency: "45%", compliance: "100%" },
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: ShoppingCart,
      title: "FMCG Warehouses",
      subtitle: "Fast-Moving, Time-Sensitive",
      description:
        "Accelerate FMCG distribution with AI-powered route optimization, real-time inventory sync, and predictive delivery scheduling for maximum customer satisfaction.",
      features: ["Inventory sync", "Temperature control", "Last-mile optimization", "Demand forecasting"],
      benefits: { cost: "32%", efficiency: "50%", compliance: "99%" },
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Car,
      title: "Automotive Plants",
      subtitle: "Multi-Tier Inbound/Outbound",
      description:
        "Streamline automotive supply chains with just-in-time delivery, parts tracking, multi-tier supplier coordination, and production line synchronization.",
      features: ["JIT delivery", "Parts tracking", "Supplier coordination", "Production sync"],
      benefits: { cost: "30%", efficiency: "42%", compliance: "100%" },
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Factory,
      title: "Multi-Plant Enterprises",
      subtitle: "Centralized Visibility",
      description:
        "Unify logistics across multiple manufacturing locations with centralized command center, cross-plant optimization, and enterprise-wide analytics and reporting.",
      features: ["Cross-plant optimization", "Centralized control", "Enterprise analytics", "Resource sharing"],
      benefits: { cost: "38%", efficiency: "48%", compliance: "100%" },
      color: "text-cyan-600",
      bgColor: "bg-cyan-50",
    },
  ];

  // Scroll active card into view
  useEffect(() => {
    const cardElements = sectionRef.current?.querySelectorAll(".industry-card");
    if (cardElements && cardElements[activeIndustry]) {
      const element = cardElements[activeIndustry] as HTMLElement;
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [activeIndustry]);

  return (
    <section ref={sectionRef} id="industries" className="py-20 md:py-24 bg-background scroll-smooth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-success/10 border border-success/20 text-success text-sm font-medium mb-4">
            <Factory className="h-4 w-4 mr-2" />
            Industries We Serve
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            Specialized Solutions for{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Every Industry
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            OPTIMA's AI-powered platform adapts to the unique requirements of your industry, delivering tailored logistics solutions.
          </p>
        </div>

        {/* Industry Cards - Carousel on sm + md, Grid only on lg+ */}
        <div className="flex space-x-4 md:space-x-6 overflow-x-auto pb-4 lg:grid lg:grid-cols-5 lg:gap-6 mb-12 scrollbar-hide">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="industry-card flex-shrink-0 w-64 lg:w-auto"
            >
              <Card
                className={`cursor-pointer h-full flex flex-col justify-center transition-all duration-300 hover:shadow-2xl group border rounded-2xl ${activeIndustry === index
                    ? `border-primary shadow-2xl bg-gradient-to-r from-blue-50 to-cyan-50`
                    : "border-border hover:border-primary/50 bg-background"
                  }`}
                onClick={() => setActiveIndustry(index)}
              >
                <CardContent className="p-4 md:p-5 text-center flex flex-col items-center">
                  <div
                    className={`p-4 md:p-5 rounded-full w-16 h-16 flex items-center justify-center mb-3 transition-transform duration-300 ${activeIndustry === index ? "bg-primary scale-110 shadow-xl" : "bg-muted hover:scale-105"
                      }`}
                  >
                    <industry.icon
                      className={`h-8 w-8 md:h-10 md:w-10 ${activeIndustry === index ? "text-primary-foreground" : industry.color}`}
                    />
                  </div>
                  <h3 className={`font-semibold text-base md:text-lg mb-1 transition-colors ${activeIndustry === index ? "text-primary" : "text-foreground"}`}>
                    {industry.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">{industry.subtitle}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Active Industry Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndustry}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Card className="border-primary/50 shadow-2xl bg-gradient-card rounded-3xl transition-all duration-500">
              <CardContent className="p-6 md:p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
                  {/* Left: Details */}
                  <div className="space-y-5">
                    <div className="flex items-center space-x-4">
                      <div className={`p-5 rounded-full ${industries[activeIndustry].bgColor}`}>
                        {(() => {
                          const IconComponent = industries[activeIndustry].icon;
                          return <IconComponent className={`h-10 w-10 ${industries[activeIndustry].color}`} />;
                        })()}
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground">{industries[activeIndustry].title}</h3>
                        <p className="text-muted-foreground text-sm md:text-base">{industries[activeIndustry].subtitle}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg">{industries[activeIndustry].description}</p>

                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 md:mb-4 text-base md:text-lg">Key Features:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                        {industries[activeIndustry].features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-2.5 h-2.5 bg-primary rounded-full" />
                            <span className="text-muted-foreground text-sm md:text-base">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90 transition-all duration-300 shadow-lg group mt-4 md:mt-6">
                      View Case Study
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  {/* Right: Benefits Stats */}
                  <div className="space-y-6 md:mt-6 lg:mt-0">
                    <h4 className="text-xl md:text-2xl font-bold text-center">Proven Results</h4>
                    <div className="grid grid-cols-1 gap-3 md:gap-4">
                      {[
                        { icon: TrendingUp, label: "Cost Reduction", value: industries[activeIndustry].benefits.cost, bg: "bg-success/10", color: "text-success" },
                        { icon: Clock, label: "Efficiency Gain", value: industries[activeIndustry].benefits.efficiency, bg: "bg-primary/10", color: "text-primary" },
                        { icon: Shield, label: "Compliance Rate", value: industries[activeIndustry].benefits.compliance, bg: "bg-warning/10", color: "text-warning" },
                      ].map((stat, idx) => (
                        <Card key={idx} className="border-border/50 hover:shadow-lg transition-shadow rounded-xl">
                          <CardContent className="p-4 md:p-6 flex items-center space-x-4">
                            <div className={`p-3 rounded-full ${stat.bg}`}>
                              <stat.icon className={`h-6 w-6 md:h-7 md:w-7 ${stat.color}`} />
                            </div>
                            <div className="flex-1">
                              <div className={`text-xl md:text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                              <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    {/* Trust Badge */}
                    <div className="text-center p-4 md:p-6 bg-muted/30 rounded-xl border border-border/50">
                      <Users className="h-8 w-8 md:h-10 md:w-10 text-primary mx-auto mb-2" />
                      <div className="text-sm md:text-base font-medium text-foreground">Trusted by 500+ enterprises</div>
                      <div className="text-xs md:text-sm text-muted-foreground">across manufacturing industries</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
