import { CheckCircle, MapPin, MessageCircle, Quote } from "lucide-react";

const features = [
  {
    icon: <MessageCircle className="text-[#25D366]" size={32} />,
    title: "Format WhatsApp Asli",
    desc: "Desain bubble chat, font, dan warna 100% mirip dengan tampilan WhatsApp asli untuk keaslian maksimal.",
  },
  {
    icon: <CheckCircle className="text-blue-500" size={32} />,
    title: "Verifikasi Centang Biru",
    desc: "Tambahkan detail seperti centang biru (read receipt) dan stempel waktu untuk meningkatkan kredibilitas.",
  },
  {
    icon: <Quote className="text-purple-500" size={32} />,
    title: "Custom Avatar & Nama",
    desc: "Personalisasi pengirim dengan nama kustom dan avatar acak atau unggah foto pelanggan asli Anda.",
  },
];

export default function SectionFeature() {
  return (
    <section id="features" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#128C7E] mb-4">
            Fitur Utama TestiGen
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Semua yang Anda butuhkan untuk membuat social proof yang meyakinkan
            tanpa keahlian desain.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm mb-6">
                {feat.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {feat.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
