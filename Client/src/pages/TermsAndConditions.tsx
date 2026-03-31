import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-[#0A2463]">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-b from-white via-white to-gray-50 text-center overflow-hidden pt-6 pb-2 px-4 sm:pt-8 sm:pb-4 sm:px-6 md:pt-10 md:pb-6 md:px-8 lg:pt-12">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full opacity-30 sm:opacity-40" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-50 rounded-full opacity-30 sm:opacity-40" />
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `linear-gradient(90deg, #0A2463 1px, transparent 1px), linear-gradient(180deg, #0A2463 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="mb-8 sm:mb-10 md:mb-12 flex justify-center">
            <img src="/images/Typoday2026logo.png" alt="Typoday 2026 Header" className="w-full max-w-[900px] h-auto object-contain" loading="lazy" />
          </div>
          <div className="mt-4 sm:mt-6 md:mt-8">
            <div className="inline-block px-4 py-1.5 bg-blue-50/80 backdrop-blur-sm rounded-full border border-blue-200 sm:px-5 sm:py-2">
              <p className="text-sm text-gray-700 font-medium sm:text-base md:text-lg">September 28th, 29th and 30th 2026</p>
            </div>
          </div>
          <p className="text-base text-gray-700 font-bold mt-2 sm:text-lg sm:mt-3 md:text-[20px] lg:text-[22px] md:mt-4">Venue: JAIN (Deemed-to-be University), Kochi</p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-4 sm:mt-5 md:mt-6">
            <Link to="/call-for-papers" className="px-4 py-2 text-sm sm:text-base font-semibold text-white bg-[#001C54] rounded-[10px] hover:bg-[#001C54]/80 transition-colors duration-200">Call for Papers</Link>
            <Link to="/logo-design-competition" className="px-4 py-2 text-sm sm:text-base font-semibold text-white bg-[#001C54] rounded-[10px] hover:bg-[#001C54]/80 transition-colors duration-200">Logo Design Competition</Link>
            <Link to="/poster-design-competition" className="px-4 py-2 text-sm sm:text-base font-semibold text-white bg-[#001C54] rounded-[10px] hover:bg-[#001C54]/80 transition-colors duration-200">Poster Design Competition</Link>
          </div>
          <div className="relative mt-6 mb-4 sm:mt-8 sm:mb-6 md:mt-10 md:mb-8 lg:mt-12">
            <div className="flex flex-col items-center justify-center gap-10 sm:flex-row sm:gap-14 md:gap-16 lg:gap-20 xl:gap-24">
              <div className="w-[320px] h-[160px] sm:w-[360px] sm:h-[180px] md:w-[420px] md:h-[200px] bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-md border-2 border-gray-200 flex items-center justify-center">
                <img src="/images/iitbombay.jpg" alt="IIT Bombay" className="w-full h-full object-contain" loading="lazy" />
              </div>
              <div className="w-[320px] h-[160px] sm:w-[360px] sm:h-[180px] md:w-[420px] md:h-[200px] bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-md border-2 border-gray-200 flex items-center justify-center">
                <img src="/images/jainDesign.png" alt="JAIN University" className="w-auto h-[70px] object-contain mx-auto sm:h-[90px] md:h-[110px] lg:h-[130px]" loading="lazy" />
              </div>
            </div>
          </div>
          <div className="mt-8 sm:mt-10">
            <div className="inline-block px-4 py-1 bg-gray-100/50 backdrop-blur-sm rounded-full sm:px-5 sm:py-1.5">
              <p className="text-xs text-gray-600 font-medium sm:text-sm">18th International Typography Conference</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-10 text-white bg-[#0A2463] slide-up-section">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-[#f59e0b]">Terms and Conditions of Typoday 2026</h1>

        {/* Logo Competition */}
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[#f59e0b]">Logo competition</h2>
          <div className="text-sm md:text-[15px] leading-relaxed space-y-3">
            <p><span className="font-bold">Jury/ selection process</span></p>
            <p>All the entries received by the stipulated date and time and found in order, shall be evaluated by a Jury panel set up by the organisers. No correspondence or enquiry about the identity of jury members will be entertained by the organisers at any point of time. The decision of the jury will be final.</p>
            <p><span className="font-bold">Rights of the organisers:</span> The jury will have the right to select, reject, or request modifications for the selected logo. Organisers reserve the right to modify and use the final logo in any form/medium. Organisers take no responsibility for legal disputes arising from copyrighted fonts.</p>
            <p><span className="font-bold">Undertaking - plagiarism/non-AI/copyrights</span></p>
            <p>Participants by taking part in this competition are required to agree upon a series of conditions for the organisers and shall not take any responsibility arising out of copyright of fonts used in the logo.</p>
            <p><span className="font-bold">Prizes & copyright:</span> Winner will receive Rs. 5,000/- and a citation. Winner must surrender design copyright and submit vector files (.ai and .eps). Final selected logo becomes the intellectual property of organisers.</p>
            <p>Declaration of originality and plagiarism free content is mandatory while taking part in this competition.</p>
            <p>The organisers do not take any responsibility for any legal dispute arising out of copyrighted fonts or images used anywhere in the paper abstract.</p>
            <p>AI generated logos will not be accepted in this competition.</p>
            <p>The entries sent once shall not be returned.</p>
            <p>Total responsibility of originality and plagiarism free content is with the participant. The organisers do not take any responsibility on any legal disputes arising out of copyrighted materials used in the logo design or IP rights of the idea, concept and contents of the final logo.</p>
            <p>The organisers do not take any responsibility for any legal dispute arising out of copyrighted fonts or images used anywhere in the logo design.</p>
            <p>AI generated logos will not be accepted in this competition.</p>
            <p>The entries sent once shall not be returned.</p>
            <p>The final selected logo shall become the intellectual property of the organisers and the designer shall not have any right over the same.</p>
            <p>The responsibility to comply with the guidelines and other conditions fully lies with the participant and the organisers shall not be liable for any legal disputes raised by any third party.</p>
            <p>If the name of the designer is mentioned in the logo, directly or indirectly, the entry will be disqualified.</p>
            <p>All information / entries by of the designer should be uploaded in a separate file.</p>
            <p>All information / entries by of the designer should be uploaded in a separate file.</p>
          </div>
        </section>

        <hr className="border-white/20 my-6" />

        {/* Poster Competition */}
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[#f59e0b]">Poster competition</h2>
          <div className="text-sm md:text-[15px] leading-relaxed space-y-3">
            <p>Participation in this competition is open to students, faculty members, and professionals. It is inclusive of all individuals, non-resident Indians and foreign nationals.</p>
            <p><span className="font-bold">Jury/ selection process</span></p>
            <p>All the entries received by the stipulated date and time and found in order, shall be evaluated by a Jury panel set up by the organisers. No correspondence or enquiry about the identity of jury members will be entertained by the organisers at any point of time. The decision of the jury will be final.</p>
            <p><span className="font-bold">Rights of the organisers:</span> The jury will have the right to select, reject, or request modifications for the selected posters.</p>
            <p><span className="font-bold">Winner Incentives:</span> Winning entries will be published as a book and displayed in an exhibition during the event. The winners are entitled to a 20% discount in registration fees for the event. Winners of the first and second prize in the Poster competition will be given free registration for the event (Does NOT include travel and accommodation). All winning participants will receive a copy of the book and the 'Certificate of Winning the Poster Competition'.</p>
            <p><span className="font-bold">Undertaking - plagiarism/non-AI/copyrights</span></p>
            <p>Participants by taking part in this competition are required to agree upon a series of conditions for the organisers and shall not take any responsibility arising out of copyright of fonts used in the poster design.</p>
            <p>The poster should be the original work of the participant and must not infringe the Intellectual Property Rights of any third party.</p>
            <p>Declaration of originality and plagiarism free content is mandatory while taking part in this competition.</p>
            <p>Total responsibility of originality and plagiarism free content is with the participant. The organisers do not take any responsibility on any legal disputes arising out of copyrighted materials used in the poster design or IP rights of the idea, concept and contents of the final poster design.</p>
            <p>The organisers do not take any responsibility for any legal dispute arising out of copyrighted fonts or images used anywhere in the poster design.</p>
            <p>AI generated posters will not be accepted in this competition.</p>
            <p>The entries sent once shall not be returned.</p>
            <p>The final selected poster shall become the intellectual property of the organisers and the designer shall not have any right over the same.</p>
            <p>The responsibility to comply with the guidelines and other conditions fully lies with the participant and the organisers shall not be liable for any legal disputes raised by any third party.</p>
            <p>If the name of the designer is mentioned in the poster, directly or indirectly, the entry will be disqualified.</p>
            <p>All information / entries by of the designer should be uploaded in a separate file.</p>
          </div>
        </section>

        <hr className="border-white/20 my-6" />

        {/* Abstract Entries */}
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[#f59e0b]">Abstract entries</h2>
          <div className="text-sm md:text-[15px] leading-relaxed space-y-3">
            <p>Undertaking - plagiarism/non-AI/copyrights/</p>
            <p>The paper abstract should be the original work of the participant and must not infringe the Intellectual Property Rights of any third party.</p>
            <p>Declaration that all research work, data, theoretical arguments, conjectures, hypothesis, concepts, ideas, visuals used in the paper abstract are original and belong to the participant is mandatory while taking part in this competition.</p>
            <p>Total responsibility of originality and plagiarism free content is with the participant. The organisers do not take any responsibility on any legal disputes arising out of copyrighted materials used in the paper abstract or IP rights of the idea, concept and contents of the final paper abstract.</p>
            <p>The organisers do not take any responsibility for any legal dispute arising out of copyrighted fonts or images used anywhere in the paper abstract.</p>
            <p>AI generated paper abstracts will not be accepted in this competition.</p>
            <p>The entries sent once shall not be returned.</p>
            <p>The final selected paper abstract shall become the intellectual property of the organisers and the participant shall not have any right over the same.</p>
            <p>The responsibility to comply with the guidelines and other conditions fully lies with the participant and the organisers shall not be liable for any legal disputes raised by any third party.</p>
            <p>If the name of the author is mentioned in the paper abstract, directly or indirectly, the entry will be disqualified.</p>
            <p>Data about the identity of the author should be uploaded in a separate file.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
