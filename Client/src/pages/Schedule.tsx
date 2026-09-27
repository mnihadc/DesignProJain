const schedule = [
  {
    day: "28th Sep 2026",
    events: [
      { time: "10:00 AM", activity: "Welcome & Felicitation" },
      { time: "10:30 AM to 12:30 PM", activity: "Workshop" },
      { time: "01:00 PM to 02:00 PM", activity: "Lunch Break" },
      { time: "02:30 PM to 04:30 PM", activity: "Workshop" },
      { time: "4:30 PM", activity: "Tea Break" },
    ],
  },
  {
    day: "29th Sep 2026",
    events: [
      { time: "10:30 AM", activity: "INAUGURATION, Lighting lamp" },
      { time: "10:40 AM", activity: "Opening Remarks" },
      { time: "10:45 AM", activity: "Inaugural address" },
      { time: "10:50 AM", activity: "Pro VC Address" },
      { time: "11:00 AM", activity: "Keynote Speaker" },
      { time: "11:35 AM", activity: "Tea Break" },
      { time: "11:50 AM to 01:00 PM", activity: "Paper Presentation Session" },
      { time: "01:00 PM to 02:00 PM", activity: "Lunch Break" },
      { time: "02:00 PM to 04:00 PM", activity: "Paper Presentation Session" },
      { time: "04:00 PM to 04:30 PM", activity: "Tea Break" },
      { time: "04:30 PM to 05:30 PM", activity: "Panel Discussion" },
    ],
  },
  {
    day: "30th Sep 2026",
    events: [
      { time: "9:30 AM to 10:00 AM", activity: "Keynote Speaker" },
      { time: "10:00 AM to 11:20 AM", activity: "Paper Presentation Session" },
      { time: "11:45 AM", activity: "Tea Break" },
      { time: "11:50 AM to 1:00 PM", activity: "Paper Presentation Session" },
      { time: "01:00 PM to 02:00 PM", activity: "Lunch Break" },
      { time: "02:00 PM to 02:55 PM", activity: "Felicitation - Life Time Achievement Award" },
      { time: "02:55 PM to 03:05 PM", activity: "Felicitation - Logo winner" },
      { time: "03:05 PM to 03:25 PM", activity: "Tea Break" },
      { time: "03:25 PM to 04:40 PM", activity: "Typography QUIZ" },
      { time: "5:30 PM", activity: "Vote of Thanks" },
    ],
  },
];

const Schedule = () => {
  return (
    <div className="min-h-screen bg-[#0A2463]">
      {/* Schedule Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10 py-10 text-white">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#f59e0b] mb-2">TYPODAY Schedule</h1>
        <div className="w-16 h-1 bg-[#f59e0b] rounded-full mb-10" />

        <div className="space-y-10">
          {schedule.map((dayBlock) => (
            <div key={dayBlock.day}>
              {/* Day Header */}
              <div className="bg-[#f59e0b] text-[#001C54] font-bold text-base sm:text-lg px-4 py-2 rounded-t-lg">
                {dayBlock.day}
              </div>
              {/* Events Table */}
              <div className="border border-white/20 rounded-b-lg overflow-hidden">
                {dayBlock.events.map((event, i) => (
                  <div
                    key={i}
                    className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0 px-4 py-3 border-b border-white/10 last:border-b-0 ${i % 2 === 0 ? "bg-white/5" : "bg-transparent"}`}
                  >
                    <span className="sm:w-56 text-[#f59e0b] font-semibold text-sm shrink-0">{event.time}</span>
                    <span className="text-white text-sm sm:text-base">{event.activity}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
