export const QRCodeDisplay = ({ value }: { value: string }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 w-full">
      <div className="mb-4 text-center">
        <h3 className="font-bold text-slate-800">Scan to Open Link</h3>
        <p className="text-sm text-slate-500">
          Fastest way to share your target URL physically.
        </p>
      </div>

      {value ? (
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(value)}`}
            alt="QR Code"
            className="w-48 h-48"
          />
        </div>
      ) : (
        <div className="w-48 h-48 bg-slate-100 rounded-lg flex items-center justify-center border border-dashed border-slate-300 text-slate-400 text-sm text-center p-4">
          Enter a link to generate QR Code
        </div>
      )}
      <p className="text-xs text-slate-500 mt-4 text-center max-w-[250px]">
        Scan this QR code with any camera app to open the link directly.
      </p>
    </div>
  );
};
