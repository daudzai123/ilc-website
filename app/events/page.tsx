import EventSlider from "../../components/EventSlider";
import events from "../../data/events.json";

export default function Events(){
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Events</h2>
      <EventSlider />

      <div className="grid grid-cols-3 gap-4 mt-4">
        {events.map((e:any)=> (
          <div key={e.id} className="border rounded-md p-2">
            <h4 className="font-semibold">{e.title}</h4>
            <img src={e.images[0]} alt={e.title} className="w-full h-28 object-cover mt-2"/>
          </div>
        ))}
      </div>
    </div>
  )
}