"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Truck,
  PackageCheck,
  Route,
  ArrowRight,
  CheckCircle,
  MapPin,
  Clock,
  Shield,
  Smartphone,
  Zap,
  FileCheck,
  BarChart3,
} from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      id: "ftl-dispatch",
      title: "FTL Dispatch",
      subtitle: "Full Truck Load Management",
      icon: Truck,
      description:
        "Complete automation from vehicle induction to dispatch optimization with Powered route planning and real-time tracking.",
      steps: [
        {
          icon: MapPin,
          title: "Vehicle Induction",
          desc: "Automated gate entry with RFID/QR scanning",
          status: "completed",
        },
        {
          icon: FileCheck,
          title: "Document Validation",
          desc: "Powered document verification and compliance check",
          status: "completed",
        },
        {
          icon: Route,
          title: "Route Optimization",
          desc: "Smart route planning based on traffic, weather, and delivery windows",
          status: "active",
        },
        {
          icon: Truck,
          title: "Dispatch Authorization",
          desc: "Automated dispatch with ERP integration and load confirmation",
          status: "pending",
        },
        {
          icon: BarChart3,
          title: "Performance Analytics",
          desc: "Real-time tracking and delivery performance metrics",
          status: "pending",
        },
      ],
      benefits: [
        "30% reduction in dispatch time",
        "Real-time visibility",
        "Automated compliance",
        "ERP integration",
      ],
    },
    {
      id: "ftl-arrival",
      title: "FTL Arrival",
      subtitle: "Intelligent Arrival Management",
      icon: PackageCheck,
      description:
        "Streamlined arrival processing with predictive scheduling, automated unloading coordination, and proof of delivery.",
      steps: [
        {
          icon: Clock,
          title: "Arrival Prediction",
          desc: "Powered ETA calculation with real-time updates",
          status: "completed",
        },
        {
          icon: MapPin,
          title: "Gate Check-in",
          desc: "Automated arrival registration and dock assignment",
          status: "completed",
        },
        {
          icon: PackageCheck,
          title: "Unloading Coordination",
          desc: "Optimized unloading sequence and resource allocation",
          status: "active",
        },
        {
          icon: FileCheck,
          title: "Quality Verification",
          desc: "Automated quality checks and damage assessment",
          status: "pending",
        },
        {
          icon: CheckCircle,
          title: "Proof of Delivery",
          desc: "Digital POD with signatures and photo documentation",
          status: "pending",
        },
      ],
      benefits: [
        "50% faster unloading",
        "Automated POD generation",
        "Quality tracking",
        "Reduced waiting time",
      ],
    },
    {
      id: "ptl-shipment",
      title: "PTL Shipment",
      subtitle: "Part Truck Load Optimization",
      icon: Route,
      description:
        "Maximize efficiency with consolidated shipments, multi-drop optimization, and intelligent load planning for partial loads.",
      steps: [
        {
          icon: BarChart3,
          title: "Load Consolidation",
          desc: "AI-driven cargo consolidation for maximum efficiency",
          status: "completed",
        },
        {
          icon: Route,
          title: "Multi-drop Planning",
          desc: "Optimal route sequencing for multiple destinations",
          status: "completed",
        },
        {
          icon: Truck,
          title: "Vehicle Assignment",
          desc: "Smart vehicle selection based on capacity and route",
          status: "active",
        },
        {
          icon: Shield,
          title: "Cargo Tracking",
          desc: "Individual shipment tracking within consolidated loads",
          status: "pending",
        },
        {
          icon: CheckCircle,
          title: "Multi-POD Management",
          desc: "Separate delivery confirmations for each drop",
          status: "pending",
        },
      ],
      benefits: [
        "40% better capacity utilization",
        "Reduced transportation costs",
        "Multi-destination tracking",
        "Flexible delivery options",
      ],
    },
  ];

  const [activeFeature, setActiveFeature] = useState("ftl-dispatch");

  const getStepStatus = (status: string) => {
    switch (status) {
      case "completed":
        return {
          color: "text-success",
          bgColor: "bg-success",
          icon: CheckCircle,
        };
      case "active":
        return { color: "text-primary", bgColor: "bg-primary", icon: Zap };
      default:
        return {
          color: "text-muted-foreground",
          bgColor: "bg-muted",
          icon: Clock,
        };
    }
  };

  return (
    <section
      id="features"
      className="py-4 bg-background-secondary scroll-mt-[60px]"
    >
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-4 animate-fade-in">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-3">
            <Zap className="h-4 w-4 mr-1.5" />
            Core Features
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-3xl font-bold ">
            Powerful{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Features
            </span>{" "}
            for Modern Logistics
          </h2>
        </div>

        {/* Tabs */}
        <div className="sticky top-0 z-50 bg-background-secondary py-2 ">
          <Tabs
            value={activeFeature}
            onValueChange={setActiveFeature}
            className="w-full"
          >
            {/* Tabs List */}
            <TabsList className="flex flex-wrap justify-center gap-2 md:gap-8 lg:gap-60 bg-card border border-border rounded-xl p-1 relative h-24 overflow-hidden">
              {/* Wave underline */}
              <div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-500 ease-in-out"
                style={{
                  width: `${100 / features.length}%`,
                  transform: `translateX(${
                    features.findIndex((f) => f.id === activeFeature) * 100
                  }%)`,
                }}
              />
              {features.map((feature) => (
                <TabsTrigger
  key={feature.id}
  value={feature.id}
  onMouseEnter={() => {
    // hover ONLY on desktop
    if (window.matchMedia("(min-width: 1024px)").matches) {
      setActiveFeature(feature.id);
    }
  }}
  className="
      flex flex-1 items-center justify-center gap-2
    px-4 py-2
    text-sm font-semibold
    rounded-lg
    transition-all

    /* 🔽 MOBILE ONLY */
    max-md:flex-1
    max-md:flex-col
    max-md:gap-1
    max-md:px-2
    max-md:py-2
    max-md:text-[11px]
  "
>
  <feature.icon
    className="
      h-5 w-5

      /* 🔽 MOBILE ONLY */
      max-md:mb-0.5
    "
  />
  <span
    className="
      leading-none

      /* 🔽 MOBILE ONLY */
      max-md:text-center
    "
  >
    {feature.title}
  </span>
</TabsTrigger>

              ))}
            </TabsList>

            {features.map((feature) => (
              <TabsContent key={feature.id} value={feature.id}>
                <Card className="border-primary/50 shadow-2xl bg-gradient-card mt-4 md:bg-gradient-to-r md:from-primary/5 md:to-cyan/5 md:shadow-lg">
                  <CardContent className="p-4 md:p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-8 items-start">
                      {/* Left */}
                      <div className="space-y-4 md:space-y-6">
                        <div className="flex items-center space-x-3 md:space-x-4">
                          <div className="p-3 bg-gradient-to-br from-primary/50 to-primary rounded-full shadow-glow flex items-center justify-center md:p-4">
                            <feature.icon className="h-8 w-8 md:h-7 md:w-7 text-primary-foreground" />
                          </div>
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold text-foreground">
                              {feature.title}
                            </h3>
                            <p className="text-sm md:text-base text-muted-foreground">
                              {feature.subtitle}
                            </p>
                          </div>
                        </div>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed md:leading-relaxed">
                          {feature.description}
                        </p>

                        <div>
                          <h4 className="font-semibold text-foreground mb-2">
                            Key Benefits:
                          </h4>
                          <div className="space-y-2">
                            {feature.benefits.map((benefit, idx) => (
                              <div
                                key={idx}
                                className="flex items-center space-x-2"
                              >
                                <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                                <span className="text-sm md:text-base text-muted-foreground">
                                  {benefit}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90 transition-all duration-300 shadow-lg mt-2 md:mt-4 flex items-center"
                        >
                          View Demo
                          <ArrowRight className="ml-1.5 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>

                      {/* Right */}
                      <div className="space-y-3 mt-6 md:mt-0">
                        <h4 className="text-lg md:text-xl font-bold text-center md:text-left mb-4 md:mb-6">
                          Powered Workflow
                        </h4>

                        <div className="relative pl-10 md:pl-0">
                          {/* Vertical line */}
                          <div className="absolute top-0 left-16 md:left-6 w-0.5 h-full bg-border md:bg-gradient-to-b md:from-primary/20 md:to-cyan/20"></div>

                          {feature.steps.map((step, index) => {
                            const statusInfo = getStepStatus(step.status);
                            const StatusIcon = statusInfo.icon;
                            return (
                              <div
                                key={index}
                                className="relative flex items-start space-x-4 md:space-x-5 mb-5 md:mb-6"
                              >
                                {/* Step Icon */}
                                <div className="flex-shrink-0 relative z-10 md:mr-3">
                                  <div
                                    className={`p-3 rounded-full ${statusInfo.bgColor} shadow-lg transition-transform duration-300 flex items-center justify-center md:p-3`}
                                  >
                                    <step.icon
                                      className={`h-6 w-6 ${
                                        step.status !== "pending"
                                          ? "text-white"
                                          : statusInfo.color
                                      }`}
                                    />
                                  </div>
                                </div>

                                {/* Step Content */}
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center space-x-1.5 mb-1">
                                    <h5 className="font-semibold text-foreground md:text-base">
                                      {step.title}
                                    </h5>
                                    <StatusIcon
                                      className={`h-3.5 w-3.5 md:h-4 md:w-4 ${statusInfo.color}`}
                                    />
                                  </div>
                                  <p className="text-sm md:text-sm text-muted-foreground leading-relaxed">
                                    {step.desc}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        {/* Mobile Dashboard Card */}
                        <Card className="border-border/50 bg-muted/30 mt-4 md:mt-6">
                          <CardContent className="p-4 text-center md:text-left">
                            <Smartphone className="h-8 w-8 text-primary mx-auto md:mx-0 mb-2" />
                            <h5 className="font-semibold text-foreground mb-1 md:text-base">
                              Mobile Dashboard
                            </h5>
                            <p className="text-sm md:text-sm text-muted-foreground">
                              Monitor and control all processes from anywhere
                              with our mobile app
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
