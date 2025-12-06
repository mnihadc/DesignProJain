import {
  FlaskConical,
  Globe2,
  GraduationCap,
  Languages,
  PenTool,
  Map,
  BookOpen,
} from "lucide-react";

const ConferenceThemes = () => {
  return (
    <section className="w-full bg-[#0A2463] text-white px-6 md:px-20 py-20">
      {/* TOP BORDER */}
      <div className="w-full border-t border-white/30 mb-10"></div>

      {/* TITLE */}
      <div className="text-center mb-10">
        <h2 className="text-[28px] font-semibold">Conference Themes</h2>
        <p className="text-[16px] italic mt-2">
          Typography and Storytelling: Exploring the intersection of letterforms
          and narratives
        </p>
      </div>

      {/* DESCRIPTION */}
      <p className="text-[15px] text-center max-w-3xl mx-auto mb-12 leading-relaxed">
        The conference explores how typography serves as a powerful medium for
        storytelling across cultures, languages, and contexts. We invite
        presentations, papers, and discussions on the following key themes:
      </p>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* 1 */}
        <div className="bg-white text-[#0A2463] rounded-2xl p-6 shadow-md min-h-[180px]">
          <FlaskConical size={36} className="mb-3" />
          <h3 className="text-[18px] font-semibold mb-2">
            Experiments and Explorations
          </h3>
          <p className="text-[14px] leading-relaxed">
            Innovative approaches and experimental work in typography and
            storytelling
          </p>
        </div>

        {/* 2 */}
        <div className="bg-white text-[#0A2463] rounded-2xl p-6 shadow-md min-h-[180px]">
          <Globe2 size={36} className="mb-3" />
          <h3 className="text-[18px] font-semibold mb-2">Cultural Context</h3>
          <p className="text-[14px] leading-relaxed">
            Typography and storytelling within diverse cultural frameworks and
            traditions
          </p>
        </div>

        {/* 3 */}
        <div className="bg-white text-[#0A2463] rounded-2xl p-6 shadow-md min-h-[180px]">
          <GraduationCap size={36} className="mb-3" />
          <h3 className="text-[18px] font-semibold mb-2">Learning Processes</h3>
          <p className="text-[14px] leading-relaxed">
            Typography as a tool for education and cognitive development
          </p>
        </div>

        {/* 4 */}
        <div className="bg-white text-[#0A2463] rounded-2xl p-6 shadow-md min-h-[180px]">
          <Languages size={36} className="mb-3" />
          <h3 className="text-[18px] font-semibold mb-2">
            Multilingual Scripts
          </h3>
          <p className="text-[14px] leading-relaxed">
            Exploring storytelling across different writing systems and
            languages
          </p>
        </div>

        {/* 5 */}
        <div className="bg-white text-[#0A2463] rounded-2xl p-6 shadow-md min-h-[180px]">
          <PenTool size={36} className="mb-3" />
          <h3 className="text-[18px] font-semibold mb-2">Indigenous Scripts</h3>
          <p className="text-[14px] leading-relaxed">
            Native and indigenous writing systems and their narrative traditions
          </p>
        </div>

        {/* 6 */}
        <div className="bg-white text-[#0A2463] rounded-2xl p-6 shadow-md min-h-[180px]">
          <Map size={36} className="mb-3" />
          <h3 className="text-[18px] font-semibold mb-2">Local Languages</h3>
          <p className="text-[14px] leading-relaxed">
            Typography in regional and local language contexts
          </p>
        </div>

        {/* 7 */}
        <div className="bg-white text-[#0A2463] rounded-2xl p-6 shadow-md min-h-[180px]">
          <BookOpen size={36} className="mb-3" />
          <h3 className="text-[18px] font-semibold mb-2">
            Research Activities
          </h3>
          <p className="text-[14px] leading-relaxed">
            Academic research and scholarly investigations in the field
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConferenceThemes;
