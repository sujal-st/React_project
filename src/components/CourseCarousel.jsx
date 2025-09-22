import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Example card data
const courses = [
  { id: 1, title: "Course 1", instructor: "John Doe", price: "$49.99", img: "/assets/hero-icon.jpg" },
  { id: 2, title: "Course 2", instructor: "Jane Smith", price: "$59.99", img: "/assets/hero-icon.jpg" },
  { id: 3, title: "Course 3", instructor: "Alice", price: "$34.99", img: "/assets/hero-icon.jpg" },
  { id: 4, title: "Course 4", instructor: "Bob", price: "$19.99", img: "/assets/hero-icon.jpg" },
  { id: 5, title: "Course 5", instructor: "Charlie", price: "$44.99", img: "/assets/hero-icon.jpg" },
  { id: 6, title: "Course 6", instructor: "Daisy", price: "$29.99", img: "/assets/hero-icon.jpg" },
  { id: 7, title: "Course 7", instructor: "Eve", price: "$39.99", img: "/assets/hero-icon.jpg" },
  { id: 8, title: "Course 8", instructor: "Frank", price: "$24.99", img: "/assets/hero-icon.jpg" },
];

export default function CourseCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const itemsPerPage = 4;

  const nextSlide = () => {
    if (currentIndex + itemsPerPage < courses.length) {
      setDirection(1);
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const prevSlide = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setDirection(-1);
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  return (
    <section className="relative max-w-6xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Popular Courses</h2>
        <button className="btn-secondary">View More</button>
      </div>

      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 absolute w-full"
            custom={direction}
            initial={{ x: direction > 0 ? "100%" : "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? "-100%" : "100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {courses.slice(currentIndex, currentIndex + itemsPerPage).map((course) => (
              <div key={course.id} className="rounded-lg shadow-lg bg-white overflow-hidden">
                <img src={course.img} alt={course.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold line-clamp-2">{course.title}</h3>
                  <p className="text-sm text-gray-600">{course.instructor}</p>
                  <p className="text-blue-600 font-bold mt-2">{course.price}</p>
                  <button className="btn-primary mt-3 w-full">Enroll Now</button>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        {currentIndex > 0 && (
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-gray-100"
          >
            <FaChevronLeft size={20} />
          </button>
        )}
        {currentIndex + itemsPerPage < courses.length && (
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-gray-100"
          >
            <FaChevronRight size={20} />
          </button>
        )}
      </div>
    </section>
  );
}
