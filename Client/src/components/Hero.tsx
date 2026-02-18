const Hero = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-white via-white to-gray-50 text-center overflow-hidden pt-6 pb-2 px-4 sm:pt-8 sm:pb-4 sm:px-6 md:pt-10 md:pb-6 md:px-8 lg:pt-12">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full opacity-30 sm:opacity-40" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-50 rounded-full opacity-30 sm:opacity-40" />
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
        {/* Typoday Logo */}
        <div className="mb-8 sm:mb-10 md:mb-12 flex justify-center">
          <img
            src="/images/Typoday2026logo.png"
            alt="Typoday 2026 Header"
            className="w-full max-w-[900px] h-auto object-contain"
            loading="lazy"
          />
        </div>
        {/* Event Date Badge */}
        <div className="mt-4 sm:mt-6 md:mt-8">
          <div className="inline-block px-4 py-1.5 bg-blue-50/80 backdrop-blur-sm rounded-full border border-blue-200 sm:px-5 sm:py-2">
            <p className="text-sm text-gray-700 font-medium sm:text-base md:text-lg">
              September 28th, 29th and 30th 2026
            </p>
          </div>
        </div>
        {/* Venue */}
        <p className="text-base text-gray-700 font-bold mt-2 sm:text-lg sm:mt-3 md:text-[20px] lg:text-[22px] md:mt-4">
          Venue: JAIN (Deemed-to-be University) Kochi
        </p>
        <div className="relative mt-6 mb-4 sm:mt-8 sm:mb-6 md:mt-10 md:mb-8 lg:mt-12">
          <div className="hidden sm:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/50 to-transparent -translate-y-1/2" />

          <div className="flex flex-col items-center justify-center gap-10 sm:flex-row sm:gap-14 md:gap-16 lg:gap-20 xl:gap-24">
            {/* IIT Bombay Logo */}
            <div className="w-[320px] h-[160px] sm:w-[360px] sm:h-[180px] md:w-[420px] md:h-[200px] bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-md border-2 border-gray-200 flex items-center justify-center">
              <img
                src="/images/iitbombay.jpg"
                alt="IIT Bombay"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>

            {/* JAIN University Logo */}
            <div className="w-[320px] h-[160px] sm:w-[360px] sm:h-[180px] md:w-[420px] md:h-[200px] bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-md border-2 border-gray-200 flex items-center justify-center">
              <img
                src="/images/jainDesign.png"
                alt="JAIN University"
                className="w-auto h-[70px] object-contain mx-auto sm:h-[90px] md:h-[110px] lg:h-[130px] xl:h-[130px] 2xl:h-[150px] 3xl:h-[180px]"
                loading="lazy"
              />
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
