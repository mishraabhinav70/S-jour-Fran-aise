import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Mobilecover from '/src/assets/mobilegif5.gif';
import AOS from 'aos';
import 'aos/dist/aos.css';
import cover from '/src/assets/animatedcover.gif';

function FocusFrenchCourses() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <div className="bg-gray-50">
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
              Focus French Courses (Beginners / Non-Beginners)
            </h1>
            <h2 data-aos="fade-up" className="text-2xl font-semibold text-black mb-4">
              Course Overview
            </h2>
            <p data-aos="fade-up" data-aos-delay="100" className="text-lg sm:text-xl text-black bg-gray-100/70 rounded-lg p-4">
              In addition to general classes, Séjour Française offers you a wide range of Focus French Courses adapted to your learning needs. Improve specific language skills such as pronunciation or grammar, get ready for your exams. Complete your learning journey with us by signing up to our Focus French classes and immerse more into French language and culture!
            </p>
          </div>
        </section>


        {/* Focused Courses */}
        <div data-aos="fade-up" className=" py-12 rounded-lg">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 mt-10">
            <div className="text-center p-6 bg-blue-950 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-white">Specialized Courses</h3>
              <p className="text-white">Weekends/Weekdays Classes</p>
              <p className="text-white text-lg mt-4">
                Focused on the dynamics of everyday conversations, join a class where you can greatly improve your conversational skills based upon different themes, spontaneity, and fluidity while perfecting your grammar.
              </p>
              <p className="text-gray-50 mt-4"><strong>Duration: 3 Months (Basic Level)</strong></p>
            </div>

            <div className="text-center p-6 bg-blue-950 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-white">DELF / DALF Preparation Course</h3>
              <p className="text-white">Weekends/Weekdays Classes</p>
              <p className="text-white text-lg mt-4">
                Join Exam preparation DELF/DALF classes for complete preparation of your exam. Course includes exam overview, practice over sample exercises, written and oral simulation. All four parts of the exam are covered.
              </p>
            </div>
          </div>
        </div>

        {/* Registration Information */}
        <div className="flex justify-center px-4">
          <div data-aos="fade-up" className="bg-white rounded-3xl p-5 mt-10 shadow-md max-w-xl w-full">
            <h4 className="text-red-500 font-bold text-2xl text-center">DELF DALF Class Registration</h4>
            <ul className="text-gray-700 list-inside list-disc mt-4">
              <li>The batch size would be maximum 6-8 per batch.</li>
              <li>All 4 competencies would be covered simultaneously.</li>
              <li>Admissions are strictly on a First-Come-First-Serve basis.</li>
              <li>New student admission fee will include Rs 500/- registration charges.</li>
            </ul>
          </div>
        </div>


        {/* Crash Course */}
        <div data-aos="fade-up" className="bg-blue-950 py-10 mt-10 lg:mx-50 max-sm:mx-5 md:mx-20 sm:mx-5  shadow-md rounded-lg">
          <div className="max-w-screen-xl mx-auto px-4">
            <h3 className="text-2xl font-semibold text-white text-center mb-6">Crash Course</h3>
            <p className="text-lg text-white max-w-3xl mx-auto mb-8 text-center">
              Séjour Française Crash Course is an intensive and accelerated program designed to provide rapid language acquisition for those with limited time constraints. Ideal for busy professionals, travelers, or anyone seeking to quickly grasp essential French language skills, this course condenses key grammar concepts, vocabulary, and conversational phrases into a concentrated curriculum.            </p>
            <p className="text-lg text-white max-w-3xl mx-auto mb-12 text-center">
              Through focused instruction and immersive exercises, students develop practical communication abilities within a short timeframe. Taught by experienced instructors, the Crash Course offers a dynamic learning experience that maximizes progress and fluency, enabling participants to navigate real-life situations confidently in French-speaking environments. Whether preparing for a trip abroad or aiming to jumpstart your language learning journey, this course offers a fast-paced and effective approach to mastering French language basics.            </p>
          </div>
        </div>

        {/* What Makes Us Unique */}
        <div data-aos="fade-up" className=" py-16 px-6 text-center mt-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">What Makes Us Unique?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">AI Assistance</h3>
              <p className="text-gray-600">
                Our AI-powered tools provide personalized help and self-assessment opportunities. Students can access extra practice material, interactive exercises, and real-time feedback, ensuring independent learning alongside teacher guidance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Real Results</h3>
              <p className="text-gray-600">
                We guarantee progress and real results based on proven methods and expert teaching, with no empty promises.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Expert Instructors</h3>
              <p className="text-gray-600">
                Our instructors are highly qualified French language experts, dedicated to helping each student succeed, whether in class or through one-on-one guidance.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center py-16 px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Start Your French Journey?</h2>
          <Link to="/courses">
            <button className="bg-red-500 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-red-600 transition">
              Register now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default FocusFrenchCourses;
