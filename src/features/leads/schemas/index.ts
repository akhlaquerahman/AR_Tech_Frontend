import { z } from "zod";

export const leadFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be under 100 characters"),
  email: z.string().email("Please provide a valid email address"),
  company: z.string().max(100).optional(),
  phone: z.string().max(20).optional(),
  serviceInterest: z.string().min(2, "Please select a service interest"),
  budgetRange: z.string().optional(),
  timeline: z.string().optional(),
  message: z
    .string()
    .min(10, "Please provide at least 10 characters detailing your project")
    .max(2000, "Message must be under 2000 characters"),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;
