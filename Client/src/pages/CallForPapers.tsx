import { useEffect, useRef } from "react"; // 1. Added useEffect and useRef
import { Link } from "react-router-dom";

const CallForPapers = () => {
  // 2. Create a reference for the content section
  const contentRef = useRef(null);

  useEffect(() => {
    // 3. Scroll to the content section automatically on load
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ 
        behavior: "smooth", 
        block: "start" 
      });
    }
  }, []);

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
            <Link to="/call-for-papers" className="px-4 py-2 text-sm sm:text-base font-semibold text-white bg-[#f59e0b] rounded-[10px] hover:bg-[#f59e0b]/80 transition-colors duration-200">
              Call for Papers
            </Link>
            <Link to="/logo-design-competition" className="px-4 py-2 text-sm sm:text-base font-semibold text-white bg-[#001C54] rounded-[10px] hover:bg-[#001C54]/80 transition-colors duration-200">
              Logo Design Competition
            </Link>
            <Link to="/poster-design-competition" className="px-4 py-2 text-sm sm:text-base font-semibold text-white bg-[#001C54] rounded-[10px] hover:bg-[#001C54]/80 transition-colors duration-200">
              Poster Design Competition
            </Link>
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
              <p className="text-xs text-gray-600 font-medium sm:text-sm">
                18th International Typography Conference
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section - 4. Added ref and scroll-mt-20 here */}
      <div 
        ref={contentRef} 
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-10 text-white bg-[#0A2463] scroll-mt-20 slide-up-section"
      >
        
        {/* Call for Papers Details */}
        <section className="pb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-[#f59e0b]">
            Call for Papers
          </h1>
          {/* ... (The rest of your content remains exactly the same) ... */}
          <div className="space-y-6 text-sm md:text-[15px] leading-relaxed">
            <p className="font-semibold text-lg">We invite a 500-800 word abstract (with examples) in three categories:</p>
            <ol className="list-decimal ml-6 space-y-3">
              <li>Concerns in 'Typographic Intersections: Analogue to Digital and Beyond' (Academic Research/Presentations)</li>
              <li>Innovative applications of 'Typographic Intersections: Analogue to Digital and Beyond' (Case Studies)</li>
              <li>Student projects on 'Typographic Intersections: Analogue to Digital and Beyond'</li>
            </ol>
            
            <p>The paper submission is open to all Indians and nonresident Indians, as well as foreign citizens.</p>

            <div className="pt-4">
              <h2 className="text-xl font-bold mb-4 text-[#f59e0b]">Main typographic topics for the conference:</h2>
              <p className="mb-3 italic">The conference will focus on the following issues:</p>
              <ul className="list-decimal ml-6 space-y-2">
                <li>Experiments and Explorations in Typographic Intersections: Analogue to Digital and Beyond</li>
                <li>Typographic Intersections: Analogue to Digital and Beyond in the context of Culture</li>
                <li>Typographic Intersections: Analogue to Digital and Beyond in the process of Learning</li>
                <li>Typographic Intersections: Analogue to Digital and Beyond using Multilingual Scripts</li>
                <li>Typographic Intersections: Analogue to Digital and Beyond in Native (Indigenous) Scripts</li>
                <li>Typographic Intersections: Analogue to Digital and Beyond in Local Languages</li>
                <li>Research Activities in Typographic Intersections: Analogue to Digital and Beyond</li>
              </ul>
            </div>

            <div className="pt-4 bg-white/5 p-6 rounded-xl border border-white/10">
              <h2 className="text-xl font-bold mb-4">Abstract Guidelines:</h2>
              <p className="mb-4">The abstract submission should include the following:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 list-decimal ml-6">
                <li>Title of the paper</li>
                <li>Keywords</li>
                <li>Abstract of the paper</li>
                <li>Three to four images of the work described</li>
                <li>Author name, Designation, organization, and contact details (including email)</li>
                <li>Category of submission (Academic / Industry / Student)</li>
              </ul>
              <p className="mt-4 font-semibold text-[#f59e0b]">The total number of words, including the title, keywords, and abstract, should be a maximum of 800 words.</p>
            </div>

            <div className="pt-4">
              <h2 className="text-xl font-bold mb-4">Paper and Presentation Details:</h2>
              <ul className="list-disc ml-6 space-y-3">
                <li>The selection of abstract is through blind jury.</li>
                <li>Selected papers/posters will be presented offline in person by the author/s during the conference on the 29th and 30th of September 2026 at JAIN (Deemed-to-be University), Kochi.</li>
                <li>The time duration for each of the paper presentations is 15 minutes, followed by 5 minutes for discussion along with Q & A. The selected papers will be published after the conference.</li>
                <li>Formatting guidelines as well as a template for the full paper will be supplied along with the acceptance mail of the abstract.</li>
                <li>Selected paper (abstract) presentation in the conference 'Typography Day 2026' requires registration.</li>
                <li>Organisers will NOT be providing travel and accommodation for paper and poster authors.</li>
              </ul>
              <p className="mt-6">
                For online abstract submission, <a href="https://event.leconfe.com/juk1/scheduled/abstract/panel/submissions" target="_blank" rel="noopener noreferrer" className="text-[#f59e0b] font-bold hover:underline">click here</a>
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <h2 className="text-xl font-bold mb-4">Deadlines:</h2>
              <div className="space-y-2">
                <p><span className="text-[#f59e0b] font-bold">Deadline for abstract submission:</span> 25th May 2026</p>
                <p><span className="text-[#f59e0b] font-bold">Declaration of accepted abstracts:</span> 1st July 2026</p>
                <p><span className="text-[#f59e0b] font-bold">Deadline for submission of full paper and Poster:</span> 1st August 2026</p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-white/20 my-4" />

        {/* Terms and Conditions Section */}
        <section className="pt-4">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-[#f59e0b]">
            Terms and Conditions
          </h1>
          <h2 className="text-lg font-bold mb-6 underline">Abstract entries</h2>

          <div className="space-y-6 text-sm md:text-[15px] leading-relaxed">
            <div>
              <h3 className="font-bold mb-4 text-lg border-l-4 border-[#f59e0b] pl-3">Undertaking - plagiarism/non-AI/copyrights</h3>
              <div className="space-y-4">
                <p>The paper abstract should be the original work of the participant and must not infringe the Intellectual Property Rights of any third party.</p>
                <p>Declaration that all research work, data, theoretical arguments, conjectures, hypothesis, concepts, ideas, visuals used in the paper abstract are original and belong to the participant is mandatory while taking part in this competition.</p>
                <p>Total responsibility of originality and plagiarism free content is with the participant. The organisers do not take any responsibility on any legal disputes arising out of copyrighted materials used in the paper abstract or IP rights of the idea, concept and contents of the final paper abstract.</p>
                <p>The organisers do not take any responsibility for any legal dispute arising out of copyrighted fonts or images used anywhere in the paper abstract.</p>
                <p className="font-bold text-[#f59e0b] bg-white/5 p-3 rounded">AI generated paper abstracts will not be accepted in this competition.</p>
                <p>The entries sent once shall not be returned.</p>
                <p>The final selected paper abstract shall become the intellectual property of the organisers and the participant shall not have any right over the same.</p>
                <p>The responsibility to comply with the guidelines and other conditions fully lies with the participant and the organisers shall not be liable for any legal disputes raised by any third party.</p>
                <p>If the name of the author is mentioned in the paper abstract, directly or indirectly, the entry will be disqualified. Data about the identity of the author should be uploaded in a separate file.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-black/20 rounded-xl text-center border border-white/10">
            <p>If you have any queries, please feel free to contact us: <a href="mailto:help@typoday.org" className="text-[#f59e0b] hover:underline font-bold">help@typoday.org</a></p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CallForPapers;