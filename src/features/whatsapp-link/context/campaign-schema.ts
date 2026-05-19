import z from "zod";

export const contactSchema = z.object({
  id: z.string(),
  phone: z.string().min(8, "Phone number is too short"),
  name: z.string().optional(),
  status: z.enum(["pending", "sent", "failed"]).default("pending"),
  timestamp: z.number().optional(),
});

export const campaignSchema = z.object({
  messageTemplate: z.string(),
  linkToShare: z.string().optional(),
  contacts: z.array(contactSchema).default([]),
});

export type Contact = z.infer<typeof contactSchema>;
export type CampaignFormValues = z.infer<typeof campaignSchema>;
