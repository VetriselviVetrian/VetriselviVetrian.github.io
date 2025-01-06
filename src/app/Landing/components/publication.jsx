"use client";

import React, { useEffect, useState } from "react";
import Cite from "citation-js";
import { bibtexData } from "@/data/bibtexData";

export default function Publications() {
  const [groupedCitations, setGroupedCitations] = useState([]);

  useEffect(() => {
    const citations = bibtexData.map((entry) => {
      try {
        const citation = new Cite(entry.bibtex);
        const data = citation.data[0];

        const authors = data.author
          .map((author) => `${author.family}, ${author.given}`)
          .join(", ");
        
        // Extract the publication type (journal or conference)
        const type = entry.type; // Use the 'type' field from data

        return {
          year: data.issued["date-parts"][0][0],
          citation: (
            <>
              {authors} ({data.issued["date-parts"][0][0]}) {data.title}.{" "}
              <span className="italic">{data["container-title"]}</span>{" "}
              {data.volume}({data.issue})
              <div className="inline-flex items-center gap-2 mt-2">
                {entry.pdf && (
                  <span className="inline-block">
                    [
                    <a
                      className="text-blue-600 hover:text-blue-800 hover:underline font-medium px-1"
                      href={entry.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      PDF
                    </a>
                    ]
                  </span>
                )}{" "}
                {data.DOI && (
                  <span className="inline-block">
                    [
                    <a
                      className="text-blue-600 hover:text-blue-800 hover:underline font-medium px-1"
                      href={`https://doi.org/${data.DOI}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      DOI
                    </a>
                    ]
                    [<span className="text-secondary"> {type} </span>]
                  </span>
                )}
                {entry.code && (
                  <span className="inline-block">
                    [
                    <a
                      className="text-blue-600 hover:text-blue-800 hover:underline font-medium px-1"
                      href={entry.code}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      code & data
                    </a>
                    ]
                  </span>
                )}
              </div>
            </>
          ),
        };
      } catch (error) {
        console.error("Error formatting citation:", error);
        return null;
      }
    });

    const grouped = citations.reduce((acc, entry) => {
      if (entry) {
        const { year, citation } = entry;
        if (!acc[year]) acc[year] = [];
        acc[year].push(citation);
      }
      return acc;
    }, {});

    setGroupedCitations(
      Object.keys(grouped)
        .map((year) => ({
          year: parseInt(year, 10),
          citations: grouped[year],
        }))
        .sort((a, b) => b.year - a.year)
    );
  }, []);

  return (
    <div id="publications" className="min-h-screen w-full bg-base-200 pt-20">
      <div className="container mx-auto px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:space-x-16">
          {/* Left Column */}
          <div className="md:w-1/4 flex flex-col items-center md:items-start mb-8 md:mb-0 lg:ml-32">
            <h1 className="text-5xl font-medium mb-4 mr-5">Publications</h1>
            <p className="text-xl font-medium leading-relaxed ml-6 sm:ml-0">
              Scholarly publications & pre-prints
            </p>
          </div>

          {/* Right Column - Citations */}
          <div className="md:w-3/4">
            <div className="space-y-12">
              {groupedCitations.map(({ year, citations }) => (
                <div key={year} className="card bg-base-100 shadow-md p-8 lg:mx-20">
                  <h2 className="text-4xl font-medium mb-6 tracking-tight">
                    {year}
                  </h2>
                  <div className="space-y-8">
                    {citations.map((citation, index) => (
                      <div
                        key={index}
                        className="border-l-4 border-gray-200 pl-6 text-lg leading-relaxed font-medium text-justify"
                      >
                        {citation}
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