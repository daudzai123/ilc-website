type Props = { course: {name: string, image: string, teachers: string[]} }

export default function CourseCard({course}: Props){
  return (
    <article className="border rounded-md overflow-hidden shadow-sm">
      <img src={course.image} alt={course.name} className="w-full h-40 object-cover"/>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{course.name}</h3>
        <p className="text-sm text-gray-600 mt-2">Teachers: {course.teachers.join(', ')}</p>
      </div>
    </article>
  )
}