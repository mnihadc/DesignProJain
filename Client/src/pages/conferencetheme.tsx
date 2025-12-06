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
      gradient: "from-purple-500 to-pink-500",
      iconColor: "#8B5CF6",
    },
    {
      icon: Globe2,
      title: "Cultural Context",
      description:
        "Typography and storytelling within diverse cultural frameworks and traditions",
      gradient: "from-blue-500 to-cyan-500",
      iconColor: "#3B82F6",
    },
    {
      icon: GraduationCap,
      title: "Learning Processes",
      description:
        "Typography as a tool for education and cognitive development",
      gradient: "from-green-500 to-emerald-500",
      iconColor: "#10B981",
    },
    {
      icon: Languages,
      title: "Multilingual Scripts",
      description:
        "Exploring storytelling across different writing systems and languages",
      gradient: "from-yellow-500 to-orange-500",
      iconColor: "#F59E0B",
    },
    {
      icon: PenTool,
      title: "Indigenous Scripts",
      description:
        "Native and indigenous writing systems and their narrative traditions",
      gradient: "from-red-500 to-rose-500",
      iconColor: "#EF4444",
    },
    {
      icon: Map,
      title: "Local Languages",
      description: "Typography in regional and local language contexts",
      gradient: "from-indigo-500 to-blue-500",
      iconColor: "#6366F1",
    },
    {
      icon: BookOpen,
      title: "Research Activities",
      description:
        "Academic research and scholarly investigations in the field",
      gradient: "from-violet-500 to-purple-500",
      iconColor: "#8B5CF6",
    },
  ];

  return (
    <section className="w-full bg-linear-to-b from-[#0A2463] to-[#0d2d7a] text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20">
        {/* DIVIDER */}
        <div className="w-24 h-1 bg-linear-to-r from-blue-400 to-cyan-400 mx-auto mb-8 sm:mb-12 md:mb-16 rounded-full"></div>

        {/* TITLE SECTION */}
        <div className="text-center mb-10 sm:mb-14 md:mb-18">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm md:text-base font-semibold text-blue-300 bg-blue-900/30 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full">
              KEY THEMES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Conference Themes
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl italic font-medium text-blue-100 mt-4 sm:mt-6 max-w-3xl mx-auto px-2">
            Typography and Storytelling: Exploring the intersection of
            letterforms and narratives
          </p>
        </div>

        {/* DESCRIPTION */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <p className="text-base sm:text-lg md:text-xl text-center text-blue-50 leading-relaxed px-2">
            The conference explores how typography serves as a powerful medium
            for storytelling across cultures, languages, and contexts. We invite
            presentations, papers, and discussions on the following key themes:
          </p>
        </div>

        {/* THEMES GRID */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {themes.map((theme, index) => {
              const Icon = theme.icon;

              return (
                <div key={index} className="relative group">
                  {/* Glow effect */}
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${theme.gradient} opacity-0 group-hover:opacity-20 blur-xl rounded-3xl transition-all duration-500 scale-100 group-hover:scale-105`}
                  ></div>

                  {/* Main Card */}
                  <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-5 sm:p-6 md:p-7 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 hover:border-white/40 h-full group-hover:-translate-y-2 flex flex-col overflow-hidden">
                    {/* Top accent line */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${theme.gradient} opacity-80`}
                    ></div>

                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500">
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230A2463' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                      ></div>
                    </div>

                    {/* Icon Container */}
                    <div className="relative mb-4 sm:mb-5 md:mb-6">
                      <div
                        className={`relative inline-block p-3 sm:p-4 rounded-xl bg-linear-to-br ${theme.gradient} group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <Icon
                          size={28}
                          className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white"
                        />
                      </div>
                      {/* Icon glow */}
                      <div
                        className={`absolute inset-0 bg-linear-to-br ${theme.gradient} opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-300 rounded-xl`}
                      ></div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-900 relative z-10 group-hover:text-gray-800 transition-colors duration-300">
                      {theme.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed grow relative z-10 group-hover:text-gray-600 transition-colors duration-300">
                      {theme.description}
                    </p>

                    {/* Learn more link (appears on hover) */}
                    <div className="mt-4 sm:mt-5 md:mt-6 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <div className="flex items-center text-sm sm:text-base font-medium text-gray-900">
                        <span>Learn more</span>
                        <svg
                          className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Bottom gradient accent */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${theme.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500 origin-left scale-x-0 group-hover:scale-x-100`}
                    ></div>
                  </div>
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
