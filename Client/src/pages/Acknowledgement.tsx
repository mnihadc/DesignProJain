const Acknowledgement = () => {
  return (
    <div className="min-h-screen w-full bg-[#0A2463] text-white flex flex-col">
      {/* Content Section */}
      <div className="flex-grow px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12 lg:px-12 lg:py-14">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-[#f59e0b]">
            Acknowledgement
          </h1>

          <div className="space-y-4 sm:space-y-5 text-xs sm:text-sm md:text-[15px] leading-relaxed">
            <p>
              This conference uses the Microsoft CMT service for managing
              submissions and peer review. The Microsoft CMT service was
              provided for free by Microsoft and they bore all expenses,
              including costs for Azure cloud services as well as for software
              development and support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acknowledgement;
