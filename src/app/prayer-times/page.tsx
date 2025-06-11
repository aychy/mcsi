'use client'

export default function PrayerTimesPage() {
  return (
    <div className="min-h-screen bg-[#f8fafb] py-12 px-2">
      <div className="max-w-[95%] xl:max-w-[90%] mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#002537] mb-4">
            Prayer Times
          </h1>
          <p className="text-lg text-[#003d52] max-w-2xl mx-auto">
            Stay connected with your daily prayers. View current prayer times and Islamic calendar.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-full">
          <iframe 
            src="https://timing.athanplus.com/masjid/widgets/embed?theme=1&masjid_id=aAePGmLj" 
            width="100%" 
            height="600" 
            className="border-none w-full"
            allowTransparency={true}
            style={{ minWidth: '100%' }}
          />
        </div>
      </div>
    </div>
  )
} 