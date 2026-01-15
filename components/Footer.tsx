export default function Footer(){
  return (
    <footer className="bg-gray-100 text-gray-700 mt-16">
      <div className="max-w-6xl mx-auto p-6 text-center">
        <p>© {new Date().getFullYear()} IQ Leading Center. All rights reserved.</p>
      </div>
    </footer>
  )
}