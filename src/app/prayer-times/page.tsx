'use client'

import Script from 'next/script'

// Masjidal's custom element isn't known to React's JSX types.
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'masjidal-widget': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        async?: boolean
        'widget-id'?: string
        type?: string
        'api-key'?: string
      }
    }
  }
}

// Frontend (publishable) key from portal.masjidal.com → Integrations → API Keys.
// It only works on the domains allowed for it there.
const MASJIDAL_WIDGET_ID = '_iv0N0AUAjlXT1vsh1vPF'
const MASJIDAL_API_KEY = 'msj_pk_36a7Nr7ZiUUxyoEJTuqe_mut216IGAnocnh_jiHZeyc'

export default function PrayerTimesPage() {
  return (
    <div className="min-h-screen bg-[#f8fafb] py-12 px-2">
      <Script
        src="https://widgets.masjidal.com/timetable/v0/widget.js"
        strategy="afterInteractive"
      />
      <div className="max-w-[95%] xl:max-w-[90%] mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#002537] mb-4">
            Prayer Times
          </h1>
          <p className="text-lg text-[#003d52] max-w-2xl mx-auto">
            Stay connected with your daily prayers. View current prayer times and Islamic calendar.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-full min-h-[600px]">
          <masjidal-widget
            async
            widget-id={MASJIDAL_WIDGET_ID}
            type="prayer"
            api-key={MASJIDAL_API_KEY}
          />
        </div>
      </div>
    </div>
  )
}
