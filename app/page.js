"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  FaLaptop,
  FaGraduationCap,
  FaSearch,
  FaRegLightbulb,
  FaRegCheckCircle,
  FaStar,
  FaMusic,
  FaBook,
  FaGlobe,
  FaHistory,
} from "react-icons/fa";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const subjects = [
    {
      name: "Computer Science",
      icon: <FaLaptop size={32} />,
      color: "text-blue-500",
    },
    {
      name: "Engineering",
      icon: <FaGraduationCap size={32} />,
      color: "text-green-500",
    },
    {
      name: "Music Lesson",
      icon: <FaMusic size={32} />,
      color: "text-purple-500",
    },
    {
      name: "Humanities",
      icon: <FaRegLightbulb size={32} />,
      color: "text-yellow-500",
    },
    {
      name: "Writing & Reading",
      icon: <FaBook size={32} />,
      color: "text-red-500",
    },
    {
      name: "Foreign Language",
      icon: <FaGlobe size={32} />,
      color: "text-indigo-500",
    },
    {
      name: "History",
      icon: <FaHistory size={32} />,
      color: "text-orange-500",
    },
  ];

  const benefits = [
    {
      title: "One-To-One Mentorship",
      icon: <FaLaptop size={40} className="text-green-500" />,
      description:
        "Get personalized attention with our dedicated tutors who focus exclusively on your learning needs and academic goals.",
    },
    {
      title: "24/7 Availability",
      icon: <FaRegCheckCircle size={40} className="text-orange-500" />,
      description:
        "Learn at your own pace with round-the-clock access to our platform and tutors across different time zones.",
    },
    {
      title: "Interactive WhiteBoard",
      icon: <FaRegLightbulb size={40} className="text-blue-500" />,
      description:
        "Experience immersive learning with our advanced digital whiteboard technology for real-time collaboration.",
    },
    {
      title: "Affordable Price",
      icon: <FaGraduationCap size={40} className="text-yellow-500" />,
      description:
        "Quality education shouldn't break the bank. We offer competitive pricing with flexible payment options.",
    },
  ];

  const stats = [
    { number: "8200+", label: "Success Stories" },
    { number: "500+", label: "Expert Tutors" },
    { number: "20+", label: "Years Experience" },
    { number: "15000+", label: "Active Students" },
    { number: "50+", label: "Countries Served" },
  ];

  return (
    <div className="min-h-screen font-sans overflow-x-hidden p-15">
      {/* Hero Section - Empower Your Mind */}
      <section className=" py-12 md:py-20  px-4  ">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text Content */}
          <div
            className={`lg:w-1/2 text-center lg:text-left transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            <div className="inline-block animate-bounce">
              <p className="text-[#ff7b47] font-semibold text-sm sm:text-base md:text-lg bg-orange-100 px-4 py-2 rounded-full">
                🎓 100% Satisfaction
              </p>
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                Empower Your Mind,
              </span>
              <br />
              <span className="text-[#ff7b47] animate-pulse">
                Achieve Your Goals
              </span>
            </h1>
            <p className="mt-6 text-gray-700 text-base sm:text-lg leading-relaxed max-w-2xl">
              Join thousands of learners and expert tutors from around the world
              to unlock your full potential. Whether you want to master a new
              subject, improve your skills, or prepare for exams, our
              interactive courses make learning accessible anytime, anywhere.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group bg-[#ff7b47] text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:bg-[#e66c3c] transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  Enroll Now →
                </span>
              </button>
              <button className="bg-transparent border-2 border-gray-400 text-gray-800 font-semibold py-3 px-8 rounded-xl hover:bg-gray-100 hover:border-gray-600 transform hover:scale-105 transition-all duration-300">
                Explore Courses
              </button>
            </div>
          </div>

          {/* Animated Image Grid */}
          <div
            className={`relative lg:w-1/2 flex justify-center mt-8 lg:mt-0 transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            <div className="grid grid-cols-2 gap-6 relative z-10 p-4">
              {/* Top Left (rounded top-left corner) */}
              <Image
                src="/images/review1.png"
                alt="Happy student in a video call"
                width={300}
                height={300}
                className="rounded-tl-[120px] object-cover w-full h-full"
              />

              {/* Top Right (circle) */}
              <Image
                src="/images/health.png"
                alt="Tutor explaining concepts"
                width={300}
                height={300}
                className="rounded-full object-cover w-full h-full"
              />

              {/* Bottom Left (circle) */}
              <Image
                src="/images/health.png"
                alt="Student taking notes during online class"
                width={300}
                height={300}
                className="rounded-full object-cover w-full h-full"
              />

              {/* Bottom Right (rounded bottom-right corner) */}
              <Image
                src="/images/review1.png"
                alt="Group of students collaborating online"
                width={300}
                height={300}
                className="rounded-br-[120px] object-cover w-full h-full"
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#ff7b47] rounded-full translate-x-1/2 -translate-y-1/2 z-0 animate-bounce"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-200 rounded-full -translate-x-1/2 translate-y-1/2 z-0 animate-pulse"></div>
            <div className="absolute top-1/4 left-1/4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-yellow-400 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 animate-spin"></div>

            {/* Floating Icons */}
            <div className="absolute -top-4 -right-4 text-orange-500 animate-bounce">
              <FaRegLightbulb size={24} />
            </div>
            <div className="absolute -bottom-4 -left-4 text-blue-500 animate-pulse">
              <FaGraduationCap size={20} />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-[#1b2c4c] via-[#2a3f5f] to-[#1b2c4c] py-8 sm:py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`transform transition-all duration-700 delay-${
                  index * 100
                } ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                } hover:scale-110 transition-transform duration-300`}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/20 transition-all duration-300">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#f85b1d] animate-pulse">
                    {stat.number}
                  </span>
                  <p className="text-xs sm:text-sm mt-2 text-gray-300">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <p className="text-[#ff7b47] font-semibold text-base sm:text-lg bg-orange-100 px-4 py-2 rounded-full inline-block">
              Why Choose Us? 🌟
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              Benefits Of Online Tutoring Services
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border hover:border-[#ff7b47]/30 ${
                  isVisible ? "animate-slide-up" : ""
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <p className="text-[#ff7b47] font-semibold text-base sm:text-lg bg-orange-100 px-4 py-2 rounded-full inline-block">
              Our Subjects 📚
            </p>
            <h2 className=" text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              Find Online Tutor In Any Subject
            </h2>
          </div>

          {/* Search Bar */}
          <div
            className="mt-8 flex justify-center animate-fade-in-up"
            style={{ animationDelay: "300ms" }}
          >
            <div className="flex items-center w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden border hover:shadow-2xl transition-shadow duration-300">
              <input
                type="text"
                placeholder="What subject would you like to learn?"
                className="flex-1 px-6 py-4 outline-none text-base sm:text-lg text-gray-700 placeholder-gray-400"
              />
              <button className="bg-gradient-to-r  rounded-2xl from-[#1b2c4c] to-[#2a3f5f] text-white px-6 sm:px-8 py-4 hover:from-[#2a3f5f] hover:to-[#1b2c4c] transition-all duration-300 transform hover:scale-105">
                <FaSearch className="text-lg sm:text-xl" />
              </button>
            </div>
          </div>

          {/* Subjects Grid */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {subjects.map((subject, index) => (
              <div
                key={index}
                className={`group bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-[#ff7b47]/30 ${
                  isVisible ? "animate-slide-up" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`${subject.color} mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 flex justify-center`}
                >
                  {subject.icon}
                </div>
                <p className="text-sm sm:text-base md:text-lg font-medium text-gray-800 group-hover:text-[#ff7b47] transition-colors duration-300">
                  {subject.name}
                </p>
              </div>
            ))}
            <div className="group bg-gradient-to-br from-[#ff7b47] to-[#e66c3c] p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl text-white transform hover:-translate-y-2 transition-all duration-500 cursor-pointer animate-pulse">
              <div className="flex flex-col items-center justify-center h-full">
                <FaSearch className="text-2xl mb-2 group-hover:scale-125 transition-transform duration-300" />
                <p className="text-sm sm:text-base md:text-lg font-medium">
                  See All Subjects
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <p className="text-[#ff7b47] font-semibold text-base sm:text-lg bg-orange-100 px-4 py-2 rounded-full inline-block">
              Our Testimonials 💬
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              What Our Students Say About Us
            </h2>
          </div>

          <div className="mt-12 flex flex-col items-center justify-center relative">
            {/* Main Testimonial */}
            <div className="relative z-10 group">
              <Image
                src="/images/health.png"
                alt="Student taking notes during online class"
                width={160}
                height={160}
                className="rounded-full object-cover w-full h-full"
              />
              <h3 className="mt-4 text-xl sm:text-2xl font-bold text-gray-900 animate-fade-in-up">
                Albert Monica
              </h3>
              <p
                className="text-gray-500 text-base sm:text-lg animate-fade-in-up"
                style={{ animationDelay: "200ms" }}
              >
                College Student
              </p>
              <div
                className="flex justify-center text-yellow-400 mt-2 animate-fade-in-up"
                style={{ animationDelay: "400ms" }}
              >
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className="mx-0.5 animate-pulse"
                    style={{ animationDelay: `${i * 100}ms` }}
                  />
                ))}
              </div>
            </div>

            <div
              className="mt-8 bg-gradient-to-r from-gray-50 to-white p-6 sm:p-8 rounded-2xl shadow-lg max-w-3xl mx-auto border animate-fade-in-up"
              style={{ animationDelay: "600ms" }}
            >
              <p className="text-center text-gray-700 text-base sm:text-lg leading-relaxed">
                &quot;The personalized tutoring approach transformed my learning
                experience completely. The interactive sessions and 24/7 support
                helped me improve my grades significantly. I highly recommend
                this platform to anyone looking for quality education!&quot;
              </p>
            </div>

            {/* Side Testimonials */}
            <div className="absolute left-4 sm:left-8 lg:left-16 top-1/2 -translate-y-1/2 hidden md:block animate-slide-in-left">
              <Image
                src="/images/health.png"
                alt="Student taking notes during online class"
                width={100}
                height={100}
                className="rounded-full object-cover w-full h-full"
              />
            </div>
            <div className="absolute right-4 sm:right-8 lg:right-16 top-1/2 -translate-y-1/2 hidden md:block animate-slide-in-right">
              <Image
                src="/images/health.png"
                alt="Student taking notes during online class"
                width={100}
                height={100}
                className="rounded-full object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Personalized Tutor Section */}
      <section className="bg-gradient-to-br from-gray-50 via-blue-50 to-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left animate-slide-in-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              <span className="bg-gradient-to-r from-[#1b2c4c] to-[#ff7b47] bg-clip-text text-transparent">
                Personalized Professional
              </span>
              <br />
              <span className="text-[#ff7b47]">Online Tutor</span>
              <br />
              <span className="text-gray-700 text-2xl sm:text-3xl md:text-4xl">
                on Your Schedule
              </span>
            </h1>
            <p className="mt-6 text-gray-700 text-base sm:text-lg leading-relaxed">
              Experience the future of learning with our AI-powered matching
              system that connects you with the perfect tutor based on your
              learning style, schedule, and academic goals. Start your
              personalized learning journey today!
            </p>
            <button className="mt-8 group bg-gradient-to-r from-[#ff7b47] to-[#e66c3c] text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <span className="group-hover:translate-x-2 transition-transform duration-300">
                Get Started Today →
              </span>
            </button>
          </div>

          {/* Image and Interactive Elements */}
          <div className="relative lg:w-1/2 flex justify-center mt-8 lg:mt-0 animate-slide-in-right">
            <div className="relative z-10 w-full max-w-lg">
              <Image
                src="/images/health.png"
                alt="Student taking notes during online class"
                width={500}
                height={400}
                className=" object-cover "
              />

              {/* Floating Circle with Content */}
              <div className="absolute top-1/2 -left-8 sm:-left-12 -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-gradient-to-r from-[#ff7b47] to-[#e66c3c] rounded-full z-20 flex items-center justify-center p-4 shadow-2xl ">
                <div className="text-center text-white">
                  <div className="text-2xl sm:text-3xl font-bold">
                    Contact US
                  </div>
                </div>{" "}
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 space-x-2">
                {[...Array(3)].map((_, i) => (
                  <span
                    key={i}
                    className="inline-block text-[#ff7b47] animate-bounce"
                    style={{ animationDelay: `${i * 200}ms` }}
                  >
                    <FaRegLightbulb size={20 + i * 4} />
                  </span>
                ))}
              </div>

              {/* Additional Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute top-8 -left-4 w-8 h-8 bg-green-400 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 1s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 1s ease-out forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
