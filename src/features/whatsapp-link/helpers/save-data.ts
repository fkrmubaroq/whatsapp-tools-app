import { STORAGE_KEYS } from "@/src/app/testimonial-generator/variables/constant";
import { CampaignFormValues } from "../context/campaign-schema";

export const saveData = (data: CampaignFormValues) => {
  try {
    localStorage.setItem(
      STORAGE_KEYS.WhatsappLinkMarketingData,
      JSON.stringify(data),
    );
  } catch (e) {
    console.error("Failed to save data", e);
  }
};
