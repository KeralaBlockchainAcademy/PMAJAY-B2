import React from "react";
import CourseCards from "../components/CourseCards";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ViewAllCourses from "../components/ViewAllCourses";

const HomePage = () => {
  return (
    <>
      <Hero />
      <CourseCards isHome={true} />
      <ViewAllCourses />
    </>
  );
};

export default HomePage;
