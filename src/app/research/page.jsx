import React from "react";
import Navbar from "@/components/Nav1";
import Footer from "@/components/Footer";
import Domain from "./components/research";
import Guidance from "./components/guidance";

function page() {
  return (
    <div>
      <Navbar />
      <Domain />
      <Guidance />
      <Footer />
    </div>
  );
}

export default page;
