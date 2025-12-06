const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-t from-gray-900 to-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        {/* Main content container */}
        <div className="relative">
          {/* Decorative accent line */}
          <div className="w-20 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6 sm:mb-8 rounded-full"></div>

          {/* Copyright Text with enhanced styling */}
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
                Jain Deemed-to-be University, Kochi
              </span>
              .
            </p>
          </div>

          {/* Website Link with enhanced styling */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-gray-900/50 backdrop-blur-sm rounded-xl px-5 sm:px-6 py-3 sm:py-4 border border-gray-800/50 hover:border-gray-700/50 transition-colors duration-300 group">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
              <a
                href="https://www.typoday.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base md:text-[15px] text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
              >
                https://www.typoday.in
              </a>
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom accent */}
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
