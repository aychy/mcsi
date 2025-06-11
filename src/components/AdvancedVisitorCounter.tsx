'use client'

import { useState, useEffect } from 'react'

interface VisitorStats {
  totalVisitors: number
  todayVisitors: number
  onlineNow: number
}

export default function AdvancedVisitorCounter() {
  const [stats, setStats] = useState<VisitorStats>({
    totalVisitors: 0,
    todayVisitors: 0,
    onlineNow: 1
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const trackVisitor = async () => {
      try {
        // Try to fetch from API first (if you implement a backend)
        // const response = await fetch('/api/visitors', { method: 'POST' })
        // const data = await response.json()
        // setStats(data)
        
        // Fallback to localStorage for demo
        const storedTotal = localStorage.getItem('mcsi-total-visitors')
        const storedToday = localStorage.getItem('mcsi-today-visitors')
        const lastVisitDate = localStorage.getItem('mcsi-last-visit-date')
        const today = new Date().toDateString()
        
        let totalVisitors = storedTotal ? parseInt(storedTotal) : 0
        let todayVisitors = storedToday ? parseInt(storedToday) : 0
        
        // Check if it's a new day
        if (lastVisitDate !== today) {
          // Reset today's count if it's a new day
          todayVisitors = 1
          localStorage.setItem('mcsi-today-visitors', '1')
          localStorage.setItem('mcsi-last-visit-date', today)
        } else {
          // Increment today's count
          todayVisitors += 1
          localStorage.setItem('mcsi-today-visitors', todayVisitors.toString())
        }
        
        // Always increment total
        totalVisitors += 1
        localStorage.setItem('mcsi-total-visitors', totalVisitors.toString())
        
        setStats({
          totalVisitors,
          todayVisitors,
          onlineNow: Math.floor(Math.random() * 5) + 1 // Simulated online users
        })
        
      } catch (error) {
        console.error('Error tracking visitor:', error)
      } finally {
        setIsLoading(false)
      }
    }

    const timer = setTimeout(trackVisitor, 800)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 text-white border border-white border-opacity-20 min-w-[200px]">
        <div className="flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 text-white border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300 min-w-[200px]">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs opacity-80">Total Visitors</span>
          <span className="text-sm font-bold">{stats.totalVisitors.toLocaleString()}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-xs opacity-80">Today</span>
          <span className="text-sm font-bold">{stats.todayVisitors.toLocaleString()}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs opacity-80">Online</span>
          </div>
          <span className="text-sm font-bold">{stats.onlineNow}</span>
        </div>
      </div>
    </div>
  )
} 