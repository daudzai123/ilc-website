import Link from "next/link";
import team from "../../data/team.json";

export default function TeamPage() {
  const members = team.map((m) => ({
    id: m.id,
    name: m.name,
    role: m.role,
    image: m.photo,
  }));

  return (
    <main className="max-w-6xl mx-auto py-8 px-4">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Our Team</h1>
        <p className="text-gray-600 mt-2">Click any profile to view full details.</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((m) => (
          <article key={m.id} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transform transition duration-300 hover:-translate-y-1">
            <Link href={`/team/${m.id}`} className="block">
              <div className="relative">
                <img src={m.image} alt={m.name} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-900">{m.name}</h2>
                <p className="text-sm text-gray-600 mt-1">{m.role}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm text-gray-500">ILC Team</div>
                  <span className="inline-flex items-center px-3 py-1.5 bg-ilc-secondary text-white rounded-md text-sm font-medium">Profile</span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}