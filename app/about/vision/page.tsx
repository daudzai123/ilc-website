import Link from "next/link";
import site from "../../../data/site.json";

export default function VisionPage() {
  return (
    <main className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-gray-900">Vision</h1>
      <p className="mt-4 text-gray-700">{site.vision}</p>

      {/* image after content */}
      <img src="/images/c1.jpg" alt="Vision image" className="w-full mt-6 rounded-lg object-cover h-64" />

      <div className="mt-6">
        <Link href="/about" className="text-sm text-gray-500 hover:underline">Back to About</Link>
      </div>
    </main>
  );
}
