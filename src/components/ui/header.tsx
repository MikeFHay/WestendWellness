export default function Header() {
  return (
    <header className="w-full bg-[#6f7550] text-white py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
        <div className="text-xl font-semibold">
          West End Wellness
        </div>

        <nav className="space-x-6 text-sm">
          <a href="/" className="hover:opacity-80">Home</a>
          <a href="/book" className="hover:opacity-80">Book</a>
          <a href="#classes" className="hover:opacity-80">Classes</a>
        </nav>
      </div>
    </header>
  );
}
