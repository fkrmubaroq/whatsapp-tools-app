import {
  ArrowRight,
  Download,
  Globe,
  LayoutDashboard,
  QrCode,
  Rocket,
  Send,
  Shield,
  Smartphone,
  Zap,
} from "lucide-react";
import Header from "./_components/header";
import Footer from "./_components/footer";
import Link from "next/link";
import { CTA_TO_CREATE_WHATSAPP_LINK } from "../testimonial-generator/variables/constant";

export default function WhatsappinkPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      <Header />

      {/* Hero Section */}
      <main className="flex-grow">
        <section className="bg-white overflow-hidden relative border-b border-slate-200">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
          <div className="max-w-6xl mx-auto px-4 lg:px-6 py-20 lg:py-28 relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-green-200">
                No Installation Required
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                Send WhatsApp{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-400">
                  Marketing
                </span>{" "}
                Made Simple.
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Manage multiple contacts, preview messages, generate QR codes,
                and send WhatsApp links securely from your browser. 100% Zero
                database, your data stays yours.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Link
                  href={CTA_TO_CREATE_WHATSAPP_LINK}
                  className="w-full sm:w-auto px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg shadow-lg shadow-green-600/30 transition-all flex items-center justify-center gap-2 text-lg hover:-translate-y-1"
                >
                  Open Dashboard Free <ArrowRight size={20} />
                </Link>
                <a
                  href="#features"
                  className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 font-bold rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors flex items-center justify-center text-lg"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-green-100 to-transparent rounded-3xl transform rotate-3 scale-105 z-0"></div>
              <div className="bg-white border border-slate-200 rounded-3xl shadow-2xl p-4 relative z-10 transform transition-transform hover:scale-[1.02] duration-300">
                <div className="flex items-center gap-2 mb-3 border-b border-slate-100 pb-3">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="ml-2 bg-slate-100 text-slate-400 text-xs px-2 py-1 rounded flex-1 text-center font-mono">
                    dashboard.wasend.com
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop"
                  alt="Dashboard Preview"
                  className="rounded-xl w-full object-cover h-64 grayscale-[20%] opacity-90"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white animate-pulse">
                    <Send size={24} className="ml-1" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">Sending Batch...</p>
                    <p className="text-xs text-slate-500">3 of 50 contacts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Everything you need in one tool
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Stop paying for expensive CRMs just to send a few WhatsApp
                messages. We built exactly what marketers need.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Smartphone,
                  title: "Link Preview Simulator",
                  desc: "See exactly how your message and target URL will look on a customer's phone before sending.",
                },
                {
                  icon: QrCode,
                  title: "QR Code Generator",
                  desc: "Instantly turn any link into a scannable QR code. Perfect for offline marketing and print materials.",
                },
                {
                  icon: Zap,
                  title: "Multiple Send & Bulk",
                  desc: "Paste your contact list and let the tool queue up your messages. Send them sequentially with one click.",
                },
                {
                  icon: Shield,
                  title: "Zero Database Storage",
                  desc: "Your data is strictly yours. All contacts and messages are stored locally in your browser. No server tracking.",
                },
                {
                  icon: Download,
                  title: "Export to Excel/CSV",
                  desc: "Download your campaign results and contact lists instantly into CSV format for your own records.",
                },
                {
                  icon: Rocket,
                  title: "No App Installation",
                  desc: "Works directly in your desktop browser. Utilizes official WhatsApp Web to deliver messages securely.",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 bg-green-600 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to streamline your WA Marketing?
            </h2>
            <p className="text-green-100 mb-8 text-lg">
              Join marketers who are saving time without compromising on data
              privacy.
            </p>
            <Link
              href={CTA_TO_CREATE_WHATSAPP_LINK}
              className="px-8 py-4 bg-white text-green-700 hover:bg-slate-50 font-bold rounded-lg shadow-xl transition-all flex items-center justify-center gap-2 text-lg mx-auto"
            >
              <LayoutDashboard size={20} /> Launch Dashboard Now
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
