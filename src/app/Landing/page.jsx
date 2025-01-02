"use client";

import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import Bio from "./components/bio";
import Publication from "./components/publication";
import Courses from "./components/courses";
import Awards from "./components/awards";
import ProActivities from "./components/pro-activities";
import Contact from "./components/contact";

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Bio />
      <Publication />
      <Courses />
      <Awards />
      <ProActivities />
      <Contact />

      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 p-3 bg-blue-500 text-white rounded-full shadow-lg transition-transform transform hover:scale-110"
        >
          <FaArrowUp size={24} />
        </button>
      )}
    </>
  );
}

export default Home;
