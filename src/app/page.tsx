'use client'

import Link from 'next/link'
import VisitorCounter from '@/components/VisitorCounter'

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-[#002537] relative overflow-hidden py-20">
        <div className="text-center text-white max-w-6xl relative z-10 p-4 mx-auto">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">Welcome to MCSI</h1>
          <p className="text-lg sm:text-xl mb-8">We are a welcoming community dedicated to serving Allah and our local community.</p>
          
          {/* Quick Navigation */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mt-16">
            <button 
              onClick={() => {
                const element = document.getElementById('about-us')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="bg-white bg-opacity-10 hover:bg-opacity-20 p-6 rounded-lg transition-all duration-300 hover:scale-105 flex flex-col text-center h-32"
            >
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-lg font-semibold mb-2 h-6 flex items-center justify-center">About Us</h3>
                <p className="text-xs opacity-80 leading-tight">Learn about our community</p>
              </div>
            </button>
            
            <Link 
              href="/events" 
              className="bg-white bg-opacity-10 hover:bg-opacity-20 p-6 rounded-lg transition-all duration-300 hover:scale-105 flex flex-col text-center h-32"
            >
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-lg font-semibold mb-2 h-6 flex items-center justify-center">Events</h3>
                <p className="text-xs opacity-80 leading-tight">View upcoming programs</p>
              </div>
            </Link>
            
            <Link 
              href="/prayer-times" 
              className="bg-white bg-opacity-10 hover:bg-opacity-20 p-6 rounded-lg transition-all duration-300 hover:scale-105 flex flex-col text-center h-32"
            >
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-lg font-semibold mb-2 h-6 flex items-center justify-center">Prayer Times</h3>
                <p className="text-xs opacity-80 leading-tight">Current schedule</p>
              </div>
            </Link>
            
            <Link 
              href="/resources" 
              className="bg-white bg-opacity-10 hover:bg-opacity-20 p-6 rounded-lg transition-all duration-300 hover:scale-105 flex flex-col text-center h-32"
            >
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-lg font-semibold mb-2 h-6 flex items-center justify-center">Resources</h3>
                <p className="text-xs opacity-80 leading-tight">Learn about Islam</p>
              </div>
            </Link>
            
            <Link 
              href="/contact" 
              className="bg-white bg-opacity-10 hover:bg-opacity-20 p-6 rounded-lg transition-all duration-300 hover:scale-105 flex flex-col text-center h-32"
            >
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-lg font-semibold mb-2 h-6 flex items-center justify-center">Contact</h3>
                <p className="text-xs opacity-80 leading-tight">Get in touch with us</p>
              </div>
            </Link>
            
            <Link 
              href="/donate" 
              className="bg-white bg-opacity-10 hover:bg-opacity-20 p-6 rounded-lg transition-all duration-300 hover:scale-105 flex flex-col text-center h-32"
            >
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-lg font-semibold mb-2 h-6 flex items-center justify-center">Donate</h3>
                <p className="text-xs opacity-80 leading-tight">Support our community</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about-us" className="py-16 bg-[#f0f7f8]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#002537] mb-4">About Our Community</h2>
            <p>
  <strong>Muslim Center of Staten Island</strong> was founded by a group of dedicated families from our homeland, Centar Župa, North Macedonia, built on a deep love for faith, community, and service. What began as a small prayer space has grown into a warm, welcoming masjid where people of all backgrounds can come together in worship, learning, and connection.
</p>

<p>
  Our goal is to continue growing&mdash;not just in size, but in spirit. We aim to be a space where everyone feels at home: from elders to youth, longtime members to new visitors, and neighbors of all faiths and cultures.
</p>

<p>
  Through regular prayers, classes, community events, and outreach, we strive to be a source of light and benefit for our local community&mdash;both within and beyond our walls.
</p>

<p>
  <em>Everyone is welcome.</em> Whether you&apos;re looking to reconnect, learn, serve, or simply feel a sense of belonging, we invite you to be a part of this journey.
</p>

          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-[#002537] mb-3">Prayer Services</h3>
              <p className="text-[#003d52]">Join us for our five daily prayers and Friday Jumu&apos;ah services.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-[#002537] mb-3">Education</h3>
              <p className="text-[#003d52]">Islamic studies for children and adults, Quran memorization, and Arabic classes.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-[#002537] mb-3">Community</h3>
              <p className="text-[#003d52]">Regular social events, charity drives, and community outreach programs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Theme Colored Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-[#002537] via-[#003d52] to-[#002537]"></div>

      {/* Contact Us and Sitemap Section */}
      <section className="py-16 bg-[#f0f7f8]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Contact Us */}
            <div className="flex justify-center">
              <div className="w-full max-w-xs">
                <h3 className="text-2xl font-bold text-[#002537] mb-6">Contact Us</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#003d52] mb-2">Address</h4>
                    <p className="text-gray-600">
                      Muslim Center of Staten Island<br />
                      2574 Arthur Kill Rd<br />
                      Staten Island, NY 10309
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[#003d52] mb-2">Phone</h4>
                    <p className="text-gray-600">(718)-984-4200</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[#003d52] mb-2">Email</h4>
                    <p className="text-gray-600">support@mcofsi.org</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[#003d52] mb-2">Follow Us</h4>
                    <div className="flex space-x-4">
                      <a 
                        href="https://www.instagram.com/muslim_center_of_staten_island" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-[#E4405F] transition-colors"
                        aria-label="Follow us on Instagram"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                      <a 
                        href="https://www.facebook.com/people/Muslim-Center-of-Staten-Island/100064901403459/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-[#1877F2] transition-colors"
                        aria-label="Follow us on Facebook"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    For more information, <Link href="/contact" className="text-[#002537] hover:text-[#003d52] underline font-medium">navigate to our Contact page</Link>
                  </p>
                </div>
              </div>
            </div>

            {/* Sitemap */}
            <div className="flex justify-center">
              <div className="w-full max-w-xs">
                <h3 className="text-2xl font-bold text-[#002537] mb-6">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/" className="text-gray-600 hover:text-[#002537] transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <button 
                      onClick={() => {
                        const element = document.getElementById('about-us')
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' })
                        }
                      }}
                      className="text-gray-600 hover:text-[#002537] transition-colors text-left"
                    >
                      About Us
                    </button>
                  </li>
                  <li>
                    <Link href="/events" className="text-gray-600 hover:text-[#002537] transition-colors">
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link href="/prayer-times" className="text-gray-600 hover:text-[#002537] transition-colors">
                      Prayer Times
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources" className="text-gray-600 hover:text-[#002537] transition-colors">
                      Resources
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-600 hover:text-[#002537] transition-colors">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/donate" className="text-gray-600 hover:text-[#002537] transition-colors">
                      Donate
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visitor Counter */}
      <div className="bg-[#f0f7f8] py-6">
        <div className="max-w-4xl mx-auto px-4 flex justify-center">
          <VisitorCounter />
        </div>
      </div>
    </div>
  )
}
