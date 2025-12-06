import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, User, Info, Home, Clock } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("home");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle navigation click
  const handleNavClick = (navItem: string) => {
    setActiveNav(navItem);
    setIsMenuOpen(false);
  };

  const navItems = [
    {
      id: "home",
      label: "Home",
      icon: <Home className="w-4 h-4 md:w-5 md:h-5" />,
    },
    {
      id: "registration",
      label: "Registration",
      icon: <User className="w-4 h-4 md:w-5 md:h-5" />,
    },
    {
      id: "schedule",
      label: "Schedule",
      icon: <Clock className="w-4 h-4 md:w-5 md:h-5" />,
    },
    {
      id: "about",
      label: "About",
      icon: <Info className="w-4 h-4 md:w-5 md:h-5" />,
    },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#052058]/95 backdrop-blur-md shadow-xl"
          : "bg-[#052058] shadow-lg"
      }`}
    >
      <div className="max-w-8xl mx-auto px-3 sm:px-5 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <button
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 sm:w-7 sm:h-7" />
              ) : (
                <Menu className="w-6 h-6 sm:w-7 sm:h-7" />
              )}
            </button>

            <div className="flex flex-col">
              <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight font-serif">
                Typoday 2026
              </h1>
              <p className="text-[10px] xs:text-xs sm:text-sm text-blue-200/80 tracking-wide font-medium mt-0.5">
                International Conference on Typography & Design
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-1">
              {navItems.map((item) => (
                <li key={item.id} className="relative">
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg transition-all duration-300 ${
                      activeNav === item.id
                        ? "text-white bg-white/10 backdrop-blur-sm"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span className="hidden xl:inline-block">{item.icon}</span>
                    <span className="font-medium text-sm xl:text-base">
                      {item.label}
                    </span>
                    {activeNav === item.id && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"></div>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-3 animate-in slide-in-from-top-5 duration-300">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-4">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                        activeNav === item.id
                          ? "text-white bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-white/20"
                          : "text-gray-300 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {item.icon}
                      <span className="font-medium">{item.label}</span>
                      {activeNav === item.id && (
                        <ChevronDown className="w-4 h-4 ml-auto transform rotate-90" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Additional Info for Mobile */}
              <div className="mt-4 pt-4 border-t border-white/20">
                <div className="text-center text-blue-100/80 text-sm">
                  <p className="font-medium">Feb 15-17, 2026</p>
                  <p className="text-xs mt-1">
                    Design Innovation Center, New Delhi
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Bottom gradient line */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50"></div>
    </header>
  );
};

export default Header;
