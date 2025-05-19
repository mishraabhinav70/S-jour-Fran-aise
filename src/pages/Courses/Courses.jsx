import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Mobilecover from '/src/assets/mobilegif5.gif';
import cover from '/src/assets/animatedcover.gif';

const Courses = () => {
    const [openSection, setOpenSection] = useState(null);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const toggleSection = (index) => {
        setOpenSection(openSection === index ? null : index);
    };

    const sections = [
        {
            title: "Kids & Teens French Classes (Beginners/Non-beginners)",
            content: (
                <>
                    <p className="mb-2">
                        Customized French lessons for students aged 9–16 years, designed to build a solid language foundation.
                        Available for all major boards: CBSE, ICSE, IGCSE, O-Level, and IB.
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Kids: 9–12 years</li>
                        <li>Teens: 13–16 years</li>
                        <li>Group and Individual classes available</li>
                        <li>Weekend batches for flexibility</li>
                        <li>Recorded sessions for revisiting lessons</li>
                    </ul>
                </>
            ),
            link: "/courses/kids"
        },
        {
            title: "Focus French Courses (Beginners/Non-beginners)",
            content: (
                <>
                    <p className="mb-2">
                        Improve specific skills like pronunciation, grammar, and conversation. Focus courses help you refine your French communication dynamically.
                    </p>
                    <p>Duration: <strong>3 Months</strong> (Basic Level)</p>
                </>
            ),
            link: "/courses/focus-french"
        },
        {
            title: "TCF / TEF / DELF Exam Preparation",
            content: (
                <>
                    <p className="mb-2">
                        Improve specific skills like pronunciation, grammar, and conversation. Focus courses help you refine your French communication dynamically.
                    </p>
                    <p>Duration: <strong>1 year</strong> (Basic Level)</p>
                </>
            ),
            link: "/tcftef"
        },
        {
            title: "Orientation Test",
            content: (
                <>
                    <p className="mb-2">
                        Unsure about your level? Take our Orientation Test to assess your proficiency and join the right course level (A1 to C1)!
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Accurate placement for effective learning</li>
                        <li>Boost your confidence with the right start</li>
                        <li>Required for students with previous French knowledge</li>
                    </ul>
                </>
            ),
            link: "/orientationtest"
        },

    ];

    return (
        <section className="bg-white">
            {/* Hero Section */}
            <section className="relative h-[500px] text-white flex items-center justify-center">
                {/* Large screen image */}
                <img
                    src={cover}
                    alt="Orientation Test"
                    className="hidden lg:block absolute inset-0 w-full h-full object-cover opacity-100 z-0"
                />

                {/* Medium & small screen image */}
                <img
                    src={Mobilecover}
                    alt="Orientation Test Mobile"
                    className="block lg:hidden absolute inset-0 w-full h-full object-cover opacity-70 z-0"
                />
                <div className="relative z-10 text-center px-6 max-w-3xl">
                    <h1 data-aos="fade-up" className="text-4xl sm:text-5xl font-bold text-red-500 mb-6">
                        Explore Our French Courses                              </h1>

                    <p data-aos="fade-up" data-aos-delay="100" className="text-lg sm:text-xl text-black bg-gray-100/70 rounded-lg p-4">
                        Choose from a variety of specialized French classes designed to help you grow — whether you're a beginner or preparing for exams.
                    </p>
                </div>
            </section>
            {/* <div className="bg-blue-600 text-white py-20 px-4 text-center" data-aos="fade-down">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Our French Courses</h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto">
                    Choose from a variety of specialized French classes designed to help you grow — whether you're a beginner or preparing for exams.
                </p>
            </div> */}

            {/* Course Accordion */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-6">
                {sections.map((section, index) => (
                    <div
                        key={index}
                        className="border rounded-xl shadow-md"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                    >
                        <button
                            onClick={() => toggleSection(index)}
                            className="w-full flex justify-between items-center px-6 py-5 bg-blue-50 hover:bg-blue-100 transition"
                        >
                            <span className="text-lg md:text-xl font-semibold text-gray-800 text-left">
                                {section.title}
                            </span>
                            <span className="text-3xl text-blue-600">
                                {openSection === index ? '−' : '+'}
                            </span>
                        </button>
                        {openSection === index && (
                            <div className="px-6 py-5 bg-white text-gray-700 text-base leading-relaxed space-y-3">
                                {section.content}
                                <Link to={section.link}>
                                    <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition">
                                        Learn More
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};
export default Courses;
