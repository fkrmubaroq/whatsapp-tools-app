import { ChevronRight, MessageCircle } from "lucide-react";
import { CTA_TO_CREATE } from "../variables/constant";

export const Header = () => (
  <header className="bg-[#075E54] text-white py-4 px-6 sticky top-0 z-50 shadow-md">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <div className="flex items-center gap-2">
        <MessageCircle size={28} className="text-[#25D366]" fill="white" />
        <span className="text-xl font-bold tracking-tight">TestiGen</span>
      </div>
      <nav className="hidden md:flex gap-6 font-medium text-sm">
        <a href="#features" className="hover:text-[#ECE5DD] transition-colors">
          Fitur
        </a>
        <a
          href="#how-it-works"
          className="hover:text-[#ECE5DD] transition-colors"
        >
          Fitur
        </a>
      </nav>
      <a
        href={CTA_TO_CREATE}
        className="bg-[#25D366] hover:bg-[#1DA851] text-white px-5 py-2 rounded-full font-semibold text-sm transition-all shadow-sm flex items-center gap-1"
      >
        Mulai Buat <ChevronRight size={16} />
      </a>
    </div>
  </header>
);
