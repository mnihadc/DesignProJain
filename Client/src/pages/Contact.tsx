const Contact = () => {
  return (
    <div className="min-h-screen bg-[#0A2463]">
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
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="font-bold text-lg">Ms Ambili</p>
              <p className="text-gray-300">Coordinator</p>
              <a href="tel:7034047878" className="text-[#f59e0b] hover:underline mt-1 inline-block">70340 47878</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
