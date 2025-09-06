"use client";

import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide text-amber-500 hover:text-amber-400 transition-colors">
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
          <Link
            href="/howWork"
            className="hover:text-amber-500 transition-colors"
          >
            How it works
          </Link>
          <Link
            href="/forStudent"
            className="hover:text-amber-500 transition-colors"
          >
            For Students
          </Link>
          <Link
            href="/forMusic"
            className="hover:text-amber-500 transition-colors"
          >
            For Music
          </Link>
          <Link
            href="/forDance"
            className="hover:text-amber-500 transition-colors"
          >
            For Dance
          </Link>
          <Link
            href="/pricing"
            className="hover:text-amber-500 transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/becomeTutor"
            className="hover:text-amber-500 transition-colors"
          >
            Become a tutor
          </Link>
        </nav>

        {/* Right Section & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <span className="hidden md:block font-medium text-gray-400">
            +91 203 773 6024
          </span>
          <button className="hidden md:block border border-gray-600 px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-gray-300">
            Log in
          </button>
          <button className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition-colors font-bold shadow-lg">
            Sign up
          </button>
          <button
            className="md:hidden text-2xl text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center py-8 space-y-6 text-lg">
          <Link
            href="/findTutor"
            className="hover:text-amber-500 transition-colors"
          >
            Find a tutor
          </Link>
          <Link
            href="/howWork"
            className="hover:text-amber-500 transition-colors"
          >
            How it works
          </Link>
          <Link
            href="/forStudent"
            className="hover:text-amber-500 transition-colors"
          >
            For Students
          </Link>
          <Link
            href="/forMusic"
            className="hover:text-amber-500 transition-colors"
          >
            For Music
          </Link>
          <Link
            href="/forDance"
            className="hover:text-amber-500 transition-colors"
          >
            For Dance
          </Link>
          <Link
            href="/pricing"
            className="hover:text-amber-500 transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/becomeTutor"
            className="hover:text-amber-500 transition-colors"
          >
            Become a tutor
          </Link>
          <span className="font-medium text-gray-400 pt-4">
            +91 203 773 6024
          </span>
          <button className="border border-gray-500 px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors text-gray-300 w-4/5">
            Log in
          </button>
          <button className="bg-amber-500 text-white px-6 py-2 rounded-lg hover:bg-amber-600 transition-colors font-bold w-4/5">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
}
