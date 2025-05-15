import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import background from '/src/assets/contact.jpg';

const RegistrationForm = () => {
  const formRef = useRef();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // 👉 Redirect to payment page after submission
    navigate('/payment');
  };

  return (
    <section
      className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
      data-aos="zoom-out"
    //   style={{
    //     backgroundImage: `url(${background})`,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //     backgroundAttachment: 'fixed',
    //     backgroundRepeat: 'no-repeat',
    //     minHeight: '100vh',
    //   }}
    >
      <div className="max-w-4xl mx-auto space-y-12">

        {/* Title */}
        <div data-aos="fade-up" className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Register Now</h1>
          <p className="mt-2 text-lg text-blue-600">
            Join our French learning community and start your language journey today!
          </p>
        </div>

        {/* Registration Form */}
        <div
          data-aos="zoom-in"
          className="bg-gray-200 rounded-4xl p-6 space-y-6 shadow-lg shadow-gray-300"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">📝 Registration Form</h2>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-black">Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-black">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-black">Phone</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+91 9876543210"
              />
            </div>

            <div>
              <label className="block text-black">Course Selection</label>
              <select
                name="course"
                required
                value={formData.course}
                onChange={handleChange}
                className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">-- Choose a Course --</option>
                <option value="Kid & Teen Classes">Kid & Teen French Classes</option>
                <option value="Crash Course">Crash Course</option>
                <option value="Private Tuition">Private Tuition</option>
                <option value="DELF/DALF Prep">DELF/DALF Prep</option>
                <option value="TCF/TEF Canada">TCF/TEF Canada</option>
              </select>
            </div>

            <div>
              <label className="block text-black">Message (optional)</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Anything you'd like us to know..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md transition"
            >
              Proceed to Payment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
