"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function HowItWorksPage() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-up");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="bg-[#fdf8f5] pt-15 text-gray-900 font-sans">
      {/* Hero Section */}
      <section ref={addToRefs} className="py-16 px-6 fade-on-scroll-target">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 text-center md:text-left animate-fade-in-right">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
              One-to-one online tuition that raises grades
            </h1>
            <p className="text-lg text-gray-700">
              Lessons to fit your schedule, from the comfort of home.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center animate-fade-in-left">
            <Image
              src="/images/review1.png"
              width={600}
              height={400}
              alt="Online tuition"
              className="rounded-xl shadow-2xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Section 1: Stats */}
      <section
        ref={addToRefs}
        className="py-16 px-6 text-center fade-on-scroll-target"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Every lesson brings you closer to your goals.
          </h2>
          <p className="text-gray-600 mb-10 max-w-3xl mx-auto">
            Our 2025 study shows that after taking English lessons with a tutor,
            learners feel more confident, capable, and connected to their goals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 border-2 border-amber-500 hover:border-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-5xl font-extrabold text-amber-500 mb-2">
                100%
              </h3>
              <p className="text-gray-700">
                believe English helps them progress at work.
              </p>
            </div>
            <div className="p-8 border-2 border-amber-500 hover:border-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-5xl font-extrabold text-amber-500 mb-2">
                94%
              </h3>
              <p className="text-gray-700">of learners improved fluency.</p>
            </div>
            <div className="p-8 border-2 border-amber-500 hover:border-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-5xl font-extrabold text-amber-500 mb-2">
                97%
              </h3>
              <p className="text-gray-700">
                of learners felt confident speaking English.
              </p>
            </div>
          </div>
          <button className="mt-12 px-8 py-4 bg-gray-900 text-white rounded-full shadow-lg transition-all duration-300 hover:bg-gray-700 hover:shadow-xl">
            Explore study insights
          </button>
        </div>
      </section>

      {/* Section 2: Benefits */}
      <section
        ref={addToRefs}
        className="py-16 px-6 bg-gray-50 text-center fade-on-scroll-target"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            5 proven benefits of learning with Preply
          </h2>
          <p className="text-gray-600 mb-10 max-w-3xl mx-auto">
            Our 12-week study revealed the key benefits of personalized 1-on-1
            lessons with an expert tutor.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="flex flex-col items-center p-4 transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/review1.png"
                width={80}
                height={80}
                alt="Program Flexibility"
                className="w-16 h-16 sm:w-20 sm:h-20"
              />
              <p className="mt-4 font-semibold text-gray-800">
                Program Flexibility
              </p>
            </div>
            <div className="flex flex-col items-center p-4 transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/review1.png"
                width={80}
                height={80}
                alt="Human interaction & support"
                className="w-16 h-16 sm:w-20 sm:h-20"
              />
              <p className="mt-4 font-semibold text-gray-800">
                Human interaction & support
              </p>
            </div>
            <div className="flex flex-col items-center p-4 transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/review1.png"
                width={80}
                height={80}
                alt="Real-time feedback"
                className="w-16 h-16 sm:w-20 sm:h-20"
              />
              <p className="mt-4 font-semibold text-gray-800">
                Real-time feedback
              </p>
            </div>
            <div className="flex flex-col items-center p-4 transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/review1.png"
                width={80}
                height={80}
                alt="Personalized learning"
                className="w-16 h-16 sm:w-20 sm:h-20"
              />
              <p className="mt-4 font-semibold text-gray-800">
                Personalized learning
              </p>
            </div>
            <div className="flex flex-col items-center p-4 transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/review1.png"
                width={80}
                height={80}
                alt="Connecting to people"
                className="w-16 h-16 sm:w-20 sm:h-20"
              />
              <p className="mt-4 font-semibold text-gray-800">
                Connecting to people & places
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Flexibility and Security */}
      <section
        ref={addToRefs}
        className="py-16 px-6 bg-white flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto fade-on-scroll-target"
      >
        <div className="md:w-1/2 md:pr-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            It’s flexible, and saves you time
          </h2>
          <p className="text-gray-600 mb-6">
            Lessons fit effortlessly into family life. Book sessions with a
            tutor for as often as you like and only pay as you go. Tuition
            online also means you cut out travel costs, and you can always have
            the same tutor every time.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            <div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">
                Top tutors
              </h3>
              <p className="text-gray-600">
                We personally interview every tutor and only accept 1 in 8.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">
                Private & secure
              </h3>
              <p className="text-gray-600">
                All communication is through our site. Contact details are never
                shared.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">
                Free study notes
              </h3>
              <p className="text-gray-600">
                Over 1m pupils use our free resources to help with homework each
                month.
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/images/review1.png"
            width={500}
            height={400}
            alt="Flexible learning"
            className="rounded-xl shadow-2xl"
          />
        </div>
      </section>

      {/* Section 4: How it works steps */}
      <section
        ref={addToRefs}
        className="py-16 px-6 bg-gray-50 fade-on-scroll-target"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
          <div className="p-8">
            <div className="text-5xl font-extrabold text-amber-500 mb-4">1</div>
            <h3 className="font-bold text-lg mb-2">Talk face-to-face</h3>
            <p className="text-gray-600">
              Students and tutors see each other via live video – great for
              building rapport.
            </p>
          </div>
          <div className="p-8">
            <div className="text-5xl font-extrabold text-amber-500 mb-4">2</div>
            <h3 className="font-bold text-lg mb-2">Share and collaborate</h3>
            <p className="text-gray-600">
              Upload essays or past papers, and work through examples on the
              whiteboard.
            </p>
          </div>
          <div className="p-8">
            <div className="text-5xl font-extrabold text-amber-500 mb-4">3</div>
            <h3 className="font-bold text-lg mb-2">Rewatch lessons</h3>
            <p className="text-gray-600">
              Lessons are recorded, so students can watch later for revision.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
