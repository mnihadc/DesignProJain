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
    <section className="w-full bg-gradient-to-b from-[#0A2463] to-[#0d2d7a] text-white">
      <div className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto text-center mb-10 sm:mb-14 lg:mb-16">
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6 sm:mb-8 rounded-full" />

          <h2 className="text-2xl font-bold mb-3 sm:text-3xl md:text-4xl lg:text-5xl">
            Conference Themes
          </h2>

          <p className="text-lg text-blue-100 italic mb-4 sm:text-xl md:mb-5">
            Typography and Storytelling: Exploring the intersection of
            letterforms and narratives
          </p>

          <p className="text-base text-blue-50 sm:text-lg max-w-3xl mx-auto">
            The conference explores how typography serves as a powerful medium
            for storytelling across cultures, languages, and contexts. We invite
            presentations, papers, and discussions on the following key themes:
          </p>
        </div>

        {/* Themes Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {themes.map((theme, index) => {
              const Icon = theme.icon;

              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Icon and Title on same line */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                      <Icon className="w-6 h-6 text-white sm:w-7 sm:h-7" />
                    </div>

                    <h3 className="text-lg font-bold text-white pt-1 sm:text-xl">
                      {theme.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-blue-100 text-sm leading-relaxed sm:text-base pl-[4.5rem] sm:pl-[5rem]">
                    {theme.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceThemes;
