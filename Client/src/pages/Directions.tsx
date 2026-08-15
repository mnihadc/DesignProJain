import { Link } from "react-router-dom";

const Directions = () => {
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
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-[#f59e0b]">Directions To JAIN</h1>
        <p className="text-gray-300 mb-8 text-sm sm:text-base">How to Reach JAIN University, Kochi</p>

        <div className="space-y-6 text-sm sm:text-base leading-relaxed">

          {/* Campus Location */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 className="text-lg font-bold text-[#f59e0b] mb-3">📍 Campus Location</h2>
            <p className="font-semibold mb-1">Campus Address</p>
            <p className="text-gray-300">Knowledge Park, Nirmal Infopark, Infopark P.O., Kakkanad, Kochi, Kerala 682042.</p>
            <p className="font-semibold mt-4 mb-2">Nearby Landmarks</p>
            <ul className="list-disc ml-5 text-gray-300 space-y-1">
              <li>Nirmal Infopark</li>
              <li>Infopark Phase 1</li>
              <li>SmartCity Kochi</li>
            </ul>
          </div>

          {/* By Train */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 className="text-lg font-bold text-[#f59e0b] mb-4">🚆 By Train</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">From Ernakulam Junction (South) / Ernakulam Town (North)</p>
                <p className="text-gray-400 text-xs mb-1">Distance: Approximately 10 km</p>
                <ul className="list-disc ml-5 text-gray-300 space-y-1">
                  <li>Take a city bus towards Kakkanad or Infopark from the station approach roads.</li>
                  <li>Alternatively, take a cab or auto-rickshaw.</li>
                  <li>Enter through Nirmal Infopark Gate and proceed to Knowledge Park.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">From Aluva Railway Station</p>
                <p className="text-gray-400 text-xs mb-1">Distance: Approximately 11 km</p>
                <ul className="list-disc ml-5 text-gray-300 space-y-1">
                  <li>Take a bus or cab via the Kalamassery–Kakkanad Road towards Infopark.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">From Thrippunithura Railway Station</p>
                <p className="text-gray-400 text-xs mb-1">Distance: Approximately 7 km</p>
                <ul className="list-disc ml-5 text-gray-300 space-y-1">
                  <li>Take an auto-rickshaw or taxi directly via the Kakkanad route.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* By Metro */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 className="text-lg font-bold text-[#f59e0b] mb-3">🚇 By Kochi Metro</h2>
            <p className="font-semibold">Palarivattom / Pathadipalam Metro Station</p>
            <p className="text-gray-400 text-xs mb-2">Distance: Approximately 8–9 km</p>
            <ul className="list-disc ml-5 text-gray-300 space-y-1">
              <li>Exit at Palarivattom or Pathadipalam Metro Station on the Blue Line.</li>
              <li>Take a feeder bus, auto-rickshaw, or cab directly to Infopark, Kakkanad.</li>
            </ul>
          </div>

          {/* By Bus */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 className="text-lg font-bold text-[#f59e0b] mb-3">🚌 By Bus / Road Transport</h2>
            <p className="font-semibold">From Vyttila Mobility Hub / Kaloor Bus Stand</p>
            <ul className="list-disc ml-5 text-gray-300 space-y-1 mt-2">
              <li>Take a city bus or KSRTC bus along the Vyttila–Kakkanad–Infopark route.</li>
              <li>Get down at Infopark Express Highway or Nirmal Infopark Gate.</li>
              <li>From the main gate, the campus inside Knowledge Park is a short walk or quick auto ride.</li>
            </ul>
          </div>

          {/* From Airport */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 className="text-lg font-bold text-[#f59e0b] mb-3">✈️ From Cochin International Airport</h2>
            <p className="font-semibold">Cochin International Airport (CIAL, Nedumbassery)</p>
            <p className="text-gray-400 text-xs mb-2">Distance: Approximately 28 km</p>
            <ul className="list-disc ml-5 text-gray-300 space-y-1">
              <li>Pre-paid taxis and app-based cabs are available outside the terminal exit.</li>
              <li>Drive via Airport–Seaport Road directly to Kakkanad.</li>
              <li>Travel time: Approximately 45–60 minutes, depending on traffic.</li>
            </ul>
          </div>

          {/* Local Tips */}
          <div className="bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded-xl p-6">
            <h2 className="text-lg font-bold text-[#f59e0b] mb-3">🛺 Local Transport Tips</h2>
            <p className="font-semibold mb-1">Auto-Rickshaws & Cabs</p>
            <p className="text-gray-300 mb-4">Auto-rickshaws and cabs are readily available throughout Kakkanad, Infopark, and major city transit hubs.</p>
            <p className="font-semibold mb-1">Traffic Advisory</p>
            <p className="text-gray-300 mb-2">Allow extra travel time during weekday peak hours:</p>
            <ul className="list-disc ml-5 text-gray-300 space-y-1">
              <li>Morning: <span className="text-white font-medium">8:30 AM – 10:30 AM</span></li>
              <li>Evening: <span className="text-white font-medium">5:00 PM – 7:30 PM</span></li>
            </ul>
            <p className="text-gray-400 text-xs mt-2">These periods can experience heavier traffic due to IT park commuters.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Directions;
