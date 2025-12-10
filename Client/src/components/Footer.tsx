import { Instagram, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-t from-gray-900 to-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="relative">
          {/* Decorative accent line */}
          <div className="w-20 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6 sm:mb-8 rounded-full"></div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <a
              href="https://www.instagram.com/typoday2026/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
              <Instagram size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/typoday-%E2%80%8E-848394399/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
              <Linkedin size={22} />
            </a>

            {/* X Logo */}
            <a
              href="https://x.com/Typoday2026"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2h3.308l-7.227 8.26L22 22h-6.029l-4.72-6.479L5.85 22H2.54l7.73-8.828L2 2h6.146l4.273 5.903L18.244 2zm-1.08 18.166h1.833L7.002 3.744H4.99l12.174 16.422z" />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61584482440255"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
              <Facebook size={22} />
            </a>
          </div>

          {/* Copyright */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 border border-gray-800/50">
            <p className="text-sm sm:text-base md:text-[15px] leading-relaxed text-center text-gray-200 max-w-4xl mx-auto font-light">
              Licensed under ©{" "}
              <span className="font-medium">Industrial Design Centre</span>,
              <span className="font-medium">
                {" "}
                Indian Institute of Technology Bombay
              </span>{" "}
              &
              <span className="font-medium">
                {" "}
                JAIN Deemed-to-be University, Kochi
              </span>
              .
            </p>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-800/30">
          <p className="text-xs text-gray-500 text-center font-light">
            18th Edition • September 2026
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
