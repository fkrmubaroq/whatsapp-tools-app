import { CheckCircle, Trash2 } from "lucide-react";
import { Message } from "../page";

interface WAMessageBubbleProps {
  msg: Message;
  isPrevSameType: boolean;
  isActive: boolean;
  setActiveMessageId: React.Dispatch<React.SetStateAction<number | null>>;
  deleteMessage: (id: number) => void;
  toggleReadStatus: (id: number) => void;
  updateMessage: (
    id: number,
    field: keyof Message,
    value: string | boolean | null,
  ) => void;
}

export default function WAMessageBubble({
  msg,
  isPrevSameType,
  isActive,
  setActiveMessageId,
  deleteMessage,
  toggleReadStatus,
  updateMessage,
}: WAMessageBubbleProps) {
  const isSent = msg.type === "sent";

  let bubbleClasses = `
    p-1.5 shadow-sm max-w-[85%] relative break-words text-[14px] leading-snug
    ${isSent ? "bg-[#DCF8C6]" : "bg-white"}
    ${isActive ? "ring-2 ring-blue-400 z-40" : ""}
  `;

  if (!isPrevSameType) {
    if (isSent) {
      bubbleClasses += ` rounded-lg rounded-tr-none after:content-[''] after:absolute after:top-0 after:-right-[8px] after:w-0 after:h-0 after:border-t-[0px] after:border-t-transparent after:border-b-[12px] after:border-b-transparent after:border-l-[8px] after:border-l-[#DCF8C6]`;
    } else {
      bubbleClasses += ` rounded-lg rounded-tl-none before:content-[''] before:absolute before:top-0 before:-left-[8px] before:w-0 before:h-0 before:border-t-[0px] before:border-t-transparent before:border-b-[12px] before:border-b-transparent before:border-r-[8px] before:border-r-white`;
    }
  } else {
    bubbleClasses += ` rounded-lg`;
  }

  return (
    <div
      className={`flex flex-col ${isSent ? "items-end" : "items-start"} w-full group relative`}
      onClick={(e) => {
        e.stopPropagation();
        setActiveMessageId(msg.id);
      }}
    >
      {isActive && (
        <div
          className={`absolute top-0 ${isSent ? "right-full mr-2" : "left-full ml-2"} flex gap-1 z-50 bg-white p-1 rounded-md shadow-md border border-gray-200`}
        >
          <button
            onClick={() => deleteMessage(msg.id)}
            className="p-1 text-red-500 hover:bg-red-50 rounded"
            title="Hapus"
          >
            <Trash2 size={14} />
          </button>
          {isSent && (
            <button
              onClick={() => toggleReadStatus(msg.id)}
              className="p-1 text-blue-500 hover:bg-blue-50 rounded"
              title="Toggle Centang"
            >
              <CheckCircle size={14} />
            </button>
          )}
        </div>
      )}

      <div className={bubbleClasses}>
        {msg.imageUrl && (
          <div className="p-0.5 mb-1 bg-black/5 rounded-md relative group/img">
            <img
              src={msg.imageUrl}
              alt="attached"
              className="rounded-md max-h-48 w-auto object-cover"
            />
            {isActive && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  updateMessage(msg.id, "imageUrl", null);
                }}
                className="absolute top-1 right-1 bg-black/50 text-white p-1 rounded-full hover:bg-red-500"
              >
                <Trash2 size={12} />
              </button>
            )}
          </div>
        )}

        <div className="px-1 pt-0.5 pb-3">
          <div
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) =>
              updateMessage(msg.id, "text", e.currentTarget.innerText)
            }
            className="w-full bg-transparent border-none outline-none block text-gray-800 whitespace-pre-wrap min-h-[20px] focus:bg-black/5 rounded cursor-text"
          >
            {msg.text}
          </div>
        </div>

        <div className="absolute bottom-1 right-2 flex items-center gap-1">
          <input
            type="text"
            value={msg.time}
            onChange={(e) => updateMessage(msg.id, "time", e.target.value)}
            className="text-[10px] text-gray-500 bg-transparent border-none outline-none w-8 text-right focus:bg-black/5 rounded"
          />
          {isSent && (
            <span className={msg.isRead ? "text-[#34B7F1]" : "text-gray-400"}>
              <svg
                viewBox="0 0 16 15"
                width="16"
                height="15"
                fill="currentColor"
              >
                {msg.isRead ? (
                  <path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"></path>
                ) : (
                  <path d="M11.832 3.25l-.478-.372a.365.365 0 0 0-.51.063L5.488 9.819a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512z"></path>
                )}
              </svg>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
