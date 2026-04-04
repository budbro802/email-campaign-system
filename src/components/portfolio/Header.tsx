"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-6 flex justify-between items-center">
        <h1 className="text-lg font-semibold">Andrew Anderson</h1>

        <nav className="flex gap-6 text-sm text-gray-600">
          <Link href="#projects">Projects</Link>
          <Link href="#about">About</Link>
        </nav>
      </div>
    </header>
  );
}
