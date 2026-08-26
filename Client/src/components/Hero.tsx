import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const TOTAL_SLIDES = 3;

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TOTAL_SLIDES);
    }, 3000);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const goTo = (index: number) => {
    setCurrent(index);
    startTimer();
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-white via-white to-gray-50 text-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full opacity-30 sm:opacity-40" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-50 rounded-full opacity-30 sm:opacity-40" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(90deg, #0A2463 1px, transparent 1px),
                              linear-gradient(180deg, #0A2463 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Full-width Slideshow */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {/* Slide 0: newlogo */}
          <div className="min-w-full flex justify-center bg-white pt-2 pb-2 px-4 sm:px-6 md:px-8">
            <img src="/images/newlogo.png" alt="Typoday 2026" className="w-full max-w-[900px] h-auto object-contain" loading="lazy" />
          </div>
          {/* Slide 1: Registration Open banner */}
          <div className="min-w-full">
            <Link to="/registration">
              <img src="/images/slide1.jpg" alt="Registration Open" className="w-full h-auto object-cover cursor-pointer" loading="lazy" />
            </Link>
          </div>
          {/* Slide 2: Winner banner */}
          <div className="min-w-full">
            <img src="/images/slide2.jpg" alt="Logo Competition Winner" className="w-full h-auto object-cover" loading="lazy" />
          </div>
        </div>

        {/* Left Arrow */}
        <button onClick={() => goTo((current - 1 + TOTAL_SLIDES) % TOTAL_SLIDES)} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors z-10">‹</button>
        {/* Right Arrow */}
        <button onClick={() => goTo((current + 1) % TOTAL_SLIDES)} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors z-10">›</button>
        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
            <button key={i} onClick={() => goTo(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-[#0A2463] scale-125" : "bg-[#0A2463]/40"}`} />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:pt-6 pb-2 sm:pb-4 md:pb-6 lg:pb-8">

        {/* Event Date Badge */}
        <div className="mt-4 sm:mt-6 md:mt-8">
          <div className="inline-block px-4 py-1.5 bg-blue-50/80 backdrop-blur-sm rounded-full border border-blue-200 sm:px-5 sm:py-2">
            <p className="text-sm text-gray-700 font-medium sm:text-base md:text-lg">
              September 28th, 29th and 30th 2026
            </p>
          </div>
        </div>

        {/* Venue */}
        <p className="text-base text-gray-700 font-bold mt-2 sm:text-lg sm:mt-3 md:text-[20px] lg:text-[22px] md:mt-4">
          Venue: JAIN (Deemed-to-be University), Kochi
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-4 sm:mt-5 md:mt-6">
          <Link to="/call-for-papers" className="px-4 py-2 text-sm sm:text-base font-semibold text-white bg-[#001C54] rounded-[10px] hover:bg-[#001C54]/80 transition-colors duration-200">
            Call for Papers
          </Link>
          <Link to="/logo-design-competition" className="px-4 py-2 text-sm sm:text-base font-semibold text-white bg-[#001C54] rounded-[10px] hover:bg-[#001C54]/80 transition-colors duration-200">
            Logo Design Competition
          </Link>
          <Link to="/poster-design-competition" className="px-4 py-2 text-sm sm:text-base font-semibold text-white bg-[#001C54] rounded-[10px] hover:bg-[#001C54]/80 transition-colors duration-200">
            Poster Design Competition
          </Link>
        </div>

        {/* University Logos */}
        <div className="relative mt-6 mb-4 sm:mt-8 sm:mb-6 md:mt-10 md:mb-8 lg:mt-12">
          <div className="hidden sm:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/50 to-transparent -translate-y-1/2" />
          <div className="flex flex-col items-center justify-center gap-10 sm:flex-row sm:gap-14 md:gap-16 lg:gap-20 xl:gap-24">
            <div className="w-[320px] h-[160px] sm:w-[360px] sm:h-[180px] md:w-[420px] md:h-[200px] bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-md border-2 border-gray-200 flex items-center justify-center">
              <img src="/images/iitbombay.jpg" alt="IIT Bombay" className="w-full h-full object-contain" loading="lazy" />
            </div>
            <div className="w-[320px] h-[160px] sm:w-[360px] sm:h-[180px] md:w-[420px] md:h-[200px] bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-md border-2 border-gray-200 flex items-center justify-center">
              <img src="/images/jainDesign.png" alt="JAIN University" className="w-auto h-[70px] object-contain mx-auto sm:h-[90px] md:h-[110px] lg:h-[130px]" loading="lazy" />
            </div>
          </div>
        </div>

        {/* Conference Badge */}
        <div className="mt-8 sm:mt-10">
          <div className="inline-block px-4 py-1 bg-gray-100/50 backdrop-blur-sm rounded-full sm:px-5 sm:py-1.5">
            <p className="text-xs text-gray-600 font-medium sm:text-sm">
              18th International Typography Conference
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
