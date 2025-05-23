import React, { useState } from 'react';
import { FaUserFriends, FaChalkboardTeacher, FaUser } from "react-icons/fa";

const tabs = [
  "Kids & Teens",
  "Crash Course",
  "DELF/DALF Prep",
  "TEF/TCF Program"
];

const pricingData = {
  "Kids & Teens": [
    {
      title: "Fun French (A1 Prep Basics)",
      age: "6–9 yrs",
      duration: "8 weeks • 2×/week • 1 hr",
      group: "₹6,000 – ₹7,500",
      individual: "₹10,000 – ₹12,000"
    },
    {
      title: "A1–A2 Foundation",
      age: "10–13 yrs",
      duration: "10 weeks • 2×/week • 1.5 hrs",
      group: "₹7,500 – ₹9,000",
      individual: "₹12,000 – ₹14,000"
    },
    {
      title: "A2–B1 / DELF Junior Prep",
      age: "14–17 yrs",
      duration: "12 weeks • 3×/week • 1.5 hrs",
      group: "₹9,000 – ₹11,000",
      individual: "₹15,000 – ₹17,000"
    }
  ],
  "Crash Course": [
    {
      title: "Basic French Crash Course",
      duration: "3 Months • 2×/week • 1.5 hrs",
      group: "₹6,500 – ₹8,000",
      miniGroup: "₹9,000 – ₹10,500",
      individual: "₹12,000 – ₹14,000"
    }
  ],
  "DELF/DALF Prep": [
    {
      title: "DELF A1",
      duration: "8–10 weeks • 30–36 hrs",
      group: "₹6,500 – ₹8,000",
      individual: "₹10,000 – ₹12,000"
    },
    {
      title: "DELF A2",
      duration: "10–12 weeks • 36–42 hrs",
      group: "₹7,000 – ₹9,000",
      individual: "₹11,000 – ₹13,000"
    },
    {
      title: "DELF B1",
      duration: "12–14 weeks • 45–50 hrs",
      group: "₹8,500 – ₹10,500",
      individual: "₹13,000 – ₹15,000"
    },
    {
      title: "DELF B2",
      duration: "14–16 weeks • 50–60 hrs",
      group: "₹10,000 – ₹12,000",
      individual: "₹15,000 – ₹17,000"
    }
  ],
  "TEF/TCF Program": [
    {
      title: "A1–A2 Phase (4 Months)",
      duration: "3×/week • 1.5 hrs",
      group: "₹20,000 – ₹22,000",
      miniGroup: "₹23,000 – ₹25,000",
      individual: "₹26,000 – ₹28,000"
    },
    {
      title: "B1–B2 Phase (4 Months)",
      duration: "2–3×/week • 1.5 hrs",
      group: "₹22,000 – ₹24,000",
      miniGroup: "₹25,000 – ₹27,000",
      individual: "₹28,000 – ₹30,000"
    },
    {
      title: "TEF/TCF Final Phase (2 Months)",
      duration: "3×/week • 2 hrs",
      group: "₹13,000 – ₹15,000",
      miniGroup: "₹15,000 – ₹17,000",
      individual: "₹18,000 – ₹20,000"
    },
    {
      title: "Combo: A1 to TEF/TCF (10 Months)",
      duration: "Flexible",
      group: "₹52,000",
      miniGroup: "₹60,000",
      individual: "₹70,000"
    }
  ]
};

const PricingCard = ({ course }) => (
  <div className="bg-white border border-gray-200 shadow-lg rounded-3xl p-8 mb-10 relative">
    <h3 className="text-2xl font-bold text-red-600 mb-2">{course.title}</h3>
    {course.age && <p className="text-lg font-medium text-gray-700 mb-1">Age: {course.age}</p>}
    <p className="text-gray-600 text-base mb-4">{course.duration}</p>

    <div className="flex flex-col gap-2 text-gray-800 text-lg font-medium mb-6">
      {course.group && (
        <div className="flex items-center gap-2">
          <FaUserFriends className="text-red-500" />
          <span>Group: {course.group}</span>
        </div>
      )}
      {course.miniGroup && (
        <div className="flex items-center gap-2">
          <FaChalkboardTeacher className="text-orange-500" />
          <span>Mini Group: {course.miniGroup}</span>
        </div>
      )}
      {course.individual && (
        <div className="flex items-center gap-2">
          <FaUser className="text-blue-500" />
          <span>Individual: {course.individual}</span>
        </div>
      )}
    </div>
    <div className="flex justify-end mt-4">
      <button
        onClick={() => alert(`Proceeding to checkout for: ${course.title}`)}
        className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition shadow"
      >
        Checkout
      </button>
    </div>
  </div>
);

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState("Kids & Teens");

  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-5xl font-bold text-center text-red-600 mb-10">Course Pricing</h1>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full text-base font-semibold border-2 transition ${
              activeTab === tab
                ? "bg-red-600 text-white border-red-600"
                : "bg-white text-red-600 border-red-300 hover:bg-red-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Pricing Components */}
      {pricingData[activeTab].map((course, i) => (
        <PricingCard key={i} course={course} />
      ))}
    </div>
  );
}
