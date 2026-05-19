import { STORAGE_KEYS } from "@/src/app/testimonial-generator/variables/constant";
import { CampaignFormValues } from "../context/campaign-schema";

export const loadData = (): Partial<CampaignFormValues> => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.WhatsappLinkMarketingData);
    if (data) return JSON.parse(data);
  } catch (e) {
    console.error("Failed to load data", e);
  }
  return { messageTemplate: "", linkToShare: "", contacts: [] };
};
