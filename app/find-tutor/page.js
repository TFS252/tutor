"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";

// Reusable SVG Icons Component
const Icon = ({ name, className }) => {
  switch (name) {
    case "Star":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          fill="currentColor"
          className={className}
        >
          <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3L288.1 423.4l123.4 68.2c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.2-20.9 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
        </svg>
      );
    case "ArrowRight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          fill="currentColor"
          className={className}
        >
          <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 239H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.7L233.4 409.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
        </svg>
      );
    case "ChevronDown":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
          className={className}
        >
          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
        </svg>
      );
    default:
      return null;
  }
};

const tutors = [
  {
    name: "Michael W.",
    isSuperTutor: true,
    university: "Cambridge",
    subject: "Chemical Engineering via Natural Sciences",
    bio: "I aim to inspire and equip students with the knowledge and mindset to become the best they can be in the sciences!",
    rating: 5,
    reviews: 160,
    lessons: 1926,
    price: 70, // Average price for filtering
    priceRange: "₹69-₹73/hr",
    imgSrc: "/images/review1.png",
  },
  {
    name: "Sophie D.",
    isSuperTutor: false,
    university: "University of Manchester",
    subject: "Mathematics",
    bio: "I'm a passionate and patient math tutor dedicated to making complex concepts simple and enjoyable for all my students.",
    rating: 4.8,
    reviews: 95,
    lessons: 450,
    price: 42,
    priceRange: "₹40-₹44/hr",
    imgSrc: "/images/review1.png",
  },
  {
    name: "Jessica A.",
    isSuperTutor: false,
    university: "Imperial College London",
    subject: "Physics",
    bio: "I have a strong background in physics and love helping students build a solid foundation. My goal is to boost both understanding and confidence.",
    rating: 4.9,
    reviews: 120,
    lessons: 600,
    price: 52,
    priceRange: "₹50-₹55/hr",
    imgSrc: "/images/review1.png",
  },
  {
    name: "Thomas C.",
    isSuperTutor: true,
    university: "University of Oxford",
    subject: "History",
    bio: "I specialize in modern history and use a narrative approach to make the past come alive. I focus on critical thinking and essay writing skills.",
    rating: 5,
    reviews: 210,
    lessons: 1200,
    price: 68,
    priceRange: "₹65-₹70/hr",
    imgSrc: "/images/review1.png",
  },
];

const faqItems = [
  {
    question: "How do I find the right tutor?",
    answer:
      "Finding the right tutor starts with browsing our list of qualified teachers and using filters for subject, budget, and availability...",
  },
  {
    question: "Can I try a tutor before committing?",
    answer:
      "Yes, absolutely! Most tutors offer a free first meeting where you can discuss your goals, ask questions, and experience their teaching style...",
  },
  {
    question: "What subjects are available?",
    answer:
      "We offer tutoring in a wide variety of subjects ranging from core academics like Mathematics, Science, and English to specialized fields...",
  },
  {
    question: "How does online tutoring work?",
    answer:
      "Online tutoring sessions are conducted using secure video call technology, which means you can connect with your tutor from anywhere...",
  },
  {
    question: "Can I change my tutor later?",
    answer:
      "Yes, you always have the flexibility to change your tutor if you feel someone else may suit your needs better...",
  },
];

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const listItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const hoverEffect = {
  scale: 1.03,
  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
  transition: { type: "spring", stiffness: 300 },
};

// Reusable Tutor Card Component
const TutorCard = ({ tutor }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Icon
          key={i}
          name="Star"
          className={`h-4 w-4 ${
            i < rating ? "text-amber-400" : "text-gray-300"
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <motion.div
      className="bg-white p-6 rounded-2xl shadow-md flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      variants={listItem}
      whileHover={hoverEffect}
      whileTap={{ scale: 0.98, boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
    >
      <div className="flex-shrink-0">
        <Image
          src={tutor.imgSrc}
          alt={tutor.name}
          width={120}
          height={120}
          className="rounded-full object-cover w-24 h-24 sm:w-32 sm:h-32"
        />
      </div>
      <div className="flex-grow text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
          <h3 className="text-xl font-bold text-gray-900">{tutor.name}</h3>
          {tutor.isSuperTutor && (
            <span className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-2 py-1 rounded-full">
              Super tutor
            </span>
          )}
        </div>
        <p className="text-gray-600 text-sm mb-2">
          {tutor.university} - {tutor.subject}
        </p>
        <p className="text-gray-800 text-base mb-4 line-clamp-3">{tutor.bio}</p>
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            {renderStars(tutor.rating)}
            <span className="font-semibold">{tutor.rating}/5</span>
          </div>
          <span>({tutor.reviews} reviews)</span>
          <span className="hidden md:inline">{tutor.lessons} lessons</span>
        </div>
      </div>
      <div className="flex-shrink-0 flex flex-col items-center sm:items-end text-center sm:text-right mt-4 sm:mt-0">
        <span className="text-xl font-bold text-gray-900 mb-2">
          {tutor.priceRange}
        </span>
        <button className="bg-amber-500 text-white font-bold px-6 py-3 rounded-full hover:bg-amber-600 transition-colors">
          View profile
        </button>
      </div>
    </motion.div>
  );
};

// Reusable FAQ Item Component
const FaqItem = ({ item, index, openFAQIndex, setOpenFAQIndex }) => (
  <motion.div
    variants={listItem}
    className="border-b border-gray-300 pb-4"
    whileTap={{ scale: 0.99 }} // Added for mobile press effect
  >
    <div
      className="flex justify-between items-center cursor-pointer py-2"
      onClick={() => setOpenFAQIndex(openFAQIndex === index ? null : index)}
      role="button"
      tabIndex={0}
      aria-expanded={openFAQIndex === index}
      aria-controls={`faq-answer-${index}`}
    >
      <h4
        className={`text-lg md:text-xl transition ${
          openFAQIndex === index ? "font-bold" : "font-semibold text-gray-900"
        }`}
      >
        {item.question}
      </h4>
      <Icon
        name="ChevronDown"
        className={`h-5 w-5 transform transition-transform duration-300 ${
          openFAQIndex === index ? "rotate-180" : "text-gray-500"
        }`}
      />
    </div>
    <AnimatePresence>
      {openFAQIndex === index && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="mt-2 text-gray-600 text-base leading-relaxed overflow-hidden"
          id={`faq-answer-${index}`}
        >
          {item.answer}
        </motion.p>
      )}
    </AnimatePresence>
  </motion.div>
);

export default function FindTutor() {
  const [selectedFilters, setSelectedFilters] = useState({
    subject: "All subjects",
    price: "All prices",
    gender: "All genders",
    availability: "All Availability",
  });

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const timeSlots = ["Before 12pm", "12–5pm", "After 5pm"];
  const [availability, setAvailability] = useState(
    Array(days.length)
      .fill(null)
      .map(() => Array(timeSlots.length).fill(false))
  );
  const [isOpen, setIsOpen] = useState(false);
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  const toggleCell = (dayIndex, slotIndex) => {
    const newAvailability = [...availability];
    newAvailability[dayIndex][slotIndex] =
      !newAvailability[dayIndex][slotIndex];
    setAvailability(newAvailability);
  };

  const toggleColumn = (slotIndex) => {
    const allSelected = availability.every((row) => row[slotIndex]);
    const newAvailability = availability.map((row) => {
      const newRow = [...row];
      newRow[slotIndex] = !allSelected;
      return newRow;
    });
    setAvailability(newAvailability);
  };

  const filterTutors = () => {
    return tutors.filter((tutor) => {
      // Price filtering logic
      if (selectedFilters.price !== "All prices") {
        const priceRange = selectedFilters.price
          .split("-")
          .map((p) => parseInt(p.replace(/[^0-9]/g, "")));
        const minPrice = priceRange[0] || 0;
        const maxPrice = priceRange[1] || Infinity;
        if (tutor.price < minPrice || tutor.price > maxPrice) {
          return false;
        }
      }
      return true;
    });
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setSelectedFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-[#fdf8f5] min-h-screen pt-15 font-sans">
      {/* SECTION 1: Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f8d0a5] to-[#fde5cc] py-20 md:py-32">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative z-10"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold leading-tight mb-4"
              variants={listItem}
            >
              Find a Tutor That Fits Your Schedule
            </motion.h1>
            <motion.p className="text-lg md:text-xl mb-8" variants={listItem}>
              Book a free video meeting to find the perfect tutor and start
              learning on your terms.
            </motion.p>
            <motion.button
              className="relative text-white font-bold px-8 py-4 rounded-full shadow-lg bg-gradient-to-r from-[#1A3E6B] to-[#FF6B35] hover:from-[#FF6B35] hover:to-[#1A3E6B] transition-all duration-500 overflow-hidden group"
              variants={listItem}
              whileHover={{
                scale: 1.1,
                y: -8,
                boxShadow:
                  "0 25px 50px rgba(26, 62, 107, 0.3), 0 0 30px rgba(255, 107, 53, 0.4)",
                transition: { type: "spring", stiffness: 300 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-20 drop-shadow-lg">
                Get Started for Free
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 -skew-x-12"
                initial={{ x: "-100%" }}
                animate={{
                  x: ["-100%", "200%"],
                  transition: {
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              />
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-[#1A3E6B] to-[#FF6B35] rounded-full blur-lg opacity-30 group-hover:opacity-75 -z-10"
                animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>
          </motion.div>
          <motion.div
            className="relative flex justify-center md:justify-end mt-12 md:mt-0"
            variants={listItem}
            initial="hidden"
            animate="visible"
          ></motion.div>
        </div>
      </section>

      {/* SECTION 2: Main Content Area */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="bg-white p-6 rounded-2xl shadow-xl mb-12"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label htmlFor="subject" className="block text-lg font-bold mb-3">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={selectedFilters.subject}
                onChange={handleFilterChange}
                className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option>All subjects</option>
                <option>Chemical Engineering via Natural Sciences</option>
                <option>Mathematics</option>
                <option>Physics</option>
                <option>History</option>
              </select>
            </div>
            <div>
              <label htmlFor="price" className="block text-lg font-bold mb-3">
                Price
              </label>
              <select
                id="price"
                name="price"
                value={selectedFilters.price}
                onChange={handleFilterChange}
                className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="All prices">All prices</option>
                <option value="₹0-₹20/hr">₹0-₹20/hr</option>
                <option value="₹20-₹50/hr">₹20-₹50/hr</option>
                <option value="₹50-₹80/hr">₹50-₹80/hr</option>
              </select>
            </div>
            <div>
              <label htmlFor="gender" className="block text-lg font-bold mb-3">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={selectedFilters.gender}
                onChange={handleFilterChange}
                className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option>All genders</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className="relative">
              <label className="block text-lg font-bold mb-3">
                Availability
              </label>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center border border-gray-300 rounded-lg py-3 px-4 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <span>All Availability</span>
                <FaChevronDown
                  className={`h-5 w-5 text-gray-500 transform transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg p-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr>
                        <th className="text-left"></th>
                        {timeSlots.map((slot, slotIndex) => (
                          <th
                            key={slot}
                            className="px-2 text-gray-700 font-medium text-center"
                          >
                            {slot}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-medium text-gray-700">
                          Select all
                        </td>
                        {timeSlots.map((slot, slotIndex) => (
                          <td key={slot} className="text-center">
                            <input
                              type="checkbox"
                              className="h-4 w-4"
                              checked={availability.every(
                                (row) => row[slotIndex]
                              )}
                              onChange={() => toggleColumn(slotIndex)}
                            />
                          </td>
                        ))}
                      </tr>
                      {days.map((day, dayIndex) => (
                        <tr key={day}>
                          <td className="py-2 font-medium text-gray-600">
                            {day}
                          </td>
                          {timeSlots.map((slot, slotIndex) => (
                            <td key={slot} className="text-center">
                              <input
                                type="checkbox"
                                className="h-4 w-4"
                                checked={availability[dayIndex][slotIndex]}
                                onChange={() => toggleCell(dayIndex, slotIndex)}
                              />
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            className="lg:col-span-2 space-y-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {filterTutors().map((tutor, index) => (
              <TutorCard key={index} tutor={tutor} />
            ))}
          </motion.div>

          <motion.div
            className="lg:col-span-1 bg-white p-6 rounded-2xl shadow-xl flex flex-col items-center text-center h-fit"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="mb-4"></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Need Help Finding the Right Tutor?
            </h3>
            <p className="text-gray-700 text-base mb-6">
              Tell us what you&apos;re looking for, and we&apos;ll help you find
              the perfect tutor to match your needs.
            </p>
            <button className="bg-gray-800 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:bg-gray-900 transition-colors">
              Tell Us More
            </button>
          </motion.div>
        </div>

        {/* --- */}
        <section className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              className="text-left"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                FREQUENTLY ASKED QUESTIONS
              </h2>
              <button className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-900 transition">
                Visit Help Center <Icon name="ArrowRight" className="h-4 w-4" />
              </button>
            </motion.div>

            <motion.div
              className="space-y-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <AnimatePresence>
                {faqItems.map((item, index) => (
                  <FaqItem
                    key={index}
                    item={item}
                    index={index}
                    openFAQIndex={openFAQIndex}
                    setOpenFAQIndex={setOpenFAQIndex}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
