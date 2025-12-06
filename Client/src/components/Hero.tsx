const Hero = () => {
  return (
    <section className="w-full bg-white text-white pt-4 pb-1 px-4 text-center">
      {/* MAIN TITLE */}
      <h1
        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[150px] font-[400] leading-tight mb-4 sm:mb-6 text-black"
        style={{ fontFamily: "Georgia, serif" }}
      >
        Typoday 2026
      </h1>

      {/* LOGOS */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 mt-4 sm:mt-6 mb-8 sm:mb-10">
        {/* IIT Bombay Logo */}
        <div className="w-full sm:w-auto flex justify-center">
          <img
            src="/images/iitbombay.jpg"
            alt="IIT Bombay"
            className="h-[80px] w-[140px] 
                     sm:h-[100px] sm:w-[175px] 
                     md:h-[120px] md:w-[210px] 
                     lg:h-[140px] lg:w-[245px] 
                     xl:h-[160px] xl:w-[280px]
                     2xl:h-[200px] 2xl:w-[350px] 
                     object-contain"
          />
        </div>

        {/* JAIN University Logo */}
        <div className="w-full sm:w-auto flex justify-center">
          <img
            src="/images/jainDesign.png"
            alt="JAIN University"
            className="h-[60px] w-[200px] 
                     sm:h-[80px] sm:w-[250px] 
                     md:h-[100px] md:w-[300px] 
                     lg:h-[120px] lg:w-[350px] 
                     xl:h-[140px] xl:w-[400px]
                     2xl:h-[160px] 2xl:w-[450px]
                     3xl:h-[200px] 3xl:w-[500px]
                     object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
