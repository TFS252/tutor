"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Replaced FaStar, FaCheckCircle, FaArrowRight, and FaChevronDown with inline SVG
const StarIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
    fill="currentColor"
    className={className}
  >
    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3L288.1 423.4l123.4 68.2c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.2-20.9 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
  </svg>
);

const CheckCircleIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    className={className}
  >
    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0L143 265c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
  </svg>
);

const ArrowRightIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    fill="currentColor"
    className={className}
  >
    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 239H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.7L233.4 409.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
  </svg>
);

const ChevronDownIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    className={className}
  >
    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
  </svg>
);

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
    price: "£69-£73/hr",
    imgSrc: "https://placehold.co/100x100/A07851/ffffff?text=MW",
  },
  {
    name: "Sophie D.",
    isSuperTutor: false,
    university: "University of Manchester",
    subject: "Mathematics",
    bio: "I'm a passionate and patient math tutor dedicated to making complex concepts simple and enjoyable for all my students.",
    rating: 4.8, //vo iske liye bol rha h
    reviews: 95,
    lessons: 450,
    price: "£40-£44/hr",
    imgSrc: "https://placehold.co/100x100/F4B5A6/ffffff?text=SD",
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
    price: "£50-£55/hr",
    imgSrc: "https://placehold.co/100x100/98C1D9/ffffff?text=JA",
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
    price: "£65-£70/hr",
    imgSrc: "https://placehold.co/100x100/4059AD/ffffff?text=TC",
  },
];

const testimonials = [
  {
    name: "Ching",
    text: "Qualified tutor recommended.",
    rating: 5,
  },
  {
    name: "Anne Takyiwaa",
    text: "India has been a fantastic tutor, ensuring that my daughter's success is prioritized.",
    rating: 5,
  },
  {
    name: "Charmaine Scott-Ward",
    text: "My son is enjoying the sessions and seems to be gaining confidence. He likes working...",
    rating: 4,
  },
  {
    name: "Sarah Immanuel",
    text: "Brilliant tutor, my daughter is very happy.",
    rating: 5,
  },
];

const fadeInAnimation = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const listItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const filterItem = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export default function FindTutor() {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <StarIcon
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "text-emerald-500" : "text-gray-300"
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="bg-[#fdf8f5] min-h-screen font-sans">
      {/* New Hero Section */}
      <section className="py-16 md:py-24 text-center">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            className="text-left"
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
              Excellent one-to-one tuition from £26/hr
            </h1>
            <p className="text-sm md:text-base text-gray-700">
              Get started for free and pay-as-you-go
            </p>
          </motion.div>
          {/* Right Image */}
          <motion.div
            className="flex justify-center md:justify-end"
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Image
              src="/images/find-banner.jpeg"
              alt="Online tuition banner"
              width={500}
              height={400}
              className="rounded-xl shadow-lg w-full max-w-md"
            />
          </motion.div>
        </div>
      </section>
      ---
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center md:text-left mb-6">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-2"
            variants={fadeInAnimation}
            initial="initial"
            animate="animate"
          >
            Private tutors that fit your schedule
          </motion.h1>
          <motion.p
            className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto md:mx-0"
            variants={fadeInAnimation}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Find your perfect private tutor and arrange a free Video Meeting.
            Then book one-to-one Online Lessons to fit your schedule.
          </motion.p>
        </div>
        {/* Action and Rating Section  */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-4 mb-8"
          variants={fadeInAnimation}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <button className="bg-emerald-500 text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-emerald-600 transition-colors">
            Book a tutor
          </button>
          <div className="flex items-center gap-2 text-gray-700 text-sm">
            <span className="font-semibold">Excellent</span>
            <div className="flex text-emerald-500">
              <StarIcon className="h-4 w-4" />
              <StarIcon className="h-4 w-4" />
              <StarIcon className="h-4 w-4" />
              <StarIcon className="h-4 w-4" />
              <StarIcon className="h-4 w-4" />
            </div>
            <span>4.6 out of 5</span>
            <Image
              src="https://placehold.co/80x20/ffffff/000000?text=Trustpilot"
              alt="Trustpilot Logo"
              width={80}
              height={20}
            />
          </div>
        </motion.div>
        {/* Filters Section */}
        <motion.div
          className="bg-white p-4 rounded-xl shadow-md mb-8 flex flex-col lg:flex-row items-start lg:items-center gap-4"
          variants={fadeInAnimation}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="flex-grow flex flex-col md:flex-row gap-4 w-full">
            {["Subject", "Level", "Price"].map((label, index) => (
              <motion.div
                key={label}
                className="relative flex-1"
                variants={filterItem}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
              >
                <select className="appearance-none w-full border border-gray-300 rounded-lg py-3 px-4 pr-10 bg-white leading-tight focus:outline-none focus:ring-2 focus:ring-amber-500">
                  <option>{label}</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronDownIcon className="h-4 w-4" />
                </div>
              </motion.div>
            ))}
          </div>
          <button className="flex items-center gap-2 font-semibold text-gray-700 hover:text-gray-900 transition-colors w-full lg:w-auto mt-2 lg:mt-0">
            More filters <ArrowRightIcon className="h-4 w-4" />
          </button>
        </motion.div>
        {/* Tutors and Side Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tutors List */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {tutors.map((tutor, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md flex items-start gap-6 hover:shadow-lg transition-shadow duration-300"
                variants={listItem}
              >
                <div className="flex-shrink-0">
                  <Image
                    src={tutor.imgSrc}
                    alt={tutor.name}
                    width={100}
                    height={100}
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-gray-900">
                      {tutor.name}
                    </h3>
                    {tutor.isSuperTutor && (
                      <span className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-2 py-1 rounded-full">
                        Super tutor
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    {tutor.university} - {tutor.subject}
                  </p>
                  <p className="text-gray-800 text-base mb-4">{tutor.bio}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <StarIcon className="h-4 w-4 text-amber-400" />
                      <span>{tutor.rating}/5</span>
                    </div>
                    <span>{tutor.reviews} reviews</span>
                    <span>{tutor.lessons} lessons</span>
                  </div>
                </div>
                <div className="flex flex-col items-end text-right">
                  <span className="text-xl font-bold text-gray-900">
                    {tutor.price}
                  </span>
                  <button className="bg-amber-500 text-white font-bold px-6 py-2 rounded-lg mt-2 hover:bg-amber-600 transition-colors">
                    View profile
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Side Panel for "Looking for something specific?" */}
          <motion.div
            className="lg:col-span-1 bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center"
            variants={fadeInAnimation}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="mb-4">
              <Image
                src="https://placehold.co/150x150/A6E2FF/000000?text=Looking%20for%20something%20specific?"
                alt="Looking for something specific?"
                width={150}
                height={150}
                className="rounded-full"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Looking for something specific?
            </h3>
            <p className="text-gray-700 text-sm mb-4">
              Tell us what you&apos;re looking for, and we&apos;ll help you find
              the perfect tutor.
            </p>
            <button className="bg-gray-800 text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-900 transition-colors">
              Tell us more
            </button>
          </motion.div>
        </div>
        ---
        {/* Meet Before You Book & Pricing */}
        <section className="py-16 text-center">
          <motion.h2
            className="text-4xl font-bold mb-12 text-gray-900"
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Meet tutors for free before you book
          </motion.h2>
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              className="text-left"
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <p className="text-gray-700 text-lg mb-4">
                When you find a tutor you like, book a 15-minute meeting to ask
                questions, find out about their teaching style - and make sure
                they&apos;re someone your child will get on with.
              </p>
              <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
                You&apos;ll only pay for what you use
              </h3>
              <p className="text-gray-700 text-lg">
                With MyTutor, you won&apos;t pay anything until you&apos;ve
                found a great tutor, had a chat with them and booked your first
                lesson. No sign up fees. No subscriptions. Just plain
                pay-as-you-go.
              </p>
            </motion.div>
            {/* Right Images */}
            <motion.div
              className="flex justify-center md:justify-end"
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Image
                src="image_2fe34c.jpg-a6d2747e-2cf2-4880-b7a1-3f77d74dcedf"
                alt="Tutor and student images"
                className="rounded-xl shadow-lg w-full max-w-lg"
              />
            </motion.div>
          </div>
        </section>
        ---
        {/* Pricing Section */}
        <section className="py-16 text-center bg-gray-50">
          <motion.h2
            className="text-4xl font-bold mb-12 text-gray-900"
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Excellent tutors for a range of budgets
          </motion.h2>
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pricing Tier 1 */}
            <motion.div
              className="p-8 rounded-2xl bg-white shadow-xl"
              variants={listItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-extrabold text-gray-900 mb-2">
                £26 - £33
              </h3>
              <p className="text-gray-700 text-base">
                New to MyTutor and with lots of availability and earning some
                great early reviews
              </p>
            </motion.div>
            {/* Pricing Tier 2 */}
            <motion.div
              className="p-8 rounded-2xl bg-white shadow-xl"
              variants={listItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, delay: 0.1 }}
            >
              <h3 className="text-3xl font-extrabold text-gray-900 mb-2">
                £34 - £51
              </h3>
              <p className="text-gray-700 text-base">
                Tutoring for over 6 months, completed lots of tutorials and
                received very positive feedback
              </p>
            </motion.div>
            {/* Pricing Tier 3 */}
            <motion.div
              className="p-8 rounded-2xl bg-white shadow-xl"
              variants={listItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, delay: 0.2 }}
            >
              <h3 className="text-3xl font-extrabold text-gray-900 mb-2">
                £52 - £73
              </h3>
              <p className="text-gray-700 text-base">
                Our most accomplished tutors. Excellent reviews and a track
                record of proven results
              </p>
            </motion.div>
          </div>
        </section>
        ---
        {/* Testimonials Section */}
        <section className="py-16 text-center">
          <motion.h2
            className="text-4xl font-bold mb-6 text-gray-900"
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            What parents are saying
          </motion.h2>
          <motion.div
            className="flex flex-wrap justify-center gap-8 px-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-xl w-72 text-center"
                variants={listItem}
              >
                <div className="flex items-center justify-center gap-1 mb-2">
                  {renderStars(testimonial.rating)}
                </div>
                <h4 className="text-gray-700 text-sm mb-2">
                  <span className="font-bold">{testimonial.name}</span>, 2 days
                  ago
                </h4>
                <p className="text-gray-900 text-sm italic">
                  &apos;{testimonial.text}&apos;
                </p>
                {/* kya hua? */}
              </motion.div>
            ))}
          </motion.div>
          <div className="flex justify-center mt-8">
            <button className="bg-emerald-500 text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-emerald-600 transition-colors">
              See more tutors
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
