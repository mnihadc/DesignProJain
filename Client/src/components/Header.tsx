const Header = () => {
  return (
    <header className="w-full bg-[#052058] text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 font-serif">
        {/* Logo */}
        <h1
          className="text-[35px] font-bold tracking-tight text-white"
          style={{
            textShadow: "0 1px 3px rgba(0,0,0,0.5), 0 2px 6px rgba(0,0,0,0.3)",
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
          }}
        >
          Typoday 2026
        </h1>
        {/* Nav */}
        <nav>
          <ul className="flex gap-14 text-[16px] font-medium text-gray-400 font-bold">
            <li className="hover:text-white transition">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-white transition">
              <a href="#">Registration</a>
            </li>
            <li className="hover:text-white transition">
              <a href="#">Schedule</a>
            </li>
            <li className="hover:text-white transition">
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
