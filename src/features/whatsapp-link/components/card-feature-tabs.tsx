import { useFormContext } from "react-hook-form";
import { CampaignFormValues } from "../context/campaign-schema";
import { useState } from "react";
import { QRCodeDisplay } from "./qrcode-display";
import { LinkPreviewSimulator } from "./link-preview-simulator";

export const CardFeatureTabs = () => {
  const { watch } = useFormContext<CampaignFormValues>();
  const [activeTab, setActiveTab] = useState<"preview" | "qr">("preview");

  // Watch form values to update preview in real-time
  const linkToShare = watch("linkToShare");
  const messageTemplate = watch("messageTemplate");

  return (
    <div className="bg-white top-8 rounded-xl shadow-sm border border-slate-200 overflow-hidden sticky ">
      <div className="flex border-b border-slate-200">
        <button
          className={`flex-1 py-3.5 text-sm font-medium transition-colors ${activeTab === "preview" ? "bg-green-50 text-green-700 border-b-2 border-green-600" : "text-slate-500 hover:bg-slate-50"}`}
          onClick={() => setActiveTab("preview")}
        >
          Message Preview
        </button>
        <button
          className={`flex-1 py-3.5 text-sm font-medium transition-colors ${activeTab === "qr" ? "bg-green-50 text-green-700 border-b-2 border-green-600" : "text-slate-500 hover:bg-slate-50"}`}
          onClick={() => setActiveTab("qr")}
        >
          QR Generator
        </button>
      </div>

      <div className="p-6 bg-slate-50/50 flex justify-center items-center min-h-[400px]">
        {activeTab === "qr" ? (
          <QRCodeDisplay value={linkToShare || ""} />
        ) : (
          <LinkPreviewSimulator
            link={linkToShare || ""}
            message={(messageTemplate || "").replace(
              /\{\{name\}\}/gi,
              "John Doe",
            )}
          />
        )}
      </div>
    </div>
  );
};
