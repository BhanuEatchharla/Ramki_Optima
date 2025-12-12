"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import * as z from "zod";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
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
import { useToast } from "@/hooks/use-toast";
import { Rocket, CheckCircle, X } from "lucide-react";

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

// ✅ Minimal Zod schema (submit-time validation only)
const demoFormSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters"),
  email: z.string().trim().toLowerCase().email("Please enter a valid email address"),
  company: z.string().trim().min(2, "Company name must be at least 2 characters"),
  industry: z.enum(INDUSTRIES).refine((val) => val !== undefined, "Please select an industry"),
  fleetSize: z.enum(FLEET_SIZES).refine((val) => val !== undefined, "Please select fleet size"),
  message: z
    .string()
    .trim()
    .max(1000, "Message is too long")
    .optional()
    .or(z.literal("").transform(() => undefined)),
});

type DemoFormData = z.infer<typeof demoFormSchema>;

interface DemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DemoModal({ open, onOpenChange }: DemoModalProps) {
  // simple local state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [industry, setIndustry] = useState<string | undefined>(undefined);
  const [fleetSize, setFleetSize] = useState<string | undefined>(undefined);
  const [message, setMessage] = useState("");

  // submit state + success
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const successTimerRef = useRef<number | null>(null);

  // 🔴 field-level errors (from Zod)
  const [errors, setErrors] = useState<Partial<Record<keyof DemoFormData, string>>>({});

  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    return () => {
      if (successTimerRef.current) window.clearTimeout(successTimerRef.current);
    };
  }, []);

  const resetForm = () => {
    setName("");
    setEmail("");
    setCompany("");
    setIndustry(undefined);
    setFleetSize(undefined);
    setMessage("");
    setErrors({});
  };

  const handleOpenChange = (next: boolean) => {
    if (!next) {
      setShowSuccess(false);
      resetForm();
    }
    onOpenChange(next);
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({}); // clear previous

    // ✅ validate with Zod once on submit
    const parsed = demoFormSchema.safeParse({
      name,
      email,
      company,
      industry,
      fleetSize,
      message,
    });

    if (!parsed.success) {
      // map Zod issues -> field messages
      const fieldErrors: Partial<Record<keyof DemoFormData, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof DemoFormData;
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      // simulate async
      await new Promise((r) => setTimeout(r, 400));

      // eslint-disable-next-line no-console
      console.log("Demo modal submitted:", parsed.data);

      setShowSuccess(true);
      toast({
        title: "Request received",
        description: "We’ll reach out shortly to schedule your demo.",
      });

      router.refresh();

      successTimerRef.current = window.setTimeout(() => {
        handleOpenChange(false);
      }, 1200);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      toast({
        title: "Something went wrong",
        description: "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  // helper: adds invalid outline when a field has an error
  const invalidClass = (hasError?: boolean) =>
    hasError ? "ring-2 ring-destructive focus-visible:ring-destructive" : "";

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        className="sm:max-w-md backdrop-blur-md animate-scale-in"
        onEscapeKeyDown={() => handleOpenChange(false)}
      >
        <DialogHeader className="space-y-1">
          <DialogTitle className="flex items-center gap-2">
            <Rocket className="h-5 w-5 text-primary" />
            Request a Live Demo
          </DialogTitle>
        </DialogHeader>

        {showSuccess ? (
          <div className="flex flex-col items-center justify-center gap-3 py-6 text-center">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-success" />
            </div>
            <h3 className="text-lg font-semibold">Thank you!</h3>
            <p className="text-muted-foreground">
              We'll reach out shortly to schedule your demo.
            </p>
            <Button variant="ghost" onClick={() => handleOpenChange(false)}>
              <X className="mr-2 h-4 w-4" />
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4" noValidate>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={invalidClass(!!errors.name)}
                />
                {errors.name && (
                  <p id="name-error" className="text-sm text-destructive">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Business Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={invalidClass(!!errors.email)}
                />
                {errors.email && (
                  <p id="email-error" className="text-sm text-destructive">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company *</Label>
              <Input
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Your company name"
                aria-invalid={!!errors.company}
                aria-describedby={errors.company ? "company-error" : undefined}
                className={invalidClass(!!errors.company)}
              />
              {errors.company && (
                <p id="company-error" className="text-sm text-destructive">
                  {errors.company}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Industry *</Label>
                <Select
                  value={industry}
                  onValueChange={(v) => setIndustry(v)}
                >
                  <SelectTrigger aria-invalid={!!errors.industry} className={invalidClass(!!errors.industry)}>
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cement">Cement &amp; Construction</SelectItem>
                    <SelectItem value="steel">Steel &amp; Manufacturing</SelectItem>
                    <SelectItem value="fmcg">FMCG &amp; Consumer Goods</SelectItem>
                    <SelectItem value="automotive">Automotive</SelectItem>
                    <SelectItem value="chemicals">Chemicals</SelectItem>
                    <SelectItem value="textiles">Textiles &amp; Apparel</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.industry && (
                  <p className="text-sm text-destructive">{errors.industry}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label>Fleet Size *</Label>
                <Select
                  value={fleetSize}
                  onValueChange={(v) => setFleetSize(v)}
                >
                  <SelectTrigger aria-invalid={!!errors.fleetSize} className={invalidClass(!!errors.fleetSize)}>
                    <SelectValue placeholder="Select fleet size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">1-10 vehicles</SelectItem>
                    <SelectItem value="11-50">11-50 vehicles</SelectItem>
                    <SelectItem value="51-100">51-100 vehicles</SelectItem>
                    <SelectItem value="100+">100+ vehicles</SelectItem>
                  </SelectContent>
                </Select>
                {errors.fleetSize && (
                  <p className="text-sm text-destructive">{errors.fleetSize}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Additional Requirements</Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your logistics challenges..."
                rows={3}
                className="resize-none"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="text-sm text-destructive">
                  {errors.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-button hover:opacity-90 transition-all duration-300 shadow-glow"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                  <span>Submitting...</span>
                </div>
              ) : (
                <>
                  <Rocket className="mr-2 h-4 w-4" />
                  Request Demo
                </>
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
