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
    <header className={`bg-emerald-700 text-white py-4 px-6 ${className}`}>
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <button onClick={() => scrollToSection('top')} className="text-left">
          <span className="text-2xl font-bold">MCSI</span>
          <span className="text-xs block">Muslim Center of Staten Island</span>
        </button>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
        <ul className={`md:flex space-x-6 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <li>
            <button
              onClick={() => scrollToSection('top')}
              className={`${activeSection === 'top' ? 'font-bold' : ''} hover:text-emerald-200`}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('events')}
              className={`${activeSection === 'events' ? 'font-bold' : ''} hover:text-emerald-200`}
            >
              Events
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('prayer-times')}
              className={`${activeSection === 'prayer-times' ? 'font-bold' : ''} hover:text-emerald-200`}
            >
              Prayer Times
            </button>
          </li>
          <li><Link href="/donate" className="hover:text-emerald-200">Donate</Link></li>
        </ul>
      </nav>
    </header>
  )
}