import React from "react";
import Image from "next/image";
import { researchInterests, researchDetails } from "@/data/researchData";

function Research() {
  return (
    <div className="bg-base-200">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <h1 className="text-4xl text-center font-bold mb-6">Research</h1>

        <div className="prose max-w-none mb-12">
          <p className="text-lg leading-relaxed text-justify">
            Our research focuses on advancing the frontiers of technology through
            innovative solutions in various domains of computer science and
            engineering. We combine theoretical foundations with practical
            applications to address real-world challenges.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Research Interests</h2>
          <ul className="list-disc list-inside space-y-2">
            {researchInterests.map((interest, index) => (
              <li key={index} className="text-lg">
                {interest}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Current Research Areas</h2>
          <div className="space-y-12">
            {researchDetails.map((area) => (
              <div key={area.id} className="card lg:card-side bg-base-100 shadow-xl">
                <figure className="lg:w-1/3 relative min-h-[300px]">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 60vw, 33vw"
                    priority={area.id === 1}
                  />
                </figure>
                <div className="card-body lg:w-2/3">
                  <h3 className="card-title text-xl font-semibold">{area.title}</h3>
                  <p className="text-slate-500 text-justify">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Research;
