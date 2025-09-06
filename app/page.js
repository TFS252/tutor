"use client";

import Image from "next/image";
import {
  FaLaptop,
  FaGraduationCap,
  FaSearch,
  FaRegLightbulb,
  FaRegCheckCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  const subjects = [
    { name: "Computer Science", icon: <FaLaptop size={32} /> },
    { name: "Engineering", icon: <FaGraduationCap size={32} /> },
    { name: "Music Lession", icon: <FaSearch size={32} /> },
    { name: "Humanities", icon: <FaRegLightbulb size={32} /> },
    { name: "Writing & Reading", icon: <FaRegCheckCircle size={32} /> },
    { name: "Foreign Language", icon: <FaLaptop size={32} /> },
    { name: "History", icon: <FaGraduationCap size={32} /> },
  ];

  const benefits = [
    {
      title: "One-To-One Mentorship",
      icon: <FaLaptop size={40} className="text-green-500" />,
      description:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
    },
    {
      title: "24/7 Availability",
      icon: <FaRegCheckCircle size={40} className="text-orange-500" />,
      description:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
    },
    {
      title: "Interactive WhiteBoard",
      icon: <FaRegLightbulb size={40} className="text-blue-500" />,
      description:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
    },
    {
      title: "Affordable Price",
      icon: <FaGraduationCap size={40} className="text-yellow-500" />,
      description:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
    },
  ];

  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen font-sans">
      {/* SECTION 1: Personalised Tutor */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Personalized Professional Online Tutor on Your Schedule
            </h1>
            <p className="mt-4 text-gray-700 text-lg">
              Join thousands of learners and expert tutors from around the world
              to unlock your full potential. Whether you want to master a new
              subject, improve your skills, or prepare for exams, our
              interactive courses, personalized guidance, and flexible learning
              options make it easy to learn anytime, anywhere. Start your
              journey today and take control of your future
            </p>
            <button className="mt-8 bg-[#ff7b47] text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-[#e66c3c] transition-colors">
              Get Started
            </button>
          </motion.div>

          {/* Image and Shapes */}
          <motion.div
            className="relative md:w-1/2 flex justify-center mt-12 md:mt-0"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="relative z-10 w-full max-w-lg">
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <Image
                  src="/images/tutor-on-schedule.png"
                  alt="Online tutor"
                  width={500}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Orange Circle */}
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-[#ff7b47] rounded-full z-20 flex items-center justify-center p-4">
                <Image
                  src="/images/notes.png"
                  alt="notes"
                  width={150}
                  height={150}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Stars */}
              <div className="absolute -top-8 right-0 space-x-2 animate-pulse">
                <span className="inline-block text-[#ff7b47]">
                  <FaRegLightbulb size={32} />
                </span>
                <span className="inline-block text-[#ff7b47]">
                  <FaRegLightbulb size={24} />
                </span>
                <span className="inline-block text-[#ff7b47]">
                  <FaRegLightbulb size={32} />
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Why Choose Us */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.p
            className="text-[#ff7b47] font-semibold text-lg"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Why Choose Us?
          </motion.p>
          <motion.h2
            className="mt-2 text-4xl sm:text-5xl font-bold leading-tight text-gray-900"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Benefits Of Online Tutoring Services At My Tutor
          </motion.h2>

          {/* Benefits Grid */}
          <motion.div
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-8 rounded-xl shadow-md flex flex-col items-center text-center"
                variants={fadeIn}
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: Our Tutor Subject */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.p
            className="text-[#ff7b47] font-semibold text-lg"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Our Tutor Subject
          </motion.p>
          <motion.h2
            className="mt-2 text-4xl sm:text-5xl font-bold leading-tight text-gray-900"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Find Online Tutor In Any Subject
          </motion.h2>

          {/* Search Bar */}
          <motion.div
            className="mt-8 flex justify-center"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="flex items-center w-full max-w-2xl bg-white rounded-lg shadow-md overflow-hidden">
              <input
                type="text"
                placeholder="What Subject do You Learn"
                className="flex-1 px-6 py-4 outline-none text-lg text-gray-700 placeholder-gray-400"
              />
              <button className="bg-[#1b2c4c] text-white px-8 py-4">
                <FaSearch />
              </button>
            </div>
          </motion.div>

          {/* Subject Grid */}
          <motion.div
            className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {subjects.map((subject, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
                variants={fadeIn}
              >
                <div className="text-blue-500 mb-4">{subject.icon}</div>
                <p className="text-lg font-medium text-gray-800">
                  {subject.name}
                </p>
              </motion.div>
            ))}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center col-span-2 sm:col-span-1 md:col-span-2 lg:col-span-1"
              variants={fadeIn}
            >
              <p className="text-lg font-medium text-gray-800">
                See All Subject
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: Testimonials */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.p
            className="text-[#ff7b47] font-semibold text-lg"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Our Testimonials
          </motion.p>
          <motion.h2
            className="mt-2 text-4xl sm:text-5xl font-bold leading-tight text-gray-900"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            What Our Student Say About You
          </motion.h2>

          {/* Testimonial Images & Text */}
          <div className="mt-12 flex flex-col items-center justify-center relative">
            {/* Main Testimonial */}
            <motion.div
              className="relative z-10 w-48 h-48 rounded-full overflow-hidden shadow-xl border-4 border-white"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Image
                src="/images/review1.png"
                alt="Albert Monica"
                width={200}
                height={200}
                className="object-cover w-full h-full"
              />
            </motion.div>
            <motion.h3
              className="mt-4 text-2xl font-bold text-gray-900"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              Albert Monica
            </motion.h3>
            <motion.p
              className="text-gray-500 text-lg"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              Student College
            </motion.p>
            <motion.div
              className="flex justify-center text-yellow-400 mt-2"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[...Array(4)].map((_, i) => (
                <FaRegCheckCircle key={i} className="mx-0.5" />
              ))}
            </motion.div>
            <p className="mt-8 text-center text-gray-700 max-w-2xl mx-auto">
              Join thousands of learners and expert tutors from around the world
              to unlock your full potential. Whether you want to master a new
              subject, improve your skills, or prepare for exams, our
              interactive courses, personalized guidance, and flexible learning
              options make it easy to learn anytime, anywhere.
            </p>

            {/* Side Testimonials */}
            <motion.div
              className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:block"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg border-4 border-white">
                <Image
                  src="/images/review2.png"
                  alt="Student 1"
                  width={100}
                  height={100}
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
            <motion.div
              className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg border-4 border-white">
                <Image
                  src="/images/review3.png"
                  alt="Student 2"
                  width={100}
                  height={100}
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Empower Your Mind */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <p className="text-[#ff7b47] font-semibold text-lg">
              100% Satisfaction Guarantee
            </p>
            <h2 className="mt-2 text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
              Empower Your Mind, Achieve Your Goals
            </h2>
            <p className="mt-4 text-gray-700 text-lg">
              Join thousands of learners and expert tutors from around the world
              to unlock your full potential. Whether you want to master a new
              subject, improve your skills, or prepare for exams, our
              interactive courses, personalized guidance, and flexible learning
              options make it easy to learn anytime, anywhere. Start your
              journey today and take control of your future
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-[#ff7b47] text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-[#e66c3c] transition-colors">
                Enrol Now
              </button>
              <button className="bg-transparent border border-gray-400 text-gray-800 font-semibold py-3 px-8 rounded-lg hover:bg-gray-200 transition-colors">
                Explore Our Courses
              </button>
            </div>
          </motion.div>

          {/* Image Grid with Shapes */}
          <motion.div
            className="relative md:w-1/2 flex justify-center mt-12 md:mt-0"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-4 relative z-10 p-4">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/empower1.png"
                  alt="Happy student"
                  width={300}
                  height={200}
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/empower2.png"
                  alt="Tutoring session"
                  width={300}
                  height={200}
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/empower3.png"
                  alt="Tutor and student"
                  width={300}
                  height={200}
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/empower4.png"
                  alt="Happy student"
                  width={300}
                  height={200}
                />
              </div>
            </div>
            {/* Decorative shapes */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#ff7b47] rounded-full translate-x-1/2 -translate-y-1/2 z-0"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-200 rounded-full -translate-x-1/2 translate-y-1/2 z-0"></div>
            <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-gray-400 rounded-full -translate-x-1/2 -translate-y-1/2 z-0"></div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: Stats */}
      <section className="bg-[#1b2c4c] py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-bold">8200+</span>
            <p className="text-sm mt-1 text-gray-300">Success Stories</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-bold">500+</span>
            <p className="text-sm mt-1 text-gray-300">Experts Tutor</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-bold">20+</span>
            <p className="text-sm mt-1 text-gray-300">Year Experience</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-bold">8200+</span>
            <p className="text-sm mt-1 text-gray-300">Active Student</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-bold">8200+</span>
            <p className="text-sm mt-1 text-gray-300">Active Student</p>
          </div>
        </div>
      </section>
    </div>
  );
}
