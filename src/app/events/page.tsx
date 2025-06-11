'use client'

import EventCalendar from '@/components/EventsDisplay'

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-[#f0f7f8] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#002537] mb-4">
            Upcoming Events
          </h1>
          <p className="text-lg text-[#003d52] max-w-2xl mx-auto">
            Join us for our weekly programs and special events. Stay connected with your community.
          </p>
        </div>
        
        <div className="bg-white p-4 sm:p-8 rounded-lg shadow-xl w-full max-w-6xl mx-auto">
          <EventCalendar />
        </div>
      </div>
    </div>
  )
} 