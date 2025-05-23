import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import cover from '/src/assets/animatedcover.gif';
import Mobilecover from '/src/assets/mobilegif5.gif';
import quote from '/src/assets/quotes.gif';
import Marquee from "react-fast-marquee";
import AOS from 'aos';
import 'aos/dist/aos.css';
import pic1 from '/src/assets/pic1.jpg';
import pic2 from '/src/assets/pic2.jpg';
import pic3 from '/src/assets/pic3.jpg';
import pic4 from '/src/assets/pic4.jpg';
import pic5 from '/src/assets/pic5.jpg';
import { FaQuoteLeft } from "react-icons/fa";
import { FaUserPlus, FaUserGraduate, FaUserTie } from 'react-icons/fa';
import { motion } from "framer-motion";


const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const courses = [
    {
      title: "Kids & Teens French Classes",
      desc: "Customized French lessons for students aged 9–16 years, available for all major boards like CBSE, ICSE, IGCSE, IB.",
      link: "/courses/kids",
    },
    {
      title: "Focus French Courses",
      desc: "Improve your grammar, pronunciation, and conversation skills with specialized classes for all levels.",
      link: "/courses/focus-french",
    },
    {
      title: "Exam Preparation",
      desc: "Prepare for your Exam exams with expert-led sessions covering all 4 competencies and mock simulations.",
      link: "/tcftef",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Riya Sharma, Delhi, India 🇮🇳",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      review: "I started as a complete beginner, and in just a few months, I was confidently speaking in French! The classes are interactive, and the AI tools really helped me practice outside class hours.",
      backgroundColor: "bg-white",
    },
    {
      id: 2,
      name: "Meenakshi R., Parent, Bangalore, India 🇮🇳",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      review: "My kids (ages 10 and 14) love the weekend French classes. The teachers are patient and experienced, and the progress reports help us track their development closely.",
      backgroundColor: "bg-white",
    },
    {
      id: 3,
      name: "Élise Martin, Singapore 🇸🇬",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      review: "Basically need to add regular online classes and AI assistance after classes helped me prepare for TEF Séjour Française has a perfect balance of tech and teaching. The AI exercises helped me prepare for the TEF exam with confidence. Highly recommended for Canada immigration applicants.",
      backgroundColor: "bg-white",
    },
  ];

  const quotes = [
    "Apprendre une langue, c’est avoir une fenêtre de plus par laquelle regarder le monde.",
    "Le français est la langue de l’amour, de la diplomatie et de la pensée claire.",
    "Avoir une autre langue, c’est posséder une deuxième âme."
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % quotes.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [quotes.length]);


  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 12 }
    }
  };


  return (
    <section className="bg-white">
      {/* Hero Section */}
      <div className="relative min-h-[10vh]">
        <section className="relative h-[500px] bg-gradient-to-br from-blue-700 via-blue-500 to-blue-400 text-white flex items-center justify-center">

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
            className="block lg:hidden absolute inset-0 w-full h-full object-cover opacity-100 z-0"
          />

          <div data-aos="fade-up" className="relative z-10 text-center px-4 sm:px-6 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3">
              Welcome to <span className="text-rose-600">Séjour Française</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-900 italic mb-4">
              ...Your Path to Mastering French <br /> <br />
              Learn anywhere, anytime with expert teachers and smart AI tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/courses">
                <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full text-base sm:text-lg transition">
                  Explore Courses
                </button>
              </Link>
              <Link to="/contact">
                <button className="border bg-white/75 border-red-500 text-red-700 hover:bg-red-500 hover:text-white font-semibold py-3 px-6 rounded-full text-base sm:text-lg transition">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <div data-aos="fade-up" className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10 mb-8 px-4">
      {/* Registration Portal */}
      <motion.div
        variants={containerVariants}
        animate="visible"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6 w-full sm:w-72 text-center border border-red-100"
      >
        <FaUserPlus className="mx-auto text-red-600 text-4xl mb-4" />
        <h3 className="text-xl font-semibold mb-2">Registration Portal</h3>
        <p className="text-gray-600 mb-4">For new & unregistered users</p>
        <Link to="/courses">
          <button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-full transition">
            Register Now
          </button>
        </Link>
      </motion.div>

      {/* Student Portal */}
      <motion.div
        variants={containerVariants}
        animate="visible"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6 w-full sm:w-72 text-center border border-red-100"
      >
        <FaUserGraduate className="mx-auto text-red-600 text-4xl mb-4" />
        <h3 className="text-xl font-semibold mb-2">Student Portal</h3>
        <p className="text-gray-600 mb-4">For registered students only</p>
        <Link to="/courses">
          <button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-full transition">
            Enter Portal
          </button>
        </Link>
      </motion.div>

      {/* Staff Portal */}
      <motion.div
        variants={containerVariants}
        animate="visible"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6 w-full sm:w-72 text-center border border-red-100"
      >
        <FaUserTie className="mx-auto text-red-600 text-4xl mb-4" />
        <h3 className="text-xl font-semibold mb-2">Staff Portal</h3>
        <p className="text-gray-600 mb-4">For staff only</p>
        <Link to="/courses">
          <button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-full transition">
            Access Portal
          </button>
        </Link>
      </motion.div>
    </div>
      {/* Marquee Section */}
      <div data-aos="zoom-out">
        <Marquee speed={30} gradient={false} pauseOnHover={true} className='mb-5 mt-5'>
          <img src={pic1} alt="Photo 1" className="h-40 mx-8 rounded-xl shadow-2xl" />
          <img src={pic2} alt="Photo 2" className="h-40 mx-8 rounded-xl shadow-2xl" />
          <img src={pic3} alt="Photo 3" className="h-40 mx-8 rounded-xl shadow-2xl" />
          <img src={pic4} alt="Photo 4" className="h-40 mx-8 rounded-xl shadow-2xl" />
          <img src={pic5} alt="Photo 4" className="h-40 mx-8 rounded-xl shadow-2xl" />
          <img src={pic2} alt="Photo 2" className="h-40 mx-8 rounded-xl shadow-2xl" />
          <img src={pic3} alt="Photo 3" className="h-40 mx-8 rounded-xl shadow-2xl" />
          <img src={pic4} alt="Photo 4" className="h-40 mx-8 rounded-xl shadow-2xl" />
          <img src={pic5} alt="Photo 4" className="h-40 mx-8 rounded-xl shadow-2xl" />
        </Marquee>
      </div>

      {/* Our Mission */}
      <div data-aos="fade-up" className="bg-blue-50 p-6 m-5 rounded-2xl shadow-md mt-12">
        <h2 className="text-2xl font-semibold text-red-600 mb-4">🎯 Our Mission</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Our goal is simple: to make <strong>learning French accessible, engaging, and effective</strong> for everyone. Whether you’re a beginner or an advanced learner, we support your progress with structured, dynamic lessons focused on your individual goals.          </p>
      </div>

      {/* Who We Are */}
      <div data-aos="fade-up" data-aos-delay="100" className="bg-blue-300 p-6 m-5 rounded-lg shadow-lg border-l-8 border-red-500 mb-12 mt-10">
        <h3 className="text-2xl font-semibold text-blue-900 mb-4">Who We Are</h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          We are a team of <strong>certified, passionate French teachers</strong> with years of experience in online education.
          We’ve created a platform designed to make your learning journey enjoyable and successful.
        </p>
      </div>

      {/* Courses Section */}
      <div data-aos="fade-up" className="text-center m-5 mt-10 mb-12 ">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Explore Our Courses</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
          {courses.map((course, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={100 * idx}
              className="bg-white border shadow-2xl rounded-lg p-6 hover:shadow-xl transition"
            >
              <h4 className="text-xl font-semibold text-red-600 mb-2">{course.title}</h4>
              <p className="text-gray-700 mb-4">{course.desc}</p>
              <Link to={course.link}>
                <button className="bg-red-600 hover:bg-red-700 font-bold text-white py-2 px-4 rounded transition">
                  Learn More
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div data-aos="fade-up" className="bg-blue-50 p-6 m-5 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">💡 Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
          <li>💻 100% online lessons – total flexibility</li>
          <li>👥 Small group or one-on-one classes</li>
          <li>🎓 Curriculum aligned with the CEFR (A1 to C1)</li>
          <li>🗣️ Regular speaking and writing practice</li>
          <li>📊 Personalized feedback and progress tracking</li>
          <li>Access to a learning community to practice French daily</li>
          <li>🤖 Provision of unique AI assistance tools along with Teacher’s
            guidance for progressive and independent learning</li>
        </ul>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-4">💬 What Our <span className='text-red-500'>Students</span> Say</h2>
        <p className="text-xl text-gray-600 text-center mb-12">          Our students love us! Here’s what they have to say about their experience with <span className='text-red-600 font-bold'>Séjour Française</span>.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`${testimonial.backgroundColor} p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-white`}
              aria-label={`Testimonial from ${testimonial.name}`}
              tabIndex="0"
            >
              <div className="flex items-start">
                {/* <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                /> */}
                <div>
                  <FaQuoteLeft className="text-gray-400 mb-2" />
                  <p className="text-gray-800 mb-4">{testimonial.review}</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animated Quote Section */}
      <div className="relative bg-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={quote}
            alt="Animated Background"
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div
            key={currentIndex}
            data-aos="fade-up"
            className="relative p-8 bg-gradient-to-r from-blue-100 via-white to-red-100 rounded-2xl shadow-lg border border-blue-100 transition duration-1000 ease-in-out"
          >
            <div className="absolute -top-5 left-5 bg-blue-500 text-white p-2 rounded-full shadow-md">
              <FaQuoteLeft className="text-lg" />
            </div>
            <p className="text-gray-700 text-lg sm:text-xl italic leading-relaxed">
              “{quotes[currentIndex]}”
            </p>
          </div>
        </div>

        {/* 🔵 Decorative blur circles */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse z-10"></div>
        <div className="absolute -bottom-10 -right-10 w-52 h-52 bg-red-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse delay-1000 z-10"></div>
      </div>

    </section>
  );
};

export default Home;
