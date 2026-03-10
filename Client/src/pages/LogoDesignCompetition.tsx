const LogoDesignCompetition = () => {
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
              href="/call-for-papers"
              className="px-4 py-2 text-sm sm:text-base font-semibold text-white bg-[#001C54] rounded-[10px] hover:bg-[#001C54]/80 transition-colors duration-200"
            >
              Call for Papers
            </a>
            <a
              href="/logo-design-competition"
              className="px-4 py-2 text-sm sm:text-base font-semibold text-white bg-[#f59e0b] rounded-[10px] hover:bg-[#f59e0b]/80 transition-colors duration-200"
            >
              Logo Design Competition
            </a>
            <a
              href="/poster-design-competition"
              className="px-4 py-2 text-sm sm:text-base font-semibold text-white bg-[#001C54] rounded-[10px] hover:bg-[#001C54]/80 transition-colors duration-200"
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

      {/* Logo Design Competition Content Section */}
      <div className="w-full bg-[#0A2463] text-white px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12 lg:px-12 lg:py-14">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-[#f59e0b]">
            Logo Design Competition
          </h1>

          <div className="space-y-6 sm:space-y-7 text-xs sm:text-sm md:text-[15px] leading-relaxed">
            <div>
              <p className="mb-3">
                <span className="font-semibold text-gray-300">Typographic Dialogues:</span>{" "}
                <span className="font-bold">'Typographic Intersections: Analogue to Digital and Beyond'</span>
              </p>
            </div>

            <p className="text-gray-300">
              Design a logo for 'Typography Day 2026' that reflects the event's theme, 'Typographic Intersections: Analogue to Digital and Beyond.'
            </p>

            <p className="text-gray-300">
              As the conference is being held in Kochi/Kerala, we encourage you to include the context of Kochi/Kerala in your design of the logo.
            </p>

            <p className="text-gray-300">
              The logo may use calligraphic or digitally generated letterforms, pre-existing fonts, or a mix of these. "Typography Day 2026" or "Typo Day 2026" should also appear in the logo.
            </p>

            <p className="text-gray-300">
              The resulting logo should be of the size and specification given below. Only students are eligible to participate in this competition. Both foreign nationals and non-resident Indians are welcome to participate in the competition.
            </p>

            <h2 className="text-lg sm:text-xl font-bold mt-8 mb-4">
              Procedure for selecting student participants:
            </h2>
            <p className="text-gray-300">
              One idea will be finalized from the submitted lot. The jury will have the right to select, reject, or request modifications for the selected logo.
            </p>

            <h2 className="text-lg sm:text-xl font-bold mt-8 mb-4">
              Submission Specifications:
            </h2>
            <p className="text-gray-300">
              You need to submit the solution along with a brief write-up of around 100 words written in English language.
            </p>

            <h2 className="text-lg sm:text-xl font-bold mt-8 mb-4">
              Size and Resolution:
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Size of the final logo: 300mm x 100mm only in wide format</li>
              <li>Resolution: 300 dpi</li>
              <li>File type: PDF</li>
              <li>Color Mode: CMYK</li>
            </ul>

            <h2 className="text-lg sm:text-xl font-bold mt-8 mb-4">
              Write-up + contact info + bio:
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Format: PDF</li>
              <li>Write up about the design: Maximum 100 words and should be written in the English language.</li>
              <li>Contact Info: Name, Postal Address, Email, Telephone Number, and Name and Address of Institution in English.</li>
              <li>Your bio-data/personal information: Maximum of 100 words and should be written in English.</li>
            </ul>

            <p className="text-gray-300">
              Each participant is allowed a maximum of three entries.
              <br />
              (Repetition is not allowed.)
            </p>

            <p className="mt-6">
              <strong>For online Logo Submission &lt;click here&gt;</strong>
              <br />
              <span>The EasyChair window opens for Logo Submission - 1st January 2026</span>
            </p>

            <h2 className="text-lg sm:text-xl font-bold mt-8 mb-4">
              Important Dates:
            </h2>
            <div className="text-gray-300">
              <p className="mb-3">
                <span className="font-semibold">Deadline for logo submission:</span>{" "}
                <span className="font-bold text-white">28th February 2026</span>
              </p>
              <p>
                <span className="font-semibold">Declaration of logo results:</span>{" "}
                <span className="font-bold text-white">14th April 2026</span>
              </p>
            </div>

            <p className="mt-8">
              If you have any queries, please do not hesitate to contact us:
              <br />
              <span className="text-gray-300">Mailing it to: </span>
              <a href="mailto:help@typoday.org" className="text-[#f59e0b] hover:underline font-semibold">
                help@typoday.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoDesignCompetition;
