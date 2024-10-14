'use client'

import React from 'react'
import CompanionLearning from '@/components/CompanionLearning'

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-mint-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-emerald-800 mb-8 text-center">Resources</h1>
        
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-emerald-700 mb-6">Learn About the Companions</h2>
          <CompanionLearning />
        </section>
        
        {/* Add more resource sections here in the future */}
      </div>
    </div>
  )
}