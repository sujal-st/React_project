

import { FaPlus, FaMinus } from 'react-icons/fa'
import React, { useState } from 'react'


function Faq() {
    // const [ishidden, setHidden] = useState(true)
    const [hiddenStatus, setHiddenStatus] = useState([true, true, true, true, true])

    const questions = [
        { id: 1, title: "Do I get a certificate after completing a course?", answer: "Yes! Every learner receives a digital certificate of completion at the end of each course. You can download and share it on LinkedIn, include it on your resume, or present it to employers as proof of your new skills.", status: hiddenStatus },
        { id: 2, title: "How long do I have access to the courses?", answer: "Once you enroll, you’ll get lifetime access to the course materials — including all future updates. This means you can learn at your own pace and revisit the content anytime.", status: hiddenStatus },
        { id: 3, title: "Are the courses suitable for beginners?", answer: "Absolutely. Most of our courses start with the basics before moving into advanced topics. Even if you’re a complete beginner, you’ll be guided step by step with clear explanations and hands-on projects.", status: hiddenStatus },
        { id: 4, title: "Are there practical projects or just theory lessons?", answer: "Our teaching style is project-based. You won’t just watch videos — you’ll build real-world projects, complete exercises, and take quizzes that reinforce what you’ve learned. By the end, you’ll have portfolio-ready work.", status: hiddenStatus },
        { id: 5, title: "What if I’m not satisfied with a course?", answer: "No worries. We offer a 7-day money-back guarantee. If you feel the course doesn’t meet your expectations, you can request a full refund — no questions asked.", status: hiddenStatus }
    ]



    const toggle = (i) => {
        const newstate = [...hiddenStatus]
        newstate[i] = !newstate[i]
        setHiddenStatus(newstate)
    }
    return (
        <div className='faq-section my-[80px] flex flex-col gap-[20px] justify-center'>

            <h2 className='section-title text-2xl md:text-3xl text-center font-bold'>Frequently Asked Questions</h2>
            <div className="description-faq text-center w-1/2 mx-auto">Have questions before you start learning? Here are the answers to the most common things learners ask us. If you don’t find what you’re looking for, feel free to reach out to our support team.</div>

            <div className='flex flex-row items-center justify-center gap-[10px] m-x-auto  faq-main-frame'>
                <img className='faq-icon' src="assets/faq.png" alt="" />

                <div className="Faq-frame flex flex-col justify-center items-stretch gap-5">
                    {questions.map((q, key = e.id) => {
                        return (

                            <div className='qa-container flex flex-col justify-center gap-[4px]' key={key}>
                                {hiddenStatus[key] ?
                                    <div className='title-faq my-[0.5rem] mx-[1rem] flex items-center justify-between gap-[12px] px-[4px]'>
                                        <div>
                                            {q.title}
                                        </div>
                                        <FaPlus className='cursor-pointer' onClick={() => { toggle(key) }} />
                                    </div>
                                    :
                                    <div className='title-faq my-[0.5rem] mx-[1rem] flex items-center justify-between gap-[12px] px-[4px]'>
                                        <div>
                                            {q.title}
                                        </div>
                                        <FaMinus className='cursor-pointer' onClick={() => { toggle(key) }} />
                                    </div>
                                }

                                <div className={`ans-faq overflow-hidden transition-all duration-500 ease-in-out ${hiddenStatus[key] ? 'max-h-0 opacity-0' : 'max-h-[1000px] opacity-100'}`}>{q.answer}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Faq
