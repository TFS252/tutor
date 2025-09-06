"use client";

import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Animation for mobile menu
  const menuVariants = {
    hidden: { y: -30, opacity: 0, transition: { duration: 0.25 } },
    visible: { y: 0, opacity: 1, transition: { duration: 0.25 } },
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      {/* full background, content aligned inside */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide text-amber-500 hover:text-amber-400 transition-colors">
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

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <span className="hidden md:block font-medium text-gray-400">
            +91 203 773 6024
          </span>
          <button className="hidden md:block border border-gray-600 px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-gray-300">
            Log in
          </button>
          <button className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition-colors font-bold shadow-lg">
            Sign now now now
          </button>

          {/* Mobile Menu Toggle */}
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
            className="absolute top-full left-0 w-full bg-gray-800 flex flex-col items-center py-6 space-y-6 text-lg font-medium md:hidden"
          >
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

            {/* Contact + Buttons */}
            <span className="font-medium text-gray-400 pt-2">
              +91 203 773 6024
            </span>
            <button className="border border-gray-500 px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors text-gray-300 w-4/5">
              Log in
            </button>
            <button className="bg-amber-500 text-white px-6 py-2 rounded-lg hover:bg-amber-600 transition-colors font-bold w-4/5">
              Sign up
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
