import Link from "next/link";

export default function Home() {
  const courses = [
    {
      id: "math",
      title: "Mathematics Essentials",
      short: "Build a strong foundation in math with structured lessons and real practice problems.",
      description:
        "An in-depth course covering algebra, geometry, and problem solving with exercises, quizzes and teacher feedback. Suitable for beginners and those refreshing basics.",
      image: "/images/courses/math.jpg",
      badge: "Popular",
      href: "/courses/math",
    },
    {
      id: "english",
      title: "English & Communication",
      short: "Improve speaking, writing, and comprehension with practical exercises and feedback.",
      description:
        "Practical lessons focused on speaking fluency, grammar, and writing structure. Includes speaking labs and peer reviews to boost confidence.",
      image: "/images/courses/english.webp",
      badge: "New",
      href: "/courses/english",
    },
    {
      id: "science",
      title: "Science Explorations",
      short: "Hands-on experiments and clear explanations to spark curiosity and understanding.",
      description:
        "Explore biology, physics and chemistry fundamentals with guided experiments and easy-to-follow theory sections. Great for curious learners.",
      image: "/images/courses/computer.png",
      badge: "Top Rated",
      href: "/courses/science",
    },
  ];

  return (
    <div className="space-y-8">
      <section className="relative h-[320px] md:h-[420px] flex items-center rounded-md overflow-hidden">
        <img
          src="/images/c1.jpg"
          alt="Home hero"
          className="absolute inset-0 w-full h-full object-cover object-[50%_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/40" />

        <div className="relative z-10 max-w-3xl mx-auto p-4 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            IQ Leading Center
          </h2>
          <p className="mt-3 text-base md:text-lg">
            High-quality courses, personalized guidance, and engaging events to
            help students excel.
          </p>
          <div className="mt-4">
            <a
              href="/courses"
              className="inline-block bg-ilc-secondary text-white px-4 py-2 rounded-md font-semibold hover:opacity-90"
            >
              Join Us
            </a>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold">Featured Courses</h3>
        <p className="text-gray-600 mt-2">
          A sample of courses will appear here.
        </p>

        {/* Featured cards grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c) => (
            <article
              key={c.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transform transition duration-300 hover:-translate-y-1"
            >
              <Link href={`/courses/${c.id}`} className="w-full text-left block">
                <div className="relative">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <span className="absolute left-3 top-3 inline-block bg-indigo-600 text-white text-xs px-2 py-1 rounded-md">
                    {c.badge}
                  </span>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-900">{c.title}</h4>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-3">{c.short}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-sm text-gray-500">By ILC Team</div>
                    <span className="inline-flex items-center px-3 py-1.5 bg-ilc-secondary text-white rounded-md text-sm font-medium">
                      View
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
