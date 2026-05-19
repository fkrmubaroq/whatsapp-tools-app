import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { CampaignFormValues, campaignSchema, Contact } from "./campaign-schema";
import { loadData } from "../helpers/load-data-storage";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { saveData } from "../helpers/save-data";

interface CampaignContextType {
  toastMessage: { text: string; type: "success" | "error" } | null;
  showToast: (text: string, type?: "success" | "error") => void;
  sendWhatsApp: (contact: Contact, index: number) => void;
  sendAllPending: () => void;
}

export const CampaignContext = createContext<CampaignContextType | undefined>(
  undefined,
);

export const useCampaignContext = () => {
  const context = useContext(CampaignContext);
  if (!context)
    throw new Error(
      "useCampaignContext must be used within a CampaignProvider",
    );
  return context;
};

export const CampaignProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [toastMessage, setToastMessage] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);

  const savedData = loadData();
  const methods = useForm<CampaignFormValues>({
    resolver: zodResolver(campaignSchema),
    defaultValues: {
      messageTemplate: savedData.messageTemplate || "",
      linkToShare: savedData.linkToShare || "",
      contacts: savedData.contacts || [],
    },
  });

  // Auto-save form changes
  useEffect(() => {
    const subscription = methods.watch((value) => {
      saveData(value as CampaignFormValues);
    });
    return () => subscription.unsubscribe();
  }, [methods.watch]);

  const showToast = useCallback(
    (text: string, type: "success" | "error" = "success") => {
      setToastMessage({ text, type });
      setTimeout(() => setToastMessage(null), 3000);
    },
    [],
  );

  const sendWhatsApp = useCallback(
    (contact: Contact, index: number) => {
      const template = methods.getValues("messageTemplate");
      const link = methods.getValues("linkToShare");

      let finalMessage = template.replace(
        /\{\{name\}\}/gi,
        contact.name || "Friend",
      );
      if (link && !finalMessage.includes(link)) {
        finalMessage += `\n\n${link}`;
      }

      const encodedMessage = encodeURIComponent(finalMessage);
      const waUrl = `https://wa.me/${contact.phone}?text=${encodedMessage}`;

      window.open(waUrl, "_blank");
    },
    [methods],
  );

  const sendAllPending = useCallback(() => {
    const contacts = methods.getValues("contacts");
    const pendingContacts = contacts
      .map((c, i) => ({ ...c, index: i }))
      .filter((c) => c.status !== "sent");

    if (pendingContacts.length === 0) {
      showToast("No pending messages to send.", "error");
      return;
    }

    showToast("Opening first 5 pending messages...", "success");
    const toSend = pendingContacts.slice(0, 5);

    toSend.forEach((contact, idx) => {
      setTimeout(() => {
        sendWhatsApp(contact, contact.index);
      }, idx * 1000);
    });
  }, [methods, showToast, sendWhatsApp]);

  return (
    <CampaignContext.Provider
      value={{ toastMessage, showToast, sendWhatsApp, sendAllPending }}
    >
      <FormProvider {...methods}>{children}</FormProvider>
    </CampaignContext.Provider>
  );
};
