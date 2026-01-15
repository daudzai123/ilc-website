import Link from "next/link";
import site from "../../../data/site.json";

export default function MissionPage() {
  return (
    <main className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-gray-900">Mission</h1>
      <p className="mt-4 text-gray-700">{site.mission}</p>

      {/* image after content */}
      <img src="/images/cover.jpg" alt="Mission image" className="w-full mt-6 rounded-lg object-cover h-64" />

      <div className="mt-6">
        <Link href="/about" className="text-sm text-gray-500 hover:underline">Back to About</Link>
      </div>
    </main>
  );
}
