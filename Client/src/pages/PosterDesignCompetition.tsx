import { Link } from "react-router-dom";

const PosterDesignCompetition = () => {
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
              className="px-4 py-2 text-sm sm:text-base font-semibold text-white bg-[#001C54] rounded-[10px] hover:bg-[#001C54]/80 transition-colors duration-200"
            >
              Logo Design Competition
            </Link>
            <Link
              to="/poster-design-competition"
              className="px-4 py-2 text-sm sm:text-base font-semibold text-white bg-[#f59e0b] rounded-[10px] hover:bg-[#f59e0b]/80 transition-colors duration-200"
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
                  loading="lazy"
                />
              </div>
              <div className="w-[320px] h-[160px] sm:w-[360px] sm:h-[180px] md:w-[420px] md:h-[200px] bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-md border-2 border-gray-200 flex items-center justify-center">
                <img
                  src="/images/jainDesign.png"
                  alt="JAIN University"
                  className="w-auto h-[70px] object-contain mx-auto sm:h-[90px] md:h-[110px] lg:h-[130px]"
                  loading="lazy"
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

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-12 text-white bg-[#0A2463]">
        {/* Competition Details */}
        <section className="pb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-[#f59e0b]">
            Poster Design Competition
          </h1>

          <div className="space-y-6 text-sm md:text-[15px] leading-relaxed">
            <div>
              <h2 className="text-lg font-bold mb-3 border-l-4 border-[#f59e0b] pl-3">
                Theme: 'Typographic Intersections: Analogue to Digital and
                Beyond'
              </h2>
<<<<<<< HEAD
              <p className="mb-3 font-medium">
                Design a poster to represent 'Typographic Intersections:
                Analogue to Digital and Beyond.'
              </p>
              <ul className="list-disc ml-5 space-y-2">
                <li>
                  Handcrafted, Calligraphic, digitally created letterforms or
                  digital fonts can be used in the poster.
                </li>
                <li>
                  Any language, script and typeface of any script can be used.
                </li>
                <li>
                  You can make use of one letter, one word, many words, or even
                  a paragraph composed of words.
                </li>
              </ul>
            </div>
=======
              <p className="mb-3">
                Design a poster to represent ‘Typographic Intersections: Analogue to Digital and Beyond.‘ 
Handcrafted, Calligraphic, digitally created letterforms or digital fonts can be used in the poster.
              </p>
              <p className="mb-3">
                Any  language, script and typeface of any script can be used. 
You can make use of one letter, one word, many words, or even a paragraph composed of words.
              </p>
>>>>>>> 2b33fa671820c844acf7c657f10c4319fc159c22

            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <h2 className="text-lg font-bold mb-4 text-[#f59e0b]">
                Submission Specifications:
              </h2>
<<<<<<< HEAD
              <p className="mb-4">
                You need to submit the solution along with a brief write-up of
                around 150 words. All poster submissions should be of the size
                and specification given below:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ul className="space-y-1">
                  <li>
                    <span className="font-semibold text-blue-300">Size:</span> 4
                    ft height x 3ft width
                  </li>
                  <li>
                    <span className="font-semibold text-blue-300">
                      Orientation:
                    </span>{" "}
                    Portrait format only
                  </li>
                  <li>
                    <span className="font-semibold text-blue-300">
                      Resolution:
                    </span>{" "}
                    300 dpi
                  </li>
                </ul>
                <ul className="space-y-1">
                  <li>
                    <span className="font-semibold text-blue-300">
                      File type:
                    </span>{" "}
                    PDF
                  </li>
                  <li>
                    <span className="font-semibold text-blue-300">
                      Color Mode:
                    </span>{" "}
                    CMYK
                  </li>
                </ul>
              </div>
=======
              <p className="mb-2">
                You need to submit the solution along with a brief write-up of around 150 words.
              </p>
              <p className="mb-2">
                All poster submissions should be of the size and specification given below.
              </p>
              <p className="mb-2">
                Size of the final poster: 4 ft height x 3ft width only in portrait format
              </p>
              <p className="mb-2">Resolution: 300 dpi</p>
              <p className="mb-2">File type: PDF</p>
              <p>Color Mode: CMYK</p>
>>>>>>> 2b33fa671820c844acf7c657f10c4319fc159c22
            </div>

            <div>
<<<<<<< HEAD
              <p className="text-[#f59e0b] font-bold text-lg">
                Deadline for poster submission: 10th June 2026
              </p>
              <p className="font-bold">
                Declaration of poster competition results: 1st August 2026
=======
              <p className="mb-2">
                <span className="text-[#f59e0b] font-semibold">Deadline for poster submission: <span className="font-bold"> 10th June 2026 </span>
              </p>
              <p>
                <span className="text-[#f59e0b] font-semibold">Declaration of poster competition results: <span className="font-bold"> 1st August 2026</span>
>>>>>>> 2b33fa671820c844acf7c657f10c4319fc159c22
              </p>
            </div>

            <div>
<<<<<<< HEAD
              <h2 className="text-lg font-bold mb-3">
                Uploading entries-Poster:
              </h2>
              <p className="mb-4">
                Each participant has to upload{" "}
                <span className="font-semibold">TWO SEPARATE FILES:</span>
              </p>
              <div className="space-y-4">
                <p>
                  <span className="font-bold text-blue-300">
                    1. The final poster/s:
                  </span>{" "}
                  In PDF format. Each poster PDF file would be accompanied by a
                  brief write up explaining the concept of the poster in a
                  SEPARATE PAGE. The explanation should be in English, not
                  exceeding 100 words. Identity of the participant should not be
                  mentioned anywhere, directly or indirectly in these two pages.
                  If you are uploading multiple entries, each poster should
                  accompany a write up.
                </p>
                <p>
                  <span className="font-bold text-blue-300">
                    2. Brief bio data:
                  </span>{" "}
                  Contact Info (Name, Institution Name and Address, Postal
                  Address, Email, Telephone Number). Bio-data/personal
                  information: Maximum of 100 words in English.
                </p>
              </div>
              <p className="mt-6 font-semibold bg-white/10 inline-block px-4 py-2 rounded">
                Each participant is allowed a maximum of three entries.
                (Repetition is not allowed.)
              </p>
              <p className="mt-6">
                For online Poster Submission{" "}
                <a
                  href="https://event.leconfe.com/juk1/scheduled/Poster/panel/submissions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f59e0b] font-bold hover:underline"
                >
                  click here
=======
              <h2 className="text-lg sm:text-xl font-bold mb-3">
                Uploading entries-Poster:
              </h2>
              <p className="mb-2">
                Each participant has to upload <span className="font-semibold">Two SEPARATE FILES:</span>
              </p>
              <p className="mb-2">
                <span className="font-semibold">1. The final poster/s</span> in PDF format. Each poster PDF file would be accompanied by a brief write up explaining the concept of the poster in a
SEPARATE PAGE. The explanation should be in english, not exceeding 100 words.
              </p>
              <p className="mb-2">
                Identity of the participant should not be mentioned anywhere, directly or indirectly in these two pages.
              </p>
              <p> If you are uploading multiple entries, each poster should accompany a write up.
</p>
            </div>

            {/* Brief Bio data */}
            <div>
              <h2 className="text-lg sm:text-xl font-bold mb-3">
                2.Brief bio data
              </h2>
              <p className="mb-2">
                Contact Info: Name, Name and Address of Institution (if you are a student), Postal Address, Email, Telephone Number.
              </p>
              <p className="mb-2">
                Bio-data/personal information: Maximum of 100 words  in English.
              </p>
              <p className="mb-2">
                <span className="font-semibold">Each participant is allowed a maximum of three entries.</span>
              </p>
              <p className="mb-2"><span className="font-semibold">(Repetition is not allowed.)</span>
              </p>
              <p>
                For online Poster Submission <a href="https://event.leconfe.com/juk1/scheduled/Poster/panel/submissions" target="_blank" rel="noopener noreferrer" className="text-[#f59e0b] hover:underline">click here</a>
              </p>
            </div>

            {/* Contact */}
            <div>
              <p>
                If you have any queries, please do not hesitate to contact us:
              </p>
              <p>
                mailing it to: <a href="mailto:help@typoday.org" className="text-[#f59e0b] hover:underline">
                  help@typoday.org
>>>>>>> 2b33fa671820c844acf7c657f10c4319fc159c22
                </a>
              </p>
            </div>
          </div>
        </section>

        <hr className="border-white/10 my-8" />

        {/* Terms and Conditions Section */}
        <section>
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-[#f59e0b]">
            Terms and Conditions
          </h1>
          <h2 className="text-xl font-bold mb-6">Poster competition</h2>

          <div className="space-y-8 text-sm md:text-[15px] leading-relaxed">
            <p>
              Participation in this competition is open to students, faculty
              members, and professionals. It is inclusive of all individuals,
              non-resident Indians and foreign nationals.
            </p>

            <div>
              <h3 className="font-bold underline mb-3">
                Jury/ selection process
              </h3>
              <p>
                All the entries received by the stipulated date and time and
                found in order, shall be evaluated by a Jury panel set up by the
                organisers. No correspondence or enquiry about the identity of
                jury members will be entertained by the organisers at any point
                of time. The decision of the jury will be final.
              </p>
              <p className="mt-3">
                <span className="font-bold">Rights of the organisers:</span> The
                jury will have the right to select, reject, or request
                modifications for the selected posters.
              </p>
            </div>

            <div>
              <h3 className="font-bold underline mb-3">Winner Incentives</h3>
              <ul className="list-disc ml-5 space-y-2">
                <li>
                  Winning entries will be published as a book and displayed in
                  an exhibition during the event.
                </li>
                <li>
                  The winners are entitled to a 20% discount in registration
                  fees for the event.
                </li>
                <li>
                  Winners of the first and second prize in the Poster
                  competition will be given free registration for the event
                  (Does NOT include travel and accommodation).
                </li>
                <li>
                  All winning participants will receive a copy of the book and
                  the 'Certificate of Winning the Poster Competition'.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold underline mb-3">
                Undertaking - plagiarism/non-AI/copyrights
              </h3>
              <ul className="list-decimal ml-5 space-y-3">
                <li>
                  The poster should be the original work of the participant and
                  must not infringe the Intellectual Property Rights of any
                  third party.
                </li>
                <li>
                  Total responsibility of originality and plagiarism free
                  content is with the participant.
                </li>
                <li>
                  The organisers do not take any responsibility on any legal
                  disputes arising out of copyrighted materials or fonts used.
                </li>
                <li>
                  <span className="font-bold text-[#f59e0b]">
                    AI generated posters will not be accepted in this
                    competition.
                  </span>
                </li>
                <li>
                  The final selected poster shall become the intellectual
                  property of the organisers and the designer shall not have any
                  right over the same.
                </li>
                <li>
                  If the name of the designer is mentioned in the poster,
                  directly or indirectly, the entry will be disqualified.
                </li>
                <li>
                  All data about the identity of the designer should be uploaded
                  in a separate file.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 p-6 bg-blue-900/30 rounded-xl text-center border border-blue-800">
            <p>
              If you have any queries, please do not hesitate to contact us at:{" "}
              <a
                href="mailto:help@typoday.org"
                className="text-[#f59e0b] hover:underline font-bold"
              >
                help@typoday.org
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PosterDesignCompetition;
