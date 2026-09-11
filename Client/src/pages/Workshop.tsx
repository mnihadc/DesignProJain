import { Link } from "react-router-dom";

const Workshop = () => {
  const images = [
    { src: "/images/1.jpg.jpeg", alt: "Speaker 1" },
    { src: "/images/2.jpg.jpeg", alt: "Speaker 2" },
    { src: "/images/3.jpg.jpeg", alt: "Speaker 3" },
    { src: "/images/4.jpg.jpeg", alt: "Speaker 4" },
    { src: "/images/5.jpg.jpeg", alt: "Speaker 5" },
    { src: "/images/6.jpg.jpeg", alt: "Speaker 6" },
    { src: "/images/7.jpg.jpeg", alt: "Speaker 7" },
  ];

  return (
    <div className="min-h-screen bg-[#0A2463]">

      {/* Top white hero — identical to all other pages */}
      <section className="relative w-full bg-gradient-to-b from-white via-white to-gray-50 text-center overflow-hidden pt-6 pb-2 px-4 sm:pt-8 sm:pb-4 sm:px-6 md:pt-10 md:pb-6 md:px-8 lg:pt-12">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full opacity-30" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-50 rounded-full opacity-30" />
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `linear-gradient(90deg,#0A2463 1px,transparent 1px),linear-gradient(180deg,#0A2463 1px,transparent 1px)`, backgroundSize: "40px 40px" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="mb-8 flex justify-center">
            <img src="/images/newlogo.png" alt="Typoday 2026" className="w-full max-w-[900px] h-auto object-contain" loading="lazy" />
          </div>
          <div className="inline-block px-4 py-1.5 bg-blue-50/80 backdrop-blur-sm rounded-full border border-blue-200">
            <p className="text-sm text-gray-700 font-medium">September 28th, 29th and 30th 2026</p>
          </div>
          <p className="text-base text-gray-700 font-bold mt-2 md:text-[20px]">Venue: JAIN (Deemed-to-be University), Kochi</p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
            <Link to="/call-for-papers" className="px-4 py-2 text-sm font-semibold text-white bg-[#001C54] rounded-[10px] hover:bg-[#f59e0b]/80 transition-colors duration-200">Call for Papers</Link>
            <Link to="/logo-design-competition" className="px-4 py-2 text-sm font-semibold text-white bg-[#001C54] rounded-[10px] hover:bg-[#f59e0b]/80 transition-colors duration-200">Logo Design Competition</Link>
            <Link to="/poster-design-competition" className="px-4 py-2 text-sm font-semibold text-white bg-[#001C54] rounded-[10px] hover:bg-[#f59e0b]/80 transition-colors duration-200">Poster Design Competition</Link>
          </div>
          <div className="flex flex-col items-center justify-center gap-10 sm:flex-row sm:gap-14 mt-8 mb-4">
            <div className="w-[320px] h-[160px] sm:w-[360px] sm:h-[180px] md:w-[420px] md:h-[200px] bg-white/90 rounded-2xl p-4 shadow-md border-2 border-gray-200 flex items-center justify-center">
              <img src="/images/iitbombay.jpg" alt="IIT Bombay" className="w-full h-full object-contain" />
            </div>
            <div className="w-[320px] h-[160px] sm:w-[360px] sm:h-[180px] md:w-[420px] md:h-[200px] bg-white/90 rounded-2xl p-4 shadow-md border-2 border-gray-200 flex items-center justify-center">
              <img src="/images/jainDesign.png" alt="JAIN University" className="w-auto h-[70px] object-contain mx-auto sm:h-[90px] md:h-[110px]" />
            </div>
          </div>
          <div className="inline-block px-4 py-1 bg-gray-100/50 rounded-full mt-4 mb-2">
            <p className="text-xs text-gray-600 font-medium">18th International Typography Conference</p>
          </div>
        </div>
      </section>

      {/* Workshop content on navy background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#f59e0b] mb-2">Workshops</h1>
        <p className="text-white/70 text-sm md:text-base mb-10 tracking-widest uppercase">Learn // Create // Experiment</p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((img) => (
            <div
              key={img.src}
              className="group relative rounded-xl overflow-hidden border border-white/10 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-[#f59e0b]/50 cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto block"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 flex justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs font-bold text-white bg-[#f59e0b] px-3 py-1 rounded-full tracking-wide">
                  VIEW WORKSHOP →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Workshop;
