import { CheckCircle, MapPin, MessageCircle, Quote } from "lucide-react";

const features = [
  {
    icon: <MessageCircle className="text-[#25D366]" size={32} />,
    title: "Authentic WhatsApp Format",
    desc: "Chat bubble designs, fonts, and colors are 100% identical to the real WhatsApp interface for maximum authenticity.",
  },
  {
    icon: <CheckCircle className="text-blue-500" size={32} />,
    title: "Blue Tick Verification",
    desc: "Add details like blue ticks (read receipts) and timestamps to boost credibility.",
  },
  {
    icon: <Quote className="text-purple-500" size={32} />,
    title: "Custom Avatar & Name",
    desc: "Personalize the sender with a custom name and a random avatar or upload your real customer's photo.",
  },
];

export default function SectionFeature() {
  return (
    <section id="features" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#128C7E] mb-4">
            TestiGen Key Features
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to create convincing social proof without any
            design skills.
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
