import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BookOpenCheck, UserCheck, Globe2, CalendarDays, School, Languages } from 'lucide-react';
import cover from '/src/assets/cover.jpg';

function PrivateTuition() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const reasons = [
    {
      icon: <UserCheck size={28} className="text-blue-600" />,
      title: '1-on-1 Attention',
      desc: 'Receive full attention from our professional language trainers and enjoy their continuous feedback as you progress. .',
    },
    {
      icon: <BookOpenCheck size={28} className="text-green-600" />,
      title: 'Focused Test Prep',
      desc: 'Work at building strengths and tackling weaknesses when preparing for tests and exams.',
    },
    {
      icon: <Globe2 size={28} className="text-yellow-500" />,
      title: 'In-Depth Learning',
      desc: 'Go into more depth on general topics.',
    },
    {
      icon: <Languages size={28} className="text-purple-600" />,
      title: 'Custom Curriculum',
      desc: 'Personalize your programme according to your needs and / or preferences in learning French.',
    },
    {
      icon: <CalendarDays size={28} className="text-pink-500" />,
      title: 'Schedule Flexibility',
      desc: 'Choose your study schedule and learn French whenever you want',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-br from-blue-700 via-blue-500 to-blue-400 text-white flex items-center justify-center">
        <img src={cover} alt="Private Tuition" className="absolute inset-0 w-full h-full object-cover opacity-70 z-0 blur-lg" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 data-aos="fade-up" className="text-4xl sm:text-5xl font-extrabold mb-4">
          Learn French at your own pace with skilled French tutors Online!          </h1>
          <p data-aos="fade-up" data-aos-delay="100" className="text-lg sm:text-xl">
          Our private tuition are tailored-made to fit your language goals and schedules.
          They are an increasingly popular option among our students! Here are a few reasons why you should choose private French tuition with Séjour Française          </p>
        </div>
         <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-2xl"
                  style={{ backgroundImage: `url(${cover})` }}
                ></div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 data-aos="fade-up" className="text-3xl font-bold text-center mb-12 text-gray-800">
          Why Choose Our Private Tuition?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="p-6 bg-white shadow-xl rounded-2xl hover:shadow-2xl transition border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-4">
                {reason.icon}
                {/* <h3 className="text-lg font-semibold">{reason.title}</h3> */}
              </div>
              <p className="text-2lg text-gray-600">{reason.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Course Offerings */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 data-aos="fade-up" className="text-3xl font-bold text-center mb-12">
          Our Private Course Offerings
                    </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div data-aos="fade-up" className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">General French</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Beginner to Advanced Levels: </strong>Comprehensive courses covering all aspects of the French language.</li>
                <li><strong>Conversational French: </strong>Improve your speaking and listening skills for everyday communication.</li>
                <li><strong>Grammar and Writing: </strong>Strengthen your understanding of French grammar and enhance your writing abilities.</li>
              </ul>
            </div>
            <div data-aos="fade-up" data-aos-delay="100" className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Specialized French</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Business French: </strong>Tailored lessons for professional communication and business etiquette.</li>
                <li><strong>Travel French: </strong>Essential phrases and vocabulary for travellers.</li>
                <li><strong>Exam Preparation: </strong>Targeted preparation for DELF/DALF and other French language exams.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PrivateTuition;
