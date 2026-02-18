// Updated Header.tsx with corrected TypeScript types and Tailwind canonical classes
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, User, Home, Clock } from "lucide-react";
import toast from "react-hot-toast";

interface NavMap {
  [key: string]: string;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  const dropdownRef = useRef<HTMLLIElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMoreDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (location.pathname === "/terms-and-conditions") {
      setActiveNav("more");
    } else {
      setActiveNav("home");
    }
  }, [location]);

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleNavClick = (navItem: string) => {
    setActiveNav(navItem);
    setIsMenuOpen(false);

    if (navItem === "registration") {
      toast("Registration has not started yet — Coming Soon!", {
        icon: "⏳",
        style: {
          background: "#052058",
          color: "white",
          border: "1px solid #3356a8",
        },
      });
      return;
    }

    if (navItem === "more") {
      setIsMoreDropdownOpen(!isMoreDropdownOpen);
      return;
    }

    const map: NavMap = {
      home: "home",
      about: "about",
      schedule: "schedule",
    };

    scrollToSection(map[navItem]);
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
      id: "more",
      label: "More",
      // Empty icon since we'll handle More specially
      icon: null,
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

            <Link to="/" className="flex flex-col">
              <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white leading-tight font-serif [text-shadow:0_2px_4px_rgba(0,0,0,0.5),0_0_0_1px_rgba(0,0,0,0.3)]">
                Typoday 2026
              </h1>
            </Link>
          </div>

          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-1">
              {navItems.map((item) => (
                <li key={item.id} className="relative" ref={item.id === "more" ? dropdownRef : null}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg transition-all duration-300 ${
                      activeNav === item.id
                        ? "text-white bg-white/10 backdrop-blur-sm"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {/* For "More" only: Show label first, then icon */}
                    {item.id === "more" ? (
                      <>
                        <span className="font-medium text-sm xl:text-base">
                          {item.label}
                        </span>
                        <ChevronDown className={`w-3 h-3 md:w-4 md:h-4 transition-transform ${isMoreDropdownOpen ? 'rotate-180' : ''}`} />
                      </>
                    ) : (
                      <>
                        <span className="hidden xl:inline-block">
                          {item.icon}
                        </span>
                        <span className="font-medium text-sm xl:text-base">
                          {item.label}
                        </span>
                      </>
                    )}

                    {activeNav === item.id && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-linear-to-r from-blue-400 to-cyan-300 rounded-full" />
                    )}
                  </button>

                  {/* Dropdown Menu for More */}
                  {item.id === "more" && isMoreDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-[#052058] border border-white/20 rounded-lg shadow-xl overflow-hidden">
                      <Link
                        to="/terms-and-conditions"
                        onClick={() => {
                          setIsMoreDropdownOpen(false);
                          setActiveNav("more");
                        }}
                        className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                      >
                        Terms & Conditions
                      </Link>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-3 animate-in slide-in-from-top-5 duration-300">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-4">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    {item.id === "more" ? (
                      <div>
                        <button
                          onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
                          className={`flex items-center justify-between w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                            activeNav === item.id
                              ? "text-white bg-linear-to-r from-blue-500/20 to-cyan-500/20 border border-white/20"
                              : "text-gray-300 hover:text-white hover:bg-white/10"
                          }`}
                        >
                          <span className="font-medium">{item.label}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform ${isMoreDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isMoreDropdownOpen && (
                          <div className="mt-2 ml-4 space-y-2">
                            <Link
                              to="/terms-and-conditions"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsMoreDropdownOpen(false);
                                setActiveNav("more");
                              }}
                              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                            >
                              Terms & Conditions
                            </Link>
                          </div>
                        )}
                      </div>
                    ) : (
                      <button
                        onClick={() => handleNavClick(item.id)}
                        className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                          activeNav === item.id
                            ? "text-white bg-linear-to-r from-blue-500/20 to-cyan-500/20 border border-white/20"
                            : "text-gray-300 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        {item.icon}
                        <span className="font-medium">{item.label}</span>
                        {activeNav === item.id && (
                          <ChevronDown className="w-4 h-4 ml-auto transform rotate-90" />
                        )}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      <div className="h-0.5 bg-linear-to-r from-transparent via-white/30 to-transparent opacity-50" />
    </header>
  );
};

export default Header;
