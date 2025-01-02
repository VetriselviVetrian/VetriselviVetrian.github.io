"use client";

import React, { useEffect, useState } from "react";
import Cite from "citation-js";
import { patentData } from "@/data/patentData";

export default function Patent() {
  const [citations, setCitations] = useState([]);

  useEffect(() => {
    const formattedCitations = patentData.map((entry) => {
      try {
        const citation = new Cite(entry.bibtex);
        const data = citation.data[0];

        const authors = data.author
          .map((author) => `${author.family}, ${author.given}`)
          .join(", ");

        const type = entry.type;

        return (
          <div
            key={data.title}
            className="border-l-4 border-gray-200 pl-6 text-lg leading-relaxed font-medium text-justify"
          >
            {authors}. {data.title}.{" "}
            <span className="italic">{data.journal}</span>, Application Number{" "}
            {data.volume}. Published in{" "}
            <span className="italic">{data["container-title"]}</span>. [
            <span className="text-secondary font-medium"> {type} </span>]
          </div>
        );
      } catch (error) {
        console.error("Error formatting citation:", error);
        return null;
      }
    });

    setCitations(formattedCitations);
  }, []);

  return (
    <div className="w-full bg-base-200">
      <div className="container mx-auto px-6 lg:px-8 py-12 md:py-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-center mb-4">Patents</h1>
          <p className="text-xl font-medium leading-relaxed">
            A list of patents associated with this work
          </p>
        </div>

        <div className="space-y-12 mx-auto max-w-4xl">
          {citations.map((citation, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-md p-8 mx-auto max-w-4xl"
            >
              {citation}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
