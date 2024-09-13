'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CalendarIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline'

interface Event {
  id: string
  day: string
  time: string
  title: string
  description: string
  isRecurring: boolean
  date?: Date
}

const events: Event[] = [
  { id: '1', day: 'Saturdays', time: '8:45 PM - 10:00 PM', title: 'Halaqa', description: 'Weekly Halaqa session. Join us for an enlightening discussion on Islamic topics.', isRecurring: true },
  { id: '2', day: 'Mondays', time: '5:00 PM - 7:00 PM', title: 'Quranic & Islamic Studies', description: 'For children ages 7 to 15 years old.', isRecurring: true },
  { id: '3', day: 'Thursday', time: '7:00 PM - 8:30 PM', title: 'Eid al-Adha', description: 'Join us for Eid prayers and celebration.', isRecurring: false, date: new Date(2023, 5, 15) },
]

export default function EventsDisplay() {
  const [activeTab, setActiveTab] = useState<'weekly' | 'special'>('weekly')
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null)

  const toggleEvent = (id: string) => {
    setExpandedEvent(expandedEvent === id ? null : id)
  }

  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden">
      <div className="flex border-b">
        <button
          className={`flex-1 py-4 px-6 text-lg font-semibold ${
            activeTab === 'weekly' ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-700'
          }`}
          onClick={() => setActiveTab('weekly')}
        >
          Weekly Events
        </button>
        <button
          className={`flex-1 py-4 px-6 text-lg font-semibold ${
            activeTab === 'special' ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-700'
          }`}
          onClick={() => setActiveTab('special')}
        >
          Special Events
        </button>
      </div>

      <div className="p-6">
        <AnimatePresence mode="wait">
          {activeTab === 'weekly' ? (
            <motion.div
              key="weekly"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {events.filter(event => event.isRecurring).map((event) => (
                <EventCard key={event.id} event={event} expanded={expandedEvent === event.id} toggleExpand={() => toggleEvent(event.id)} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="special"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {events.filter(event => !event.isRecurring).map((event) => (
                <EventCard key={event.id} event={event} expanded={expandedEvent === event.id} toggleExpand={() => toggleEvent(event.id)} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

function EventCard({ event, expanded, toggleExpand }: { event: Event; expanded: boolean; toggleExpand: () => void }) {
  return (
    <motion.div
      layout
      className="bg-gray-50 rounded-lg shadow-md overflow-hidden mb-4"
    >
      <div
        className="p-4 cursor-pointer flex items-center justify-between"
        onClick={toggleExpand}
      >
        <div className="flex items-center space-x-4">
          <div className="bg-emerald-100 p-2 rounded-full">
            <CalendarIcon className="h-6 w-6 text-emerald-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
            <p className="text-sm text-gray-600">{event.isRecurring ? event.day : event.date?.toLocaleDateString()}</p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-4 pb-4"
          >
            <div className="flex items-center space-x-2 text-gray-600 mb-2">
              <ClockIcon className="h-5 w-5" />
              <span>{event.time}</span>
            </div>
            <p className="text-gray-700 mb-2">{event.description}</p>
            {event.isRecurring && (
              <div className="flex items-center space-x-2 text-gray-600">
                <UserGroupIcon className="h-5 w-5" />
                <span>Weekly Event</span>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}