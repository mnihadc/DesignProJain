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

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Logo */}
          <div className="mb-8 sm:mb-10 md:mb-12 flex justify-center">
            <img
              src="/images/Typoday2026logo.png"
              alt="Typoday 2026 Header"
              className="w-full max-w-[900px] h-auto object-contain"
              loading="lazy"
            />
          </div>

          {/* Date Badge */}
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

          {/* Navigation Buttons */}
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

          {/* University Logos */}
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-10 text-white bg-[#0A2463]">
        {/* Logo Competition Content */}
        <section className="pb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-[#f59e0b]">
            Logo Design Competition
          </h1>

          <div className="space-y-6 text-sm md:text-[15px] leading-relaxed">
            <div className="border-l-4 border-[#f59e0b] pl-4">
              <p className="font-bold text-lg">
                Typographic Dialogues: 'Typographic Intersections: Analogue to
                Digital and Beyond'
              </p>
              <p className="mt-2 text-gray-200">
                Design a logo for 'Typography Day 2026' that reflects the
                event's theme, 'Typographic Intersections: Analogue to Digital
                and Beyond.'
              </p>
            </div>

            <p>
              <span className="font-bold text-[#f59e0b]">Eligibility:</span>{" "}
              Students below 25 years of age. Foreign nationals and non-resident
              Indians are welcome to participate in the competition.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/5 p-6 rounded-xl border border-white/10">
              <div>
                <h2 className="text-lg font-bold mb-3 text-[#f59e0b]">
                  Important Dates:
                </h2>
                <p>
                  Deadline for logo submission:{" "}
                  <span className="font-bold">15th April 2026</span>
                </p>
                <p>
                  Declaration of logo competition results:{" "}
                  <span className="font-bold">20th May 2026</span>
                </p>
              </div>
              <div>
                <h2 className="text-lg font-bold mb-3 text-[#f59e0b]">
                  Submission Stats:
                </h2>
                <p>
                  Maximum of <span className="font-bold">three entries</span>{" "}
                  per participant.
                </p>
                <p className="text-xs italic text-gray-400 mt-1">
                  (Repetition is not allowed.)
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Submission Guidelines</h2>
              <ul className="space-y-4">
                <li>
                  Logo should reflect the theme of the conference. As the
                  conference is being held in{" "}
                  <span className="text-[#f59e0b]">Kochi/Kerala</span>, we
                  encourage you to consider including the context of
                  Kochi/Kerala in your logo.
                </li>
                <li>
                  The logo may use calligraphic or digitally generated
                  letterforms, pre-existing fonts, or a mix of these.{" "}
                  <span className="italic">"Typoday 2026"</span> should be
                  clearly visible in the logo. Participants using fonts in the
                  logo are encouraged to use open source fonts.
                </li>
                <li>
                  Logo should be usable in colour and Black & White, in low
                  resolution in small sizes. The main title{" "}
                  <span className="font-bold">“Typoday 2026”</span> should be
                  clearly visible in sizes as small as{" "}
                  <span className="font-bold">120 by 120 pixels</span> (Example:
                  Instagram DP seen in a mobile phone).
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <h2 className="text-lg font-bold mb-3">Size and Resolution:</h2>
              <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <li className="bg-white/10 p-3 rounded-lg">
                  <span className="block text-xs text-gray-400">Size</span>300mm
                  x 300mm
                </li>
                <li className="bg-white/10 p-3 rounded-lg">
                  <span className="block text-xs text-gray-400">
                    Resolution
                  </span>
                  300 dpi
                </li>
                <li className="bg-white/10 p-3 rounded-lg">
                  <span className="block text-xs text-gray-400">File Type</span>
                  PDF
                </li>
                <li className="bg-white/10 p-3 rounded-lg">
                  <span className="block text-xs text-gray-400">Mode</span>CMYK
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <h2 className="text-xl font-bold mb-4">
                Uploading entries for logo:
              </h2>
              <p className="mb-4">
                Each participant has to upload{" "}
                <span className="font-bold text-[#f59e0b]">
                  THREE SEPARATE FILES:
                </span>
              </p>
              <div className="space-y-4 ml-4">
                <p>
                  <span className="font-bold">1. Final Logo (PDF):</span> Two
                  pages in one PDF. Page 1: Design. Page 2: Brief write-up (max
                  100 words) about the concept in English. No identity marks
                  allowed on these pages.
                </p>
                <p>
                  <span className="font-bold">2. Brief Bio-data:</span> Contact
                  Info (Name, Institution Name/Address, Postal Address, Email,
                  Telephone). Max 100 words in English.
                </p>
                <p>
                  <span className="font-bold">3. Proof of Identity:</span> Copy
                  of ID card of the institution (proof of being a student).
                </p>
              </div>
              <p className="mt-8">
                For online Logo Submission,{" "}
                <a
                  href="https://event.leconfe.com/juk1/scheduled/logo/panel/submissions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f59e0b] font-bold hover:underline"
                >
                  click here
                </a>
              </p>
            </div>
          </div>
        </section>

        <hr className="border-white/20 my-4" />

        {/* Terms and Conditions */}
        <section className="pt-4">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-[#f59e0b]">
            Logo Competition Terms
          </h1>

          <div className="space-y-8 text-sm md:text-[15px] leading-relaxed mt-6">
            <div>
              <h3 className="font-bold text-lg mb-3 underline">
                Jury / Selection Process
              </h3>
              <p>
                All the entries received by the stipulated date and time and
                found in order, shall be evaluated by a Jury panel set up by the
                organisers. No correspondence or enquiry about the identity of
                jury members will be entertained at any point of time. The
                decision of the jury will be final.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-3 underline">
                  Rights of Organisers
                </h3>
                <ul className="list-disc ml-5 space-y-2">
                  <li>
                    The jury has the right to select, reject, or request
                    modifications.
                  </li>
                  <li>
                    Organisers reserve the right to modify and use the final
                    logo in any form/medium.
                  </li>
                  <li>
                    Organisers take no responsibility for legal disputes arising
                    from copyrighted fonts.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3 underline">
                  Prizes & Copyright
                </h3>
                <ul className="list-disc ml-5 space-y-2">
                  <li>
                    Winner will receive{" "}
                    <span className="font-bold text-[#f59e0b]">
                      Rs. 5,000/-
                    </span>{" "}
                    and a citation.
                  </li>
                  <li>
                    Winner must surrender design copyright and submit vector
                    files (.ai and .eps).
                  </li>
                  <li>
                    Final selected logo becomes the intellectual property of
                    organisers.
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-black/20 p-6 rounded-xl border border-white/10">
              <h3 className="font-bold text-lg mb-4 text-[#f59e0b]">
                Undertaking - Plagiarism / Non-AI / Copyrights
              </h3>
              <div className="space-y-3">
                <p>
                  The logo must be original work and not infringe any
                  third-party IP rights. Declaration of originality is
                  mandatory.
                </p>
                <p className="font-bold text-red-400">
                  AI generated logos will not be accepted in this competition.
                </p>
                <p>
                  If the name of the designer is mentioned in the logo, directly
                  or indirectly, the entry will be disqualified. All data about
                  identity should be in a separate file.
                </p>
              </div>
            </div>

            <div className="text-center pt-6">
              <p className="text-gray-300">
                If you have any queries, please do not hesitate to contact us:
              </p>
              <a
                href="mailto:help@typoday.org"
                className="text-[#f59e0b] text-xl font-bold hover:underline"
              >
                help@typoday.org
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LogoDesignCompetition;
