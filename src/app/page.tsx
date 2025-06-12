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
