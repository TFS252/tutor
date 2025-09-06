import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1b2c4c] text-white border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand and Social */}
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-4">
            <Image
              src="/logo-white.png"
              alt="TutorSite Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <h3 className="text-2xl font-bold">TutorSite</h3>
          </div>
          <p className="text-sm text-gray-400 mb-6">
            Connecting students with expert tutors to unlock their full
            potential.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="p-3 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="p-3 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="p-3 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Company Information */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-amber-500">
            About Us
          </h3>
          <ul className="space-y-3 text-sm text-gray-300">
            {[
              "Careers",
              "Blog",
              "Subject answers",
              "Become a tutor",
              "Schools",
              "Safeguarding policy",
              "FAQs",
              "Testimonials & press",
              "Sitemap",
              "Terms & Conditions",
              "Privacy Policy",
            ].map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="hover:underline hover:text-amber-300 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Popular Requests */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-amber-500">
            Popular Tutors
          </h3>
          <ul className="space-y-3 text-sm text-gray-300">
            {[
              "Maths tutor",
              "Chemistry tutor",
              "Physics tutor",
              "Biology tutor",
              "English tutor",
              "GCSE tutors",
              "A level tutors",
              "IB tutors",
              "Physics & Maths tutors",
              "Chemistry & Maths tutors",
              "GCSE Maths tutors",
            ].map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="hover:underline hover:text-amber-300 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact and Help */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-amber-500">
            Need Help?
          </h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-amber-300 transition-colors"
              >
                <span className="text-xl">📧</span> Contact us
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-xl">📞</span> +91 203 773 6020
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Certifications & Copyright */}
      <div className="border-t border-gray-700 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p className="order-2 md:order-1 mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} TutorSite. All Rights Reserved.
          </p>
          <div className="order-1 md:order-2 flex flex-wrap justify-center gap-6 font-bold cursor-pointer">
            <span className="hover:text-amber-300 transition-colors">
              CEOP Internet Safety
            </span>
            <span className="hover:text-amber-300 transition-colors">
              SagePay Payment Security
            </span>
            <span className="hover:text-amber-300 transition-colors">
              Cyber Essentials
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
