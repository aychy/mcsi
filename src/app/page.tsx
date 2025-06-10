'use client'

import PrayerTimes from '@/components/PrayerTimes'
import EventCalendar from '@/components/EventsDisplay'
import HadithOfTheDay from '@/components/HadithOfTheDay'

export default function Home() {
  return (
    <div className="min-h-screen">
      <section 
        id="top" 
        className="min-h-screen flex items-center justify-center bg-gradient-to-r from-emerald-600 to-teal-600 relative overflow-hidden py-20"
      >
        <div className="text-center text-white max-w-4xl relative z-10 p-4 mx-auto">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">Welcome to MCSI</h1>
          <p className="text-lg sm:text-xl mb-8">We are a welcoming community dedicated to serving Allah and our local community.</p>
          <div className="w-full">
            <HadithOfTheDay />
          </div>
        </div>
      </section>

      <section 
        id="events" 
        className="min-h-screen flex items-center justify-center bg-emerald-50 relative overflow-hidden py-12 px-4"
      >
        <div className="bg-white p-4 sm:p-8 rounded-lg shadow-xl w-full max-w-6xl relative z-10">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-emerald-800">Upcoming Events</h2>
          <EventCalendar />
        </div>
      </section>

      <section 
        id="prayer-times" 
        className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-600 to-emerald-600 relative overflow-hidden p-4"
      >
        <div className="relative z-10">
          <PrayerTimes />
        </div>
      </section>
    </div>
  )
}
