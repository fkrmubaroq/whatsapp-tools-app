import { useFieldArray, useFormContext } from "react-hook-form";
import { CampaignFormValues } from "../context/campaign-schema";
import { useCampaignContext } from "../context/campaingn-context";
import { useState } from "react";
import { generateId } from "../helpers/generate-id";
import {
  Download,
  LinkIcon,
  MessageSquare,
  Plus,
  Save,
  Send,
  Trash2,
} from "lucide-react";
import { exportToCSV } from "../helpers/export-to-csv";

export const CardMessageSetup = () => {
  const { register, control, getValues } = useFormContext<CampaignFormValues>();
  const { fields, append, remove, update } = useFieldArray({
    control,
    name: "contacts",
  });
  const { showToast, sendWhatsApp, sendAllPending } = useCampaignContext();

  const [activeTab, setActiveTab] = useState<"single" | "bulk">("single");
  const [newPhone, setNewPhone] = useState("");
  const [newName, setNewName] = useState("");
  const [bulkInput, setBulkInput] = useState("");
  const [confirmClear, setConfirmClear] = useState(false);

  const handleAddSingle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPhone) return;

    const phone = newPhone;
    if (phone.length < 8) {
      showToast("Invalid phone number length", "error");
      return;
    }

    append({ id: generateId(), phone, name: newName, status: "pending" });
    setNewPhone("");
    setNewName("");
    showToast("Contact added!");
  };

  const processBulkInput = () => {
    if (!bulkInput.trim()) return;
    const lines = bulkInput.split("\n");
    let addedCount = 0;

    lines.forEach((line) => {
      const parts = line.split(",");
      if (parts[0] && parts[0].trim()) {
        const phone = parts[0].trim();
        if (phone.length >= 8) {
          append({
            id: generateId(),
            phone,
            name: parts[1] ? parts[1].trim() : "",
            status: "pending",
          });
          addedCount++;
        }
      }
    });

    if (addedCount > 0) {
      setBulkInput("");
      showToast(`Added ${addedCount} contacts!`);
    } else {
      showToast("No valid contacts found.", "error");
    }
  };

  const handleSend = (index: number) => {
    const contact = fields[index];
    sendWhatsApp(contact, index);
    update(index, { ...contact, status: "sent", timestamp: Date.now() });
  };

  const handleClearAll = () => {
    if (confirmClear) {
      // Clear array by removing all items from last to first
      for (let i = fields.length - 1; i >= 0; i--) {
        remove(i);
      }
      setConfirmClear(false);
      showToast("All contacts cleared");
    } else {
      setConfirmClear(true);
      setTimeout(() => setConfirmClear(false), 3000);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col h-full overflow-hidden">
      {/* 1. Message Template Section */}
      <div className="p-6 border-b border-slate-100">
        <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
          <MessageSquare className="text-green-600" /> Message Configuration
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Target Link (Optional)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <LinkIcon size={16} className="text-slate-400" />
              </div>
              <input
                {...register("linkToShare")}
                type="url"
                placeholder="https://yourwebsite.com/promo"
                className="pl-10 w-full border border-slate-300 rounded-lg p-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Message Template
            </label>
            <p className="text-xs text-slate-500 mb-2">
              Use{" "}
              <code className="bg-slate-100 px-1 rounded">{"{{name}}"}</code> to
              insert contact's name.
            </p>
            <textarea
              {...register("messageTemplate")}
              placeholder="Hi {{name}}, check out our new promotion! \nGrab it fast!"
              rows={3}
              className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all outline-none resize-y"
            />
          </div>
        </div>
      </div>

      {/* 2. Add Contacts Form Section */}
      <div className="p-6 border-b border-slate-100 bg-slate-50">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Plus className="text-green-600" /> Add Contacts
          </h2>
          <div className="flex bg-slate-200/50 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab("single")}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${activeTab === "single" ? "bg-white shadow-sm text-slate-800" : "text-slate-500 hover:text-slate-700"}`}
            >
              Single
            </button>
            <button
              onClick={() => setActiveTab("bulk")}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${activeTab === "bulk" ? "bg-white shadow-sm text-slate-800" : "text-slate-500 hover:text-slate-700"}`}
            >
              Bulk Paste
            </button>
          </div>
        </div>

        {activeTab === "single" ? (
          <form
            onSubmit={handleAddSingle}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="text"
              value={newPhone}
              onChange={(e) => setNewPhone(e.target.value)}
              placeholder="Phone (e.g. 0812...)"
              className="flex-1 border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-green-500 outline-none text-sm"
              required
            />
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="Name (Optional)"
              className="flex-1 border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-green-500 outline-none text-sm"
            />
            <button
              type="submit"
              className="bg-slate-800 hover:bg-slate-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
            >
              <Plus size={16} /> Add
            </button>
          </form>
        ) : (
          <div className="flex flex-col gap-3">
            <p className="text-xs text-slate-500">
              Format: <code className="bg-slate-100 px-1">Phone, Name</code> (1
              per line). Ex: 08123456789, John
            </p>
            <textarea
              value={bulkInput}
              onChange={(e) => setBulkInput(e.target.value)}
              placeholder="08123456789, Budi&#10;08987654321, Andi"
              rows={3}
              className="w-full border border-slate-300 rounded-lg p-3 text-sm font-mono focus:ring-2 focus:ring-green-500 outline-none resize-y"
            />
            <button
              onClick={processBulkInput}
              className="bg-slate-800 hover:bg-slate-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors self-start"
            >
              Process Bulk Array
            </button>
          </div>
        )}
      </div>

      {/* 3. Contact List Section */}
      <div className="flex-grow flex flex-col min-h-[300px]">
        {/* Toolbar */}
        <div className="p-3 bg-slate-100 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-bold text-slate-600 bg-slate-200 px-2 py-1 rounded-full ml-2">
            {fields.length} Contacts
          </span>
          <div className="flex items-center gap-2 mr-2">
            <button
              onClick={() => exportToCSV(getValues("contacts"))}
              disabled={fields.length === 0}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded hover:bg-slate-50 disabled:opacity-50 transition-colors"
            >
              <Download size={14} /> Export
            </button>
            <button
              onClick={handleClearAll}
              disabled={fields.length === 0}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded transition-colors disabled:opacity-50 ${confirmClear ? "bg-red-600 text-white border-red-600" : "text-red-600 bg-white border border-red-200 hover:bg-red-50"}`}
            >
              <Trash2 size={14} /> {confirmClear ? "Click Confirm" : "Clear"}
            </button>
            <button
              onClick={sendAllPending}
              disabled={fields.filter((c) => c.status !== "sent").length === 0}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-green-600 rounded hover:bg-green-700 disabled:opacity-50 transition-colors"
            >
              <Send size={14} /> Send Batch
            </button>
          </div>
        </div>

        {/* Table List */}
        <div className="overflow-auto flex-grow bg-white max-h-[400px]">
          {fields.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-slate-400 p-8 text-center min-h-[200px]">
              <Save size={28} className="opacity-30 mb-2" />
              <p className="font-medium text-slate-500 text-sm">
                No contacts added yet
              </p>
            </div>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 sticky top-0 shadow-sm z-10">
                <tr>
                  <th className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase">
                    Contact
                  </th>
                  <th className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase">
                    Status
                  </th>
                  <th className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {fields.map((contact, index) => (
                  <tr key={contact.id} className="hover:bg-slate-50 group">
                    <td className="px-4 py-2">
                      <div className="flex flex-col">
                        <span className="font-medium text-sm text-slate-800">
                          {contact.phone}
                        </span>
                        {contact.name && (
                          <span className="text-[11px] text-slate-500">
                            {contact.name}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-2">
                      <span
                        className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium ${contact.status === "sent" ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"}`}
                      >
                        {contact.status === "sent" ? "Sent" : "Pending"}
                      </span>
                    </td>
                    <td className="px-4 py-2 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() => handleSend(index)}
                          className="p-1.5 text-green-600 hover:bg-green-100 rounded-md transition-colors"
                        >
                          <Send size={14} />
                        </button>
                        <button
                          onClick={() => remove(index)}
                          className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};
