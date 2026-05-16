import { CheckCircle, MessageCircle } from "lucide-react";
import Link from "next/link";
import { CTA_TO_CREATE } from "../variables/constant";

export default function SectionHero() {
  return (
    <section className="bg-[#ECE5DD] py-20 px-6 overflow-hidden relative">
      {/* Background Doodles Pattern - Subtle representation of WA chat bg */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-block bg-[#DCF8C6] text-[#075E54] px-4 py-1 rounded-full text-sm font-semibold mb-6 shadow-sm">
            🌟 Tool Pemasaran Terbaik 2026
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#128C7E] leading-tight mb-6">
            Bangun Kepercayaan dengan Testimoni Autentik
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-2xl mx-auto md:mx-0">
            Buat gambar testimoni yang terlihat nyata dari percakapan WhatsApp
            dalam hitungan detik. Tingkatkan konversi penjualan Anda hari ini!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href={CTA_TO_CREATE}
              className="bg-[#128C7E] hover:bg-[#075E54] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2"
            >
              Coba Generator Sekarang <MessageCircle size={20} />
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            <CheckCircle size={14} className="inline text-[#25D366] mr-1" />{" "}
            Gratis digunakan. Tanpa biaya sepeserpun
          </p>
        </div>

        <div className="flex-1 w-full max-w-md">
          {/* Mockup WA Chat Bubble */}
          <div className="bg-[#E5DDD5] p-4 rounded-3xl shadow-xl relative border-8 border-gray-900">
            <div className="bg-[#075E54] p-3 rounded-t-2xl flex items-center gap-3 text-white mb-4 -mx-4 -mt-4">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Customer"
                  alt="Customer"
                  className="w-full h-full"
                />
              </div>
              <div>
                <div className="font-semibold text-sm">Pelanggan Setia</div>
                <div className="text-xs text-green-200">online</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[85%] relative">
                <p className="text-sm text-gray-800">
                  Halo min, paketnya udah sampai ya! 😍
                </p>
                <div className="text-[10px] text-gray-400 text-right mt-1">
                  10:42 AM
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[85%] relative">
                <p className="text-sm text-gray-800">
                  Kualitas bajunya bagus banget, bahannya adem. Gak nyesel beli
                  di sini!
                </p>
                <div className="text-[10px] text-gray-400 text-right mt-1">
                  10:43 AM
                </div>
              </div>
              <div className="bg-[#DCF8C6] p-3 rounded-lg rounded-tr-none shadow-sm max-w-[85%] ml-auto relative">
                <p className="text-sm text-gray-800">
                  Wah, terima kasih banyak kak atas kepercayaannya! Ditunggu
                  orderan selanjutnya ya 🙏
                </p>
                <div className="text-[10px] text-gray-500 text-right mt-1 flex justify-end items-center gap-1">
                  10:45 AM <span className="text-[#34B7F1]">✓✓</span>
                </div>
              </div>
            </div>

            <div className="bg-[#F0F0F0] p-2 rounded-full mt-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-400">
                <MessageCircle size={16} />
              </div>
              <div className="flex-1 text-gray-400 text-sm">Ketik pesan...</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
