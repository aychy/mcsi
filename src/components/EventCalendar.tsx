'use client'

import { useState, useCallback } from 'react'
import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

moment.locale('en-GB')
const localizer = momentLocalizer(moment)

interface Event {
  title: string
  start: Date
  end: Date
  allDay: boolean
  desc?: string
}

export default function EventCalendar() {
  const [view, setView] = useState<View>(Views.MONTH)
  const [date, setDate] = useState(new Date())
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)

  const [events] = useState<Event[]>(() => {
    const currentDate = new Date()
    const events: Event[] = []

    // Add Halaqa events for the next 12 weeks
    for (let i = 0; i < 12; i++) {
      const halaqaDate = new Date(currentDate)
      halaqaDate.setDate(currentDate.getDate() + ((6 + 7 - currentDate.getDay()) % 7) + (i * 7))
      halaqaDate.setHours(20, 45, 0) // Set to 8:45 PM

      events.push({
        title: 'Halaqa',
        start: new Date(halaqaDate),
        end: new Date(halaqaDate.setHours(halaqaDate.getHours() + 1, halaqaDate.getMinutes() + 15)), // 1 hour 15 minutes duration
        allDay: false,
        desc: 'Weekly Halaqa session at 8:45 PM. Join us for an enlightening discussion on Islamic topics.'
      })

      // Add Quranic and Islamic studies for children
      const studiesDate = new Date(currentDate)
      studiesDate.setDate(currentDate.getDate() + ((1 + 7 - currentDate.getDay()) % 7) + (i * 7))
      studiesDate.setHours(17, 0, 0) // Set to 5:00 PM

      events.push({
        title: 'Quranic & Islamic Studies',
        start: new Date(studiesDate),
        end: new Date(studiesDate.setHours(19, 0, 0)), // 2 hours duration
        allDay: false,
        desc: 'Quranic and Islamic studies for children ages 7 to 15 years old.'
      })
    }

    return events
  })

  const onNavigate = useCallback((newDate: Date) => setDate(newDate), [setDate])

  const eventStyleGetter = (event: Event) => {
    const backgroundColor = event.title === 'Halaqa' ? '#10B981' : '#3B82F6' // emerald-500 for Halaqa, blue-500 for Studies
    return {
      style: {
        backgroundColor,
        borderRadius: '5px',
        opacity: 0.8,
        color: 'white',
        border: '0',
        display: 'block'
      }
    }
  }

  const handleSelectEvent = (event: Event) => {
    setSelectedEvent(event)
  }

  const closeModal = () => {
    setSelectedEvent(null)
  }

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  return (
    <div className="h-[800px] relative">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }}
        view={view}
        onView={(newView: View) => setView(newView)}
        date={date}
        onNavigate={onNavigate}
        eventPropGetter={eventStyleGetter}
        tooltipAccessor={(event) => event.desc}
        onSelectEvent={handleSelectEvent}
        formats={{
          eventTimeRangeFormat: ({ start, end }, culture, localizer) =>
            localizer ? `${localizer.format(start, 'h:mm A', culture)} - ${localizer.format(end, 'h:mm A', culture)}` : '',
          dayFormat: (date, culture, localizer) =>
            localizer ? localizer.format(date, 'ddd D', culture) : '',
        }}
        views={{
          month: true,
          week: true,
          day: true,
          agenda: true,
        }}
        messages={{
          agenda: 'List',
        }}
        popup
        selectable
      />
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={handleModalClick}>
          <div className="bg-white p-6 rounded-lg max-w-md relative">
            <h2 className="text-2xl font-bold mb-4">{selectedEvent.title}</h2>
            <p className="mb-4">{selectedEvent.desc}</p>
            <p className="mb-4">
              Time: {moment(selectedEvent.start).format('MMMM D, YYYY h:mm A')} - {moment(selectedEvent.end).format('h:mm A')}
            </p>
            <button 
              onClick={closeModal}
              className="bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600 absolute top-2 right-2"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}