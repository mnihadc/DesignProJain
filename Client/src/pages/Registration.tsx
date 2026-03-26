import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="min-h-screen bg-[#0A2463]">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-b from-white via-white to-gray-50 text-center overflow-hidden pt-6 pb-2 px-4 sm:pt-8 sm:pb-4 sm:px-6 md:pt-10 md:pb-6 md:px-8 lg:pt-12">
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

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="mb-8 sm:mb-10 md:mb-12 flex justify-center">
            <img
              src="/images/Typoday2026logo.png"
              alt="Typoday 2026 Header"
              className="w-full max-w-[900px] h-auto object-contain"
              loading="lazy"
            />
          </div>
          <div className="mt-4 sm:mt-6 md:mt-8">
            <div className="inline-block px-4 py-1.5 bg-blue-50/80 backdrop-blur-sm rounded-full border border-blue-200 sm:px-5 sm:py-2">
              <p className="text-sm text-gray-700 font-medium sm:text-base md:text-lg">
                September 28th, 29th and 30th 2026
              </p>
            </div>
          </div>
          <p className="text-base text-gray-700 font-bold mt-2 sm:text-lg sm:mt-3 md:text-[20px] lg:text-[22px] md:mt-4">
            Venue: JAIN (Deemed-to-be University), Kochi
          </p>

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

          <div className="relative mt-6 mb-4 sm:mt-8 sm:mb-6 md:mt-10 md:mb-8 lg:mt-12">
            <div className="flex flex-col items-center justify-center gap-10 sm:flex-row sm:gap-14 md:gap-16 lg:gap-20 xl:gap-24">
              <div className="w-[320px] h-[160px] sm:w-[360px] sm:h-[180px] md:w-[420px] md:h-[200px] bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-md border-2 border-gray-200 flex items-center justify-center">
                <img src="/images/iitbombay.jpg" alt="IIT Bombay" className="w-full h-full object-contain" loading="lazy" />
              </div>
              <div className="w-[320px] h-[160px] sm:w-[360px] sm:h-[180px] md:w-[420px] md:h-[200px] bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-md border-2 border-gray-200 flex items-center justify-center">
                <img src="/images/jainDesign.png" alt="JAIN University" className="w-auto h-[70px] object-contain mx-auto sm:h-[90px] md:h-[110px] lg:h-[130px]" loading="lazy" />
              </div>
            </div>
          </div>
          <div className="mt-8 sm:mt-10">
            <div className="inline-block px-4 py-1 bg-gray-100/50 backdrop-blur-sm rounded-full sm:px-5 sm:py-1.5">
              <p className="text-xs text-gray-600 font-medium sm:text-sm">
                18th International Typography Conference
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10 py-10 text-white slide-up-section">

        {/* Register Now Box */}
        <div className="border border-white/20 rounded-xl p-6 mb-8 text-center">
          <h2 className="text-[#f59e0b] font-bold text-lg mb-4">Register Now</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/call-for-papers" className="px-4 py-2 text-sm font-semibold text-white bg-[#f59e0b] rounded-[10px] hover:bg-[#f59e0b]/80 transition-colors duration-200">
              Call for Papers
            </Link>
            <Link to="/logo-design-competition" className="px-4 py-2 text-sm font-semibold text-white bg-[#f59e0b] rounded-[10px] hover:bg-[#f59e0b]/80 transition-colors duration-200">
              Logo Design Competition
            </Link>
            <Link to="/poster-design-competition" className="px-4 py-2 text-sm font-semibold text-white bg-[#f59e0b] rounded-[10px] hover:bg-[#f59e0b]/80 transition-colors duration-200">
              Poster Design Competition
            </Link>
          </div>
        </div>

        {/* Fees */}
        <div className="space-y-4 text-sm sm:text-base leading-relaxed">
          <p>Registration fees for the conference along with the workshop (for students) are as follows:</p>

          <div>
            <p className="font-semibold text-[#f59e0b] mb-2">From India and SAARC Countries: (Inclusive GST 18%)</p>
            <ul className="space-y-1 ml-2">
              <li>Professionals: Rs. 12000.00 (10169 + 1831-GST)</li>
              <li>Professionals (InDeAs / Aksharaya Members): Rs. 9500.00 (8050 + 1450-GST)</li>
              <li>Faculty or NGOs: Rs. 6000.00 (5084 + 916-GST)</li>
              <li>Faculty or NGOs (InDeAs / Aksharaya Members): Rs. 5000.00 (4237 + 763-GST)</li>
              <li>Students*: Rs. 5000.00 (4237 + 611-GST)</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-[#f59e0b] mb-2">From Abroad excluding SAARC Countries: (Inclusive GST 18%)</p>
            <ul className="space-y-1 ml-2">
              <li>Professionals: US$ 500</li>
              <li>Faculty: US$ 250</li>
              <li>Students*: US$ 100</li>
            </ul>
          </div>

          <p className="text-gray-300 text-sm italic">
            (* The workshops are open only for the students and the registration fee is inclusive for design workshop AND conference.)
          </p>

          {/* Cancellation Policy */}
          <div className="pt-4">
            <p className="font-semibold text-[#f59e0b] mb-2">Cancellation Policy:</p>
            <p>All cancellation requests should be sent by email to <a href="mailto:help@typoday.org" className="text-[#f59e0b] hover:underline">help@typoday.org</a></p>
            <p className="mt-2 font-semibold">Cancellation Request Refund Amount:</p>
            <ul className="space-y-1 ml-2 mt-1">
              <li>Before 1st June 2026 : 75%</li>
              <li>Before 20th August 2026 : 50%</li>
              <li>After 21st August 2026 : No Refund</li>
            </ul>
          </div>

          {/* Payment */}
          <div className="pt-4">
            <p className="font-semibold text-[#f59e0b] mb-1">Payment:</p>
            <p>Details of the payment will be updated soon</p>
          </div>
        </div>

        {/* Associate Partner */}
        <div className="mt-12 text-center">
          <h2 className="text-[#f59e0b] font-bold text-lg sm:text-xl mb-3">Associate Partner</h2>
          <div className="w-full h-px bg-white/20 mb-6" />
          <div className="flex justify-center">
            <div className="bg-white rounded-xl p-4 shadow-md inline-flex items-center justify-center w-[500px] h-[220px]">
              <img
                src="/images/sadea.gif"
                alt="SADEA - South Asian Design Educators Alliance"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
          <div className="w-full h-px bg-white/20 mt-6" />
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 pt-6 pb-4 sm:gap-12 md:gap-16">
          <span className="text-xl font-bold text-[#f59e0b] sm:text-2xl md:text-3xl">50+ Speakers</span>
          <span className="text-xl font-bold text-[#f59e0b] sm:text-2xl md:text-3xl">30+ Workshops</span>
          <span className="text-xl font-bold text-[#f59e0b] sm:text-2xl md:text-3xl">500+ Attendees</span>
        </div>
      </div>
    </div>
  );
};

export default Registration;
