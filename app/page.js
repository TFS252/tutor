"use client";

import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuVariants = {
    hidden: { y: -20, opacity: 0, transition: { duration: 0.3 } },
    visible: { y: 0, opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
        <div className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link href="/">GetTutor</Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 font-medium">
            <Link
              href="/find-tutor"
              className="hover:text-amber-500 transition-colors"
            >
              Find a tutor
            </Link>
            <Link
              href="/how-it-works"
              className="hover:text-amber-500 transition-colors"
            >
              How it works
            </Link>
            <Link
              href="/for-students"
              className="hover:text-amber-500 transition-colors"
            >
              For Students
            </Link>
            <Link
              href="/for-music"
              className="hover:text-amber-500 transition-colors"
            >
              For Music
            </Link>
            <Link
              href="/for-dance"
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
              href="/become-a-tutor"
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
            <button className="hidden md:block border border-gray-600 px-4 py-2 rounded-md hover:bg-gray-700 transition-colors text-gray-300">
              Log in
            </button>
            <button className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition-colors font-bold shadow-lg">
              Sign up
            </button>
            <button
              className="md:hidden text-2xl text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
              className="md:hidden bg-gray-800 w-full flex flex-col items-center py-6 space-y-4 text-white"
            >
              <Link
                href="/find-tutor"
                className="hover:text-amber-500 transition-colors py-2"
              >
                Find a tutor
              </Link>
              <Link
                href="/how-it-works"
                className="hover:text-amber-500 transition-colors py-2"
              >
                How it works
              </Link>
              <Link
                href="/for-students"
                className="hover:text-amber-500 transition-colors py-2"
              >
                For Students
              </Link>
              <Link
                href="/for-music"
                className="hover:text-amber-500 transition-colors py-2"
              >
                For Music
              </Link>
              <Link
                href="/for-dance"
                className="hover:text-amber-500 transition-colors py-2"
              >
                For Dance
              </Link>
              <Link
                href="/pricing"
                className="hover:text-amber-500 transition-colors py-2"
              >
                Pricing
              </Link>
              <Link
                href="/become-a-tutor"
                className="hover:text-amber-500 transition-colors py-2"
              >
                Become a tutor
              </Link>
              <span className="font-medium text-gray-400 pt-4">
                +91 203 773 6024
              </span>
              <button className="border border-gray-500 px-4 py-2 rounded-md hover:bg-gray-600 transition-colors text-gray-300 w-4/5 text-center">
                Log in
              </button>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="bg-[#fffaf6] flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 flex-1">
        <div className="w-full max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
            Unlock Your <br /> Potential with <br /> Expert Online Tutoring
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Go beyond grades with personalized, one-on-one tutoring. Our expert
            educators don’t just teach subjects; they build lasting confidence
            and help students discover their full potential.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <input
              type="text"
              placeholder="Find your subject..."
              className="w-full sm:flex-1 px-4 py-3 rounded-md shadow-md border border-gray-200 focus:ring-2 focus:ring-amber-500 outline-none"
            />
            <button className="w-full sm:w-auto bg-amber-500 text-white font-semibold px-6 py-3 rounded-md shadow-lg hover:bg-amber-600 transition">
              Discover Tutors
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
