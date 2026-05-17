import { MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <MessageCircle size={24} className="text-[#25D366]" />
            <span className="text-xl font-bold text-white tracking-tight">
              TestiGen
            </span>
          </div>
          <p className="text-gray-400 max-w-sm">
            An essential marketing tool to create convincing WhatsApp testimonial
            images quickly and easily.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Useful Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="hover:text-white transition-colors"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#generator"
                className="hover:text-white transition-colors"
              >
                Generator
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Disclaimer
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} TestiGen. Made for UI demonstration purposes.
      </div>
    </footer>
  );
}
