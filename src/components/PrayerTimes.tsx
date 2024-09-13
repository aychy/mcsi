'use client'

import { useQuery } from 'react-query'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'

interface PrayerTimesData {
  fajr: string
  sunrise: string
  dhuhr: string
  asr: string
  maghrib: string
  isha: string
  juma: string
}

const fetchPrayerTimes = async (): Promise<PrayerTimesData> => {
  try {
    const response = await fetch('https://api.aladhan.com/v1/timingsByCity?city=Staten Island&state=New York&country=United States&method=2')
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    const timings = data.data.timings

    const isDST = () => {
      const today = new Date()
      const jan = new Date(today.getFullYear(), 0, 1).getTimezoneOffset()
      const jul = new Date(today.getFullYear(), 6, 1).getTimezoneOffset()
      return Math.max(jan, jul) !== today.getTimezoneOffset()
    }

    const jumaTime = isDST() ? '13:10' : '12:10'

    return {
      fajr: timings.Fajr,
      sunrise: timings.Sunrise,
      dhuhr: timings.Dhuhr,
      asr: timings.Asr,
      maghrib: timings.Maghrib,
      isha: timings.Isha,
      juma: jumaTime
    }
  } catch (error) {
    console.error('Error fetching prayer times:', error)
    throw error
  }
}

const convertTo12HourFormat = (time24: string): string => {
  const [hours, minutes] = time24.split(':')
  const hour = parseInt(hours, 10)
  const ampm = hour >= 12 ? 'PM' : 'AM'
  const hour12 = hour % 12 || 12
  return `${hour12}:${minutes} ${ampm}`
}

const prayerIcons: { [key: string]: JSX.Element } = {
  fajr: <SunIcon className="h-6 w-6 text-sky-300" />, // Changed to baby blue
  sunrise: <SunIcon className="h-6 w-6 text-yellow-500" />,
  dhuhr: <SunIcon className="h-6 w-6 text-yellow-600" />,
  asr: <SunIcon className="h-6 w-6 text-orange-500" />,
  maghrib: <SunIcon className="h-6 w-6 text-red-500" />,
  isha: <MoonIcon className="h-6 w-6 text-indigo-600" />,
  juma: <SunIcon className="h-6 w-6 text-green-500" />,
}

export default function PrayerTimes() {
  const { data, isLoading, error } = useQuery<PrayerTimesData, Error>('prayerTimes', fetchPrayerTimes, {
    retry: 3,
    retryDelay: 1000,
  })

  if (isLoading) return <div className="text-center py-10 text-white">Loading prayer times...</div>
  if (error) return <div className="text-center py-10 text-red-500">Error fetching prayer times: {error.message}</div>

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-2xl rounded-xl p-8 max-w-2xl w-full"
    >
      <h2 className="text-4xl font-bold text-center mb-6 text-emerald-800">Prayer Times</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data && Object.entries(data).map(([prayer, time], index) => (
          <motion.div
            key={prayer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`flex items-center justify-between p-4 rounded-lg ${
              prayer === 'juma' ? 'bg-emerald-100 col-span-2' : 'bg-gray-50'
            } shadow-md`}
          >
            <div className="flex items-center">
              {prayerIcons[prayer]}
              <span className="ml-3 text-lg font-semibold capitalize text-gray-800">
                {prayer === 'sunrise' ? 'Sunrise' : prayer}
              </span>
            </div>
            <span className="text-lg font-bold text-emerald-600">{convertTo12HourFormat(time as string)}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}