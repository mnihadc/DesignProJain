const Workshop = () => {
  const images = [
    { src: "/images/workshop1.jpg", alt: "Workshop Speaker 1" },
    { src: "/images/workshop2.jpg", alt: "Workshop Speaker 2" },
    { src: "/images/workshop3.jpg", alt: "Workshop Speaker 3" },
    { src: "/images/workshop4.jpg", alt: "Workshop Speaker 4" },
    { src: "/images/workshop5.jpg", alt: "Workshop Speaker 5" },
    { src: "/images/workshop6.jpg", alt: "Workshop Speaker 6" },
    { src: "/images/workshop7.jpg", alt: "Workshop Speaker 7" },
    { src: "/images/workshop8.jpg", alt: "Workshop Speaker 8" },
  ];

  return (
    <div className="min-h-screen bg-[#0A2463]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#f59e0b] mb-2">Workshop Facilitators & Speakers</h1>
        <p className="text-white/70 text-sm md:text-base mb-10 tracking-widest uppercase">Learn // Create // Experiment</p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((img) => (
            <div
              key={img.src}
              className="group relative rounded-xl overflow-hidden border border-white/10 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-[#f59e0b]/50 cursor-pointer"
            >
              <img src={img.src} alt={img.alt} className="w-full h-auto block" loading="lazy" />
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
