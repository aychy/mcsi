'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header({ className = '' }) {
  const [activeSection, setActiveSection] = useState('top')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

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
    setIsMenuOpen(false)
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
    <header className={`fixed w-full bg-emerald-700 text-white py-3 px-6 z-50 ${className}`}>
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <button onClick={() => scrollToSection('top')} className="text-left z-20">
          <span className="text-xl font-bold">MCSI</span>
          <span className="text-xs block">Muslim Center of Staten Island</span>
        </button>

        {/* Hamburger Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="z-20 md:hidden p-2"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {['Home', 'Events', 'Prayer Times', 'Donate', 'Resources'].map((item) => (
            <li key={item}>
              {item === 'Donate' || item === 'Resources' ? (
                <Link 
                  href={`/${item.toLowerCase()}`} 
                  className="hover:text-emerald-200 transition-colors"
                >
                  {item}
                </Link>
              ) : (
                <button
                  onClick={() => scrollToSection(item === 'Home' ? 'top' : item.toLowerCase().replace(' ', '-'))}
                  className={`${activeSection === (item === 'Home' ? 'top' : item.toLowerCase().replace(' ', '-')) ? 'font-bold' : ''} hover:text-emerald-200 transition-colors`}
                >
                  {item}
                </button>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-0 bg-emerald-700 z-10 md:hidden"
            >
              <div className="flex flex-col items-center justify-center h-full">
                <ul className="space-y-8 text-center">
                  {['Home', 'Events', 'Prayer Times', 'Donate', 'Resources'].map((item) => (
                    <li key={item}>
                      {item === 'Donate' || item === 'Resources' ? (
                        <Link 
                          href={`/${item.toLowerCase()}`} 
                          className="text-2xl font-semibold hover:text-emerald-200 transition-colors"
                        >
                          {item}
                        </Link>
                      ) : (
                        <button
                          onClick={() => scrollToSection(item === 'Home' ? 'top' : item.toLowerCase().replace(' ', '-'))}
                          className="text-2xl font-semibold hover:text-emerald-200 transition-colors"
                        >
                          {item}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}