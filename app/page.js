"use client"; // Required for Framer Motion in Next.js 13+

import Image from "next/image";
import { FaSearch, FaCheckCircle, FaStar, FaShieldAlt } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";
import { motion } from "framer-motion";

export default function Home() {
  const subjects = [
    "Maths",
    "English",
    "Chemistry",
    "Physics",
    "Biology",
    "Science",
    "Spanish",
    "French",
    "German",
    "History",
    "Music",
    "Psychology",
    "Politics",
    "All subjects",
  ];

  const testimonials = [
    {
      name: "Lucia C",
      role: "English tutor",
      img: "/images/review1.png",
      text: "Lucia is a brilliant tutor who helped me find my voice in writing. Her clear, kind guidance made me feel so much more confident, which has been a huge help for me as an autistic student.",
    },
    {
      name: "Boko Z",
      role: "Science tutor",
      img: "/images/review1.png",
      text: "Boko is an amazing tutor who's not just helping my son with his grades but also boosting his confidence. He's learning great revision techniques and finally getting clarity on the subjects he wasn't sure about.",
    },
    {
      name: "Mahek U",
      role: "Maths tutor",
      img: "/images/review1.png",
      text: "In just a few months, my son jumped up a whole grade, and we're over the moon! These weekly sessions are giving him the confidence and understanding that he just wasn't getting in the classroom.",
    },
  ];

  // Animation variants
  const fadeInAnimation = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="bg-[#fdf8f5] min-h-screen font-sans">
      {/* HERO SECTION */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-12">
          {/* Left */}
          <div className="flex-1 text-center md:text-left">
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight"
              variants={fadeInAnimation}
              initial="initial"
              animate="animate"
            >
              Unlock Your Potential with Expert Online Tutoring
            </motion.h1>
            <motion.p
              className="mt-4 text-base sm:text-lg text-gray-700 max-w-2xl mx-auto md:mx-0"
              variants={fadeInAnimation}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2 }}
            >
              Go beyond grades with personalized, one-on-one tutoring. Our
              expert educators don&apos;t just teach subjects; they build
              lasting confidence and help students discover their full
              potential.
            </motion.p>
            <motion.div
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
              variants={fadeInAnimation}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center bg-white rounded-lg shadow-lg overflow-hidden w-full sm:w-auto max-w-md sm:max-w-none">
                <FaSearch className="ml-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Find your subject..."
                  className="flex-1 px-4 py-3 outline-none text-sm sm:text-base"
                />
              </div>
              <button className="bg-amber-500 hover:bg-amber-600 transition-colors px-6 sm:px-8 py-3 rounded-lg font-bold text-white shadow-md w-full sm:w-auto">
                Discover Tutors
              </button>
            </motion.div>
          </div>

          {/* Right - Hero Image */}
          <motion.div
            className="flex-1 flex justify-center mt-10 md:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/images/homeBanner.png"
              alt="Online Tutoring"
              width={500}
              height={400}
              className="rounded-xl shadow-2xl border-4 border-amber-400 max-w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      <hr className="my-12 border-t border-gray-200" />

      {/* HOW IT WORKS */}
      <section className="py-12 sm:py-16 text-center bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-gray-900"
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Your Path to Success in 3 Easy Steps
          </motion.h2>
          <motion.div
            className="flex flex-col md:flex-row justify-center items-center gap-10"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Step 1 */}
            <motion.div
              className="flex-1 flex flex-col items-center p-6"
              variants={item}
            >
              <div className="bg-amber-500 text-white rounded-full p-4 mb-4">
                <FaSearch size={28} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Find Your Tutor
              </h3>
              <p className="text-gray-700 text-sm sm:text-base text-center">
                Use our smart search to find the perfect tutor for your needs.
              </p>
            </motion.div>
            {/* Step 2 */}
            <motion.div
              className="flex-1 flex flex-col items-center p-6"
              variants={item}
            >
              <div className="bg-amber-500 text-white rounded-full p-4 mb-4">
                <FaCheckCircle size={28} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Book a Free Meeting
              </h3>
              <p className="text-gray-700 text-sm sm:text-base text-center">
                Meet your tutor risk-free to ensure a great connection.
              </p>
            </motion.div>
            {/* Step 3 */}
            <motion.div
              className="flex-1 flex flex-col items-center p-6"
              variants={item}
            >
              <div className="bg-amber-500 text-white rounded-full p-4 mb-4">
                <IoIosSchool size={28} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Start Learning
              </h3>
              <p className="text-gray-700 text-sm sm:text-base text-center">
                Begin your personalized online lessons and watch your skills
                grow.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <hr className="my-12 border-t border-gray-200" />

      {/* WHY CHOOSE US */}
      <section className="py-12 sm:py-16">
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-12 text-center text-gray-900"
          variants={fadeInAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Why We are the Right Choice for Your Future
        </motion.h2>
        <div className="container mx-auto px-4 space-y-16">
          {/* Feature 1 */}
          <motion.div
            className="flex flex-col md:flex-row items-center gap-8"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="md:w-1/2">
              <Image
                src="/images/health.png"
                alt="Expert Tutors"
                width={400}
                height={300}
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <div className="text-3xl text-amber-500 mb-4 flex justify-center md:justify-start">
                <FaStar />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Highly Vetted Experts
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Less than 5% of applicants become tutors. Every educator is a
                subject expert who knows how to inspire and motivate students.
              </p>
            </div>
          </motion.div>
          {/* Feature 2 */}
          <motion.div
            className="flex flex-col md:flex-row-reverse items-center gap-8"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="md:w-1/2">
              <Image
                src="/images/expert.png"
                alt="Safe & Secure"
                width={400}
                height={300}
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <div className="text-3xl text-amber-500 mb-4 flex justify-center md:justify-start">
                <FaShieldAlt />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Your Safety Is Our Priority
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                All tutors undergo rigorous background checks. Our secure online
                classroom ensures a safe, private learning environment.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <hr className="my-12 border-t border-gray-200" />

      {/* SUBJECTS */}
      <section className="py-12 sm:py-16 text-center bg-gray-50">
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-gray-900"
          variants={fadeInAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Find Your Perfect Match
        </motion.h2>
        <motion.p
          className="text-sm sm:text-base text-gray-700 mb-8 max-w-2xl mx-auto"
          variants={fadeInAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Whatever you need to master, we have a tutor for you.
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center gap-3 sm:gap-4 px-2 sm:px-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {subjects.map((subject, i) => (
            <motion.button
              key={i}
              className="bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md hover:bg-amber-100 hover:scale-105 transition-all duration-200 font-semibold text-gray-800 text-sm sm:text-base"
              variants={item}
            >
              {subject}
            </motion.button>
          ))}
        </motion.div>
      </section>

      <hr className="my-12 border-t border-gray-200" />

      {/* TESTIMONIALS */}
      <section className="py-12 sm:py-16 text-center">
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-gray-900"
          variants={fadeInAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Hear it from those who&apos;ve experienced it.
        </motion.h2>
        <motion.div
          className="flex flex-wrap justify-center gap-6 sm:gap-8 px-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl w-72 sm:w-80 text-center hover:scale-105 hover:shadow-2xl transition"
              variants={item}
            >
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto -mt-16 mb-4">
                <Image
                  src={t.img}
                  alt={t.name}
                  width={112}
                  height={112}
                  className="rounded-full border-4 border-white shadow-md"
                />
              </div>
              <h3 className="font-bold text-lg sm:text-xl mt-2">{t.name}</h3>
              <p className="text-gray-500 mb-3 sm:mb-4">{t.role}</p>
              <p className="text-gray-700 italic text-sm sm:text-base">
                &quot;{t.text}&quot;
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <hr className="my-12 border-t border-gray-200" />

      {/* CTA */}
      <section className="py-16 sm:py-20 text-center bg-amber-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4"
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Level up your learning.
          </motion.h2>
          <motion.p
            className="text-sm sm:text-lg text-gray-700 mb-8 max-w-3xl mx-auto"
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Explore a vast library of free resources, from homework guides to
            revision checklists, designed by expert tutors to help you succeed.
          </motion.p>
          <motion.button
            className="bg-amber-500 text-white font-bold px-6 sm:px-10 py-3 sm:py-4 rounded-lg shadow-lg hover:bg-amber-600 transition"
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Access Resources
          </motion.button>
          <div className="mt-12 sm:mt-16">
            <motion.h3
              className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-gray-900"
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              Ready to meet your new tutor?
            </motion.h3>
            <motion.p
              className="text-sm sm:text-lg text-gray-700 mb-6 max-w-xl mx-auto"
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              Schedule a free, no-obligation meeting with a tutor and see how
              personalized teaching can make a difference.
            </motion.p>
            <motion.button
              className="bg-gray-800 text-white font-bold px-6 sm:px-10 py-3 sm:py-4 rounded-lg shadow-lg hover:bg-gray-900 transition"
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              Book a Free Meeting
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
}
