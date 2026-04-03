import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, User, Home, Clock } from "lucide-react";

interface NavMap {
  [key: string]: string;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
  const [isRegHovered, setIsRegHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("home");

  const dropdownRef = useRef<HTMLLIElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  const location = useLocation();

  const goToPage = (path: string) => {
    setIsMoreDropdownOpen(false);
    setIsMenuOpen(false);
    setActiveNav("more");
    navigate(path);
  };

  /* ---------------- Scroll Effect ---------------- */

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------------- Click Outside ---------------- */

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      // Don't close if click is inside the mobile menu
      if (mobileMenuRef.current && mobileMenuRef.current.contains(target)) {
        return;
      }

      // Close desktop dropdown if clicked outside its li
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setIsMoreDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ---------------- Active Nav ---------------- */

  useEffect(() => {
    if (
      location.pathname === "/terms-and-conditions" ||
      location.pathname === "/acknowledgement"
    ) {
      setActiveNav("more");
    } else {
      setActiveNav("home");
    }
  }, [location.pathname]);

  /* ---------------- Scroll To Section ---------------- */

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };

  /* ---------------- Navigation Click ---------------- */

  const handleNavClick = (navItem: string) => {
    setActiveNav(navItem);

    if (navItem === "registration") {
      navigate("/registration");
      setIsMenuOpen(false);
      return;
    }

    if (navItem === "more") {
      setIsMoreDropdownOpen((prev) => !prev);
      return;
    }

    const map: NavMap = {
      home: "home",
      about: "about",
      schedule: "schedule",
    };

    scrollToSection(map[navItem]);
    setIsMenuOpen(false);
    setIsMoreDropdownOpen(false);
  };

  /* ---------------- Nav Items ---------------- */

  const navItems = [
    { id: "home", label: "Home", icon: <Home className="w-5 h-5" /> },
    {
      id: "registration",
      label: "Registration",
      icon: <User className="w-5 h-5" />,
    },
    { id: "schedule", label: "Schedule", icon: <Clock className="w-5 h-5" /> },
    { id: "more", label: "More", icon: null },
  ];

  /* ================== JSX ================== */

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#052058]/95 backdrop-blur-md shadow-xl"
          : "bg-[#052058] shadow-lg"
      }`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        {/* Top Bar */}
        <div className="flex items-center justify-between">
          {/* Logo + Mobile Button */}
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10"
              onClick={() => {
                setIsMenuOpen((prev) => !prev);
                setIsMoreDropdownOpen(false);
              }}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            <Link to="/">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-white font-serif">
                Typoday 2026
              </h1>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-2">
              {navItems.map((item) => (
                <li
                  key={item.id}
                  className="relative"
                  ref={item.id === "more" ? dropdownRef : null}
                  onMouseEnter={() => item.id === "registration" && setIsRegHovered(true)}
                  onMouseLeave={() => item.id === "registration" && setIsRegHovered(false)}
                >
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                      activeNav === item.id
                        ? "bg-white/10 text-white"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                    {item.id === "more" && (
                      <ChevronDown
                        className={`w-4 h-4 transition ${isMoreDropdownOpen ? "rotate-180" : ""}`}
                      />
                    )}
                    {item.id === "registration" && (
                      <ChevronDown className={`w-4 h-4 transition ${isRegHovered ? "rotate-180" : ""}`} />
                    )}
                  </button>

                  {/* Registration hover dropdown */}
                  {item.id === "registration" && isRegHovered && (
                    <div className="absolute left-0 top-full z-50 min-w-[280px]">
                      <div className="pt-2">
                        <div className="bg-[#b0b8c8] rounded-lg shadow-xl overflow-hidden">
                          <a href="https://event.leconfe.com/juk1/scheduled/abstract/login" target="_blank" rel="noopener noreferrer" className="block px-5 py-4 text-[#0A2463] font-semibold text-base border-b border-[#9aa3b0] hover:bg-[#c8d0dc] transition-colors">
                            Call for Papers
                          </a>
                          <a href="https://event.leconfe.com/juk1/scheduled/logo/login" target="_blank" rel="noopener noreferrer" className="block px-5 py-4 text-[#0A2463] font-semibold text-base border-b border-[#9aa3b0] hover:bg-[#c8d0dc] transition-colors">
                            Logo Design Competition
                          </a>
                          <a href="https://event.leconfe.com/juk1/scheduled/Poster/login" target="_blank" rel="noopener noreferrer" className="block px-5 py-4 text-[#0A2463] font-semibold text-base hover:bg-[#c8d0dc] transition-colors">
                            Poster Design Competition
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* More Dropdown */}
                  {item.id === "more" && isMoreDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-[#052058] border border-white/20 rounded-lg shadow-lg">
                      <Link
                        to="/terms-and-conditions"
                        onClick={() => {
                          setActiveNav("more");
                          setIsMoreDropdownOpen(false);
                        }}
                        className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10"
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

        {/* ================= MOBILE MENU ================= */}

        {isMenuOpen && (
          <div className="lg:hidden mt-4" ref={mobileMenuRef}>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-4">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    {item.id === "more" ? (
                      <>
                        <button
                          onClick={() => setIsMoreDropdownOpen((prev) => !prev)}
                          className="flex justify-between w-full px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg"
                        >
                          {item.label}
                          <ChevronDown
                            className={`w-4 h-4 transition ${isMoreDropdownOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                        {isMoreDropdownOpen && (
                          <div className="ml-4 mt-2 space-y-2">
                            <button
                              onClick={() => goToPage("/terms-and-conditions")}
                              className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition"
                            >
                              Terms & Conditions
                            </button>
                          </div>
                        )}
                      </>
                    ) : (
                      <button
                        onClick={() => handleNavClick(item.id)}
                        className="flex items-center gap-3 w-full px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg"
                      >
                        {item.icon}
                        {item.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Line */}
      <div className="h-[1px] bg-white/20" />
    </header>
  );
};

export default Header;
