'use client'

import { useState, useEffect } from 'react'

export default function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState<number>(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Function to get visitor count from localStorage
    const getVisitorCount = () => {
      if (typeof window !== 'undefined') {
        const storedCount = localStorage.getItem('mcsi-visitor-count')
        const lastVisit = localStorage.getItem('mcsi-last-visit')
        const today = new Date().toDateString()
        
        // Initialize count if it doesn't exist
        if (!storedCount) {
          localStorage.setItem('mcsi-visitor-count', '1')
          localStorage.setItem('mcsi-last-visit', today)
          return 1
        }
        
        // Check if this is a new day or first visit today
        if (lastVisit !== today) {
          const newCount = parseInt(storedCount) + 1
          localStorage.setItem('mcsi-visitor-count', newCount.toString())
          localStorage.setItem('mcsi-last-visit', today)
          return newCount
        }
        
        return parseInt(storedCount)
      }
      return 0
    }

    // Simulate a slight delay for better UX
    const timer = setTimeout(() => {
      const count = getVisitorCount()
      setVisitorCount(count)
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="bg-[#002537] bg-opacity-90 backdrop-blur-sm rounded-lg p-4 text-white border border-[#003d52] border-opacity-50 shadow-lg">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-[#003d52] bg-opacity-50 flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
          <div>
            <p className="text-sm opacity-80">Loading...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-[#002537] bg-opacity-90 backdrop-blur-sm rounded-lg p-4 text-white border border-[#003d52] border-opacity-50 hover:bg-opacity-95 transition-all duration-300 shadow-lg">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 rounded-full bg-[#003d52] bg-opacity-60 flex items-center justify-center">
          <svg 
            className="w-4 h-4" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
          </svg>
        </div>
        <div>
          <p className="text-sm opacity-80">Visitors</p>
          <p className="text-lg font-bold">{visitorCount.toLocaleString()}</p>
        </div>
      </div>
    </div>
  )
} 