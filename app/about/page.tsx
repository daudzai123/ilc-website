import site from "../../data/site.json";
import Link from "next/link";

export default function About(){
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">About IQ Leading Center</h2>
      <section>
        <h3 className="text-xl font-semibold mb-4">Our Mission & Vision</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform transition duration-300 hover:-translate-y-1 bg-white">
            <Link href="/about/mission" className="block">
              <div className="relative">
                <img src="/images/cover.jpg" alt="Mission" className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                <h4 className="absolute left-4 bottom-4 text-white text-lg font-semibold drop-shadow-md">Mission</h4>
              </div>
              <div className="p-5">
                <p className="text-gray-700 text-sm leading-relaxed">{site.mission}</p>
                <div className="mt-4">
                  <span className="inline-block text-sm font-medium text-indigo-600">Read more →</span>
                </div>
              </div>
            </Link>
          </article>

          <article className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform transition duration-300 hover:-translate-y-1 bg-white">
            <Link href="/about/vision" className="block">
              <div className="relative">
                <img src="/images/c1.jpg" alt="Vision" className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                <h4 className="absolute left-4 bottom-4 text-white text-lg font-semibold drop-shadow-md">Vision</h4>
              </div>
              <div className="p-5">
                <p className="text-gray-700 text-sm leading-relaxed">{site.vision}</p>
                <div className="mt-4">
                  <span className="inline-block text-sm font-medium text-indigo-600">Read more →</span>
                </div>
              </div>
            </Link>
          </article>
        </div>
      </section>
    </div>
  )
}