export default function Footer() {
  return (
    <footer className="bg-slate-100 text-slate-500 py-6 text-center mt-12 border-t">
      <p className="text-sm">
        © {new Date().getFullYear()} WA Sender Pro. Data is stored securely in
        your browser.
      </p>
    </footer>
  );
}
