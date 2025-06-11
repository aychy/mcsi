'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    newsletter: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      // Try the API route first
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert('Thank you for your message! We have received it and will get back to you soon.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          newsletter: false
        })
        return
      }
    } catch (error) {
      console.log('API route failed, falling back to mailto')
    }

    // Fallback to mailto if API fails
    const emailSubject = `Contact Form: ${formData.subject}`
    const emailBody = `Name: ${formData.name}
Email: ${formData.email}
${formData.phone ? `Phone: ${formData.phone}` : ''}
Subject: ${formData.subject}
${formData.newsletter ? 'Newsletter: Yes, I want to subscribe' : ''}

Message:
${formData.message}

---
Sent from MCSI website contact form`

    const mailtoLink = `mailto:support@mcofsi.org?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
    
    // Try to open email client
    try {
      window.open(mailtoLink, '_self')
      alert('Please send the email that just opened to complete your submission.')
    } catch (error) {
      // If mailto fails, show manual instructions
      alert(`Please send an email manually to: support@mcofsi.org\n\nSubject: ${emailSubject}\n\nMessage: ${emailBody}`)
    }
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      newsletter: false
    })
  }

  return (
    <div className="min-h-screen bg-[#f0f7f8] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#002537] mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-[#003d52] max-w-3xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h2 className="text-2xl font-bold text-[#002537] mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-[#003d52] mb-2">Address</h3>
                  <p className="text-gray-600">
                    Muslim Center of Staten Island<br />
                    2574 Arthur Kill Rd<br />
                    Staten Island, NY 10309
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-[#003d52] mb-2">Phone</h3>
                  <p className="text-gray-600">(718)-984-4200</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-[#003d52] mb-2">Email</h3>
                  <p className="text-gray-600">support@mcofsi.org</p>
                </div>


              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-[#002537] p-8 rounded-lg shadow-xl mt-8 text-white">
              <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
              <p className="text-sm mb-4 opacity-90">
                Subscribe to our newsletter for updates on events, programs, and community news.
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#003d52]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#003d52] hover:bg-[#004a60] px-4 py-2 rounded font-semibold transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h2 className="text-2xl font-bold text-[#002537] mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#003d52] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d52] focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#003d52] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d52] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[#003d52] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d52] focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-[#003d52] mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d52] focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="events">Events & Programs</option>
                      <option value="prayer-times">Prayer Times</option>
                      <option value="donations">Donations</option>
                      <option value="volunteer">Volunteer Opportunities</option>
                      <option value="education">Educational Programs</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#003d52] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d52] focus:border-transparent resize-vertical"
                    placeholder="Please share your message, questions, or how we can help you..."
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-[#003d52] focus:ring-[#003d52] border-gray-300 rounded"
                  />
                  <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700">
                    I would like to subscribe to the newsletter for updates and announcements
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#002537] hover:bg-[#003d52] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#003d52] focus:ring-opacity-50"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 