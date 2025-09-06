"use client";

import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Animation variants for the mobile menu
  const menuVariants = {
    hidden: { y: -20, opacity: 0, transition: { duration: 0.3 } },
    visible: { y: 0, opacity: 1, transition: { duration: 0.3 } },
  };

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
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Menu with AnimatePresence for smooth entry/exit */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="md:hidden bg-gray-700 w-full flex flex-col items-center py-4 space-y-4 text-white"
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
  );
}
