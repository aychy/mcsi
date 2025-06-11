'use client'

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-[#f0f7f8] py-12 px-4">
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
            
            <div className="bg-[#f0f7f8] p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#002537] mb-4">Make a Donation</h3>
              <p className="text-[#003d52] mb-4">
                Donation options and instructions will be available soon. Please contact us directly for now.
              </p>
              <div className="space-y-2 text-sm text-[#003d52]">
                <p><strong>Phone:</strong> Coming soon</p>
                <p><strong>Email:</strong> Coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 