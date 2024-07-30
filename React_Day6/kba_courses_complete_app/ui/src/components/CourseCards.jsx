import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
// import courses from "../courses.json";

const CourseCards = ({ isHome = false }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const courseList = isHome ? courses.slice(0, 3) : courses;

  useEffect(() => {
    const fetchCourses = async () => {
      console.log("hit fetchcourse");
      try {
        const res = await fetch("/api/courses");
        const data = await res.json();
        setCourses(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  return (
    <>
      <h1 className="flex flex-col items-center font-bold text-2xl md:text-4xl text-purple-800 pt-10">
        {isHome ? "Top Courses" : "All Courses"}
      </h1>

      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 my-10">
          {courseList.map((course) => (
            <CourseCard key={course.courseId} course={course} />
          ))}
        </div>
      )}
    </>
  );
};

export default CourseCards;
