import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-[#052058] text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
        {/* Logo */}
        <h1 className="text-[30px] font-bold tracking-tight">Typoday 2026</h1>

        {/* Nav */}
        <nav>
          <ul className="flex gap-10 text-[16px] font-medium text-gray-500">
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
