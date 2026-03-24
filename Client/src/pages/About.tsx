const AboutSection = () => {
  return (
    <section className="w-full bg-[#0A2463] text-white px-4 py-6 sm:px-6 sm:py-7 md:px-10 md:py-8 lg:px-12 lg:py-10 xl:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Description */}
        <div className="mb-6 sm:mb-8 md:mb-10">
          <p className="text-sm leading-relaxed sm:text-base sm:leading-relaxed md:text-[15px] lg:text-base lg:leading-relaxed mb-4 sm:mb-5 md:mb-6">
            <strong className="font-semibold">Typography Day</strong> is being
            held for the eighteenth time on 28th, 29th and 30th of September
            2026, hosted by School of Design, Media and Creative Arts, JAIN
            (Deemed-to-be University), Kochi in collaboration with the IDC
            School of Design (IDC), Indian Institute of Technology Bombay(IITB)
            Mumbai.
          </p>

          {/* About the Theme */}
          <h2 className="text-lg font-semibold mb-3 sm:text-xl sm:mb-4 md:text-[20px] lg:text-2xl">
            About the Theme
          </h2>

          <p className="text-sm leading-relaxed sm:text-base sm:leading-relaxed md:text-[15px] lg:text-base lg:leading-relaxed mb-4 sm:mb-5 md:mb-6">
            This year's theme is{" "}
            <strong className="font-semibold">
              'Typographic Intersections: Analogue to Digital and Beyond'
            </strong>
            .
          </p>

          <p className="text-sm leading-relaxed sm:text-base sm:leading-relaxed md:text-[15px] lg:text-base lg:leading-relaxed mb-4 sm:mb-5 md:mb-6">
            The event begins by featuring a day of workshops on Typography and
            Calligraphy, followed by an international conference themed on
            'Typographic Intersections: Analogue to Digital and Beyond', and
            dedicated to addressing issues faced by type designers, type users
            and type educators.
          </p>

          <p className="text-sm leading-relaxed sm:text-base sm:leading-relaxed md:text-[15px] lg:text-base lg:leading-relaxed mb-4 sm:mb-5 md:mb-6">
            The conference includes keynote deliveries from international
            grandmasters, as well as academic presentations that have been
            selected through a blind jury process. The event attracts industry
            professionals, academics, research scholars, as well as a large
            turnout of students. The event includes an exhibition of posters
            that have been selected from an international competition with
            participation from different countries. There are typographic works
            of students and faculty members from Design Institutes from around
            the country including interactive and non-interactive installations.
          </p>

          <p className="text-sm leading-relaxed sm:text-base sm:leading-relaxed md:text-[15px] lg:text-base lg:leading-relaxed mb-4 sm:mb-5 md:mb-6">
            The event pans out across three days:
          </p>

          {/* Event Schedule */}
          <div className="text-sm leading-relaxed sm:text-base sm:leading-relaxed md:text-[15px] lg:text-base lg:leading-relaxed mb-8 sm:mb-10 md:mb-12">
            <div className="mb-3">
              <strong className="font-semibold">Day 1:</strong> Workshops on
              Typography + Meet on 'Research in Typography'
            </div>
            <div>
              <strong className="font-semibold">Day 2 & 3:</strong> Conference
              focusing on 'Typography and Storytelling' + Typo Quiz +
              Exhibitions and Installations + Award ceremony + conferment of a
              Lifetime Achievement Award
            </div>
          </div>
        </div>

        {/* Associate Partner Section */}
        <div className="mb-8 sm:mb-10 text-center">
          <h2 className="text-lg font-bold text-[#f59e0b] mb-3 sm:text-xl">
            Associate Partner
          </h2>
          <div className="w-full h-px bg-white/20 mb-6" />
          <div className="flex justify-center">
            <div className="bg-white rounded-xl p-4 shadow-md inline-flex items-center justify-center w-[500px] h-[220px]">
              <img
                src="/images/sadea.gif"
                alt="SADEA - South Asian Design Educators Alliance"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
          <div className="w-full h-px bg-white/20 mt-6" />
        </div>

        {/* Statistics Section */}
        <div className="flex flex-wrap items-center justify-center gap-8 pt-4 pb-2 sm:gap-12 md:gap-16">
          <span className="text-xl font-bold text-[#f59e0b] sm:text-2xl md:text-3xl">50+ Speakers</span>
          <span className="text-xl font-bold text-[#f59e0b] sm:text-2xl md:text-3xl">30+ Workshops</span>
          <span className="text-xl font-bold text-[#f59e0b] sm:text-2xl md:text-3xl">500+ Attendees</span>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
