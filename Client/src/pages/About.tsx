const AboutSection = () => {
  return (
    <section className="w-full bg-[#0A2463] text-white px-3 md:px-10 py-7 leading-relaxed">
      {/* DATE + VENUE */}

      <div className="text-center mb-10 ">
        <p className="text-[20px] font-light">
          28th, 29th and 30th September 2026
        </p>
        <p className="text-[20px] font-light mt-1">
          Venue: Jain Deemed-to-be University, Kochi
        </p>
      </div>
      <div className="w-full border-t border-white/30 mb-10"></div>
      {/* DESCRIPTION BLOCK */}
      <p className="text-[15px] mb-6">
        <strong>Typography Day</strong> is being held for the eighteenth time on
        22nd, 23rd and 24th of October 2026, hosted by School of Design, Media
        and Creative Arts, JAIN (Deemed-to-be University), Kochi in
        collaboration with the IDC School of Design (IDC), Indian Institute of
        Technology Bombay (IIT Bombay)
      </p>

      {/* ABOUT THE THEME */}
      <h3 className="text-[20px] font-semibold mb-3">About the Theme</h3>

      <p className="text-[15px] mb-6">
        This year's theme is{" "}
        <strong>
          'Typographic Intersections: Analogue to Digital and Beyond'
        </strong>
        . The event begins by featuring a day of workshops on Typography and
        Calligraphy, followed by an international conference themed on
        ‘Typographic Intersections: Analogue to Digital and Beyond’, and
        dedicated to addressing issues faced by type designers, type users and
        type educators.
      </p>

      <p className="text-[15px] mb-6">
        The conference includes keynote deliveries from international
        grandmasters, as well as academic presentations that have been selected
        through a blind jury process. The event attracts industry professionals,
        academics, research scholars, as well as a large turnout of students.
        The event includes an exhibition of posters that have been selected from
        an international competition with participation from different
        countries. There are typographic works of students and faculty members
        from Design Institutes from around the country including interactive and
        non-interactive installations.
      </p>

      <p className="text-[15px] mb-6">The event pans out across three days:</p>

      <p className="text-[15px] whitespace-pre-line mb-10">
        Day 1: Workshops on Typography + Meet on ‘Research in Typography’
        {"\n"}
        Day 2 & 3: Conference focusing on ‘Typography and Storytelling’ + Typo
        Quiz + Exhibitions and Installations + Award ceremony + conferment of a
        Lifetime Achievement Award
      </p>

      {/* STATS */}
      <div className="flex justify-center gap-10 mt-8 flex-wrap text-[20px] font-bold">
        <span>50+ Speakers</span>
        <span>30+ Workshops</span>
        <span>500+ Attendees</span>
      </div>
  
    </section>
    
  );
};

export default AboutSection;
