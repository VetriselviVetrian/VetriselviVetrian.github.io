import Navbar from "@/components/Nav2";
import React from "react";
import Footer from "@/components/Footer";
import SecurityLab from "./components/securitylab";
import Team from "./components/team";
import SelectedPublications from "./components/selected_publications";
import Patent from "./components/patent";

function page() {
  return (
    <div>
      <Navbar />
      <SecurityLab />
      <Team />
      <SelectedPublications />
      {/* <Patent /> */}
      <Footer />
    </div>
  );
}

export default page;
