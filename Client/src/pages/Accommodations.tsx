import { Link } from "react-router-dom";

const hotels = [
  {
    category: "Premium & Luxury Hotels",
    items: [
      {
        name: "Four Points by Sheraton Kochi Infopark",
        stars: "★★★★★",
        distance: "1 km from campus",
        desc: "Located inside Infopark Phase, this luxury hotel offers comfortable rooms, dining facilities, and business amenities.",
        phone: "+91 484 718 8888",
        website: "https://www.marriott.com/cokfp",
        websiteLabel: "marriott.com/cokfp",
      },
      {
        name: "Clarion Hotel Khayal Kochi, Infopark",
        stars: "★★★★",
        distance: "1.5 km from campus",
        desc: "A modern full-service hotel near the Infopark main gate, suitable for academic visitors and official guests.",
        phone: "+91 484 291 0000 / +91 91889 54101",
        website: "https://www.choicehotels.com",
        websiteLabel: "choicehotels.com",
      },
      {
        name: "Holiday Inn Kochi",
        stars: "★★★★★",
        distance: "6 km from campus",
        desc: "Located along the NH Bypass at Vennala / Palarivattom, offering premium rooms and international amenities.",
        phone: "+91 484 419 9000",
        website: "https://www.ihg.com/holidayinn",
        websiteLabel: "ihg.com/holidayinn",
      },
    ],
  },
  {
    category: "Executive & Mid-Range Hotels",
    items: [
      {
        name: "Hotel Olive Eva",
        stars: "★★★★",
        distance: "2 km from campus",
        desc: "Located at Edachira Junction, Kakkanad. Offers executive rooms, multi-cuisine dining, and banqueting facilities.",
        phone: "+91 484 242 2255 / +91 97450 00812",
        website: "https://www.olivehotels.com",
        websiteLabel: "olivehotels.com",
      },
      {
        name: "The Blooms Cochin",
        stars: "★★★★",
        distance: "2.5 km from campus",
        desc: "Situated near the Kakkanad–Infopark Road, offering executive accommodation close to Knowledge Park.",
        phone: "+91 484 297 3300 / +91 90610 84444",
        website: "https://www.thebloomscochin.com",
        websiteLabel: "thebloomscochin.com",
      },
      {
        name: "Zoot Kochi Infopark by D2V",
        stars: "★★★",
        distance: "2 km from campus",
        desc: "A contemporary boutique hotel near the Infopark hub, suitable for business and short academic stays.",
        phone: "+91 90725 80000",
        website: "https://www.zoothotels.com",
        websiteLabel: "zoothotels.com",
      },
      {
        name: "Loft Business Hotel",
        stars: "★★★",
        distance: "2 km from campus",
        desc: "Located on the Kakkanad–Infopark corridor, with modern rooms and workspace amenities.",
        phone: "+91 484 298 8800 / +91 90723 45600",
        website: null,
        websiteLabel: null,
      },
      {
        name: "Royal Residency by Whitestone Suites",
        stars: "★★★★",
        distance: "2 km from campus",
        desc: "Located in Kakkanad, offering business-class suites and comfortable family accommodation.",
        phone: "+91 97455 12345",
        website: "https://www.whitestonesuites.com",
        websiteLabel: "whitestonesuites.com",
      },
    ],
  },
  {
    category: "Serviced Apartments & Executive Stays",
    items: [
      {
        name: "Sapphire Hotel Apartments",
        stars: "★★★",
        distance: "2 km from campus",
        desc: "Located in central Kakkanad and suitable for extended stays, families, and short-term visits.",
        phone: "+91 484 242 4268",
        website: null,
        websiteLabel: null,
      },
      {
        name: "Ruby Hotel Apartments",
        stars: "★★★",
        distance: "2 km from campus",
        desc: "Fully furnished serviced apartments in the Kakkanad–Infopark vicinity.",
        phone: "+91 90726 09999",
        website: null,
        websiteLabel: null,
      },
    ],
  },
  {
    category: "Budget-Friendly Accommodation",
    items: [
      {
        name: "Aryaas Regent",
        stars: "★★★",
        distance: "3 km from campus",
        desc: "A budget accommodation near Kakkanad Junction with an attached vegetarian restaurant.",
        phone: "+91 484 242 2111 / +91 94470 33888",
        website: null,
        websiteLabel: null,
      },
      {
        name: "Kalappurayil Residency",
        stars: "★★★",
        distance: "3 km from campus",
        desc: "A budget-friendly option in the Kakkanad residential area, suitable for students, parents, and budget travelers.",
        phone: "+91 94475 29285",
        website: null,
        websiteLabel: null,
      },
    ],
  },
];

const Accommodations = () => {
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
            <img src="/images/newlogo.png" alt="Typoday 2026 Header" className="w-full max-w-[900px] h-auto object-contain" loading="lazy" />
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
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-[#f59e0b]">Accommodations</h1>
        <p className="text-gray-300 mb-8 text-sm sm:text-base">Near JAIN University, Kochi</p>

        <div className="space-y-10">
          {hotels.map((group) => (
            <div key={group.category}>
              <h2 className="text-lg sm:text-xl font-bold text-[#f59e0b] mb-4 border-l-4 border-[#f59e0b] pl-3">
                {group.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {group.items.map((hotel) => (
                  <div key={hotel.name} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-bold text-base leading-tight">{hotel.name}</p>
                      <span className="text-[#f59e0b] text-xs whitespace-nowrap">{hotel.stars}</span>
                    </div>
                    <p className="text-xs text-blue-300">{hotel.distance}</p>
                    <p className="text-sm text-gray-300 leading-relaxed">{hotel.desc}</p>
                    <p className="text-sm">
                      📞{" "}
                      <a href={`tel:${hotel.phone.replace(/\s|\//g, "")}`} className="text-[#f59e0b] hover:underline">
                        {hotel.phone}
                      </a>
                    </p>
                    {hotel.website && (
                      <p className="text-sm">
                        🌐{" "}
                        <a href={hotel.website} target="_blank" rel="noopener noreferrer" className="text-[#f59e0b] hover:underline">
                          {hotel.websiteLabel}
                        </a>
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Booking Info */}
        <div className="mt-10 bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded-xl p-6">
          <p className="text-lg font-bold text-[#f59e0b] mb-2">📌 Booking Information</p>
          <p className="text-sm text-gray-200 leading-relaxed">
            <span className="font-semibold text-white">Advance Reservation Recommended</span> — Room availability in Kakkanad may decrease during IT conferences and university admission or convocation seasons. We recommend booking <span className="font-semibold text-[#f59e0b]">2–3 weeks in advance</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accommodations;
