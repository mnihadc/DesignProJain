const Header = () => {
  return (
    <header className="w-full bg-[#052058] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8 py-3 md:py-4 font-serif">
        {/* Logo */}
        <div className="w-full md:w-auto flex justify-center md:justify-start items-center">
          <h1
            className="text-2xl xs:text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] xl:text-[40px] font-bold tracking-tight text-white text-center md:text-left"
            style={{
              textShadow:
                "0 1px 3px rgba(0,0,0,0.5), 0 2px 6px rgba(0,0,0,0.3)",
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
              lineHeight: "1.2",
            }}
          >
            Typoday 2026
          </h1>
        </div>

        {/* Navigation */}
        <nav className="w-full md:w-auto mt-3 md:mt-0">
          <ul className="flex flex-wrap justify-center md:justify-end gap-3 xs:gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 text-sm xs:text-base sm:text-[15px] md:text-[16px] font-medium text-gray-300">
            <li className="relative group">
              <a
                href="#"
                className="block py-2 px-1 xs:px-2 sm:px-3 hover:text-white transition-all duration-300 md:border-b-2 md:border-transparent md:hover:border-white active:scale-95"
                aria-label="Home page"
              >
                <span className="relative z-10">Home</span>
                <span className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 md:hidden"></span>
              </a>
            </li>
            <li className="relative group">
              <a
                href="#"
                className="block py-2 px-1 xs:px-2 sm:px-3 hover:text-white transition-all duration-300 md:border-b-2 md:border-transparent md:hover:border-white active:scale-95"
                aria-label="Registration information"
              >
                <span className="relative z-10">Registration</span>
                <span className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 md:hidden"></span>
              </a>
            </li>
            <li className="relative group">
              <a
                href="#"
                className="block py-2 px-1 xs:px-2 sm:px-3 hover:text-white transition-all duration-300 md:border-b-2 md:border-transparent md:hover:border-white active:scale-95"
                aria-label="Event schedule"
              >
                <span className="relative z-10">Schedule</span>
                <span className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 md:hidden"></span>
              </a>
            </li>
            <li className="relative group">
              <a
                href="#"
                className="block py-2 px-1 xs:px-2 sm:px-3 hover:text-white transition-all duration-300 md:border-b-2 md:border-transparent md:hover:border-white active:scale-95"
                aria-label="About Typoday"
              >
                <span className="relative z-10">About</span>
                <span className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 md:hidden"></span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Decorative bottom border */}
      <div className="h-0.5 bg-gradient-to-r from-blue-400/30 via-white/20 to-blue-400/30 w-full"></div>
    </header>
  );
};

export default Header;
