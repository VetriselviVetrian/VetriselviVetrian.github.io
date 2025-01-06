import React from "react";
import { FaGoogleScholar, FaLinkedinIn } from "react-icons/fa6";
import { SiScopus } from "react-icons/si";
import { RxGlobe } from "react-icons/rx";
import { GoLightBulb } from "react-icons/go";
import { TiPointOfInterest } from "react-icons/ti"; // Interest Icon
import { MdSchool } from "react-icons/md"; // Education Icon
import Image from "next/image";
import Vetriselvi_pic from "@/assets/vetriselvi.jpg";

const SOCIAL_LINKS = [
  {
    name: "Google Scholar",
    url: "https://scholar.google.co.in/citations?user=RPHDOnsAAAAJ",
    icon: <FaGoogleScholar className="text-2xl" />,
  },
  {
    name: "Scopus",
    url: "https://www.scopus.com/authid/detail.uri?authorId=6507887541",
    icon: <SiScopus className="text-2xl" />,
  },
  {
    name: "Web of Science",
    url: "https://www.webofscience.com/wos/author/record/AAA-4031-2022",
    icon: <RxGlobe className="text-2xl" />,
  },
  {
    name: "Vidwan",
    url: "https://vidwan.inflibnet.ac.in/profile/117746",
    icon: <GoLightBulb className="text-2xl" />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/vetriselvi-v/",
    icon: <FaLinkedinIn className="text-2xl" />,
  },
];

const INTERESTS = [
  "Computer Networks",
  "Cryptography and Network Security",
  "Software Defined Networks",
  "Computer Vision",
  "Medical Image Processing",
];

const EDUCATION = [
  {
    degree: "PhD in Ad Hoc Networks, Supervisor: Dr. Ranjani Parathasarathi",
    year: "2008",
    institution: "Anna University",
  },
  {
    degree: "M.E in Communication Systems",
    year: "1999",
    institution: "Madurai Kamaraj University",
  },
  {
    degree: "B.E in Electronics and Communication Engineering",
    year: "1997",
    institution: "Madurai Kamaraj University",
  },
];

function Bio() {
  return (
    <div className="min-h-screen w-full pt-2">
      <div className="container mx-auto px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:space-x-16">
          {/* Left Column - Avatar */}
          <div className="md:w-1/3 lg:w-1/4 flex flex-col items-center md:sticky md:top-8 mb-12 md:mb-0 md:ml-32">
            <div className="group relative w-64 h-64 rounded-full overflow-hidden ring-4 ring-gray-100 shadow-xl mb-8 transition-transform duration-300 hover:scale-105">
              <Image
                src={Vetriselvi_pic}
                alt="Professor Vetriselvi"
                width={500}
                height={500}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="text-center space-y-3">
              <h2 className="text-3xl font-semibold">Vetriselvi V</h2>
              <div className="space-y-1">
                <p className="text-xl text-gray-400 font-medium">Professor</p>
                <p className="text-lg text-gray-500">
                  <a
                    href="https://www.annauniv.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-slate-600"
                  >
                    Anna University
                  </a>
                </p>
              </div>
            </div>

            <div className="flex gap-6 mt-8">
              {SOCIAL_LINKS.map((link, index) => (
                <div key={index} className="tooltip" data-tip={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transform transition-all duration-300 hover:scale-110"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Biography */}
          <div className="md:w-3/4">
            <div className="space-y-8 mx-6 md:mx-20 text-justify">
              <h1 className="text-5xl font-medium mb-4">Biography</h1>
              <p className="text-xl font-medium leading-relaxed">
                I am a Professor in the Department of Computer Science and Engineering at Anna University, Chennai, 
                with over two decades of experience in academia and research. My research interests encompass computer networks, 
                cryptography and network security, vehicular ad hoc networks (VANETs), and computer vision. I am a life member of professional bodies including the Indian Society for Technical Education and the Institution of Electronics and Telecommunication Engineers.

              </p>
              <p className="text-xl font-medium leading-relaxed">
                I have contributed to various research projects, including serving as the Principal Investigator for the Information Security Education and Awareness (ISEA) Project Phase II funded by MeitY. I currently supervise the Security Research Lab. My publication record includes numerous journal articles, book chapters, and conference proceedings, reflecting my commitment to advancing knowledge in my areas of expertise.

              {/* Interests and Education in Two Columns */}
              <div className="mt-8 flex flex-col md:flex-row gap-12">
                {/* Interests Section */}
                <div className="flex-1">
                  <h2 className="text-3xl font-semibold text-slate-500 mb-4">
                    Interests
                  </h2>
                  <ul className="space-y-2">
                    {INTERESTS.map((interest, index) => (
                      <li
                        key={index}
                        className="text-lg flex items-center gap-3"
                      >
                        <TiPointOfInterest className="min-w-5 w-6 h-6 flex-shrink-0" />
                        {interest}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Education Section */}
                <div className="flex-1">
                  <h2 className="text-3xl font-semibold text-slate-500 mb-4">
                    Education
                  </h2>
                  <ul className="space-y-3">
                    {EDUCATION.map((edu, index) => (
                      <li
                        key={index}
                        className="text-lg flex items-start gap-3"
                      >
                        <MdSchool className="min-w-5 w-6 h-6 flex-shrink-0" />
                        <div>
                          <span className="font-normal">
                            {edu.degree}, {edu.year}
                          </span>
                          <p className="text-sm text-gray-500 font-medium">
                            {edu.institution}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;
