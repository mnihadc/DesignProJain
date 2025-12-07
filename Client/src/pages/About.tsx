const AboutSection = () => {
  return (
    <section className="w-full bg-[#0A2463] text-white px-4 py-6 sm:px-6 sm:py-7 md:px-10 md:py-8 lg:px-12 lg:py-10 xl:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Description */}
        <div className="mb-6 sm:mb-8 md:mb-10">
          <p className="text-sm leading-relaxed sm:text-base sm:leading-relaxed md:text-[15px] lg:text-base lg:leading-relaxed mb-4 sm:mb-5 md:mb-6">
            <strong className="font-semibold">Typography Day</strong> is being
            held for the eighteenth time on 28nd, 29rd and 30th of September
            2026, hosted by School of Design, Media and Creative Arts, JAIN
            (Deemed-to-be University), Kochi in collaboration with the IDC
            School of Design (IDC), Indian Institute of Technology Mumbai (IITB)
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
            . The event begins by featuring a day of workshops on Typography and
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

        {/* Statistics Section */}
        <div className="relative">
          {/* Divider Line */}
          <div className="hidden sm:block absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Mobile: Single line layout */}
          <div className="flex sm:hidden items-center justify-between pt-6">
            {/* Speakers */}
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">50+</div>
              <div className="text-xs font-medium text-white/90">Speakers</div>
            </div>

            {/* Mobile divider */}
            <div className="w-px h-8 bg-white/30" />

            {/* Workshops */}
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">30+</div>
              <div className="text-xs font-medium text-white/90">Workshops</div>
            </div>

            {/* Mobile divider */}
            <div className="w-px h-8 bg-white/30" />

            {/* Attendees */}
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">500+</div>
              <div className="text-xs font-medium text-white/90">Attendees</div>
            </div>
          </div>

          {/* Desktop layout */}
          <div className="hidden sm:flex items-center justify-center gap-8 pt-8 md:gap-10 lg:gap-12">
            {/* Speakers */}
            <div className="text-center">
              <div className="text-xl font-bold mb-1 md:text-2xl lg:text-3xl">
                50+
              </div>
              <div className="text-sm font-medium text-white/90 md:text-base">
                Speakers
              </div>
            </div>

            {/* Desktop divider */}
            <div className="w-px h-12 bg-white/30" />

            {/* Workshops */}
            <div className="text-center">
              <div className="text-xl font-bold mb-1 md:text-2xl lg:text-3xl">
                30+
              </div>
              <div className="text-sm font-medium text-white/90 md:text-base">
                Workshops
              </div>
            </div>

            {/* Desktop divider */}
            <div className="w-px h-12 bg-white/30" />

            {/* Attendees */}
            <div className="text-center">
              <div className="text-xl font-bold mb-1 md:text-2xl lg:text-3xl">
                500+
              </div>
              <div className="text-sm font-medium text-white/90 md:text-base">
                Attendees
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
