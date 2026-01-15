export default function Home(){
  return (
    <div className="space-y-8">
   <section className="relative h-[450px] md:h-[600px] flex items-center rounded-md overflow-hidden">



  <img
    src="/images/hero.png"
    alt="Home hero"
    className="absolute inset-0 w-full h-full object-cover object-center"
  />

  <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/40" />

  <div className="relative z-10 max-w-4xl mx-auto p-6 text-white text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold">
      IQ Leading Center
    </h2>
    <p className="mt-4 text-lg md:text-xl">
      High-quality courses, personalized guidance, and engaging events to help students excel.
    </p>
    <div className="mt-6">
      <a
        href="/courses"
        className="inline-block bg-ilc-secondary text-white px-5 py-3 rounded-md font-semibold hover:opacity-90"
      >
        Join Us
      </a>
    </div>
  </div>
</section>


      <section>
        <h3 className="text-2xl font-semibold">Featured Courses</h3>
        <p className="text-gray-600 mt-2">A sample of courses will appear here.</p>
      </section>
    </div>
  )
}