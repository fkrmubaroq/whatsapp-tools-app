import { Camera, MicIcon, PlusIcon } from "lucide-react";

export default function WaFooterInput() {
  return (
    <div className="bg-[#F0F0F0] p-2 flex items-center gap-2 z-10 relative mt-auto">
      <div className="flex gap-2 text-gray-500">
        <PlusIcon color="#99a1af " />
      </div>
      <div className="flex-1 bg-white rounded-full  py-2 px-4 text-sm text-gray-400">
        Ketik pesan
      </div>
      <div className="flex gap-x-3 px-2">
        <Camera color="#99a1af " />
        <MicIcon color="#99a1af " />
      </div>
    </div>
  );
}
