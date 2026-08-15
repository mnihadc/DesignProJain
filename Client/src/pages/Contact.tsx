import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#0A2463]">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-b from-white via-white to-gray-50 text-center overflow-hidden pt-6 pb-2 px-4 sm:pt-8 sm:pb-4 sm:px-6 md:pt-10 md:pb-6 md:px-8 lg:pt-12">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full opacity-30 sm:opacity-40" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-50 rounded-full opacity-30 sm:opacity-40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="mb-8 sm:mb-10 md:mb-12 flex justify-center">
            <img src="/images/Typoday2026logo.png" alt="Typoday 2026 Header" className="w-full max-w-[900px] h-auto object-contain" loading="lazy" />
          </div>
          <div className="mt-4 sm:mt-6 md:mt-8">
            <div className="inline-block px-4 py-1.5 bg-blue-50/80 backdrop-blur-sm rounded-full border border-blue-200 sm:px-5 sm:py-2">
              <p className="text-sm text-gray-700 font-medium sm:text-base md:text-lg">September 28th, 29th and 30th 2026</p>
            </div>
          </div>
          <p className="text-base text-gray-700 font-bold mt-2 sm:text-lg sm:mt-3 md:text-[20px] lg:text-[22px] md:mt-4">
            Venue: JAIN (Deemed-to-be University), Kochi
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-4 sm:mt-5 md:mt-6">
            <Link to="/call-for-papers" className="px-4 py-2 text-sm sm:text-base font-semibold text-white bg-[#001C54] rounded-[10px] hover:bg-[#001C54]/80 transition-colors duration-200">Call for Papers</Link>
            <Link to="/logo-design-competition" className="px-4 py-2 text-sm sm:text-base font-semibold text-white bg-[#001C54] rounded-[10px] hover:bg-[#001C54]/80 transition-colors duration-200">Logo Design Competition</Link>
            <Link to="/poster-design-competition" className="px-4 py-2 text-sm sm:text-base font-semibold text-white bg-[#001C54] rounded-[10px] hover:bg-[#001C54]/80 transition-colors duration-200">Poster Design Competition</Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-10 text-white bg-[#0A2463]">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-[#f59e0b]">Contact</h1>

        <div className="mb-4">
          <h2 className="text-lg font-bold text-[#f59e0b] mb-6">Event Organisers:</h2>
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="font-bold text-lg">Mr Jithesh M</p>
              <p className="text-gray-300">Assistant Professor</p>
              <a href="tel:8848588623" className="text-[#f59e0b] hover:underline mt-1 inline-block">8848588623</a>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="font-bold text-lg">Mr Jeevak A</p>
              <p className="text-gray-300">Assistant Professor</p>
              <a href="tel:9562601999" className="text-[#f59e0b] hover:underline mt-1 inline-block">95626 01999</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
