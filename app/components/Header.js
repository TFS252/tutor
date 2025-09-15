"use client";

import Link from "next/link";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isActivityDropdownOpen, setIsActivityDropdownOpen] = useState(false);

  const menuVariants = {
    hidden: { y: -30, opacity: 0, transition: { duration: 0.25 } },
    visible: { y: 0, opacity: 1, transition: { duration: 0.25 } },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, transition: { duration: 0.2 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-[#1A3E6B] text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl sm:text-3xl font-extrabold tracking-wide text-white">
          <Link href="/">LEARNLY</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-12 font-medium">
          <Link
            href="/find-tutor"
            className="hover:text-gray-300 transition-colors"
          >
            Find a tutor
          </Link>

          <Link
            href="/how-it-work"
            className="hover:text-gray-300 transition-colors"
          >
            How it works?
          </Link>

          {/* Activity Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsActivityDropdownOpen(true)}
            onMouseLeave={() => setIsActivityDropdownOpen(false)}
          >
            <button className="flex items-center hover:text-gray-300 transition-colors">
              Activity{" "}
              <FaChevronDown
                className="ml-2 text-sm transition-transform duration-200"
                style={{
                  transform: isActivityDropdownOpen
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                }}
              />
            </button>
            <AnimatePresence>
              {isActivityDropdownOpen && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={dropdownVariants}
                  className="absolute left-1/2 transform -translate-x-1/2 mt-4 w-48 bg-white text-gray-800 rounded-lg shadow-lg py-2"
                >
                  <Link
                    href="/activity/rbse"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Education
                  </Link>
                  <Link
                    href="/activity/cbse"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Entertainment
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/become-tutor"
            className="hover:text-gray-300 transition-colors"
          >
            Become a tutor
          </Link>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
          <button className="bg-white text-black hover:text-white hover:bg-[#FF6B35] font-semibold py-2 px-5 lg:px-6 rounded-md transition-colors">
            Log In
          </button>
          <button className="text-white bg-[#FF6B35] font-semibold py-2 px-5 lg:px-6 rounded-md transition-colors">
            Sign In
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            className="text-2xl text-white"
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
            className="md:hidden absolute top-full left-0 w-full bg-[#1b2c4c] flex flex-col items-center py-6 space-y-6 text-lg font-medium"
          >
            {[
              { href: "/find-tutor", label: "Find a tutor" },
              { href: "/how-it-work", label: "How it work?" },
              { href: "/activity", label: "Activity" },
              { href: "/become-tutor", label: "Become a tutor" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-gray-300 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Buttons on mobile */}
            <div className="flex flex-col items-center space-y-4 pt-6 w-full px-6">
              <button className="bg-[#ff7b47] text-white font-semibold py-2 px-6 rounded-md hover:bg-[#e66c3c] transition-colors w-full">
                Log In
              </button>
              <button className="bg-white text-gray-800 font-semibold py-2 px-6 rounded-md hover:bg-gray-200 transition-colors w-full">
                Sign In
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
