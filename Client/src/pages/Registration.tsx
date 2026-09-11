const Registration = () => {
  return (
    <div className="min-h-screen bg-[#0A2463]">
      {/* Registration Content */}
      <div className="w-full bg-[#0A2463]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-10 text-white">

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-[#f59e0b]">
          Registrations
        </h1>

        {/* Pay Now Button */}
        <div className="flex justify-center mb-8">
          <a
            href="https://typoday.futuresummit.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 text-lg font-bold text-white bg-[#f59e0b] rounded-xl hover:bg-[#f59e0b]/80 transition-colors duration-200"
          >
            Pay Now
          </a>
        </div>

        {/* Fees */}
        <div className="space-y-4 text-sm sm:text-base leading-relaxed">
          <p>Registration fees for the conference along with the workshop (for students) are as follows:</p>

          <div>
            <p className="font-semibold text-[#f59e0b] mb-2">From India and SAARC Countries: (Inclusive GST 18%)</p>
            <ul className="space-y-1 ml-2">
              <li>Professionals: Rs. 6000.00 (5084 + 916-GST)</li>
              <li>Faculty or NGOs: Rs. 6000.00 (5084 + 916-GST)</li>
              <li>Students*: <s>Rs. 5000.00 (4237 + 611-GST)</s> Rs. 4000.00 (3389 + 611-GST) till 15th September 2026</li>
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
            <p>All cancellation requests with payment proof should be sent by email to <a href="mailto:typographyday2025@gmail.com" className="text-[#f59e0b] hover:underline">typographyday2025@gmail.com</a></p>
            <p className="mt-2 font-semibold">Cancellation Request Refund — Refund amount will be as follows:</p>
            <ul className="space-y-1 ml-2 mt-1">
              <li>Before 15th September 2026 : <span className="font-semibold">40% refund</span></li>
              <li>After 15th September 2026 : <span className="font-semibold">No Refund</span></li>
            </ul>
          </div>

        </div>

        {/* Associate Partner */}
        <div className="mt-12 text-center">
          <h2 className="text-[#f59e0b] font-bold text-lg sm:text-xl mb-3">Associate Partner</h2>
          <div className="w-full h-px bg-white/20 mb-6" />
          <div className="flex justify-center">
            <div className="bg-white rounded-xl p-4 shadow-md inline-flex items-center justify-center w-[500px] h-[220px]">
              <img
                src="/images/sadea.png"
                alt="SADEA - South Asian Design Educators Alliance"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
          <div className="w-full h-px bg-white/20 mt-6" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
