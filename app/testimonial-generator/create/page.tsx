"use client";
import * as htmlToImage from "html-to-image";
import {
  BatteryFull,
  Camera,
  CameraIcon,
  CheckCircle,
  ChevronLeft,
  Download,
  ImageIcon,
  MessageCircle,
  MicIcon,
  Plus,
  PlusIcon,
  Settings,
  Signal,
  Trash2,
  Wifi,
} from "lucide-react";
import { useRef, useState } from "react";
import WaGeneratorHeader from "./components/wa-generator-header";
import WAMessageBubble from "./components/wa-message-bubble";
import WaFooterInput from "./components/wa-footer-input";
import WAControlPanel from "./components/wa-control-panel";
import WAGeneratorHeader from "./components/wa-generator-header";

export type MessageType = "received" | "sent";

export interface Message {
  id: number;
  type: MessageType;
  text: string;
  time: string;
  isRead: boolean;
  imageUrl?: string | null;
}

export default function Create() {
  const chatRef = useRef<HTMLDivElement>(null);

  const [contactName, setContactName] = useState("Pelanggan Baru");
  const [statusText, setStatusText] = useState("online");
  const [avatarUrl, setAvatarUrl] = useState(
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
  );
  const [chatBackground, setChatBackground] = useState(
    "/default-background-chat.png",
  );

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "received",
      text: "Halo min, mau kasih testi nih buat produk yang kemaren 😍",
      time: "10:00",
      isRead: false,
    },
    {
      id: 2,
      type: "received",
      text: "Barangnya ori dan pengirimannya cepet banget. Puas belanja di sini!",
      time: "10:01",
      isRead: false,
    },
    {
      id: 3,
      type: "sent",
      text: "Wah, terima kasih banyak kak atas kepercayaannya! 🙏",
      time: "10:05",
      isRead: true,
    },
  ]);

  const [activeMessageId, setActiveMessageId] = useState<number | null>(null);
  const [isMobilePanelOpen, setIsMobilePanelOpen] = useState(false);

  const handleAvatarClick = () => {
    const uploadInput = document.getElementById("avatar-upload");
    if (uploadInput) uploadInput.click();
  };

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatarUrl(URL.createObjectURL(file));
    }
  };

  const handleBackgroundUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setChatBackground(URL.createObjectURL(file));
    }
  };

  const addMessage = (type: MessageType) => {
    const now = new Date();
    const timeString = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;
    setMessages([
      ...messages,
      {
        id: Date.now(),
        type: type,
        text: "Pesan baru...",
        time: timeString,
        isRead: type === "sent",
      },
    ]);
  };

  const addImageMessage = (
    type: MessageType,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    const now = new Date();
    const timeString = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;

    setMessages([
      ...messages,
      {
        id: Date.now(),
        type: type,
        text: "Caption gambar",
        time: timeString,
        imageUrl: url,
        isRead: type === "sent",
      },
    ]);
  };

  const updateMessage = (
    id: number,
    field: keyof Message,
    value: string | boolean | null,
  ) => {
    setMessages(
      messages.map((msg) => (msg.id === id ? { ...msg, [field]: value } : msg)),
    );
  };

  const deleteMessage = (id: number) => {
    setMessages(messages.filter((msg) => msg.id !== id));
    setActiveMessageId(null);
  };

  const toggleReadStatus = (id: number) => {
    setMessages(
      messages.map((msg) =>
        msg.id === id && msg.type === "sent"
          ? { ...msg, isRead: !msg.isRead }
          : msg,
      ),
    );
  };
  const handleExport = () => {
    if (!chatRef.current) return;
    htmlToImage
      .toPng(chatRef.current)
      .then((dataUrl) => {
        const a = document.createElement("a");
        a.href = dataUrl;
        a.download = "image.png";
        a.click();
        setIsMobilePanelOpen(false);
      })
      .catch((err) => {
        console.error("oops, something went wrong!", err);
      });
  };

  return (
    <section className=" py-4 lg:py-12 px-4 md:px-6 bg-[#E5DDD5] min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <div
              ref={chatRef}
              className="bg-[#E5DDD5] h-[calc(100vh-50px)] md:h-[700px] w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border border-gray-300 relative flex flex-col font-sans"
            >
              <div className="bg-[#075E54] text-white flex justify-between items-center px-4 py-1.5 text-[11px] font-medium z-20">
                <div>9:41</div>
                <div className="flex gap-1.5 items-center">
                  <Signal size={12} strokeWidth={3} />
                  <Wifi size={12} strokeWidth={3} />
                  <BatteryFull size={14} strokeWidth={2} />
                </div>
              </div>

              <WAGeneratorHeader
                avatarUrl={avatarUrl}
                handleAvatarClick={handleAvatarClick}
                handleAvatarUpload={handleAvatarUpload}
                contactName={contactName}
                setContactName={setContactName}
                statusText={statusText}
                setStatusText={setStatusText}
              />

              <div
                className="flex-1 p-4 bg-cover overflow-y-auto flex flex-col gap-1.5"
                onClick={() => setActiveMessageId(null)}
                style={{ backgroundImage: `url(${chatBackground})` }}
              >
                <div className="flex justify-center mb-2">
                  <span className="bg-[#E1F3FB] text-[#4A5E68] text-[11px] px-3 py-1 rounded-lg uppercase tracking-wide shadow-sm">
                    Hari Ini
                  </span>
                </div>

                {messages.map((msg, index) => (
                  <WAMessageBubble
                    key={msg.id}
                    msg={msg}
                    isPrevSameType={
                      index > 0 && messages[index - 1].type === msg.type
                    }
                    isActive={activeMessageId === msg.id}
                    setActiveMessageId={setActiveMessageId}
                    deleteMessage={deleteMessage}
                    toggleReadStatus={toggleReadStatus}
                    updateMessage={updateMessage}
                  />
                ))}
              </div>

              <WaFooterInput />
            </div>
          </div>

          <WAControlPanel
            addMessage={addMessage}
            addImageMessage={addImageMessage}
            handleExport={handleExport}
            isOpen={isMobilePanelOpen}
            onClose={() => setIsMobilePanelOpen(false)}
            contactName={contactName}
            setContactName={setContactName}
            statusText={statusText}
            setStatusText={setStatusText}
            avatarUrl={avatarUrl}
            handleAvatarUpload={handleAvatarUpload}
            chatBackground={chatBackground}
            handleBackgroundUpload={handleBackgroundUpload}
          />
        </div>
      </div>

      <button
        onClick={() => setIsMobilePanelOpen(true)}
        className="fixed bottom-6 right-6 z-50 lg:hidden w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#128C7E] transition-colors"
      >
        <Settings size={24} />
      </button>
    </section>
  );
}
