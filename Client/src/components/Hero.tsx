const Hero = () => {
  return (
    <section className="w-full bg-white text-white pt-16 pb-14 px-4 text-center">
      {/* MAIN TITLE */}
      <h1
        className="text-[150px] font-[400] leading-tight mb-6 text-black"
        style={{ fontFamily: "Georgia, serif" }}
      >
        Typoday 2026
      </h1>

      {/* LOGOS */}
      <div className="flex justify-center items-center gap-20 mt-6 mb-10 flex-wrap">
        <img
          src="/images/iitbombay.jpg"
          alt="IIT Bombay"
          className="h-[250px] w-[350px]  object-contain"
        />
        <img
          src="/images/jainDesign.png"
          alt="JAIN University"
          className="h-[250px] w-[500px] object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
