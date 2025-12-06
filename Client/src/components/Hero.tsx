const Hero = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-white via-white to-gray-50 text-center overflow-hidden pt-6 pb-2 px-4 sm:pt-8 sm:pb-4 sm:px-6 md:pt-10 md:pb-6 md:px-8 lg:pt-12">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top Left Decorative Circle */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full opacity-30 sm:opacity-40" />

        {/* Bottom Right Decorative Circle */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-50 rounded-full opacity-30 sm:opacity-40" />

        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(90deg, #0A2463 1px, transparent 1px),
                              linear-gradient(180deg, #0A2463 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Title Section */}
        <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          {/* Decorative Accent Line */}
          <div className="w-16 h-0.5 bg-gradient-to-r" />

          {/* Typography Title - Single Line */}
          <div className="mb-8 sm:mb-10 md:mb-12">
            <h1
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[160px]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              <span className="block leading-tight">
                Typoday
                <span className="ml-2 sm:ml-3 md:ml-4 lg:ml-6 xl:ml-8">
                  2026
                </span>
              </span>
            </h1>

            {/* Venue */}
            <p className="text-base text-gray-700 font-semibold mt-2 sm:text-lg sm:mt-3 md:text-[20px] lg:text-[22px] md:mt-4">
              Venue: Jain Deemed-to-be University, Kochi
            </p>
          </div>

          {/* Event Date Badge */}
          <div className="mt-4 sm:mt-6 md:mt-8">
            <div className="inline-block px-4 py-1.5 bg-blue-50/80 backdrop-blur-sm rounded-full border border-blue-200 sm:px-5 sm:py-2">
              <p className="text-sm text-gray-700 font-medium sm:text-base md:text-lg">
                Kochi, Kerala • September 28-30, 2026
              </p>
            </div>
          </div>
        </div>

        {/* University Logos Section */}
        <div className="relative mt-6 mb-4 sm:mt-8 sm:mb-6 md:mt-10 md:mb-8 lg:mt-12">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden sm:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/50 to-transparent -translate-y-1/2" />

          <div className="flex flex-col items-center justify-center gap-10 sm:flex-row sm:gap-14 md:gap-18 lg:gap-22 xl:gap-24">
            {/* IIT Bombay Logo */}
            <div className="w-full max-w-[320px] sm:max-w-none">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-md border border-gray-200 sm:rounded-2xl sm:p-4 md:p-5">
                <div className="p-1 sm:p-2">
                  <img
                    src="/images/iitbombay.jpg"
                    alt="IIT Bombay"
                    className="w-auto h-[70px] object-contain mx-auto
                             sm:h-[90px]
                             md:h-[110px]
                             lg:h-[130px]
                             xl:h-[150px]
                             2xl:h-[180px]"
                    loading="lazy"
                  />
                </div>
                <p className="mt-2 text-xs font-medium text-gray-600 sm:text-sm sm:mt-3">
                  Indian Institute of Technology Bombay
                </p>
              </div>
            </div>

            {/* JAIN University Logo */}
            <div className="w-full max-w-[480px] sm:max-w-none">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-md border border-gray-200 sm:rounded-2xl sm:p-4 md:p-5">
                <div className="p-1 sm:p-2">
                  <img
                    src="/images/jainDesign.png"
                    alt="JAIN University"
                    className="w-auto h-[55px] object-contain mx-auto
                             sm:h-[70px]
                             md:h-[90px]
                             lg:h-[110px]
                             xl:h-[130px]
                             2xl:h-[150px]
                             3xl:h-[180px]"
                    loading="lazy"
                  />
                </div>
                <p className="mt-2 text-xs font-medium text-gray-600 sm:text-sm sm:mt-3">
                  JAIN (Deemed-to-be University)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Conference Badge */}
        <div className="mt-8 sm:mt-10">
          <div className="inline-block px-4 py-1 bg-gray-100/50 backdrop-blur-sm rounded-full sm:px-5 sm:py-1.5">
            <p className="text-xs text-gray-600 font-medium sm:text-sm">
              18th International Typography Conference
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
