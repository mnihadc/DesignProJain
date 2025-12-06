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
