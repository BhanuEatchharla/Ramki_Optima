"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { DemoModal } from "@/components/demo-modal";
import { useToast } from "@/hooks/use-toast";
import {
  Rocket,
  Phone,
  Building,
  Users,
  CheckCircle,
  Sparkles,
  Star,
} from "lucide-react";

// --- constants ---
const INDUSTRIES = [
  "cement",
  "steel",
  "fmcg",
  "automotive",
  "chemicals",
  "textiles",
  "other",
] as const;

const FLEET_SIZES = ["1-10", "11-50", "51-100", "100+"] as const;

// --- Zod schema ---
// const schema = z.object({
//   name: z.string().trim().min(2, "Name must be at least 2 characters"),
//   email: z
//     .string()
//     .trim()
//     .toLowerCase()
//     .email("Please enter a valid email address"),
//   company: z.string().trim().min(2, "Company name must be at least 2 characters"),
//   industry: z.enum(INDUSTRIES, { required_error: "Please select an industry" }),
//   fleetSize: z.enum(FLEET_SIZES, { required_error: "Please select fleet size" }),
//   message: z.string().trim().optional(),
// });

const schema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters"),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Please enter a valid email address"),
  company: z
    .string()
    .trim()
    .min(2, "Company name must be at least 2 characters"),

  industry: z.enum(INDUSTRIES).refine((v) => !!v, {
    message: "Please select an industry",
  }),

  fleetSize: z.enum(FLEET_SIZES).refine((v) => !!v, {
    message: "Please select fleet size",
  }),

  message: z.string().trim().optional(),
});

type FormData = z.infer<typeof schema>;
type FormErrors = Partial<Record<keyof FormData, string>>;

export default function CTASection() {
  const router = useRouter();
  const { toast } = useToast();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [industry, setIndustry] = useState<string | undefined>(undefined);
  const [fleetSize, setFleetSize] = useState<string | undefined>(undefined);
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const resetForm = () => {
    setName("");
    setEmail("");
    setCompany("");
    setIndustry(undefined);
    setFleetSize(undefined);
    setMessage("");
    setErrors({});
  };

  

  function validate(payload: Partial<FormData>): payload is FormData {
    const result = schema.safeParse(payload);
    if (result.success) {
      setErrors({});
      return true;
    }
    const flat = result.error.flatten();
    const nextErrors: FormErrors = {};
    for (const key of Object.keys(flat.fieldErrors) as (keyof FormData)[]) {
      const msgs = flat.fieldErrors[key];
      if (msgs && msgs.length) nextErrors[key] = msgs[0]!;
    }
    setErrors(nextErrors);
    return false;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const payload: Partial<FormData> = {
      name,
      email,
      company,
      industry: industry as FormData["industry"] | undefined,
      fleetSize: fleetSize as FormData["fleetSize"] | undefined,
      message,
    };

    if (!validate(payload)) {
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const text = await res.text();
      const data = text ? JSON.parse(text) : {};

      if (!res.ok) {
        throw new Error(data.error || "Request failed");
      }

      setShowSuccess(true);
      toast({
        title: "Thanks! We'll be in touch.",
        description: "Your request has been recorded.",
      });
      router.refresh();
      resetForm();
    } catch (err) {
      console.error("Submit error:", err);
      toast({
        title: "Submission failed",
        description: "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const onField = {
    name: (v: string) => {
      setName(v);
      if (errors.name) setErrors((e) => ({ ...e, name: undefined }));
    },
    email: (v: string) => {
      setEmail(v);
      if (errors.email) setErrors((e) => ({ ...e, email: undefined }));
    },
    company: (v: string) => {
      setCompany(v);
      if (errors.company) setErrors((e) => ({ ...e, company: undefined }));
    },
    industry: (v: string) => {
      setIndustry(v);
      if (errors.industry) setErrors((e) => ({ ...e, industry: undefined }));
    },
    fleetSize: (v: string) => {
      setFleetSize(v);
      if (errors.fleetSize) setErrors((e) => ({ ...e, fleetSize: undefined }));
    },
    message: (v: string) => {
      setMessage(v);
      if (errors.message) setErrors((e) => ({ ...e, message: undefined }));
    },
  };

  return (
    <section className="relative py-12 md:py-16 lg:py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-primary text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              Powered Fleet Assistant
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-snug">
              Transform your logistics with{" "}
              <span className="text-primary">OPTIMA</span>
            </h2>

            <ul className="space-y-3 text-muted-foreground">
              {[
                "Real-time tracking, geofencing & driver insights",
                "Predictive maintenance & fuel analytics",
                "Beautiful dashboards your team will love",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-primary" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                className="bg-gradient-to-r from-blue-500 to-cyan-500 w-full sm:w-auto flex items-center justify-center gap-2"
                onClick={() => setIsDemoModalOpen(true)}
              >
                <Rocket className="h-4 w-4" /> Request a Live Demo
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <Phone className="h-4 w-4" /> Talk to Sales
              </Button>
            </div>
          </div>

          {/* Right Form */}
          <Card className="border-primary/10 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-6">
                <Building className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-lg">Get a tailored plan</h3>
              </div>

              {showSuccess ? (
                <div className="flex flex-col items-center justify-center gap-3 py-6 text-center">
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-success" />
                  </div>
                  <h4 className="text-lg font-semibold">
                    Thanks! We’ll be in touch.
                  </h4>
                  <p className="text-muted-foreground">
                    Our team will contact you with next steps.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4" noValidate>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1 relative">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => onField.name(e.target.value)}
                        placeholder="Enter your full name"
                        aria-invalid={!!errors.name}
                        aria-describedby={
                          errors.name ? "name-error" : undefined
                        }
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive absolute -bottom-5 left-0">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1 relative">
                      <Label htmlFor="email">Business Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => onField.email(e.target.value)}
                        placeholder="you@company.com"
                        aria-invalid={!!errors.email}
                        aria-describedby={
                          errors.email ? "email-error" : undefined
                        }
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive absolute -bottom-5 left-0">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1 relative">
                    <Label htmlFor="company">Company *</Label>
                    <Input
                      id="company"
                      value={company}
                      onChange={(e) => onField.company(e.target.value)}
                      placeholder="Your company name"
                      aria-invalid={!!errors.company}
                      aria-describedby={
                        errors.company ? "company-error" : undefined
                      }
                    />
                    {errors.company && (
                      <p className="text-sm text-destructive absolute -bottom-5 left-0">
                        {errors.company}
                      </p>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1 relative">
                      <Label>Industry *</Label>
                      <Select
                        value={industry}
                        onValueChange={(v) => onField.industry(v)}
                      >
                        <SelectTrigger
                          aria-invalid={!!errors.industry}
                          className="w-full"
                        >
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>

                        <SelectContent position="popper">
                          {INDUSTRIES.map((ind) => (
                            <SelectItem key={ind} value={ind}>
                              {ind.charAt(0).toUpperCase() + ind.slice(1)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-1 relative">
                      <Label>Fleet Size *</Label>
                      <Select
                        value={fleetSize}
                        onValueChange={(v) => onField.fleetSize(v)}
                      >
                        <SelectTrigger
                          aria-invalid={!!errors.fleetSize}
                          className="w-full"
                        >
                          <SelectValue placeholder="Select fleet size" />
                        </SelectTrigger>

                        <SelectContent position="popper">
                          {FLEET_SIZES.map((size) => (
                            <SelectItem key={size} value={size}>
                              {size}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-1 relative">
                    <Label htmlFor="message">Additional Requirements</Label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => onField.message(e.target.value)}
                      placeholder="Tell us about your logistics challenges..."
                      rows={3}
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90 transition-all duration-300 shadow-lg group flex items-center justify-center gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                        <span>Submitting...</span>
                      </div>
                    ) : (
                      <>
                        <Users className="h-4 w-4" /> Get Plan
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <DemoModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </section>
  );
}
