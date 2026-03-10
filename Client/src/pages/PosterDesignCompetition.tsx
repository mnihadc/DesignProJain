const PosterDesignCompetition = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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
            Venue: JAIN (Deemed-to-be University), Kochi
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-4 sm:mt-5 md:mt-6">
            <a
              href="#"
              className="px-4 py-2 text-sm sm:text-base font-semibold text-white bg-[#001C54] rounded-[10px] hover:bg-[#001C54]/80 transition-colors duration-200"
            >
              Call for Papers
            </a>
            <a
              href="#"
              className="px-4 py-2 text-sm sm:text-base font-semibold text-white bg-[#001C54] rounded-[10px] hover:bg-[#001C54]/80 transition-colors duration-200"
            >
              Logo Design Competition
            </a>
            <a
              href="#"
              className="px-4 py-2 text-sm sm:text-base font-semibold text-white bg-[#f59e0b] rounded-[10px] hover:bg-[#f59e0b]/80 transition-colors duration-200"
            >
              Poster Design Competition
            </a>
          </div>

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

      {/* Poster Design Competition Content Section */}
      <div className="w-full bg-[#0A2463] text-white px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12 lg:px-12 lg:py-14">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-[#f59e0b]">
            Poster Design Competition
          </h1>

          <div className="space-y-6 sm:space-y-7 text-xs sm:text-sm md:text-[15px] leading-relaxed">
            {/* Theme */}
            <div>
              <h2 className="text-lg sm:text-xl font-bold mb-3 text-[#f59e0b]">
                Theme: 'Typographic Intersections: Analogue to Digital and Beyond'
              </h2>
              <p className="mb-3">
                Design a poster to represent Typographic Intersections: Analogue to Digital and Beyond.
              </p>
              <p className="mb-3">
                Identify the cultural, social, or political issues of our times and present the poster.
              </p>
              <p className="mb-3">
                Any font, size, script and typeface of any script can be used.
              </p>
              <p>
                You can make use of text, or image, or a combination of both, or even a paragraph or poem of words.
              </p>
            </div>

            {/* Submission Specifications */}
            <div>
              <h2 className="text-lg sm:text-xl font-bold mb-3">
                Submission Specifications:
              </h2>
              <p className="mb-2">
                You need to submit the solution along with a brief write-up of around 100 words.
              </p>
              <p className="mb-2">
                All poster submissions should be of the size and specification given below:
              </p>
              <p className="mb-2">
                Size: 24x36" (Full poster: 4 ft height x 3ft width) in portrait format
              </p>
              <p className="mb-2">Resolution: 300 dpi</p>
              <p className="mb-2">File type: PDF</p>
              <p>Color Mode: CMYK</p>
            </div>

            {/* Deadline */}
            <div>
              <h2 className="text-lg sm:text-xl font-bold mb-3">
                Deadline for poster submission: 18th June 2026
              </h2>
              <p>
                Declaration of poster competition results: 1st August 2026
              </p>
            </div>

            {/* Uploading entries-Poster */}
            <div>
              <h2 className="text-lg sm:text-xl font-bold mb-3">
                Uploading entries-Poster
              </h2>
              <p className="mb-2">
                Each participant has to upload TWO SEPARATE FILES:
              </p>
              <p className="mb-2">
                1. The final poster/s - A PDF file. Each poster PDF file should not accompany or be accompanied by any other means revealing the concept of the poster (like designer's note). The documentation should be in english only, including any written content in the poster. The documentation should be in english only, including any written content in the poster. If the participant should use the regional language, they should also provide the english translation of the same in a separate file.
              </p>
              <p className="mb-2">
                Name of the participant should not be mentioned anywhere in the poster.
              </p>
            </div>

            {/* Brief Bio data */}
            <div>
              <h2 className="text-lg sm:text-xl font-bold mb-3">
                2.Brief bio data
              </h2>
              <p className="mb-2">
                Contain the: Name and Address of Institution (if you are a student), Postal Address, Email, Telephone Number,
              </p>
              <p className="mb-2">
                Brief bio of 100 words maximum. Maximum of 100 words - E-dition
              </p>
              <p className="mb-2">
                Each participant is allowed a maximum of three entries.
              </p>
              <p className="mb-2">(Repetition is not allowed.)</p>
              <p>
                For further logo submission <a href="#" className="text-[#f59e0b] hover:underline">click here</a>
              </p>
            </div>

            {/* Contact */}
            <div>
              <p>
                If you have any queries please do not hesitate to contact us:
              </p>
              <p>
                <a href="mailto:typoday@iitb.ac.in" className="text-[#f59e0b] hover:underline">
                  typoday@iitb.ac.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosterDesignCompetition;
