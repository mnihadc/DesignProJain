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
  const themes = [
    {
      icon: FlaskConical,
      title: "Experiments and Explorations",
      description:
        "Innovative approaches and experimental work in typography and storytelling",
    },
    {
      icon: Globe2,
      title: "Cultural Context",
      description:
        "Typography and storytelling within diverse cultural frameworks and traditions",
    },
    {
      icon: GraduationCap,
      title: "Learning Processes",
      description:
        "Typography as a tool for education and cognitive development",
    },
    {
      icon: Languages,
      title: "Multilingual Scripts",
      description:
        "Exploring storytelling across different writing systems and languages",
    },
    {
      icon: PenTool,
      title: "Indigenous Scripts",
      description:
        "Native and indigenous writing systems and their narrative traditions",
    },
    {
      icon: Map,
      title: "Local Languages",
      description: "Typography in regional and local language contexts",
    },
    {
      icon: BookOpen,
      title: "Research Activities",
      description:
        "Academic research and scholarly investigations in the field",
    },
  ];

  return (
    <section className="w-full bg-[#0A2463] text-white px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 py-6 sm:py-8 md:py-10">
      {/* DIVIDER */}
      <div className="w-full border-t border-white/30 mb-8 sm:mb-10 md:mb-12"></div>

      {/* TITLE SECTION */}
      <div className="text-center mb-8 sm:mb-10 md:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-[28px] lg:text-3xl xl:text-4xl font-bold mb-2 sm:mb-3">
          Conference Themes
        </h2>
        <p className="text-sm sm:text-base md:text-[16px] lg:text-lg italic font-semibold mt-2 px-2 sm:px-4">
          Typography and Storytelling: Exploring the intersection of letterforms
          and narratives
        </p>
      </div>

      {/* DESCRIPTION */}
      <p className="text-sm sm:text-base md:text-[15px] lg:text-base text-center max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed px-2 sm:px-0">
        The conference explores how typography serves as a powerful medium for
        storytelling across cultures, languages, and contexts. We invite
        presentations, papers, and discussions on the following key themes:
      </p>

      {/* THEMES GRID */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-7">
          {themes.map((theme, index) => {
            const Icon = theme.icon;
            return (
              <div
                key={index}
                className="bg-white text-[#0A2463] rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="p-2 sm:p-3 bg-[#0A2463]/10 rounded-lg">
                    <Icon
                      size={28}
                      className="sm:w-8 sm:h-8 md:w-9 md:h-9 text-[#0A2463]"
                    />
                  </div>
                </div>

                <h3 className="text-base sm:text-lg md:text-[18px] lg:text-xl font-semibold mb-2 sm:mb-3">
                  {theme.title}
                </h3>

                <p className="text-xs sm:text-sm md:text-[14px] lg:text-base leading-relaxed sm:leading-relaxed flex-grow">
                  {theme.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* RESPONSIVE NOTE FOR ODD NUMBER OF ITEMS */}
      <div className="lg:hidden xl:block">
        {/* This ensures the 7th item doesn't look odd on desktop */}
      </div>
    </section>
  );
};

export default ConferenceThemes;
