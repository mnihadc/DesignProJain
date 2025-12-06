const AboutSection = () => {
  return (
    <section className="w-full bg-[#0A2463] text-white px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 py-6 sm:py-7 md:py-8 lg:py-10 leading-relaxed">
      {/* DATE + VENUE */}
      <div className="text-center mb-8 sm:mb-10 md:mb-12">
        <p className="text-base sm:text-lg md:text-[20px] lg:text-[22px] font-light">
          28th, 29th and 30th September 2026
        </p>
        <p className="text-base sm:text-lg md:text-[20px] lg:text-[22px] font-light mt-1 sm:mt-2">
          Venue: Jain Deemed-to-be University, Kochi
        </p>
      </div>

      {/* DIVIDER */}
      <div className="w-full border-t border-white/30 mb-8 sm:mb-10 md:mb-12"></div>

      {/* DESCRIPTION BLOCK */}
      <div className="max-w-7xl mx-auto">
        <p className="text-sm sm:text-base md:text-[15px] lg:text-base mb-4 sm:mb-5 md:mb-6">
          <strong className="font-semibold">Typography Day</strong> is being
          held for the eighteenth time on 22nd, 23rd and 24th of October 2026,
          hosted by School of Design, Media and Creative Arts, JAIN
          (Deemed-to-be University), Kochi in collaboration with the IDC School
          of Design (IDC), Indian Institute of Technology Bombay (IIT Bombay)
        </p>

        {/* ABOUT THE THEME */}
        <h3 className="text-lg sm:text-xl md:text-[20px] lg:text-2xl font-semibold mb-2 sm:mb-3 md:mb-4">
          About the Theme
        </h3>

        <p className="text-sm sm:text-base md:text-[15px] lg:text-base mb-4 sm:mb-5 md:mb-6">
          This year's theme is{" "}
          <strong className="font-semibold">
            'Typographic Intersections: Analogue to Digital and Beyond'
          </strong>
          . The event begins by featuring a day of workshops on Typography and
          Calligraphy, followed by an international conference themed on
          'Typographic Intersections: Analogue to Digital and Beyond', and
          dedicated to addressing issues faced by type designers, type users and
          type educators.
        </p>

        <p className="text-sm sm:text-base md:text-[15px] lg:text-base mb-4 sm:mb-5 md:mb-6">
          The conference includes keynote deliveries from international
          grandmasters, as well as academic presentations that have been
          selected through a blind jury process. The event attracts industry
          professionals, academics, research scholars, as well as a large
          turnout of students. The event includes an exhibition of posters that
          have been selected from an international competition with
          participation from different countries. There are typographic works of
          students and faculty members from Design Institutes from around the
          country including interactive and non-interactive installations.
        </p>

        <p className="text-sm sm:text-base md:text-[15px] lg:text-base mb-4 sm:mb-5 md:mb-6">
          The event pans out across three days:
        </p>

        <div className="text-sm sm:text-base md:text-[15px] lg:text-base mb-8 sm:mb-10 md:mb-12 whitespace-pre-line">
          <div className="mb-2">
            <strong className="font-semibold">Day 1:</strong> Workshops on
            Typography + Meet on 'Research in Typography'
          </div>
          <div>
            <strong className="font-semibold">Day 2 & 3:</strong> Conference
            focusing on 'Typography and Storytelling' + Typo Quiz + Exhibitions
            and Installations + Award ceremony + conferment of a Lifetime
            Achievement Award
          </div>
        </div>

        {/* STATS */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 mt-6 sm:mt-8 text-center">
          <div className="w-full sm:w-auto">
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1">
              50+
            </div>
            <div className="text-xs sm:text-sm md:text-base font-medium">
              Speakers
            </div>
          </div>

          <div className="hidden sm:block w-px h-10 bg-white/30"></div>
          <div className="sm:hidden w-full h-px bg-white/30"></div>

          <div className="w-full sm:w-auto">
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1">
              30+
            </div>
            <div className="text-xs sm:text-sm md:text-base font-medium">
              Workshops
            </div>
          </div>

          <div className="hidden sm:block w-px h-10 bg-white/30"></div>
          <div className="sm:hidden w-full h-px bg-white/30"></div>

          <div className="w-full sm:w-auto">
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1">
              500+
            </div>
            <div className="text-xs sm:text-sm md:text-base font-medium">
              Attendees
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
