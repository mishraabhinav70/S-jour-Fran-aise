import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Header */}
        <div data-aos="fade-up" className="text-center">
          <h1 className="text-4xl font-extrabold text-blue-600">About <span className='text-red-500'>Séjour Française</span></h1>
          <p className="mt-3 text-lg text-black italic ">...Your Path to Mastering French 🇫🇷</p>
        </div>

        {/* Mission */}
        <div data-aos="fade-up" className="bg-blue-50 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">🎯 Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our goal is simple: to make <strong>learning French accessible, engaging, and effective</strong> for everyone. Whether you’re a beginner or an advanced learner, we support your progress with structured, dynamic lessons focused on your individual goals.          </p>
        </div>

        {/* Who We Are */}
        <div data-aos="fade-up" className="bg-blue-50 p-6 rounded-2xl shadow-md border-l-8 border-red-500">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">👩‍🏫 Who We Are</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            We’re a team of <strong>certified, passionate French teachers</strong> with years of experience in online education. We’ve created a user-friendly platform where every learner can find <strong>motivation, support, and results.</strong></p>
        </div>

        {/* Why Choose Us */}
        <div data-aos="fade-up" className="bg-blue-300 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">💡 Why Choose Us?</h2>
          <ul className="list-disc font-bold list-inside text-black-700 text-lg space-y-2">
            <li>💻 100% online lessons – total flexibility</li>
            <li>👥 Small group or one-on-one classes</li>
            <li>🎓 Curriculum aligned with the CEFR (A1 to C1)</li>
            <li>🗣️ Regular speaking and writing practice</li>
            <li>📊 Personalized feedback and progress tracking</li>
            {/* 🌐  */}
            <li>Access to a learning community to practice French daily</li>
            <li>🤖 Provision of unique AI assistance tools along with Teacher’s guidance for progressive and independent learning</li>
          </ul>
        </div>

        {/* Results */}
        <div data-aos="fade-up" className="bg-blue-50 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">🏆 Our Results</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Hundreds of learners around the world have <strong>achieved their language goals</strong>, passed official exams (DELF/DALF/TEF/TCF), or unlocked new academic and career opportunities thanks to their improved French skills.          </p>
        </div>

        {/* Join Us CTA */}
        <div data-aos="fade-up" className="text-center bg-blue-50 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">📚 Join Us</h2>
          <p className="text-black text-lg leading-relaxed mb-6">
            Whether you're learning French as <strong>school subject, travel, study, work, or simply for the love of the language</strong>, we’re here to help you reach your goals — with confidence and joy.          </p>
          <Link to="/courses">
            <button className="bg-red-500 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-red-600 transition">
              Explore Courses
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
