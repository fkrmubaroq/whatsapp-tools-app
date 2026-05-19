import { CheckCircle2, Globe, Send } from "lucide-react";

export const LinkPreviewSimulator = ({
  link,
  message,
}: {
  link: string;
  message: string;
}) => {
  return (
    <div className="w-full max-w-sm mx-auto bg-[#e5ddd5] rounded-3xl overflow-hidden shadow-xl border-[8px] border-slate-800 h-[550px] flex flex-col relative">
      <div className="bg-[#075e54] text-white p-3 flex items-center gap-3 shrink-0 z-10 shadow-md">
        <div className="w-8 h-8 rounded-full bg-slate-300 overflow-hidden">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
            alt="avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-sm">Customer Name</h4>
          <p className="text-xs text-[#d9fdd3]">online</p>
        </div>
      </div>

      <div className="flex-1 p-4 overflow-y-auto custom-scrollbar flex flex-col justify-end gap-2 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-cover relative">
        <div className="absolute inset-0 bg-white/40"></div>

        {/* Sample incoming message */}
        <div className="self-start bg-white p-2 rounded-lg rounded-tl-none max-w-[85%] shadow-sm relative z-10 text-sm text-slate-800">
          Hi! I'm interested in your offer.
          <span className="text-[10px] text-slate-400 float-right mt-2 ml-2">
            10:42 AM
          </span>
        </div>

        {/* The outgoing message preview */}
        {(message || link) && (
          <div className="self-end bg-[#dcf8c6] p-2 rounded-lg rounded-tr-none max-w-[85%] shadow-sm relative z-10 text-sm text-slate-800 whitespace-pre-wrap">
            {message}

            {link && (
              <div className="mt-2 border-l-2 border-[#075e54] bg-[#cbe8b5] p-2 rounded text-xs break-all">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0366d6] hover:underline flex items-center gap-1"
                >
                  <Globe size={12} /> {link}
                </a>
              </div>
            )}
            <span className="text-[10px] text-slate-500 float-right mt-1 ml-2 flex items-center gap-1">
              10:45 AM <CheckCircle2 size={10} className="text-[#53bdeb]" />
            </span>
          </div>
        )}
      </div>

      <div className="bg-[#f0f0f0] p-2 flex items-center gap-2 shrink-0 z-10">
        <div className="flex-1 bg-white rounded-full px-4 py-2 text-sm text-slate-400 shadow-sm border border-slate-200">
          Type a message
        </div>
        <div className="w-10 h-10 bg-[#008f68] rounded-full flex items-center justify-center text-white shadow-sm">
          <Send size={16} className="ml-1" />
        </div>
      </div>
    </div>
  );
};
