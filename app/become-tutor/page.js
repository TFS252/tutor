"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

export default function Home() {
  const checkmarks = [
    "Steady stream of new students",
    "Smart calendar",
    "Interactive classroom",
    "Convenient payment methods",
    "Professional development webinars",
    "Supportive tutor community",
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeInFromLeft = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const fadeInFromRight = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <main className="bg-amber-50 min-h-screen">
      {/* Section 1: Hero - Make a living */}
      <motion.section
        className="bg-white py-16 md:py-24"
        initial="initial"
        whileInView="animate"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12 md:gap-24">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-gray-900 mb-6">
              Make a living by teaching the largest community of learners
              worldwide
            </h1>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start items-start space-y-8 sm:space-y-0 sm:space-x-8 mb-8">
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-2">
                  <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </span>
                  <strong className="text-xl font-bold">Sign up</strong>
                </div>
                <p className="ml-12 text-sm text-gray-600">
                  to create your tutor profile
                </p>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-2">
                  <span className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center font-bold">
                    2
                  </span>
                  <strong className="text-xl font-bold">Get approved</strong>
                </div>
                <p className="ml-12 text-sm text-gray-600">
                  by our team in 5 business days
                </p>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-2">
                  <span className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center font-bold">
                    3
                  </span>
                  <strong className="text-xl font-bold">Start earning</strong>
                </div>
                <p className="ml-12 text-sm text-gray-600">
                  by teaching students all over the world!
                </p>
              </div>
            </div>
            <button className="bg-[#FF6B35] text-gray-800 font-bold px-8 py-4 rounded-xl hover:bg-amber-700 hover:text-white transition-colors shadow-md">
              Create a tutor profile now
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0">
            <Image
              src="/images/review1.png"
              alt="Tutor teaching"
              width={600}
              height={500}
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </motion.section>

      {/* Section 2: Teach students from over 180 countries */}
      <motion.section
        className="bg-white py-16 md:py-24"
        initial="initial"
        whileInView="animate"
        variants={staggerContainer}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24">
          <motion.div
            className="md:w-1/2 flex justify-center md:justify-start mt-12 md:mt-0"
            variants={fadeInFromLeft}
          >
            <div className="grid grid-cols-1 gap-4">
              <Image
                src="/images/review1.png"
                alt="Students studying together"
                width={500}
                height={300}
                className="rounded-xl shadow-xl"
              />
              <Image
                src="/images/review1.png"
                alt="Students using a laptop"
                width={500}
                height={300}
                className="rounded-xl shadow-xl"
              />
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            variants={fadeInFromRight}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-6">
              Teach students from over 180 countries
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Preply tutors teach 800,000+ students globally. Join us and
              you&apos;ll have everything you need to teach successfully.
            </p>
            <ul className="text-gray-800 space-y-4 text-lg">
              {checkmarks.map((item, index) => (
                <li key={index} className="flex items-start">
                  <FaCheck className="text-green-500 mr-2 mt-1" /> {item}
                </li>
              ))}
            </ul>
            <button className="mt-8 bg-[#FF6B35] text-gray-800 font-bold px-8 py-4 rounded-xl hover:bg-amber-700 hover:text-white transition-colors shadow-md">
              Create a tutor profile now
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Section 3: How does MyTutor work? */}
      <motion.section
        className=" py-16 md:py-24"
        initial="initial"
        whileInView="animate"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12 md:gap-24">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900 mb-6">
              How does MyTutor work?
            </h2>
            <p className="text-gray-600 text-lg max-w-lg mx-auto md:mx-0">
              Here&apos;s a peek at our online lesson space; it&apos;s where
              you&apos;ll be giving life-changing tuition to school kids who
              need it most. And it&apos;s all within reaching distance of the
              kettle!
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0">
            <Image
              src="/images/review1.png"
              alt="Online lesson space"
              width={700}
              height={500}
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </motion.section>

      {/* Section 4: Remote | Rewarding | Well paid */}
      <motion.section
        className="bg-white py-16 md:py-24"
        initial="initial"
        whileInView="animate"
        variants={staggerContainer}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            variants={fadeInUp}
            className="bg-amber-50 p-8 rounded-xl shadow-md flex flex-col items-center text-center"
          >
            <div className="mb-4">
              <Image
                src="/images/review1.png"
                alt="Remote icon"
                width={100}
                height={100}
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Remote</h3>
            <p className="text-gray-600 text-sm mb-4">
              All you need is a laptop and wifi. Plus no money spent on travel -
              sweet.
            </p>
            <a
              href="#"
              className="text-[#FF6B35] font-semibold text-sm hover:underline"
            >
              LEARN MORE
            </a>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="bg-amber-50 p-8 rounded-xl shadow-md flex flex-col items-center text-center"
          >
            <div className="mb-4">
              <Image
                src="/images/review1.png"
                alt="Rewarding icon"
                width={100}
                height={100}
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Rewarding</h3>
            <p className="text-gray-600 text-sm mb-4">
              You&apos;ll be helping shape the education of school kids who need
              it most.
            </p>
            <a
              href="#"
              className="text-[#FF6B35] font-semibold text-sm hover:underline"
            >
              LEARN MORE
            </a>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="bg-amber-50 p-8 rounded-xl shadow-md flex flex-col items-center text-center"
          >
            <div className="mb-4">
              <Image
                src="/images/review1.png"
                alt="Well paid icon"
                width={100}
                height={100}
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Well paid</h3>
            <p className="text-gray-600 text-sm mb-4">
              Take home from £13–£57/hour, with no experience needed.
            </p>
            <a
              href="#"
              className="text-[#FF6B35] font-semibold text-sm hover:underline"
            >
              LEARN MORE
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Section 5: We support you all the way */}
      <motion.section
        className=" py-16 md:py-24"
        initial="initial"
        whileInView="animate"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12 md:gap-24">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-6">
              We support you all the way
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Online tutoring jobs needn&apos;t be stressful - we find the
              pupils so you don&apos;t have to, give you loads of helpful
              training and lesson resources, and we&apos;re always on-hand to
              answer your questions (or just give you a well-deserved pat on the
              back)!
            </p>
            <button className="text-[#FF6B35]  font-bold px-8 py-4 rounded-xl hover:bg-amber-700  hover:text-white transition-colors shadow-md">
              APPLY NOW
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0">
            <Image
              src="/images/review1.png"
              alt="Support from tutors"
              width={600}
              height={400}
            />
          </div>
        </div>
      </motion.section>

      {/* Section 6: Awesome - how do I get started? */}
      <motion.section
        className="bg-white py-16 md:py-24"
        initial="initial"
        whileInView="animate"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24">
          <div className="md:w-1/2 flex justify-center md:justify-start mt-12 md:mt-0">
            <Image
              src="/images/review1.png"
              alt="How to get started"
              width={600}
              height={400}
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-2">
              Awesome - how do I get started?
            </h2>
            <p className="text-gray-600 text-lg mb-6">It&apos;s super simple</p>
            <ul className="text-gray-800 space-y-4 text-lg list-disc pl-5">
              <li>Create your account and fill in the application</li>
              <li>
                Book your 15-minute video interview with a friendly face from
                MyTutor HQ
              </li>
              <li>Complete your profile and get tutoring!</li>
            </ul>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
