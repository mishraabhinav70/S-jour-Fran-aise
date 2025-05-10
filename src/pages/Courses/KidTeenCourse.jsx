import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import AOS from 'aos';
import 'aos/dist/aos.css';
import cover from '/src/assets/cover.jpg';

function KidTeenCourse() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <div className="bg-white">
      <section className=" bg-white">
        <section className="relative h-[500px] bg-gradient-to-br from-blue-700 via-blue-500 to-blue-400 text-white flex items-center justify-center">
          <img src={cover} alt="Orientation Test" className="absolute inset-0 w-full h-full object-cover opacity-70 z-0 blur-lg" />
          <div className="relative z-10 text-center pt-20 px-6 max-w-3xl">
            <h1 data-aos="fade-up" className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Kids & Teens French Classes
            </h1>

            <h2 data-aos="fade-up" className="text-2xl font-semibold text-white mb-4">
              Course Overview
            </h2>
            <p data-aos="fade-up" className="text-lg text-gray-100 max-w-3xl mx-auto mb-12">
              Our institute offers <strong>customized French lessons</strong> for students across all grades,
              designed to meet the specific needs of each learner. Whether you're starting with
              the basics or looking to improve your fluency, we have the right program for you!
            </p>
          </div>
           <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-2xl"
                    style={{ backgroundImage: `url(${cover})` }}
                  ></div>
        </section>
        <div className='text-center pt-10'>
          <h2 data-aos="fade-up" className="text-2xl font-semibold text-black mb-6">
            Program Highlights
          </h2>
          <p data-aos="fade-up" className="text-lg text-black max-w-3xl mx-auto mb-12">
            Enrolling kids and teens in French classes at Séjour Française provides them with a
            solid foundation in the language, enriching their educational experience and equipping
            them with valuable skills for the future.
          </p>

          <p data-aos="fade-up" className="text-lg text-black max-w-3xl mx-auto mb-12">
            Start with French Classes with a structured program, like that offered by Séjour Française
            ensures you build a strong foundation in the language, making the learning process enjoyable
            and effective.
          </p>
        </div>
       
        {/* Age Groups */}
        <div data-aos="fade-up" className=" py-5 mt-8  rounded-lg">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
            <div className="text-center p-8 bg-blue-500/20 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-blue-950">Kids</h3>
              <p className="text-gray-600">Ages 9–12 years</p>
            </div>
            <div className="text-center p-8 bg-blue-500/20 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-blue-950">Teens</h3>
              <p className="text-gray-600">Ages 13–16 years</p>
            </div>
          </div>
        </div>

        {/* Important Information Marquee */}
        <Marquee gradient={false} speed={50} className="bg-red-500 text-2xl font-bold p-7 text-white mb-12 mt-11 rounded-lg">
          Classes for 2025 (Date) published and registration to start from _____________. &nbsp;
        </Marquee>

        {/* Features */}
        <div className="py-16 px-4 max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div data-aos="fade-up" className="bg-blue-950 p-6 rounded-4xl shadow-lg">
            <h4 className="text-2xl font-semibold text-white text-center mb-4">Available for All Major Educational Boards</h4>
            <p className="text-white text-sm text-center">CBSE, IGCSE, ICSE, O-Level, and IB</p>
            <p className="text-white text-lg text-center mt-4">
              Our programs are customized to meet the requirements of students in these educational systems, ensuring that you are fully prepared for exams and fluently express yourself in French.
            </p>
          </div>

          <div data-aos="fade-up" className="bg-blue-950 p-6 rounded-4xl shadow-lg">
            <h4 className="text-2xl font-semibold text-white text-center mb-4">Tailored Lessons for Different Levels</h4>
            <p className="text-white text-lg text-center mt-4">
              Courses are designed to fit the learner's current level, whether beginner, intermediate, or advanced.
            </p>
          </div>

          <div data-aos="fade-up" className="bg-blue-950 p-6 rounded-4xl shadow-lg">
            <h4 className="text-2xl font-semibold text-white text-center mb-4">Flexible Learning Options</h4>
            <p className="text-white text-lg text-center mt-4">
              <span className="font-bold">Group Batches:</span> Interact with peers and learn collaboratively in group settings.<br />
              <span className="font-bold">Individual Classes:</span> Personalized one-on-one sessions to focus on your specific learning goals.
            </p>
          </div>

          <div data-aos="fade-up" className="bg-blue-950 p-6 rounded-4xl shadow-lg">
            <h4 className="text-2xl font-semibold text-white text-center mb-4">Weekend Batches Available</h4>
            <p className="text-white text-lg text-center mt-4">
              Perfect for students with busy weekday schedules. Learn on weekends with a flexible class structure.
            </p>
          </div>

          <div data-aos="fade-up" className="bg-blue-950 p-6 rounded-4xl shadow-lg">
            <h4 className="text-2xl font-semibold text-white text-center mb-4">Customizable Number of Classes</h4>
            <p className="text-white text-lg text-center mt-4">
              We understand that every student learns at their own pace. Choose the number of classes that best suits your schedule and learning speed.
            </p>
          </div>

          <div data-aos="fade-up" className="bg-blue-950 p-6 rounded-4xl shadow-lg">
            <h4 className="text-2xl font-semibold text-white text-center mb-4">Recorded Classes for Flexibility</h4>
            <p className="text-white text-lg text-center mt-4">
              All lessons are recorded and available for students to revisit whenever needed, providing extra flexibility in their learning journey.
            </p>
          </div>
        </div>

        {/* Additional Information */}
        <div className="my-12 px-4 max-w-screen-xl mx-auto text-center space-y-4">
          <p className="text-gray-800 text-xl">
            For complete beginners (Level A1.1+), there is no need for an Orientation Test to assess your level of the French language.
          </p>
          <p className="text-gray-800 text-xl font-bold">
            A minimum of 50% marks and 75% attendance are prerequisites for passing your class exam.
          </p>
          <p className="text-gray-800 text-xl">
            Classes will be conducted online via Zoom meeting, with individual attention on every learner to ensure their progress and growth.
          </p>
          <p className="text-gray-800 text-xl">
            There is an additional registration fee of ₹500 for new students.
          </p>
        </div>

        {/* What Makes Us Unique Section */}
        <div data-aos="fade-up" className="bg-blue-200 py-16 px-6 m-5 text-center rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">What Makes Us Unique?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-950 mb-2">AI Assistance</h3>
              <p className="text-gray-600">
                Our AI-powered tools provide personalized help and self-assessment opportunities. Students can access extra practice material, interactive exercises, and real-time feedback, ensuring independent learning alongside teacher guidance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-950 mb-2">Real Results</h3>
              <p className="text-gray-600">
                We guarantee progress and real results based on proven methods and expert teaching, with no empty promises.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-950 mb-2">Expert Instructors</h3>
              <p className="text-gray-600">
                Our instructors are highly qualified French language experts, dedicated to helping each student succeed, whether in class or through one-on-one guidance.
              </p>
            </div>
          </div>
        </div>

        <div className="relative max-w-screen-xl mx-auto text-center py-20 px-4">
          <div className="relative z-10">
            <h2 data-aos="fade-up" className="text-2xl font-semibold text-blue-950 mb-4">
              Kids & Teens French Classes (Beginners)            </h2>
            <p data-aos="fade-up" className="text-lg text-blue-950 max-w-3xl mx-auto mb-12">
              Enrolling kids and teens in French classes at Alliance Française provides them with
              a solid foundation in the language, enriching their educational experience and
              equipping them with valuable skills for the future.
            </p>

            <h2 data-aos="fade-up" className="text-2xl font-semibold text-blue-950 mb-6">
              Kids age limit – 9 to 12 years<br />
              Teens age limit – 13 to 16 years
            </h2>
            <p data-aos="fade-up" className="text-lg text-blue-950 max-w-3xl mx-auto mb-12">
              Summer 2025 Registration started from 22 March 2025. <Link to="/" className='text-blue-700'>Click here to download </Link>Summer 2025 Kids/Teens Beginner Schedule.
            </p>

            <p data-aos="fade-up" className="text-lg text-blue-950 max-w-3xl mx-auto mb-12">
              We offer three Trimester courses every year with three quarterly sessions in a
              year – Jan – Apr (Spring) ; May – Aug (Summer); Sept – Dec (Autumn).
            </p>

            <p data-aos="fade-up" className="text-lg text-blue-950 max-w-3xl mx-auto mb-12 font-bold">
              A minimum of 50% marks and 75% attendance are perquisites for passing your class exam.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default KidTeenCourse;
