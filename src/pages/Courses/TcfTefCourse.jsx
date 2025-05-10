import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Marquee from 'react-fast-marquee';
import cover from '/src/assets/cover.jpg';

function TcfTefCourse() {
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
              TCF / TEF Exam                  </h1>
            <p data-aos="fade-up" data-aos-delay="100" className="text-lg sm:text-xl">
              TCF/TEF Canada is a test of general French, recognized as an official proof of language proficiency by Immigration, Refugees and Citizenship Canada (IRCC)  for permanent residency applications. The objective of the TCF/TEF Canada is to evaluate your French skills on a scale of 6 levels. This scale corresponds to the Council of Europe’s Common European Framework of Reference for Languages (CEFR).
            </p>
          </div>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-2xl"
            style={{ backgroundImage: `url(${cover})` }}
          ></div>
        </section>
        {/* Marquee */}
        <Marquee gradient={false} speed={50} className="bg-red-500 text-2xl font-bold p-7 text-white mb-12 mt-11 rounded-lg">
          TCF / TEF 2025 registrations now open — Limited slots available! &nbsp;
        </Marquee>

        {/* Overview */}
        <div className="max-w-screen-xl mx-auto grid gap-8 px-4 text-lg text-gray-800">
          <div data-aos="fade-up" className="bg-blue-50 p-6 rounded-2xl shadow-md m-5 text-lg text-gray-800">
            <p><strong>🗓 Validity:</strong> 2 years</p>
            <p className="mt-4">
              The <strong>Test de Connaissance du Français (TCF)</strong> is a standardized test that assesses a non-native French speaker’s language skills. It is administered by France Education International (FEI) under the French Ministry of Education.
            </p>
            <p className="mt-4">
              The <strong>Test d’Évaluation de Français (TEF) Canada</strong> is an official French language proficiency exam recognized by <strong>Immigration, Refugees and Citizenship Canada (IRCC)</strong> and the <strong>Ministry of Immigration, Francisation and Integration (MIFI)</strong> of Quebec.
            </p>

            <div className="mt-6">
              <h2 className="text-xl font-bold text-blue-900 mb-3">📌 Requirement: To Emigrate to Canada</h2>
              <ol className="list-disc list-inside space-y-2">
                <li>Candidates must be at least 16 years of age.</li>
                <li>Retakes are allowed with a 30-day gap between two sessions.</li>
                <li>
                  The TCF/TEF Canada includes 4 core modules that test oral and written skills:
                  <ol className="list-decimal list-inside mt-2 ml-6 space-y-1">
                    <li>Listening comprehension</li>
                    <li>Reading comprehension</li>
                    <li>Written expression</li>
                    <li>Oral expression</li>
                  </ol>
                </li>
              </ol>
            </div>
          </div>

        </div>

        {/* Course Structure */}
        <div className="my-16">
          <h2 data-aos="fade-up" className="text-3xl font-bold text-center mb-8">Level: Beginner to C1 | TEF, TCF, DELF Preparation</h2>
          <p data-aos="fade-up" className='text-center mb-3 text-lg'><strong>Duration:</strong> 1 years</p>
          <div data-aos="fade-up" className="bg-blue-50 p-6 rounded-2xl shadow-md m-5">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">💡 Why Choose Us?</h2>
            <p className='font-bold'>Expert Teachers, Proven Methods:</p>
            <p>Learn from qualified and experienced French language instructors who specialize in preparing students for international exams like TEF, TCF, and DELF.</p>
          </div>
          <div className="mt-4">
            <h2 data-aos="fade-up" className="text-2xl font-semibold text-black mb-4 text-center">📚 Course Structure & Syllabus</h2>
          </div>
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
            {[
              {
                title: "Beginner (A1-A2)",
                points: [
                  "Fundamentals of French grammar and vocabulary",
                  "Pronunciation, greetings, and basic conversation",
                  "Everyday life language and practical communication",
                ],
              },
              {
                title: "Intermediate (B1-B2)",
                points: [
                  "Enhancing grammar and sentence structure",
                  "Conversational fluency in various contexts",
                  "Writing essays, formal and informal communications",
                ],
              },
              {
                title: "Advanced (C1)",
                points: [
                  "Mastery of complex grammar structures",
                  "Advanced conversational skills and fluency",
                  "Comprehensive understanding of French culture and language nuances",
                ],
              },
              {
                title: "TEF, TCF, DELF Preparation",
                points: [
                  "In-depth exam preparation to ensure high scores",
                  "Focus on reading, writing, listening, and speaking sections",
                  "Practice exams and mock tests",
                ],
              },
            ].map((level, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="bg-blue-950 text-white p-6 rounded-2xl shadow-2xl"
              >
                <h3 className="text-xl font-semibold mb-4 text-center">{level.title}</h3>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  {level.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Batch Options */}
        <div className="my-16 px-4 max-w-screen-xl mx-auto">
          <h2 data-aos="fade-up" className="text-3xl font-bold text-center mb-10">Flexible Batch Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Weekday Batches (5 Days a Week)",
                desc: "1.5 hours/day, Perfect for those looking to improve their French skills while balancing other commitments.",
              },
              {
                title: "Weekend Batches (Saturday & Sunday)",
                desc: "3.5 hours/day, Ideal for busy professionals and students who prefer weekend learning.",
              },
              {
                title: "Customized Batches",
                desc: "We understand every learner is unique! Get customized batches according to your specific needs.",
              },
            ].map((batch, i) => (
              <div
                key={i}
                data-aos="fade-up"
                className="bg-white shadow-2xl rounded-lg p-6 text-center"
              >
                <h4 className="text-xl font-bold text-blue-800 mb-3">{batch.title}</h4>
                <p className="text-gray-600">{batch.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="my-16">
          <h2 data-aos="fade-up" className="text-3xl font-bold text-center mb-8">Additional Features</h2>
          <div data-aos="fade-up" className="bg-blue-100 p-6 rounded-2xl shadow-2xl m-5">
            <p className='font-bold'>Recorded Classes</p>
            <p>
              All sessions are recorded, allowing you to revisit and learn at your own pace.
            </p>
            <p className='font-bold'>Progress Tracking</p>
            <p>
              Receive regular feedback and track your growth with our comprehensive progress reports.
            </p>
            <p className='font-bold'>Group Batches & Personalised Learning</p>
            <p>
              Join a community of like-minded learners or opt for one-on-one personalized attention, tailored to your schedule and learning speed.          </p>
            <p className='font-bold'>Integrated AI Assistance for Self-Evaluation & Independent Learning</p>

          </div>
        </div>

        <p data-aos="fade-up" className="text-lg text-black max-w-3xl mx-auto text-center">
          At we understand the importance of personalized learning. That’s why we’ve integrated<strong> AI-powered tools </strong>that support our students throughout their French learning journey, empowering them to:
        </p>
        <div className="my-16">
          <div data-aos="fade-up" className="bg-blue-100 p-6 rounded-2xl shadow-2xl m-5">
            <p className='font-bold'>Self-Evaluate Progress</p>
            <p>
              Our AI system provides automated quizzes, real-time feedback, and self-assessment tools to track your development, so you can identify areas of improvement and celebrate milestones.
            </p>
            <p className='font-bold'>Independent Learning</p>
            <p>
              Beyond your lessons with expert teachers, the AI tool offers interactive exercises, personalized study plans, and language practice sessions that are available 24/7, allowing you to learn at your own pace and convenience.
            </p>
            <p className='font-bold'>Complete Learning Support</p>
            <p>
              The AI is designed to complement the teachers' lessons, providing extra explanations, suggestions for further practice, and even personalized language tips tailored to your level.
            </p>
            <p className='font-bold'>Seamless Integration with Teacher’s Guidance</p>
            <p>
              While the AI assists you with independent learning, our qualified teachers are always there to guide you, clarify doubts, and offer advanced insights to ensure your success in exams like TEF, TCF, and DELF/DALF.
            </p>
          </div>
        </div>

        {/* AI Learning Support */}
        <div data-aos="fade-up" className="my-16 px-4 max-w-screen-xl mx-auto text-center ">
          <h2 className="text-3xl font-bold mb-6">AI-Powered Learning Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Self-Evaluation Tools",
                desc: "Quizzes and real-time feedback to track your improvement areas.",
              },
              {
                title: "Independent Learning",
                desc: "24/7 access to exercises, study plans, and practice modules.",
              },
              {
                title: "Guided + AI Learning",
                desc: "AI supports your growth, but expert teachers guide and evaluate your progress.",
              },
            ].map((ai, i) => (
              <div key={i} className="bg-blue-100 rounded-xl p-6 shadow-2xl">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{ai.title}</h3>
                <p className="text-gray-700">{ai.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default TcfTefCourse;
