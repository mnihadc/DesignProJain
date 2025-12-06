const Footer = () => {
  return (
    <footer className="w-full bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10">
        {/* Copyright Text */}
        <p className="text-xs sm:text-sm md:text-[13px] leading-relaxed text-center max-w-3xl mx-auto">
          This is licensed under © Industrial Design Centre, Indian Institute of
          Technology Bombay & Jain Deemed-to-be University, Kochi.
        </p>

        {/* Website Link */}
        <div className="text-center mt-4 sm:mt-5 md:mt-6">
          <a
            href="https://www.typoday.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm md:text-[13px] text-blue-400 hover:text-blue-300 underline transition-colors duration-200 inline-block"
          >
            https://www.typoday.in
          </a>
        </div>

        {/* Responsive Additional Info */}
        <div className="text-center mt-4 sm:mt-5">
          <p className="text-xs text-gray-400">
            <span className="hidden sm:inline">
              Annual International Conference •{" "}
            </span>
            All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
