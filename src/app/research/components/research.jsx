import React from "react";
import Image from "next/image";
import { researchInterests, researchDetails } from "@/data/researchData";

function Research() {
  return (
    <div>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <h1 className="text-4xl text-center font-bold mb-6">Research</h1>

        <div className="prose max-w-none mb-12">
          <p className="text-lg leading-relaxed text-justify">
          My research focuses on advancing connectivity, security, and intelligent systems across domains such as Internet of Vehicles (IoV), network security, sentiment analysis, and medical image processing. Under my guidance, students have developed cutting-edge solutions, including secure communication protocols for IoV, resource optimization for beyond 5G networks, and innovative frameworks for medical image analysis and storage. Our work also explores multimodal affect sensing, emotion recognition, and privacy-aware encryption techniques using advanced methods like federated learning, deep reinforcement learning, and blockchain. These efforts reflect a strong commitment to solving real-world challenges while driving impactful, interdisciplinary innovation.
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
              <div key={area.id} className="card lg:card-side bg-base-200 shadow-xl">
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
