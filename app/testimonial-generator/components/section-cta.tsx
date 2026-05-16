import { CTA_TO_CREATE } from "../variables/constant";

export default function SectionCTA() {
  return (
    <section className="bg-[#128C7E] py-24 px-6 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 rounded-full bg-white opacity-5"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 rounded-full bg-white opacity-5"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Siap Meningkatkan Penjualan Anda?
        </h2>
        <p className="text-[#DCF8C6] text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Bergabunglah dengan ribuan pemilik bisnis yang telah menggunakan
          TestiGen untuk membuat social proof yang terpercaya dan meningkatkan
          konversi.
        </p>
        <a
          href={CTA_TO_CREATE}
          className="inline-block bg-white text-[#128C7E] hover:bg-gray-100 px-10 py-5 rounded-full font-bold text-xl transition-all shadow-xl hover:scale-105 transform duration-200"
        >
          Mulai Buat Testimoni — Gratis
        </a>
      </div>
    </section>
  );
}
