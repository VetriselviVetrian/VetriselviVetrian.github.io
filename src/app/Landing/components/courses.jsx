import React from "react";
import { FaNetworkWired, FaLock, FaBrain, FaFlask } from "react-icons/fa";

const courseData = [
  {
    title: "CS6111: Computer Networks",
    icon: FaNetworkWired,
    description:
      "A detailed introduction to the principles of computer networking, focusing on protocols, network design, and real-world applications.",
    topics: [
      "TCP/IP Protocol Suite",
      "Network Security",
      "Wireless Networks",
      "Software Defined Networks",
    ],
  },
  {
    title: "CS6008: Cryptography and Network Security",
    icon: FaLock,
    description:
      "Comprehensive coverage of cryptographic techniques and their role in securing data and communications.",
    topics: [
      "Digital Signatures",
      "Public Key Cryptography",
      "Web-based Attacks",
      "Attack Mitigation",
    ],
  },
  {
    title: "CS6005: Deep Learning Techniques",
    icon: FaBrain,
    description:
      "In-depth exploration of deep learning techniques and their applications in artificial intelligence and data science.",
    topics: [
      "Neural Networks",
      "Convolutional Networks",
      "Recurrent Networks",
      "Transformers",
    ],
  },
];

export default function Courses() {
  return (
    <div id="courses" className="w-full py-20">
      <div className="container mx-auto px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:space-x-16">
          {/* Left Column */}
          <div className="md:w-1/4 flex flex-col md:items-start mb-8 md:mb-0 lg:ml-32">
            <h1 className="text-5xl font-medium mb-4 mr-5 ml-5 sm:ml-0">Courses Taught</h1>
            <p className="text-xl font-medium leading-relaxed ml-6 sm:ml-0 text-justify mr-5">
              Explore the diverse range of courses taught by the instructor.
            </p>
          </div>

          {/* Right Column - Course Cards */}
          <div className="md:w-3/4">
            <div className="space-y-8 lg:mx-20">
              {courseData.map((course, index) => (
                <div
                  key={index}
                  className="card bg-base-100 shadow-lg p-8 transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <course.icon className="w-8 h-8 text-blue-600 mr-4" />
                    <h2 className="text-2xl font-medium">{course.title}</h2>
                  </div>
                  <p className="text-lg text-gray-500 mb-4">
                    {course.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.topics.map((topic, topicIndex) => (
                      <div
                        key={topicIndex}
                        className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-300 transition-colors duration-200"
                      >
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
