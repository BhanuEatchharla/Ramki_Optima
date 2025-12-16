"use client";

import { useState } from "react";
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

  const industries = [
    {
      icon: Building2,
      title: "Cement Plants",
      subtitle: "Bulk Dispatch",
      description:
        "High-volume cement logistics with automated dispatch, live load tracking, and compliance.",
      features: [
        "Bulk tracking",
        "Load optimization",
        "Compliance checks",
        "Multi-destination routing",
      ],
      benefits: { cost: "35%", efficiency: "40%", compliance: "100%" },
    },
    {
      icon: Hammer,
      title: "Steel Manufacturing",
      subtitle: "Safety & Compliance",
      description:
        "Heavy manufacturing logistics with strict safety, hazmat handling, and regulatory controls.",
      features: [
        "Hazmat handling",
        "Safety protocols",
        "Quality checks",
        "Regulatory compliance",
      ],
      benefits: { cost: "28%", efficiency: "45%", compliance: "100%" },
    },
    {
      icon: ShoppingCart,
      title: "FMCG Warehouses",
      subtitle: "Fast Distribution",
      description:
        "Powered FMCG distribution with inventory sync and time-sensitive routing.",
      features: [
        "Inventory sync",
        "Temperature control",
        "Last-mile routing",
        "Demand forecasting",
      ],
      benefits: { cost: "32%", efficiency: "50%", compliance: "99%" },
    },
    {
      icon: Car,
      title: "Automotive Plants",
      subtitle: "JIT Logistics",
      description:
        "Just-in-time inbound & outbound coordination for automotive supply chains.",
      features: [
        "JIT delivery",
        "Parts tracking",
        "Supplier sync",
        "Production alignment",
      ],
      benefits: { cost: "30%", efficiency: "42%", compliance: "100%" },
    },
    {
      icon: Factory,
      title: "Multi-Plant Enterprises",
      subtitle: "Centralized Control",
      description:
        "Enterprise-wide logistics visibility across multiple plants and locations.",
      features: [
        "Cross-plant optimization",
        "Centralized control",
        "Enterprise analytics",
        "Resource sharing",
      ],
      benefits: { cost: "38%", efficiency: "48%", compliance: "100%" },
    },
  ];

  return (
    <section id="industries" className="bg-background scroll-mt-[60px]">
      <div className="w-full max-w-9xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 min-h-[calc(100vh-80px)] flex flex-col py-8">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <Factory className="h-4 w-4 mr-2" />
            Industries We Serve
          </div>
          <h2 className="mt-2 text-xl sm:text-2xl font-semibold">
            Industry-Specific Logistics Intelligence
          </h2>
        </div>

        {/* Selector */}
        <div
          className="
    flex gap-4 overflow-x-auto pb-2 mb-6

    /* 🔽 MOBILE ONLY */
    max-md:grid
    max-md:grid-cols-5
    max-md:gap-2
    max-md:overflow-hidden

    /* 🔼 KEEP DESKTOP/TABLET SAME */
    lg:grid lg:grid-cols-5 lg:gap-5
  "
        >
          {industries.map((industry, index) => (
            <Card
              key={index}
              onMouseEnter={() => setActiveIndustry(index)} // 🖥 hover (desktop)
              onClick={() => setActiveIndustry(index)} // 📱 click (mobile)
              className={`cursor-pointer transition-all ${
                activeIndustry === index
                  ? "border-primary bg-primary/5 shadow-md"
                  : "border-border hover:border-primary/40"
              }`}
            >
              <CardContent className="p-3 sm:p-4 max-md:p-2 text-center">
                {/* Icon */}
                <div
                  className={`mx-auto w-10 h-10 flex items-center justify-center rounded-full transition ${
                    activeIndustry === index
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  <industry.icon className="h-6 w-6 max-md:h-5 max-md:w-5" />
                </div>

                {/* Text — desktop only */}
                <div className="hidden lg:block mt-2">
                  <div className="text-sm font-semibold">{industry.title}</div>
                  <div className="text-xs text-muted-foreground">
                    {industry.subtitle}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Details */}
        <div className="flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndustry}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="h-full"
            >
              <Card className="h-full border border-border rounded-xl">
                <CardContent className="p-6 h-full overflow-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left */}
                    <div className="space-y-5">
                      <h3 className="text-lg font-semibold">
                        {industries[activeIndustry].title}
                      </h3>

                      <p className="text-sm text-muted-foreground">
                        {industries[activeIndustry].description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {industries[activeIndustry].features.map((f, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-sm"
                          >
                            <span className="w-2 h-2 bg-primary rounded-full" />
                            {f}
                          </div>
                        ))}
                      </div>

                      <Button className="bg-gradient-to-r from-blue-500 to-cyan-500">
                        View Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>

                    {/* Right */}
                    <div className="space-y-4">
                      <h4 className="text-base font-semibold text-center">
                        Proven Results
                      </h4>

                      {[
                        {
                          icon: TrendingUp,
                          label: "Cost Reduction",
                          value: industries[activeIndustry].benefits.cost,
                        },
                        {
                          icon: Clock,
                          label: "Efficiency Gain",
                          value: industries[activeIndustry].benefits.efficiency,
                        },
                        {
                          icon: Shield,
                          label: "Compliance",
                          value: industries[activeIndustry].benefits.compliance,
                        },
                      ].map((stat, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-4 border border-border rounded-lg p-3"
                        >
                          <stat.icon className="h-5 w-5 text-primary" />
                          <div className="flex-1 text-sm">{stat.label}</div>
                          <div className="text-base font-semibold">
                            {stat.value}
                          </div>
                        </div>
                      ))}

                      <div className="p-4 border border-border rounded-lg text-center">
                        <Users className="h-6 w-6 mx-auto text-primary mb-1" />
                        <div className="text-sm font-medium">
                          Trusted by 500+ enterprises
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
