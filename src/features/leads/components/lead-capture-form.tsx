"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadFormSchema, LeadFormData } from "../schemas";
import { useSubmitLead } from "../hooks/use-submit-lead";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function LeadCaptureForm() {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const { mutateAsync, isPending, error } = useSubmitLead();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      phone: "",
      serviceInterest: "Custom Web Applications & SaaS",
      budgetRange: "$10k - $25k",
      timeline: "1-3 months",
      message: "",
    },
  });

  const onSubmit = async (data: LeadFormData) => {
    try {
      await mutateAsync(data);
      setSuccessMessage("Thank you! Your project inquiry has been received. Our team will review and reply within 24 hours.");
      reset();
    } catch {
      // Error handled by mutation state
    }
  };

  return (
    <div className="rounded-2xl glass-panel-glow p-8 max-w-2xl mx-auto">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-foreground">Initiate a Project Inquiry</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Tell us about your requirements, technical scope, and timeline.
        </p>
      </div>

      {successMessage ? (
        <div className="p-6 rounded-xl bg-primary/10 border border-primary/30 text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-primary mb-3" />
          <h4 className="text-lg font-semibold text-foreground">Enquiry Received</h4>
          <p className="text-sm text-muted-foreground mt-2">{successMessage}</p>
          <button
            onClick={() => setSuccessMessage(null)}
            className="mt-6 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Submit another inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {error && (
            <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/30 flex items-center text-sm text-destructive-foreground">
              <AlertCircle className="mr-2 h-4 w-4 text-destructive flex-shrink-0" />
              <span>{error instanceof Error ? error.message : "Failed to submit. Please try again."}</span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="lead-fullname" className="block text-xs font-semibold uppercase text-muted-foreground mb-1">
                Full Name *
              </label>
              <input
                id="lead-fullname"
                type="text"
                {...register("fullName")}
                className="w-full px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Alex Mercer"
              />
              {errors.fullName && <p className="text-xs text-red-400 mt-1">{errors.fullName.message}</p>}
            </div>

            <div>
              <label htmlFor="lead-email" className="block text-xs font-semibold uppercase text-muted-foreground mb-1">
                Work Email *
              </label>
              <input
                id="lead-email"
                type="email"
                {...register("email")}
                className="w-full px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="alex@company.com"
              />
              {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="lead-company" className="block text-xs font-semibold uppercase text-muted-foreground mb-1">
                Company / Organization
              </label>
              <input
                id="lead-company"
                type="text"
                {...register("company")}
                className="w-full px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Acme Corp"
              />
            </div>

            <div>
              <label htmlFor="lead-service" className="block text-xs font-semibold uppercase text-muted-foreground mb-1">
                Service of Interest *
              </label>
              <select
                id="lead-service"
                {...register("serviceInterest")}
                className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="Custom Web Applications & SaaS">Custom Web Applications & SaaS</option>
                <option value="AI Solutions & Intelligent Automation">AI Solutions & Intelligent Automation</option>
                <option value="Professional Business Websites">Professional Business Websites</option>
                <option value="UI/UX & Digital Product Design">UI/UX & Digital Product Design</option>
              </select>
              {errors.serviceInterest && <p className="text-xs text-red-400 mt-1">{errors.serviceInterest.message}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="lead-message" className="block text-xs font-semibold uppercase text-muted-foreground mb-1">
              Project Overview & Goals *
            </label>
            <textarea
              id="lead-message"
              rows={4}
              {...register("message")}
              className="w-full px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Tell us what you want to build, tech requirements, target timeline, etc."
            />
            {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full py-3.5 px-6 rounded-full bg-white text-neutral-950 font-bold text-sm hover:bg-neutral-200 transition-all flex items-center justify-center space-x-2 shadow-xl shadow-white/10 disabled:opacity-50"
          >
            {isPending ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin text-neutral-950" />
                <span>Transmitting Inquiry...</span>
              </>
            ) : (
              <>
                <span>Submit Project Inquiry</span>
                <Send className="h-4 w-4 text-neutral-950" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
