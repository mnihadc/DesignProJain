const Hero = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white via-white to-gray-50 text-white pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-2 sm:pb-4 md:pb-6 px-4 sm:px-6 md:px-8 text-center relative overflow-hidden">
      {/* Background subtle elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top left decorative */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full opacity-30 sm:opacity-40"></div>
        {/* Bottom right decorative */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-50 rounded-full opacity-30 sm:opacity-40"></div>

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(90deg, #0A2463 1px, transparent 1px),
                              linear-gradient(180deg, #0A2463 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* MAIN TITLE with enhanced professional look */}
        <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 relative">
          {/* Decorative accent line */}
          <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>

          <h1
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[150px] 2xl:text-[180px] font-[400] mb-4 sm:mb-6 text-gray-900"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {/* Typoday with proper y descender - FIXED */}
            <span className="block bg-gradient-to-r from-[#0A2463] via-blue-700 to-cyan-700 bg-clip-text text-transparent leading-[1.1] sm:leading-[1.1] md:leading-[1.1] tracking-tight pb-3 sm:pb-4 md:pb-6">
              Typoday
            </span>

            {/* 2026 with adjusted spacing */}
            <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[100px] 2xl:text-[120px] text-gray-700 mt-1 sm:mt-2 md:mt-3 leading-none">
              2026
            </span>
          </h1>

          {/* Subtitle accent */}
          <div className="mt-4 sm:mt-6 md:mt-8">
            <div className="inline-block px-4 sm:px-5 py-1.5 sm:py-2 bg-blue-50/80 backdrop-blur-sm rounded-full border border-blue-200">
              <p className="text-sm sm:text-base md:text-lg text-gray-700 font-medium">
                Kochi, Kerala • September 28-30, 2026
              </p>
            </div>
          </div>
        </div>

        {/* LOGOS with enhanced professional presentation */}
        <div className="relative mt-6 sm:mt-8 md:mt-10 lg:mt-12 mb-4 sm:mb-6 md:mb-8">
          {/* Connecting line (desktop only) */}
          <div className="hidden sm:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/50 to-transparent -translate-y-1/2"></div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-14 md:gap-18 lg:gap-22 xl:gap-24">
            {/* IIT Bombay Logo - NO HOVER EFFECTS */}
            <div>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 shadow-md border border-gray-200">
                <div className="p-1 sm:p-2">
                  <img
                    src="/images/iitbombay.jpg"
                    alt="IIT Bombay"
                    className="h-[70px] w-[120px] 
                             sm:h-[90px] sm:w-[155px]
                             md:h-[110px] md:w-[190px]
                             lg:h-[130px] lg:w-[225px]
                             xl:h-[150px] xl:w-[260px]
                             2xl:h-[180px] 2xl:w-[320px]
                             object-contain"
                  />
                </div>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm font-medium text-gray-600">
                  Indian Institute of Technology Bombay
                </p>
              </div>
            </div>

            {/* JAIN University Logo - NO HOVER EFFECTS */}
            <div>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 shadow-md border border-gray-200">
                <div className="p-1 sm:p-2">
                  <img
                    src="/images/jainDesign.png"
                    alt="JAIN University"
                    className="h-[55px] w-[180px]
                             sm:h-[70px] sm:w-[230px]
                             md:h-[90px] md:w-[280px]
                             lg:h-[110px] lg:w-[330px]
                             xl:h-[130px] xl:w-[380px]
                             2xl:h-[150px] 2xl:w-[430px]
                             3xl:h-[180px] 3xl:w-[480px]
                             object-contain"
                  />
                </div>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm font-medium text-gray-600">
                  JAIN (Deemed-to-be University)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal bottom accent */}
        <div className="mt-8 sm:mt-10">
          <div className="inline-block px-4 sm:px-5 py-1 sm:py-1.5 bg-gray-100/50 backdrop-blur-sm rounded-full">
            <p className="text-xs sm:text-sm text-gray-600 font-medium">
              18th International Typography Conference
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
