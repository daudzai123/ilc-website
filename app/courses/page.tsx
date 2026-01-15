import Link from "next/link";

export default function CoursesPage() {
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
    <main className="max-w-6xl mx-auto py-8 px-4">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">All Courses</h1>
        <p className="text-gray-600 mt-2">Browse our available courses and click any card to see full details.</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((c) => (
          <article
            key={c.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transform transition duration-300 hover:-translate-y-1"
          >
            <Link href={`/courses/${c.id}`} className="block">
              <div className="relative">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute left-3 top-3 inline-block bg-indigo-600 text-white text-xs px-2 py-1 rounded-md">
                  {c.badge}
                </span>
              </div>

              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-900">{c.title}</h2>
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
    </main>
  );
}