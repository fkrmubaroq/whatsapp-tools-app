import { ArrowRight, MessageSquare } from "lucide-react";

const Header = ({
  onBack,
  isDashboard = false,
}: {
  onBack?: () => void;
  isDashboard?: boolean;
}) => (
  <header className="bg-green-600 text-white p-4 shadow-md sticky top-0 z-20">
    <div className="max-w-6xl mx-auto flex items-center justify-between">
      <div
        className={`flex items-center gap-2 ${onBack ? "cursor-pointer hover:opacity-90 transition-opacity" : ""}`}
        onClick={onBack}
      >
        <MessageSquare size={28} />
        <h1 className="text-2xl font-bold tracking-tight">WA Sender Pro</h1>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-green-100 text-sm hidden sm:block">
          Zero-Database Marketing Tool
        </p>
        {isDashboard && onBack && (
          <button
            onClick={onBack}
            className="text-sm bg-green-700 hover:bg-green-800 px-3 py-1.5 rounded-md transition-colors flex items-center gap-1 font-medium shadow-sm"
          >
            <ArrowRight size={16} /> Exit Dashboard
          </button>
        )}
      </div>
    </div>
  </header>
);

export default Header;
