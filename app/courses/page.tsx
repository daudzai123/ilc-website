import CourseCard from "../../components/CourseCard";
import courses from "../../data/courses.json";

export default function Courses(){
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((c:any)=> (
          <CourseCard key={c.id} course={c} />
        ))}
      </div>
    </div>
  )
}