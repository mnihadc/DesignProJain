import { Link } from "react-router-dom";

const LogoDesignCompetition = () => {
  return (
    <div className="min-h-screen bg-[#0A2463]">
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
            <Link
              to="/call-for-papers"
              className="px-4 py-2 text-sm sm:text-base font-semibold text-white bg-[#001C54] rounded-[10px] hover:bg-[#001C54]/80 transition-colors duration-200"
            >
              Call for Papers
            </Link>
            <Link
              to="/logo-design-competition"
              className="px-4 py-2 text-sm sm:text-base font-semibold text-white bg-[#f59e0b] rounded-[10px] hover:bg-[#f59e0b]/80 transition-colors duration-200"
            >
              Logo Design Competition
            </Link>
            <Link
              to="/poster-design-competition"
              className="px-4 py-2 text-sm sm:text-base font-semibold text-white bg-[#001C54] rounded-[10px] hover:bg-[#001C54]/80 transition-colors duration-200"
            >
              Poster Design Competition
            </Link>
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
      <div className="w-full bg-[#0A2463] text-white px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12 lg:px-12 lg:py-14 slide-up-section">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-[#f59e0b]">
            Logo Design Competition
          </h1>

          <div className="space-y-6 sm:space-y-7 text-xs sm:text-sm md:text-[15px] leading-relaxed">
            <div>
              <p className="mb-3">
                <span className="font-semibold">Typographic Dialogues: 'Typographic Intersections: Analogue to Digital and Beyond'</span>
              </p>
            </div>

            <p>
              Design a logo for 'Typography Day 2026' that reflects the event's theme, 'Typographic Intersections: Analogue to Digital and Beyond.'
            </p>

            <p>
              <span className="font-semibold">Eligibility:</span> Students below 25 years of age. Foreign nationals and non-resident Indians are welcome to participate in the competition.
            </p>

            <h2 className="text-lg sm:text-xl font-bold mt-8 mb-4">
              Important Dates:
            </h2>
            <p className="mb-2">
              <span className="text-[#f59e0b] font-semibold">Deadline for logo submission: <span className="font-bold">15th April 2026</span>
            </p>
            <p>
              <span className="text-[#f59e0b] "font-semibold">Declaration of logo competition results: <span className="font-bold">20th May 2026</span>
            </p>

            <h2 className="text-lg sm:text-xl font-bold mt-8 mb-4">
              Submission Guidelines
            </h2>
            <p className="mb-3">
              Logo should reflect the theme of the conference. As the conference is being held in Kochi/Kerala, we encourage you to consider including the context of Kochi/Kerala in your logo.
            </p>
            <p className="mb-3">
              The logo may use calligraphic or digitally generated letterforms, pre-existing fonts, or a mix of these. "Typoday 2026" should be clearly visible in the logo. Participants using fonts in the logo are encouraged to use open source fonts. The organisers do not take any responsibility for legal disputes arising out of copyrighted fonts used in the logo.
            <p className="mb-3">
              Logo should be usable in colour and Black&White, in low resolution in small sizes. The main title “Typoday 2026” should be clearly visible in Colour and Black and White in sizes as small as 120 by 120 pixels (Example: Instagram DP seen in a mobilephone)
            </p>
            <p className="mb-3">
              The logo should be of the size and specification given below:
            </p>

            <p className="mb-2">Size of the final logo: 300mm x 100mm</p>
            <p className="mb-2">Resolution: 300 dpi</p>
            <p className="mb-2">File type: PDF</p>
            <p className="mb-3">Color Mode: CMYK</p>

            <h2 className="text-lg sm:text-xl font-bold mt-8 mb-4">
              Uploading entries for logo:
            </h2>
            <p className="mb-3">
              Each participant has to upload <span className="font-semibold">THREE SEPARATE FILES:</span>
            </p>
            <p className="mb-3">
              <span className="font-semibold">1. The final logo/s</span> in PDF format, with two pages in one PDF file: Final design in one page and next page with a brief write (not exceeding 100 words) up about the design concept. Write up should be in English. Identity of the participant should not be mentioned anywhere, directly or indirectly in these two pages.
              <span className="font-semibold">2.Brief bio data</span>
            </p>
            <p className="mb-3">
             Contact Info: Name, Name and Address of Institution, Postal Address, Email, Telephone Number.
            </p>
            <p className="mb-3">
              Bio-data/personal information: Maximum of 100 words - in English.
            </p>
            <p className="mb-3">
              <span className="font-semibold">3. Copy of the id card</span> of the institution (proof of being a student)
            </p>
              <p className="mb-3"> Participants should upload the final logo </p>

            <p className="mb-3 font-semibold">
              Each participant is allowed a maximum of three entries.
            </p>
            <p className="mb-3 font-semibold">(Repetition is not allowed.)</p>
            <p className="mb-3">
              For online Logo Submission <a href="https://event.leconfe.com/juk1/scheduled/logo/panel/submissions" target="_blank" rel="noopener noreferrer" className="text-[#f59e0b] hover:underline">click here</a>
            </p>
            <p className="mb-3">
              If you have any queries, please do not hesitate to contact us:
            </p>
            <p>
              mailing it to: <a href="mailto:help@typoday.org" className="text-[#f59e0b] hover:underline">help@typoday.org</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoDesignCompetition;
