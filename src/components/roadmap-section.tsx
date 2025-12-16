"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Route,
  Database,
  Leaf,
  Wrench,
  ArrowRight,
  CheckCircle,
  Clock,
  Sparkles,
  Calendar,
} from "lucide-react";

export function RoadmapSection() {
  const roadmapItems = [
    {
      quarter: "Q1 2025",
      title: "AI Route Optimization",
      description:
        "Advanced machine learning algorithms for dynamic route planning with real-time traffic, weather, and delivery window optimization.",
      icon: Route,
      status: "in-progress",
      features: [
        "Dynamic route planning",
        "Traffic pattern analysis",
        "Weather integration",
        "Delivery window optimization",
      ],
      impact: "25% reduction in travel time",
    },
    {
      quarter: "Q2 2025",
      title: "ERP Integrations",
      description:
        "Seamless connectivity with major ERP systems including SAP, Oracle, and Tally for unified business operations.",
      icon: Database,
      status: "planned",
      features: [
        "SAP integration",
        "Oracle connectivity",
        "Tally synchronization",
        "Custom API endpoints",
      ],
      impact: "100% data synchronization",
    },
    {
      quarter: "Q3 2025",
      title: "Carbon Footprint Tracking",
      description:
        "Comprehensive environmental impact monitoring with carbon emission tracking and sustainability reporting.",
      icon: Leaf,
      status: "planned",
      features: [
        "Emission calculations",
        "Sustainability reports",
        "Green route suggestions",
        "Carbon offset tracking",
      ],
      impact: "20% emission reduction",
    },
    {
      quarter: "Q4 2025",
      title: "Predictive Vehicle Maintenance",
      description:
        "Powered predictive maintenance system to prevent breakdowns and optimize vehicle lifecycle management.",
      icon: Wrench,
      status: "planned",
      features: [
        "Predictive diagnostics",
        "Maintenance scheduling",
        "Parts inventory",
        "Downtime prevention",
      ],
      impact: "40% maintenance cost savings",
    },
  ];

  const getStatusInfo = (status: string, index: number) => {
    const colors = [
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-cyan-500",
    ];
    switch (status) {
      case "completed":
        return {
          color: "text-success",
          bgColor: colors[index % colors.length],
          label: "Completed",
          icon: CheckCircle,
        };
      case "in-progress":
        return {
          color: "text-primary",
          bgColor: colors[index % colors.length],
          label: "In Progress",
          icon: Sparkles,
        };
      default:
        return {
          color: "text-muted-foreground",
          bgColor: colors[index % colors.length],
          label: "Planned",
          icon: Clock,
        };
    }
  };

  return (
    <section
      id="roadmap"
      className="py-16 sm:py-3 md:py-7 bg-background-secondary scroll-mt-[60px]"
    >
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-2 md:mb-3 animate-fade-in">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-warning/10 border border-warning/20 text-warning text-sm font-medium mb-3 sm:mb-4">
            <Calendar className="h-4 w-4 mr-1.5" />
            Product Roadmap 2025+
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4 md:mb-6 leading-tight">
            The Future of{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              AI Logistics
            </span>{" "}
            is Here
          </h2>
        </div>

        {/* Timeline with curved connectors */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 opacity-20 rounded-full"></div>

          <div className="space-y-12">
            {roadmapItems.map((item, index) => {
              const statusInfo = getStatusInfo(item.status, index);
              const StatusIcon = statusInfo.icon;
              const isEven = index % 2 === 0;
              const nextItem = roadmapItems[index + 1];

              return (
                <div
                  key={index}
                  className="relative flex flex-col lg:flex-row items-start lg:items-center animate-scale-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline Node */}
                  <div className="absolute lg:block left-1/2 transform -translate-x-1/2 z-10">
                    <div
                      className={`${statusInfo.bgColor} p-4 rounded-full shadow-lg border-4 border-background flex items-center justify-center`}
                    >
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  {/* Curved connector */}
                  {nextItem && (
                    <svg
                      className="hidden lg:block absolute top-12 left-1/2 transform -translate-x-1/2"
                      width="2"
                      height="120"
                    >
                      <path
                        d="M1 0 C1 40, 1 80, 1 120"
                        stroke="url(#grad)"
                        strokeWidth="2"
                        fill="transparent"
                      />
                      <defs>
                        <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                      </defs>
                    </svg>
                  )}

                  {/* Content Card */}
                  <div
                    className={`w-full lg:w-5/12 mt-10 lg:mt-0 ${
                      isEven ? "lg:mr-auto lg:pr-12" : "lg:ml-auto lg:pl-12"
                    }`}
                  >
                    <Card className="group hover:shadow-glow transition-all duration-300 border-border/50 hover:border-primary/50">
                      <CardContent className="p-6 sm:p-8">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6">
                          <div className="flex items-center space-x-3 mb-2 sm:mb-0">
                            <div
                              className="lg:hidden p-3 rounded-full"
                              style={{
                                backgroundColor: statusInfo.bgColor.replace(
                                  "bg-",
                                  ""
                                ),
                              }}
                            >
                              <item.icon className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <div className="text-sm sm:text-base text-primary font-medium">
                                {item.quarter}
                              </div>
                              <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                {item.title}
                              </h3>
                            </div>
                          </div>
                          <div
                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                              item.status === "completed"
                                ? "bg-success/10 text-success"
                                : item.status === "in-progress"
                                ? "bg-primary/10 text-primary"
                                : "bg-muted text-muted-foreground"
                            }`}
                          >
                            <StatusIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                            {statusInfo.label}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                          {item.description}
                        </p>

                        {/* Features */}
                        <div className="mb-4 sm:mb-6">
                          <h4 className="font-semibold text-foreground text-sm sm:text-base mb-2 sm:mb-3">
                            Key Features:
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                            {item.features.map((feature, idx) => (
                              <div
                                key={idx}
                                className="flex items-center space-x-2"
                              >
                                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                <span className="text-xs sm:text-sm text-muted-foreground">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Impact */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                          <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                            <div className="text-xs sm:text-sm text-muted-foreground">
                              Expected Impact:
                            </div>
                            <div className="text-sm font-semibold text-success">
                              {item.impact}
                            </div>
                          </div>
                          {item.status === "in-progress" && (
                            <div className="flex items-center space-x-1 text-primary text-xs sm:text-sm">
                              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                              <span>In Development</span>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
