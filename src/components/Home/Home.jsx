import { Link } from 'react-router-dom'
import Carousel from '../carousel.jsx'
import CourseCarousel from './CourseCarousel.jsx'
import FAQ from './Faq.jsx'
import Sample  from './sample.jsx'
import { FaUsers, FaCheckCircle, FaGraduationCap, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function Home() {
    let rating
    const stats = [
        { id: 1, icon: <FaUsers />, value: "200K+", label: "Happy Students" },
        { id: 2, icon: <FaCheckCircle />, value: "92%", label: "Course Completion Rate" },
        { id: 3, icon: <FaStar />, value: "50K+", label: "5-Star Reviews" },
        { id: 4, icon: <FaGraduationCap />, value: "500+", label: "Expert Instructors" },
    ];


    const stars = [];

    for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            stars.push(<FaStar key={i} className="review-star" />);
        } else if (rating >= i - 0.5) {
            stars.push(<FaStarHalfAlt key={i} className="review-star" />);
        } else {
            stars.push(<FaRegStar key={i} className="review-star" />);
        }
    }
    return (
        <>
            <section className='h-full'>
                <div className="hero flex flex-row w-full">
                    <div className="hero-left flex flex-col justify-center items-start gap-6">

                        <h1 className="style-h title font-bold">Unlock Your Potential</h1>

                        <div className="font-semibold subtitle">The intuitive platform where skill-building meets career advancement.</div>

                        <div className="flex flex-col gap-4">

                            <div>Interactive courses, transparent paths, and everything you need to achieve your goals-all in one place.</div>
                            <div className="flex flex-row justify-start gap-3">
                                <button className="btn-primary">Get Started</button>
                                <button className="btn-secondary">See Pricing</button>
                            </div>
                        </div>
                    </div>
                    <div className="hero-right flex flex-col items-center justify-center">
                        <div className="container-rt">
                            <Carousel />
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden bg-gray-50 py-4 logo-slider1">
                    <div className="flex w-max gap-16 logo-slider">
                        {/* Row 1 */}
                        <img src="/assets/React.png" className="h-16" />
                        <img src="/assets/Java.png" className="h-16" />
                        <img src="/assets/next-js.png" className="h-16" />
                        <img src="/assets/Python-Logo.png" className="h-16" />
                        <img src="/assets/tailwind-css-logo-vector.png" className="h-16" />
                        <img src="/assets/html.png" className="h-16" />
                        <img src="/assets/django.png" className="h-16" />
                        <img src="/assets/bootstrap.png" className="h-16" />

                        {/* Row 2 (duplicate for seamless loop) */}
                        <img src="/assets/React.png" className="h-16" />
                        <img src="/assets/Java.png" className="h-16" />
                        <img src="/assets/next-js.png" className="h-16" />
                        <img src="/assets/Python-Logo.png" className="h-16" />
                        <img src="/assets/tailwind-css-logo-vector.png" className="h-16" />
                        <img src="/assets/html.png" className="h-16" />
                        <img src="/assets/django.png" className="h-16" />
                        <img src="/assets/bootstrap.png" className="h-16" />
                    </div>
                </div>
            </section>

            
            <CourseCarousel/>

            <section className="py-16 text-center font-bold display">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12">
                    Trusted by Learners Worldwide
                </h2>

                <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto ">
                    {stats.map((stat) => (
                        <div
                            key={stat.id}
                            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center gap-3 transition hover:scale-105 hover:shadow-xl hover:transition-opacity"
                        style={{transition: "ease-in-out"}}>
                            <div className="text-4xl icon-color">{stat.icon}</div>
                            <h3 className="text-2xl font-extrabold stats-num">{stat.value}</h3>
                            <p className="text-gray-600 text-sm md:text-base">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="review-section">
                <h2 className='section-title text-2xl md:text-3xl text-center font-bold my-8'>User Testimonials</h2>

                <div class="review-frame font-bold">
                    <div className="grid-card flex flex-col justify-between grid-img1">
                        <div className='grid-title'>
                            From Barista to Data Analyst
                        </div>
                        <button className="btn-primary small-btn">Read More</button>
                    </div>
                    <div className="grid-card grid-title flex flex-row items-center text-center">Career Transformation</div>
                    <div className="grid-card-1 grid-wide flex flex-col">
                        <div className="star flex gap-1">{stars}</div>
                        <div className="review">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eum ea eius vero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam pariatur eaque repellat aliquam odio amet sed consectetur nulla alias non?
                        </div>
                        <div className="profile-section flex flex-row">
                            <div className="profile-circle"></div>
                            <div className="profile-name flex flex-col">
                                <div className='user-name font-bold'>Sarah K.</div>
                                <div className='user-company'>TechVision Inc.</div>
                            </div>
                        </div>
                    </div>


                    <div className="grid-card grid-title flex flex-row items-center text-center">Now I can Freelance with Confidence</div>
                    <div className="grid-card flex flex-col justify-between grid-img2">
                        <div className='grid-title'>
                            How I doubled My Salary in 6 months
                        </div>
                        <button className="btn-primary small-btn">Read More</button>
                    </div>
                    <div className="grid-card grid-title flex flex-row items-center text-center">From Zero to 10K Followers</div>
                    <div className="grid-card flex flex-col justify-between grid-img3">
                        <div className='grid-title'>
                            More Than Just Video Lectures
                        </div>
                        <button className="btn-primary small-btn">Read More</button>
                    </div>


                    {/* <div className="grid-card grid-wide-1"></div> */}
                    <div className="grid-card-1 grid-wide-1 flex flex-col">
                        <div className="star flex gap-1">{stars}</div>
                        <div className="review">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eum ea eius vero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam pariatur eaque repellat aliquam odio amet sed consectetur nulla alias non?
                        </div>
                        <div className="profile-section flex flex-row">
                            <div className="profile-circle"></div>
                            <div className="profile-name flex flex-col">
                                <div className='user-name font-bold'>Sarah K.</div>
                                <div className='user-company'>TechVision Inc.</div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-card flex flex-col justify-between grid-img4">
                        <div className='grid-title'>
                            Finally Platform That Actually Works
                        </div>
                        <button className="btn-primary small-btn">Read More</button>
                    </div>
                    <div className="grid-card grid-title flex flex-row items-center text-center">Skill Mastery & Confidence</div>
                </div>

            </section>

            <section className='CTA flex flex-col items-'>
                <h2 className="section-title text-2xl md:text-3xl text-center font-bold my-3">Ready to Start Your Journey?</h2>
                <div className="cta-description">Join thousands of students who are already building life-changing skills.</div>
                <div className="flex flex-row justify-start gap-3">
                    <button className="btn-primary">Get Started</button>
                    <button className="btn-secondary">Sign Up For Free</button>
                </div>
            </section>

            <FAQ/>

            {/* <Sample/> */}
        </>


    );
}
