import Link from "next/link";

export default function CoursePage({ params }: { params: { id: string } }) {
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

  const course = courses.find((c) => c.id === params.id);

  if (!course) {
    return (
      <main className="max-w-3xl mx-auto py-12 text-center">
        <h1 className="text-2xl font-semibold">Course not found</h1>
        <p className="mt-4 text-gray-600">The requested course does not exist.</p>
        <div className="mt-6">
          <Link href="/" className="text-ilc-secondary hover:underline">
            Back to home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-gray-900">{course.title}</h1>

      <p className="mt-4 text-gray-700">{course.description}</p>

      {/* image appears after the content */}
      <img
        src={course.image}
        alt={course.title}
        className="w-full mt-6 rounded-lg object-cover h-64"
      />

      <div className="mt-6 flex items-center gap-3">
        <a
          href={course.href}
          className="inline-flex items-center px-4 py-2 bg-ilc-secondary text-white rounded-md font-semibold"
        >
          Enroll now
        </a>
        <Link href="/" className="text-sm text-gray-500 hover:underline">
          Back
        </Link>
      </div>
    </main>
  );
}
