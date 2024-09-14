'use client'

import PrayerTimes from '@/components/PrayerTimes'
import EventCalendar from '@/components/EventsDisplay'

export default function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <section id="top" className="snap-start min-h-screen flex items-center justify-center bg-gradient-to-r from-emerald-500 to-teal-500 p-4">
        <div className="text-center text-white">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">Welcome to MCSI</h1>
          <p className="text-lg sm:text-xl">We are a welcoming community dedicated to serving Allah and our local community.</p>
        </div>
      </section>

      <section id="events" className="snap-start min-h-screen flex items-center justify-center bg-mint-100 py-12 sm:py-20 px-4">
        <div className="bg-white p-4 sm:p-8 rounded-lg shadow-xl w-full max-w-6xl my-8 sm:my-12">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-emerald-800">Upcoming Events</h2>
          <EventCalendar />
        </div>
      </section>

      <section id="prayer-times" className="snap-start min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-500 to-emerald-500 p-4">
        <PrayerTimes />
      </section>
    </div>
  )
}
