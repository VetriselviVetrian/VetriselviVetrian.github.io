import React from "react";
import { FaAward } from "react-icons/fa6";

const awardsData = [
  {
    id: 1,
    title: "Best Paper Award",
    organization:
      "International Conference on Electrical, Electronics, Information and Communication Technologies (ICEEICT 2024)",
    year: 2024,
  },
  {
    id: 2,
    title: "Best Paper Award",
    organization:
      "International Conference on Computational Intelligence in Data Science (ICCIDS - 2023)",
    year: 2023,
  },
  {
    id: 3,
    title: "Best Paper Award",
    organization:
      "IEEE Fourteenth International Conference on Information Processing, India",
    year: 2018,
  },
  {
    id: 4,
    title: "Best Project Award",
    organization: "TCS, India",
    year: 2014,
  },
];

export default function Awards() {
  return (
    <div id="awards" className="w-full bg-base-200 py-20">
      <div className="container mx-auto px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:space-x-16">
          {/* Left Column - Title */}
          <div className="md:w-1/4 flex flex-col ml-5 md:items-start mb-8 md:mb-0 lg:ml-32">
            <h1 className="text-5xl font-medium mb-4">Awards</h1>
            <p className="text-xl font-medium leading-relaxed text-base-content/80">
              Recognition & Achievements
            </p>
          </div>

          {/* Right Column - Awards List */}
          <div className="md:w-3/4">
            <div className="space-y-6 lg:mx-20">
              {awardsData.map((award) => (
                <div
                  key={award.id}
                  className="flex items-start space-x-4 p-6 text-justify bg-base-100 shadow-lg rounded-xl"
                >
                  <div className="flex-shrink-0">
                    <FaAward className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-base-content">
                      {award.title}
                    </h3>
                    <p className="text-lg text-base-content/70 mt-1">
                      {award.organization}
                    </p>
                    <p className="text-base font-medium text-base-content/50">
                      {award.year}
                    </p>
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
