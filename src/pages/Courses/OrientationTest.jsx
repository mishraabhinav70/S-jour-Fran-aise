import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import cover from '/src/assets/cover.jpg';

function OrientationTest() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="bg-gray-50">
      <section className="bg-white">
        {/* Hero Section */}
        <section className="relative h-[500px] bg-gradient-to-br from-blue-700 via-blue-500 to-blue-400 text-white flex items-center justify-center">
          <img src={cover} alt="Orientation Test" className="absolute inset-0 w-full h-full object-cover opacity-70 z-0 blur-lg" />
          <div className="relative z-10 text-center px-6 max-w-3xl">
            <h1 data-aos="fade-up" className="text-4xl sm:text-5xl font-extrabold mb-4">
              Orientation Test
            </h1>
            <p data-aos="fade-up" data-aos-delay="100" className="text-lg sm:text-xl">
              The orientation test helps assess your current French proficiency. It ensures you start learning at the right level and sets the foundation for a rewarding language learning experience with us!
            </p>
          </div>
           <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-2xl"
                    style={{ backgroundImage: `url(${cover})` }}
                  ></div>
        </section>
        
        {/* Section Intro */}
        <div className="max-w-screen-xl mx-auto px-4 py-10 text-lg text-gray-800">
          <h2 data-aos="fade-up" className="text-2xl font-semibold mb-4 text-center">
            Why should you take the Test?
          </h2>
          <p data-aos="fade-up" className="mb-6 text-center max-w-2xl mx-auto">
            Taking the SFD orientation test is important for several reasons:          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {[
              {
                title: "Accurate Skill Assessment",
                desc: "The test assesses your current level of proficiency in French. This ensures that you are placed in a class that matches your language skills, allowing you to learn at an appropriate pace.",
              },
              {
                title: "Classroom Compatibility",
                desc: "Being in a class with peers at the same proficiency level enhances the learning environment. It allows for more effective group activities, discussions, and collaborative learning, as everyone is at a similar stage in their language acquisition journey.",
              },
              {
                title: "Efficient Use of Time and Resources",
                desc: "Starting at the correct level prevents you from wasting time on material that is too easy or too difficult. This efficient use of time and resources helps you achieve your language learning goals more quickly.",
              },
              {
                title: "Confidence Building",
                desc: "Being placed in the right class can boost your confidence. If the level is too high, you might feel overwhelmed; if it’s too low, you might get bored. The right placement keeps you challenged and engaged.",
              },
              {
                title: "Certification and Progress Tracking",
                desc: "The SFD often provides certification for different levels of language proficiency. Taking the test helps in accurately documenting your starting point and tracking your progress through the different levels of certification.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{feature.title}</h3>
                <p className="text-gray-700 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default OrientationTest;
