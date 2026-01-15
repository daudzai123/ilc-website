import site from "../../data/site.json";
import dynamic from "next/dynamic";
const OpenLayersMap = dynamic(() => import('../../components/OpenLayersMap'), { ssr: false });

export default function Contact(){
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Contact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 border rounded-md">
          <p><strong>Email:</strong> {site.email}</p>
          <p className="mt-2"><strong>Phone:</strong> {site.phone}</p>
          <p className="mt-2"><strong>Address:</strong> {site.address}</p>
        </div>
        <div className="p-4 border rounded-md">
          {/* OpenLayers map component (client-only) */}
          <OpenLayersMap />
        </div>
      </div>
    </div>
  )
}