import Link from "next/link";

export default function MemberPage({ params }: { params: { id: string } }) {
  const members = [
    { id: "john-doe", name: "John Doe", role: "Mathematics Teacher", image: "/images/team/john-doe.jpg" },
    { id: "jane-smith", name: "Jane Smith", role: "English Teacher", image: "/images/team/jane-smith.jpg" },
    { id: "ali-khan", name: "Ali Khan", role: "Science Teacher", image: "/images/team/ali-khan.jpg" },
    // ...keep in sync with team page
  ];

  const member = members.find((m) => m.id === params.id);

  if (!member) {
    return (
      <main className="max-w-3xl mx-auto py-12 text-center">
        <h1 className="text-2xl font-semibold">Member not found</h1>
        <p className="mt-4 text-gray-600">The requested team member does not exist.</p>
        <div className="mt-6">
          <Link href="/team" className="text-ilc-secondary hover:underline">Back to team</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-gray-900">{member.name}</h1>
      <p className="mt-2 text-sm text-gray-500">{member.role}</p>

      {/* dummy bio/content */}
      <div className="mt-4 text-gray-700 space-y-4">
        <p>
          {member.name} is a dedicated educator with years of experience teaching {member.role.toLowerCase()}. This profile shows placeholder text — replace with the real biography.
        </p>
        <p>
          The teacher provides personalized guidance, creates engaging lessons, and supports students to reach their academic goals.
        </p>
      </div>

      {/* image appears after content */}
      <img src={member.image} alt={member.name} className="w-full mt-6 rounded-lg object-cover h-64" />

      <div className="mt-6 flex items-center gap-4">
        <Link href="/team" className="text-sm text-gray-500 hover:underline">Back to team</Link>
        <a href="#" className="inline-flex items-center px-4 py-2 bg-ilc-secondary text-white rounded-md font-semibold">Contact</a>
      </div>
    </main>
  );
}
