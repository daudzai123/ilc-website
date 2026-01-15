"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header(){
  return (
    <header className="bg-ilc-primary text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logooo.png" alt="ILC Logo" width={48} height={48} className="header-logo"/>
          <div>
            <h1 className="text-lg font-semibold">IQ Leading Center</h1>
            <p className="text-sm text-ilc-accent">Place for quality education</p>
          </div>
        </Link>

        <nav>
          <ul className="flex gap-6 items-center">
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/courses" className="hover:underline">Courses</Link></li>
            <li><Link href="/team" className="hover:underline">Team</Link></li>
            <li><Link href="/events" className="hover:underline">Events</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}