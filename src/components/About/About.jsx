import React from 'react'
import StoryCard from './storyCard.jsx'
export default function About() {
    const cardfill = [
        { id: 1, year: "2015", icon: "", cl: "storyicon1", caption: "Founded with small group of educators" },
        { id: 2, year: "2020", icon: "", cl: "storyicon2", caption: "Reached 10,000 learners worldwide" },
        { id: 3, year: "2025", icon: "", cl: "storyicon3", caption: "Reached 200,000 learners worldwide" }
    ];
    return (
        // <div className="py-16">
        //     <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        //         <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        //             <div className="md:5/12 lg:w-5/12">
        //                 <img
        //                     src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
        //                     alt="image"
        //                 />
        //             </div>
        //             <div className="md:7/12 lg:w-6/12">
        //                 <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
        //                     React development is carried out by passionate developers
        //                 </h2>
        //                 <p className="mt-6 text-gray-600">
        //                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
        //                     accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
        //                     aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
        //                 </p>
        //                 <p className="mt-4 text-gray-600">
        //                     Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
        //                     Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
        //                 </p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <>
            <section className='mt-[80px] about-section flex flex-col gap-[1.25rem] items-center'>
                <div className='h-[20%]'>
                    <h1 className='text-[3.5rem] font-bold text-center'>About Skillify</h1>
                    <div className="abt-label text-center text-[1.2rem]">
                        We’re on a mission to make quality learning accessible, practical, and empowering for everyone.
                    </div>
                </div>
                <div className="gallery-frame grid w-full h-auto ">
                    <div className='grid-frm grid-icon-1'></div>
                    <div className='grid-frm grid-icon-4'></div>
                    <div className='grid-frm grid-icon-2'></div>
                    <div className='grid-frm grid-icon-3'></div>
                </div>
            </section>

            <section className='flex flex-row items-start second-section gap-[1.5rem]'>
                <div className="left-img">
                    <img src="assets/img5.png" className='rounded-[8px]' alt="" />
                </div>
                <div className="right-txt flex flex-col justify-center gap-[2rem]">
                    <div className="sub-section ">
                        <h2 className='text-[3rem] font-semibold'>Our Mission</h2>
                        <h2 className='text-[#AB2320] text-[3rem] font-semibold'>(Why We Exist)</h2>
                    </div>
                    <div className="sec-body text-[1.2rem]">
                        At Skillify, we believe education should break barriers, not create them. Our mission is simple: “equip learners with real-world skills that open doors to new opportunities”—whether it’s advancing in a career, exploring a new field, or building a passion project.
                    </div>
                </div>
            </section>

            <section className='story-section mt-[5rem]'>
                <div className="section-title text-center">
                    <h2 className='text-[3rem] font-semibold'>The</h2>
                    <h2 className='text-[3rem] font-semibold'>Skillify Journey</h2>
                </div>
                <div className="story-frame flex flex-row justify-center items-center">

                    {cardfill.map((e, key = e.id) => {
                        return (
                            <>
                                <StoryCard key={key} {...e} />
                                {key != cardfill.length - 1 && <div className='line'></div>}
                            </>
                        )
                    })}

                </div>
                <div className="subbody">
                    Since launching, <span className="highlight">Skillify</span> has grown to a community of
                    <span className="highlight"> 200,000+ learners</span> worldwide, supported by
                    <span className="highlight"> 500+ expert instructors</span>. With a
                    <span className="highlight"> 92% course completion rate</span> and over
                    <span className="highlight"> 50,000 five-star reviews</span>, we’re proud to help
                    students not just learn, but succeed.
                </div>

            </section>


            <section className='team-section'>
                <div className="section-title text-center">
                    <h2 className='text-[3rem] font-semibold'>Meet the Team/</h2>
                    <h2 className='text-[3rem] font-semibold'>Instructors</h2>
                    <div className='team-subtitle'>Behind LearnSphere is a team of passionate educators, technologists, and creators committed to making education better every day.</div>
                </div>
            </section>
        </>

    )
}

