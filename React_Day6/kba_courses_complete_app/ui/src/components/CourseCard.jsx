import React, { useState } from "react";
import thumbnail from "../assets/images/rp.png";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  let description = course.description;

  if (!showFullDescription) {
    description = description.substring(0, 80);
  }

  return (
    <>
      <div className=" bg-purple-100  rounded-md shadow-2xl flex flex-col items-center justify-center mx-5 my-5 py-10">
        <h2 className=" font-bold text-lg text-purple-900 ">{course.title}</h2>
        <img src={thumbnail} alt="course thumbnail" className="w-80 h-40 " />

        <p className="text-black group-hover:text-white my-2 mx-5">
          {description}
        </p>
        <button className="flex flex-col w-full px-5  text-purple-400 hover:text-purple-600 py-2" onClick={() => setShowFullDescription(!showFullDescription)}>
          More
        </button>
        <Link
          to={`/courses/${course.courseId}`}
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 self-start mx-5"
        >
          Learn More
        </Link>
      </div>
    </>
  );
};

export default CourseCard;
