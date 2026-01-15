import team from "../../data/team.json";

export default function Team(){
  return (
    <div>
      <h2 className="text-2xl font-bold">Team</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {team.map((m:any)=> (
          <div key={m.id} className="text-center">
            <img src={m.photo} alt={m.name} className="w-36 h-36 object-cover rounded-full mx-auto"/>
            <h4 className="mt-2 font-semibold">{m.name}</h4>
            <p className="text-sm text-gray-600">{m.role}</p>
          </div>
        ))}
      </div>
    </div>
  )
}