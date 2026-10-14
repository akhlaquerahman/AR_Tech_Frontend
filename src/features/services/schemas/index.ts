import { z } from "zod";

export const serviceFilterSchema = z.object({
  activeOnly: z.boolean().optional().default(true),
});

export type ServiceFilterInput = z.infer<typeof serviceFilterSchema>;
