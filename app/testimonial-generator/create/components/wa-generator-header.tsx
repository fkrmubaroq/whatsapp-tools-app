import {
  MessageCircle,
  CheckCircle,
  ChevronRight,
  ImageIcon,
  Download,
  Trash2,
  Camera,
  Plus,
  ChevronLeft,
  BatteryFull,
  Wifi,
  Signal,
  Video,
  PhoneIcon,
} from "lucide-react";

interface WAGeneratorHeaderProps {
  avatarUrl: string;
  handleAvatarClick: () => void;
  handleAvatarUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  contactName: string;
  setContactName: (name: string) => void;
  statusText: string;
  setStatusText: (status: string) => void;
}

const WAGeneratorHeader = ({
  avatarUrl,
  handleAvatarClick,
  handleAvatarUpload,
  contactName,
  setContactName,
  statusText,
  setStatusText,
}: WAGeneratorHeaderProps) => (
  <div className="bg-[#075E54] px-4 py-2.5 flex items-center gap-3 text-white shadow-sm z-10">
    <ChevronLeft size={24} className="cursor-pointer -ml-1" />

    <div className="relative group">
      <img
        src={avatarUrl}
        alt="Avatar"
        className="w-10 h-10 bg-white rounded-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
        onClick={handleAvatarClick}
      />
      <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
        <Camera size={16} color="white" />
      </div>
      <input
        type="file"
        id="avatar-upload"
        accept="image/*"
        className="hidden"
        onChange={handleAvatarUpload}
      />
    </div>

    <div className="flex flex-col">
      <input
        type="text"
        value={contactName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setContactName(e.target.value)
        }
        className="font-semibold text-[14px] bg-transparent border-none outline-none text-white w-full truncate focus:bg-white/10 rounded px-1 -mx-1"
      />
      <input
        type="text"
        value={statusText}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setStatusText(e.target.value)
        }
        className="text-[12.5px] text-white/60 bg-transparent border-none outline-none w-full truncate focus:bg-white/10 rounded px-1 -mx-1"
      />
    </div>

    <div className="flex gap-4 items-center ml-2">
      <Video size={22} />
      <PhoneIcon size={18} />
    </div>
  </div>
);

export default WAGeneratorHeader;
