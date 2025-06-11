export default function Footer({ className = '' }) {
  return (
    <footer className={`bg-[#002033] text-white p-4 text-center ${className}`}>
      <p>&copy; {new Date().getFullYear()} Muslim Center of Staten Island. All rights reserved.</p>
    </footer>
  )
}