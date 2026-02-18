const TermsAndConditions = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Same as Homepage */}
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

      {/* Terms and Conditions Content Section */}
      <div className="w-full bg-[#0A2463] text-white px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12 lg:px-12 lg:py-14">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-[#f59e0b]">
            Terms and Conditions of Typoday 2026
          </h1>

          {/* Logo Competition Section */}
          <section className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5 md:mb-6">
              Logo competition
            </h2>

            <div className="space-y-4 sm:space-y-5 text-xs sm:text-sm md:text-[15px] leading-relaxed">
              <div>
                <h3 className="font-semibold mb-2">
                  Jury/ selection process
                </h3>
                <p>
                  All the entries received by the stipulated date and time and found in order, shall be evaluated by a Jury panel set up by the organisers. No correspondence or enquiry about the identity of jury members will be entertained by the organisers at any point of time. The decision of the jury will be final.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">
                  Rights of the organisers:
                </h3>
                <p className="mb-2">
                  The jury will have the right to select, reject, or request modifications for the selected logo.
                </p>
                <p className="mb-2">
                  Organisers reserve the right to modify and use the final logo in any form, in any medium as deemed fit.
                </p>
                <p>
                  Participants using fonts in the logo are encouraged to use open source fonts only. The organisers do not take any responsibility arising out of copyrighted fonts used in the logo.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">
                  Undertaking - plagiarism/non-AI/copyrights:
                </h3>
                <p className="mb-2">
                  The logo should be the original work of the participant and must not infringe the Intellectual Property Rights of any third party.
                </p>
                <p className="mb-2">
                  Declaration that all concepts, ideas, visuals used in the logo are original and belong to the participant is mandatory while taking part in this competition.
                </p>
                <p className="mb-2">
                  Total responsibility of originality and plagiarism free content is with the participant. The organisers do not take any responsibility arising out of legal disputes on copyrighted materials used in the logo or any disputes arising out of the IP rights of the idea, concept and contents of the final logo.
                </p>
                <p className="mb-2">
                  The organisers do not take any responsibility for legal disputes arising out of copyrighted fonts used in the logo.
                </p>
                <p className="mb-2">
                  AI generated logos will not be accepted in this competition.
                </p>
                <p className="mb-2">
                  The entries sent once shall not be returned.
                </p>
                <p className="mb-2">
                  The final selected logo shall become the intellectual property of the organisers and the designer shall not have any right over the same.
                </p>
                <p className="mb-2">
                  The responsibility to comply with the guidelines and other conditions fully lies with the participant and the organisers shall not be liable for any dispute raised by a third party.
                </p>
                <p className="mb-2">
                  The Designer of the finally selected logo will get a prize of Rs.5,000/- with a citation and would be required to surrender copyright of the design to the organisers of Typoday 2026 conference.
                </p>
                <p className="mb-2">
                  Designer of the winning logo should submit the vector file of the logo in .ai and .eps formats
                </p>
                <p className="mb-2">
                  If the name of the designer is mentioned in the logo, directly or indirectly, the entry will be disqualified.
                </p>
                <p>
                  All data about the identity of the designer should be uploaded in a separate file.
                </p>
              </div>
            </div>
          </section>

          {/* Poster Competition Section */}
          <section className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5 md:mb-6">
              Poster competition
            </h2>

            <div className="space-y-4 sm:space-y-5 text-xs sm:text-sm md:text-[15px] leading-relaxed">
              <p>
                Participation in this competition is open to students, faculty members, and professionals. It is inclusive of all individuals, non-resident Indians and foreign nationals.
              </p>

              <div>
                <h3 className="font-semibold mb-2">
                  Selection procedure for winners:
                </h3>
              </div>

              <div>
                <h3 className="font-semibold mb-2">
                  Jury/ selection process
                </h3>
                <p>
                  All the entries received by the stipulated date and time and found in order, shall be evaluated by a Jury panel set up by the organisers. No correspondence or enquiry about the identity of jury members will be entertained by the organisers at any point of time. The decision of the jury will be final.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">
                  Rights of the organisers:
                </h3>
                <p className="mb-2">
                  The jury will have the right to select, reject, or request modifications for the selected posters.
                </p>
                <p className="mb-2">
                  Winning entries will be published as a book and displayed in an exhibition during the event. The winners are entitled to a 20% discount in registration fees for the event.
                </p>
                <p className="mb-2">
                  Winners of the first and second prize in the Poster competition will be given free registration for the event.
                </p>
                <p className="mb-2">
                  This does NOT include travel and accommodation.
                </p>
                <p className="mb-2">
                  All winning participants will receive a copy of the book and will also be given the 'Certificate of Winning the Poster Competition'.
                </p>
                <p>
                  Participants of poster competition are encouraged to use open source fonts only. If any copyrighted fonts are used in the poster entry, the organisers do not take any responsibility for legal disputes arising out of copyrighted fonts used in the poster.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">
                  Undertaking - plagiarism/non-AI/copyrights /
                </h3>
                <p className="mb-2">
                  The poster should be the original work of the participant and must not infringe the Intellectual Property Rights of any third party.
                </p>
                <p className="mb-2">
                  Declaration that all concepts, ideas, visuals used in the poster are original and belong to the participant is mandatory while taking part in this competition.
                </p>
                <p className="mb-2">
                  Total responsibility of originality and plagiarism free content is with the participant. The organisers do not take any responsibility on any legal disputes arising out of copyrighted materials used in the poster or IP rights of the visuals, idea, concept and contents of the final poster.
                </p>
                <p className="mb-2">
                  The organisers do not take any responsibility on any legal dispute arising out of copyrighted fonts used in the poster.
                </p>
                <p className="mb-2">
                  AI generated posters will not be accepted in this competition.
                </p>
                <p className="mb-2">
                  The entries sent once shall not be returned.
                </p>
                <p className="mb-2">
                  The final selected poster shall become the intellectual property of the organisers and the designer shall not have any right over the same.
                </p>
                <p className="mb-2">
                  The responsibility to comply with the guidelines and other conditions fully lies with the participant and the organisers shall not be liable for any disputes raised by any third party.
                </p>
                <p className="mb-2">
                  If the name of the designer is mentioned in the poster, directly or indirectly, the entry will be disqualified.
                </p>
                <p>
                  All data about the identity of the designer should be uploaded in a separate file.
                </p>
              </div>
            </div>
          </section>

          {/* Abstract Entries Section */}
          <section className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5 md:mb-6">
              Abstract entries
            </h2>

            <div className="space-y-4 sm:space-y-5 text-xs sm:text-sm md:text-[15px] leading-relaxed">
              <div>
                <h3 className="font-semibold mb-2">
                  Undertaking - plagiarism/non-AI/copyrights
                </h3>
                <p className="mb-2">
                  The paper abstract should be the original work of the participant and must not infringe the Intellectual Property Rights of any third party.
                </p>
                <p className="mb-2">
                  Declaration that all research work, data, theoretical arguments, conjectures, hypothesis, concepts, ideas, visuals used in the paper abstract are original and belong to the participant is mandatory while taking part in this competition.
                </p>
                <p className="mb-2">
                  Total responsibility of originality and plagiarism free content is with the participant. The organisers do not take any responsibility on any legal disputes arising out of copyrighted materials used in the paper abstract or IP rights of the idea, concept and contents of the final paper abstract.
                </p>
                <p className="mb-2">
                  The organisers do not take any responsibility for any legal dispute arising out of copyrighted fonts or images used anywhere in the paper abstract.
                </p>
                <p className="mb-2">
                  AI generated paper abstracts will not be accepted in this competition.
                </p>
                <p className="mb-2">
                  The entries sent once shall not be returned.
                </p>
                <p className="mb-2">
                  The final selected paper abstract shall become the intellectual property of the organisers and the participant shall not have any right over the same.
                </p>
                <p className="mb-2">
                  The responsibility to comply with the guidelines and other conditions fully lies with the participant and the organisers shall not be liable for any Legal disputes raised by any third party.
                </p>
                <p className="mb-2">
                  If the name of the author is mentioned in the paper abstract, directly or indirectly, the entry will be disqualified.
                </p>
                <p>
                  Data about the identity of the author should be uploaded in a separate file.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
