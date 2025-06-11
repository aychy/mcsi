'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header({ className = '' }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const navigateToPage = (page: string) => {
    setIsMenuOpen(false)
    router.push(page)
  }

  const scrollToAbout = () => {
    setIsMenuOpen(false)
    if (pathname !== '/') {
      router.push('/')
      setTimeout(() => {
        const element = document.getElementById('about-us')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      const element = document.getElementById('about-us')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header className={`fixed w-full bg-[#002033] text-white py-3 px-6 z-50 ${className}`}>
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <button onClick={() => navigateToPage('/')} className="text-left z-20">
          <Image
            src="/logo.png"
            alt="Muslim Center of Staten Island"
            width={200}
            height={60}
            className="h-12 w-auto"
            priority
          />
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
          {['Home', 'About Us', 'Events', 'Prayer Times', 'Contact', 'Donate', 'Resources'].map((item) => (
            <li key={item}>
              {item === 'About Us' ? (
                <button
                  onClick={scrollToAbout}
                  className="hover:text-[#a0cfd4] transition-colors"
                >
                  {item}
                </button>
              ) : (
                <Link 
                  href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                  className={`${pathname === (item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`) ? 'font-bold' : ''} hover:text-[#a0cfd4] transition-colors`}
                >
                  {item}
                </Link>
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
              className="fixed inset-0 bg-[#002033] z-10 md:hidden"
            >
              <div className="flex flex-col items-center justify-center h-full">
                <ul className="space-y-8 text-center">
                  {['Home', 'About Us', 'Events', 'Prayer Times', 'Contact', 'Donate', 'Resources'].map((item) => (
                    <li key={item}>
                      {item === 'About Us' ? (
                        <button
                          onClick={scrollToAbout}
                          className="text-2xl font-semibold hover:text-[#a0cfd4] transition-colors"
                        >
                          {item}
                        </button>
                      ) : (
                        <Link 
                          href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                          className="text-2xl font-semibold hover:text-[#a0cfd4] transition-colors"
                        >
                          {item}
                        </Link>
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