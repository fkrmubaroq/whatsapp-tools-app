"use client";

import {
  CampaignContext,
  CampaignProvider,
} from "@/src/features/whatsapp-link/context/campaingn-context";

import { AlertCircle, CheckCircle2 } from "lucide-react";
import { CardMessageSetup } from "@/src/features/whatsapp-link/components/card-message-setup";
import { CardFeatureTabs } from "@/src/features/whatsapp-link/components/card-feature-tabs";

export default function Create() {
  return (
    <CampaignProvider>
      <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
        {/* Local Toast Consumer */}
        <CampaignContext.Consumer>
          {(context) =>
            context?.toastMessage && (
              <div
                className={`fixed top-20 right-4 p-4 rounded-md shadow-lg z-50 flex items-center gap-2 text-white animate-bounce ${context.toastMessage.type === "error" ? "bg-red-500" : "bg-slate-800"}`}
              >
                {context.toastMessage.type === "error" ? (
                  <AlertCircle size={20} />
                ) : (
                  <CheckCircle2 size={20} />
                )}
                {context.toastMessage.text}
              </div>
            )
          }
        </CampaignContext.Consumer>

        <main className="flex-grow max-w-6xl mx-auto w-full p-4 lg:p-6 mt-2">
          {/* Layout Structure: CardMessageSetup and CardFeatureTabs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7">
              <CardMessageSetup />
            </div>
            <div className="lg:col-span-5 h-full">
              <CardFeatureTabs />
            </div>
          </div>
        </main>
      </div>
    </CampaignProvider>
  );
}
