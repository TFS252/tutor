"use client";

import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-gray-800 text-white border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">GetTutor</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 font-medium">
          <Link
            href="/findTutor"
            className="hover:text-amber-500 transition-colors"
          >
            Find a tutor
          </Link>
          <Link href="#" className="hover:text-amber-500 transition-colors">
            How it works
          </Link>
          <Link href="#" className="hover:text-amber-500 transition-colors">
            For Study
          </Link>
          <Link href="#" className="hover:text-amber-500 transition-colors">
            For Music
          </Link>
          <Link href="#" className="hover:text-amber-500 transition-colors">
            For Dance
          </Link>
          <Link href="#" className="hover:text-amber-500 transition-colors">
            Price
          </Link>
          <Link href="#" className="hover:text-amber-500 transition-colors">
            Become a tutor
          </Link>
          {/* jab project build krte ho tb konsi command chalate ho aur jab build ho jata hai tb konsa folder banta hai aur bss npm run build or folder?  code build kiya nhi */}
        </nav>

        {/* Right Section & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <span className="hidden md:block font-medium text-gray-400">
            +91 203 773 6024
          </span>
          <button className="hidden md:block border border-gray-600 px-4 py-2 rounded-md hover:bg-gray-700 transition-colors text-gray-300">
            Log in
          </button>
          <button className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition-colors font-bold shadow-lg">
            Sign up
          </button>
          <button
            className="md:hidden text-2xl text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-gray-700 w-full flex flex-col items-center py-4 space-y-4 text-white">
          <Link
            href="/findTutor"
            className="hover:text-amber-500 transition-colors"
          >
            Find a tutor
          </Link>
          <Link
            href="howWork"
            className="hover:text-amber-500 transition-colors"
          >
            How it works
          </Link>
          <Link
            href="forStudent"
            className="hover:text-amber-500 transition-colors"
          >
            For Students
          </Link>
          <Link
            href="forMusic"
            className="hover:text-amber-500 transition-colors"
          >
            For Music
          </Link>
          <Link
            href="forDance"
            className="hover:text-amber-500 transition-colors"
          >
            For Dance
          </Link>
          <Link
            href="becomeTutor"
            className="hover:text-amber-500 transition-colors"
          >
            Become a tutor
          </Link>
          <span className="font-medium text-gray-400 pt-2">
            +91 203 773 6024
          </span>
          <button className="border border-gray-500 px-4 py-2 rounded-md hover:bg-gray-600 transition-colors text-gray-300 w-4/5 text-center">
            Log in
          </button>
        </nav>
      )}
    </header>
  );
}
