'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'

export default function Header({ className = '' }) {
  const [activeSection, setActiveSection] = useState('top')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (pathname === '/') {
      const handleScroll = () => {
        const sections = ['top', 'events', 'prayer-times']
        const currentSection = sections.find(section => {
          const element = document.getElementById(section)
          if (element) {
            const rect = element.getBoundingClientRect()
            return rect.top <= 100 && rect.bottom >= 100
          }
          return false
        })
        if (currentSection) {
          setActiveSection(currentSection)
        }
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [pathname])

  const scrollToSection = (sectionId: string) => {
    if (pathname !== '/') {
      router.push('/')
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header className={`bg-emerald-600 bg-opacity-80 text-white p-4 ${className}`}>
      <nav className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center justify-between w-full md:w-auto">
          <button onClick={() => scrollToSection('top')} className="text-left">
            <span className="text-2xl font-bold block">MCSI</span>
            <span className="text-sm">Muslim Center of Staten Island</span>
          </button>
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
        <ul className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0 w-full md:w-auto`}>
          <li>
            <button
              onClick={() => scrollToSection('top')}
              className={activeSection === 'top' ? 'font-bold' : ''}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('events')}
              className={activeSection === 'events' ? 'font-bold' : ''}
            >
              Events
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('prayer-times')}
              className={activeSection === 'prayer-times' ? 'font-bold' : ''}
            >
              Prayer Times
            </button>
          </li>
          <li><Link href="/donate">Donate</Link></li>
        </ul>
      </nav>
    </header>
  )
}