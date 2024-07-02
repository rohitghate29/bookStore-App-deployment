import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Course from "./Course";

function CoursePage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen max-h-fit">
        <Course />
      </div>
      <Footer />
    </>
  );
}

export default CoursePage;
