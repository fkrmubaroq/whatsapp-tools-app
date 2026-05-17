import {
  Download,
  Globe,
  LayoutDashboard,
  QrCode,
  Rocket,
  Shield,
  Smartphone,
  Zap,
} from "lucide-react";
import Header from "./_components/header";
import Footer from "./_components/footer";
import Link from "next/link";

export default function WhatsappinkPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col selection:bg-green-200">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-green-600 to-green-700 text-white pt-24 pb-32 px-4 text-center relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-10">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute top-48 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-4xl mx-auto relative z-10">
            <span className="bg-green-500/50 border border-green-400 text-green-50 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 inline-block tracking-wide shadow-sm">
              🚀 100% Free & Open in Browser
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 leading-tight">
              WhatsApp Marketing, <br className="hidden md:block" />
              Simplified & Secured.
            </h1>
            <p className="text-lg md:text-xl text-green-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              Send bulk messages with link previews, generate QR codes, and
              manage campaigns directly from your browser.
              <strong className="text-white">
                {" "}
                No databases. No subscriptions.
              </strong>
            </p>
            <Link
              href="#"
              className="bg-white text-green-700 hover:bg-slate-50 font-bold text-lg px-8 py-4 rounded-full shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl flex items-center justify-center gap-3 mx-auto"
            >
              <LayoutDashboard size={24} /> Open Dashboard Free
            </Link>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 px-4 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              Everything you need to grow
            </h2>
            <p className="text-slate-500 mt-4 text-lg">
              Powerful features running entirely in your browser.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-blue-200 transition-all group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Smartphone size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Link Preview Simulator
              </h3>
              <p className="text-slate-600 leading-relaxed">
                See exactly how your links and messages will look on your
                customer's screen before you hit send.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-purple-200 transition-all group">
              <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <QrCode size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                QR Code Generator
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Instantly generate scannable QR codes for your promotional links
                to use on printed materials or presentations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-amber-200 transition-all group">
              <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Rocket size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Bulk Send Automation
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Paste hundreds of contacts from Excel and let our tool help you
                send messages batch by batch efficiently.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-red-200 transition-all group">
              <div className="w-14 h-14 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Zero-Database Privacy
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Your contacts never leave your device. All data is securely
                stored locally in your browser's storage.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-green-200 transition-all group">
              <div className="w-14 h-14 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Download size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                One-Click Export
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Download your campaign results and contact lists directly to
                CSV/Excel for reporting and your records.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-teal-200 transition-all group">
              <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                No Installation Required
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Access your dashboard from any web browser instantly. No
                complicated software or server setup.
              </p>
            </div>
          </div>
        </section>

        {/* Call To Action Footer */}
        <section className="bg-slate-800 text-white py-20 px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to streamline your messaging?
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Start using WA Sender Pro today. All features are available
            immediately directly in your browser.
          </p>
          <Link
            href="#"
            className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg transition-colors inline-flex items-center gap-2"
          >
            Get Started Now <Zap size={20} className="fill-current" />
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
