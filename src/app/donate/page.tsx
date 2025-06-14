'use client'

import Head from 'next/head'
import dynamic from 'next/dynamic'

const GivebutterForm = dynamic(() => import('../../components/GivebutterForm'), { ssr: false })

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-[#f0f7f8] py-12 px-4">
      <Head>
        <script
          async
          src="https://widgets.givebutter.com/latest.umd.cjs?acct=6V5AKrOxZPIyF0Yp&p=other"
        ></script>
      </Head>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#002537] mb-4">
            Support Our Community
          </h1>
          <p className="text-lg text-[#003d52] max-w-2xl mx-auto">
            Your donations help us maintain our mosque, fund community programs, and support those in need.
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-[#002537] mb-4">How Your Donation Helps</h2>
              <ul className="space-y-3 text-[#003d52]">
                <li className="flex items-start">
                  <span className="text-[#002537] mr-2">•</span>
                  Mosque maintenance and utilities
                </li>
                <li className="flex items-start">
                  <span className="text-[#002537] mr-2">•</span>
                  Educational programs for children and adults
                </li>
                <li className="flex items-start">
                  <span className="text-[#002537] mr-2">•</span>
                  Community outreach and charity work
                </li>
                <li className="flex items-start">
                  <span className="text-[#002537] mr-2">•</span>
                  Special events and religious celebrations
                </li>
              </ul>
            </div>
            
            <div className="bg-[#002537] p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Make a Donation</h3>
              <div className="space-y-4">
                <p className="text-white">
                  Support our community through our secure Givebutter donation platform.
                </p>
                <div className="w-full flex justify-center">
                  <GivebutterForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 