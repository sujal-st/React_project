import { useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import Card from '../Card.jsx'





let courses = [
    {
        id: 1,
        title: "Full-Stack Web Development with React & Node.js",
        instructor: "Anjali Shrestha",
        review: "4.8 (1,245 reviews)",
        category: "Web Development",
        price: "$59.99",
        img: "assets/course-fullstack.png"
    },
    {
        id: 2,
        title: "Python for Data Science & Machine Learning",
        instructor: "Ravi Singh",
        review: "4.7 (980 reviews)",
        category: "Data Science",
        price: "$49.99",
        img: "assets/course-python-ml.png"
    },
    {
        id: 3,
        title: "Cybersecurity Essentials: Protecting Networks",
        instructor: "Maya Gurung",
        review: "4.6 (680 reviews)",
        category: "Cybersecurity",
        price: "$39.99",
        img: "assets/course-cybersecurity.png"
    },
    {
        id: 4,
        title: "Introduction to Cloud Computing (AWS & Azure)",
        instructor: "Suresh Thapa",
        review: "4.5 (530 reviews)",
        category: "Cloud Computing",
        price: "$45.99",
        img: "assets/course-cloud.png"
    },
    {
        id: 5,
        title: "App Development with Flutter & Dart",
        instructor: "Priya Khadka",
        review: "4.8 (750 reviews)",
        category: "Mobile Development",
        price: "$54.99",
        img: "assets/course-flutter.png"
    },
    {
        id: 6,
        title: "UI/UX Design Fundamentals for Beginners",
        instructor: "Binod Koirala",
        review: "4.7 (600 reviews)",
        category: "Design",
        price: "$29.99",
        img: "assets/course-uiux.png"
    },
    {
        id: 7,
        title: "DevOps & CI/CD Pipeline Automation",
        instructor: "Neha Pandey",
        review: "4.5 (410 reviews)",
        category: "DevOps",
        price: "$49.99",
        img: "assets/course-devops.png"
    },
    {
        id: 8,
        title: "Introduction to Blockchain & Smart Contracts",
        instructor: "Krishna Lama",
        review: "4.6 (520 reviews)",
        category: "Blockchain",
        price: "$59.99",
        img: "assets/course-blockchain.png"
    }
];


function CourseCarousel() {
    const [currentslide, setCurrentSlide] = useState(0);
    const [isFading, setFade] = useState(false);
    const itemsperPage = 4;
    console.log(currentslide)

    const nextSlide = () => {
        setFade(true)
        setTimeout(() => {
            if (currentslide + itemsperPage < courses.length) {
                let newSlide = currentslide + itemsperPage;
                if (newSlide > courses.length - itemsperPage) {
                    newSlide = courses.length - itemsperPage; // clamp to max
                }
                setCurrentSlide(newSlide);
                console.log(currentslide)
                setFade(false)

            }
        }, 500);

    }

    const prevSlide = () => {
        setFade(true)
        setTimeout(() => {
            let newslide = currentslide - itemsperPage;
            if (currentslide + itemsperPage > 0) {
                if (newslide < 0)
                    newslide = 0;
                setCurrentSlide(newslide)
            }
            setFade(false)
        }, 500);
    }

    return (
        <>
            <section className="card-section">
                {/* header */}
                <div className="flex flex-row justify-between">
                    <h2 className="section-title">Popular Courses</h2>
                    <button className="btn-secondary">View More</button>
                </div>

                {/* carousel container */}
                <div className="flex items-center justify-around ">
                    {currentslide > 0 &&
                        <HiChevronLeft className="text-xl font-bold" onClick={prevSlide} />
                    }
                    <div
                        className={`flex flex-row items-center justify-center card-frame ${isFading ? 'opacity-0' : 'opacity-100'}`}
                        style={{ transition: "opacity 0.5s ease-in-out" }}
                    >
                        {courses.slice(currentslide, currentslide + itemsperPage).map((e, key) => (
                            <Card key={key} {...e} />
                        ))}
                    </div>

                    {currentslide < courses.length - itemsperPage &&
                        <HiChevronRight className="text-xl font-bold" onClick={nextSlide} />
                    }
                </div>


            </section>
        </>
    );
}
export default CourseCarousel;