import { Link } from "react-router-dom";

const LogoDesignCompetition = () => {
  return (
    <div className="min-h-screen bg-[#0A2463]">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-b from-white via-white to-gray-50 text-center overflow-hidden pt-6 pb-2 px-4 sm:pt-8 sm:pb-4 sm:px-6 md:pt-10 md:pb-6 md:px-8 lg:pt-12">
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

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="mb-8 sm:mb-10 md:mb-12 flex justify-center">
            <img
              src="/images/Typoday2026logo.png"
              alt="Typoday 2026 Header"
              className="w-full max-w-[900px] h-auto object-contain"
              loading="lazy"
            />
          </div>

          <div className="mt-4 sm:mt-6 md:mt-8">
            <div className="inline-block px-4 py-1.5 bg-blue-50/80 backdrop-blur-sm rounded-full border border-blue-200 sm:px-5 sm:py-2">
              <p className="text-sm text-gray-700 font-medium sm:text-base md:text-lg">
                September 28th, 29th and 30th 2026
              </p>
            </div>
          </div>

          <p className="text-base text-gray-700 font-bold mt-2 sm:text-lg sm:mt-3 md:text-[20px] lg:text-[22px] md:mt-4">
            Venue: JAIN (Deemed-to-be University), Kochi
          </p>

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
            <div className="flex flex-col items-center justify-center gap-10 sm:flex-row sm:gap-14 md:gap-16 lg:gap-20 xl:gap-24">
              <div className="w-[320px] h-[160px] sm:w-[360px] sm:h-[180px] md:w-[420px] md:h-[200px] bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-md border-2 border-gray-200 flex items-center justify-center">
                <img
                  src="/images/iitbombay.jpg"
                  alt="IIT Bombay"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-[320px] h-[160px] sm:w-[360px] sm:h-[180px] md:w-[420px] md:h-[200px] bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-md border-2 border-gray-200 flex items-center justify-center">
                <img
                  src="/images/jainDesign.png"
                  alt="JAIN University"
                  className="w-auto h-[70px] object-contain mx-auto sm:h-[90px] md:h-[110px] lg:h-[130px]"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 sm:mt-10">
            <div className="inline-block px-4 py-1 bg-gray-100/50 backdrop-blur-sm rounded-full sm:px-5 sm:py-1.5">
              <p className="text-xs text-gray-600 font-medium sm:text-sm">
                18th International Typography Conference
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-10 text-white bg-[#0A2463] slide-up-section">
        <section className="pb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-[#f59e0b]">
            Logo Design Competition
          </h1>

          <div className="text-sm md:text-[15px] leading-relaxed space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#f59e0b]">
              Typographic Dialogues: 'Typographic Intersections: Analogue to Digital and Beyond'
            </h2>

            <p>
              Design a logo for 'Typography Day 2026' that reflects the event's theme,
              'Typographic Intersections: Analogue to Digital and Beyond.'
            </p>
            <p>
              <span className="font-bold">Eligibility</span>: Students below 25 years of age. Foreign nationals and non-resident
              Indians are welcome to participate in the competition.
            </p>
            <p><span className="font-bold">Important Dates:</span></p>
            <p>
              Deadline for logo submission: <span className="font-bold text-[#f59e0b]">15th April 2026</span>
            </p>
            <p>
              Declaration of logo competition results: <span className="font-bold text-[#f59e0b]">20th May 2026</span>
            </p>

            <p><span className="font-bold">Submission Guidelines</span></p>
            <p>
              Logo should reflect the theme of the conference. As the conference is being held in
              Kochi/Kerala, we encourage you to consider including the context of Kochi/Kerala in your logo.
            </p>
            <p>
              The logo may use calligraphic or digitally generated letterforms, pre-existing fonts,
              or a mix of these. "Typoday 2026" should be clearly visible in the logo. Participants
              using fonts in the logo are encouraged to use open source fonts. The organisers do
              not take any responsibility for legal disputes arising out of copyrighted fonts used in
              the logo.
            </p>
            <p>
              Logo should be usable in colour and Black&White, in low resolution in small sizes.
              The main title "Typoday 2026" should be clearly visible in Colour and Black and
              White in sizes as small as 120 by 120 pixels (Example: Instagram DP seen in a
              mobilephone)
            </p>
            <p>The logo should be of the size and specification given below.</p>
            <p>Size and Resolution:</p>
            <p>Size of the final logo: 300mm x 300mm</p>
            <p>Resolution: 300 dpi&nbsp;&nbsp;File type: PDF</p>
            <p>Color Mode: CMYK</p>

            <h2 className="text-xl sm:text-2xl font-bold text-[#f59e0b] pt-4">
              Uploading entries for logo:
            </h2>
            <p>Each participant has to upload <span className="font-bold">THREE SEPARATE FILES:</span></p>
            <p>
              <span className="font-bold">1. The final logo</span> in PDF format, with two pages in one PDF file: Final design in
              one page and next page with a brief write (not exceeding 100 words) up about the
              design concept. Write up should be in English. Identity of the participant should not
              be mentioned anywhere, directly or indirectly in these two pages.
            </p>
            <p><span className="font-bold">2.Brief bio data</span></p>
            <p>Contact Info: Name, Name and Address of Institution, Postal Address, Email, Telephone Number.</p>
            <p>Bio-data/personal information: Maximum of 100 words in English.</p>
            <p>
              <span className="font-bold">3. Copy of ID card</span> of the institution (proof of being a student)
            </p>
            <p>Participants should upload the final logo</p>
            <p className="font-bold">Each participant is allowed a maximum of three entries.</p>
            <p className="font-bold">(Repetition is not allowed.)</p>
            <p>
              For online Logo Submission &lt;
              <a
                href="https://event.leconfe.com/juk1/scheduled/Poster/login"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f59e0b] font-bold hover:underline"
              >
                click here
              </a>
              &gt;
            </p>
            <p>If you have any queries, please do not hesitate to contact us:</p>
            <p>
              mailing it to:{" "}
              <a href="mailto:help@typoday.org" className="text-[#f59e0b] hover:underline">
                help@typoday.org
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LogoDesignCompetition;
