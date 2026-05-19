import {
  Camera,
  Download,
  ImageIcon,
  MessageCircle,
  Plus,
  Settings,
  X,
} from "lucide-react";
import { MessageType } from "../page";
import { Input } from "@/src/components/shared/input";
import { Label } from "@/src/components/shared/label";

interface WAControlPanelProps {
  addMessage: (type: MessageType) => void;
  addImageMessage: (
    type: MessageType,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  handleExport: () => void;
  isOpen: boolean;
  onClose: () => void;
  contactName: string;
  setContactName: (name: string) => void;
  statusText: string;
  setStatusText: (status: string) => void;
  avatarUrl: string;
  handleAvatarUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  chatBackground: string;
  handleBackgroundUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const WAControlPanel = ({
  addMessage,
  addImageMessage,
  handleExport,
  isOpen,
  onClose,
  contactName,
  setContactName,
  statusText,
  setStatusText,
  avatarUrl,
  handleAvatarUpload,
  chatBackground,
  handleBackgroundUpload,
}: WAControlPanelProps) => {
  return (
    <>
      {/* Backdrop for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden transition-opacity"
          onClick={onClose}
        ></div>
      )}

      {/* Panel Container (Bottom sheet on mobile, sidebar on desktop) */}
      <div
        className={`
        fixed bottom-0 left-0 right-0 z-50 lg:static lg:z-auto
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-y-0" : "translate-y-full lg:translate-y-0"}
        w-full lg:w-1/2 bg-white lg:bg-transparent
        rounded-t-3xl lg:rounded-none shadow-2xl lg:shadow-none
        max-h-[85vh] lg:max-h-none overflow-y-auto lg:overflow-visible
      `}
      >
        <div className="bg-white p-6 lg:rounded-2xl lg:shadow-lg lg:border border-gray-100 lg:sticky lg:top-24">
          {/* Mobile Handle */}
          <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-6 lg:hidden"></div>

          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg text-gray-800 flex items-center gap-2">
              <Settings size={20} className="text-[#128C7E]" /> Control Panel
            </h3>
            <button
              onClick={onClose}
              className="lg:hidden text-gray-400 hover:text-gray-700 p-1 bg-gray-100 rounded-full"
            >
              <X size={20} />
            </button>
          </div>

          <div className="space-y-4">
            {/* Profile Settings Card */}
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <p className="text-sm font-medium text-gray-700 mb-3">
                Pengaturan Profil
              </p>
              <div className="flex gap-4 items-center">
                <div className="relative group flex-shrink-0">
                  <img
                    src={avatarUrl}
                    alt="Avatar"
                    className="w-14 h-14 bg-white rounded-full object-cover border border-gray-200"
                  />
                  <Label className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity">
                    <Camera size={16} color="white" />
                    <Input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleAvatarUpload}
                    />
                  </Label>
                </div>
                <div className="flex-1 space-y-2">
                  <Input
                    type="text"
                    value={contactName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setContactName(e.target.value)
                    }
                    placeholder="Nama Kontak"
                    className="w-full text-gray-500 text-sm py-1.5 px-3 h-auto border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#128C7E] focus:border-transparent outline-none bg-white"
                  />
                  <Input
                    type="text"
                    value={statusText}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setStatusText(e.target.value)
                    }
                    placeholder="Status (contoh: online)"
                    className="w-full text-gray-500 text-sm py-1.5 px-3 h-auto border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#128C7E] focus:border-transparent outline-none bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Chat Background Settings Card */}
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <p className="text-sm font-medium text-gray-700 mb-3">
                Background Chat
              </p>
              <div className="flex gap-4 items-center">
                <div
                  className="w-14 h-14 rounded-lg bg-cover bg-center border border-gray-200 flex-shrink-0"
                  style={{ backgroundImage: `url(${chatBackground})` }}
                ></div>
                <Label className="flex-1 py-2 px-3 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-1 cursor-pointer text-gray-700">
                  <Camera size={16} /> Ganti Background
                  <Input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleBackgroundUpload}
                  />
                </Label>
              </div>
            </div>

            {/* Add Messages */}
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <p className="text-sm font-medium text-gray-700 mb-3">
                Tambah Pesan (Teks)
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => addMessage("received")}
                  className="flex-1 text-gray-500 py-2 px-3 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-1"
                >
                  <Plus size={16} /> Kiri
                </button>
                <button
                  onClick={() => addMessage("sent")}
                  className="flex-1 py-2 px-3 bg-[#DCF8C6] border border-[#DCF8C6] rounded-lg text-sm font-medium hover:bg-[#cbf1ae] transition-colors flex items-center justify-center gap-1 text-[#075E54]"
                >
                  <Plus size={16} /> Kanan
                </button>
              </div>
            </div>

            {/* Add Images */}
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <p className="text-sm font-medium text-gray-700 mb-3">
                Tambah Pesan Gambar
              </p>
              <div className="flex gap-2">
                <Label className="flex-1 text-gray-500 py-2 px-3 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-1 cursor-pointer">
                  <ImageIcon size={16} /> Kiri
                  <Input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => addImageMessage("received", e)}
                  />
                </Label>
                <Label className="flex-1 py-2 px-3 bg-[#DCF8C6] border border-[#DCF8C6] rounded-lg text-sm font-medium hover:bg-[#cbf1ae] transition-colors flex items-center justify-center gap-1 cursor-pointer text-[#075E54]">
                  <ImageIcon size={16} /> Kanan
                  <Input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => addImageMessage("sent", e)}
                  />
                </Label>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={handleExport}
                className="w-full bg-[#128C7E] hover:bg-[#075E54] text-white py-3.5 rounded-xl font-bold text-lg transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <Download size={20} /> Export Gambar (PNG)
              </button>
              <p className="text-xs text-gray-500 text-center mt-3">
                Pastikan Anda telah mengklik area luar chat sebelum export agar
                ring seleksi hilang.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WAControlPanel;
