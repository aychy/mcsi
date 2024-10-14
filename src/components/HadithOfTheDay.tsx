'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface Hadith {
  id: number
  hadithEnglish: string
  englishNarrator: string | null
  book: string
  chapter: string
  reference: string
  sunnahLink: string
  isDaily: boolean
}

export default function HadithOfTheDay() {
  const [hadith, setHadith] = useState<Hadith | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchHadith = async (type: 'daily' | 'random') => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch(`/api/getHadith?type=${type}&t=${Date.now()}`)
      if (!response.ok) {
        throw new Error('Failed to fetch hadith')
      }
      const data: Hadith = await response.json()
      setHadith(data)
    } catch (err) {
      console.error('Error in HadithOfTheDay:', err)
      setError('Failed to load hadith. Please try again later.')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchHadith('daily')
  }, [])

  const handleNextHadith = () => {
    fetchHadith('random')
  }

  if (isLoading) {
    return (
      <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
        <div className="text-white text-center">Loading hadith... This may take a moment.</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
        <div className="text-red-500 text-center mb-4">{error}</div>
        <div className="flex justify-center">
          <motion.button 
            onClick={() => fetchHadith('daily')}
            className="bg-white text-emerald-600 px-6 py-2 rounded-full font-semibold shadow-md hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Try Again
          </motion.button>
        </div>
      </div>
    )
  }

  if (!hadith) {
    return (
      <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
        <div className="text-white text-center">No hadith available. Please try again.</div>
        <div className="flex justify-center mt-4">
          <motion.button 
            onClick={() => fetchHadith('daily')}
            className="bg-white text-emerald-600 px-6 py-2 rounded-full font-semibold shadow-md hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Try Again
          </motion.button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-white">
        {hadith.isDaily ? "Hadith of the Day" : "Random Hadith"}
      </h2>
      {hadith.englishNarrator && (
        <p className="text-white italic mb-2">{hadith.englishNarrator}</p>
      )}
      <p className="text-white mb-4">{hadith.hadithEnglish}</p>
      <p className="text-white text-sm mb-2">
        <strong>Book:</strong> {hadith.book}
      </p>
      {hadith.chapter && (
        <p className="text-white text-sm mb-2">
          <strong>Chapter:</strong> {hadith.chapter}
        </p>
      )}
      <p className="text-white text-sm mb-2">
        <strong>Reference:</strong> {hadith.reference}
      </p>
      <p className="text-white text-sm mb-6">
        <a 
          href={hadith.sunnahLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-300 hover:text-blue-100 underline"
        >
          View on Sunnah.com
        </a>
      </p>
      <div className="flex justify-center mt-4">
        <motion.button 
          onClick={handleNextHadith}
          className="bg-white text-emerald-600 px-6 py-2 rounded-full font-semibold shadow-md hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {hadith.isDaily ? "See Another Hadith" : "Next Hadith"}
        </motion.button>
      </div>
    </div>
  )
}
