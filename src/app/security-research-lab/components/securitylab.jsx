import React from "react";
import Image from "next/image";
import { researchAreas, labImage } from "@/data/securityLabData"; 

const SecurityLab = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <h1 className="text-4xl font-bold text-center mb-16">
          Security Research Lab
        </h1>

        <div className="flex flex-col md:flex-row gap-8 mb-16 items-center">
          {/* Text Content */}
          <div className="md:w-1/2 prose max-w-none">
            <p className="text-lg leading-relaxed text-justify">
              Welcome to the Security Research Lab. Our laboratory focuses on
              advancing the frontiers of cybersecurity through innovative
              research and development. We combine theoretical foundations with
              practical applications to address emerging security challenges in
              various domains including network systems, Internet of Vehicles,
              and multimedia content protection. Through collaboration with
              industry partners and academic institutions, we strive to develop
              robust security solutions for next-generation technologies.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2 relative h-[300px] w-full">
            <Image
              src={labImage}
              alt="Security Research Lab"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Research Areas Section */}
        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-6">Research Areas</h2>
          <ul className="space-y-4">
            {researchAreas.map((area, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-4 text-primary text-5xl">•</span>
                <div>
                  <h3 className="font-medium text-lg">{area.title}</h3>
                  <p className="text-slate-600 mt-1">{area.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SecurityLab;
