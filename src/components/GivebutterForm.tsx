import { useEffect, useState } from 'react';

// Extend JSX to include custom Givebutter widget element
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'givebutter-widget': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        id?: string;
        suppressHydrationWarning?: boolean;
      };
    }
  }
}

export default function GivebutterForm() {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Check if script is already loaded
    const existingScript = document.querySelector('script[src*="widgets.givebutter.com"]');
    
    if (existingScript) {
      setScriptLoaded(true);
      return;
    }

    // Load the Givebutter widgets script
    const script = document.createElement('script');
    script.src = 'https://widgets.givebutter.com/latest.umd.cjs?acct=6V5AKrOxZPIyF0Yp&p=other';
    script.async = true;
    
    script.onload = () => {
      console.log('Givebutter script loaded successfully');
      setScriptLoaded(true);
    };
    
    script.onerror = () => {
      console.error('Failed to load Givebutter script');
    };
    
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  if (!scriptLoaded) {
    return (
      <div className="w-full text-center py-8">
        <div className="text-[#003d52]">Loading donation form...</div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Donation Form Widget */}
      <div className="w-full">
        <givebutter-widget id="gVwP9p" suppressHydrationWarning={true}></givebutter-widget>
      </div>
    </div>
  );
} 