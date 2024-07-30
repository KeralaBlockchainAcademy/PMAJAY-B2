import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditCoursePage = () => {
  const course = useLoaderData();
  const [title, setTitle] = useState(course.title);
  const [courseId, setCourseId] = useState(course.courseId);
  const [type, setType] = useState(course.type);
  const [description, setDescription] = useState(course.description);
  const [price, setPrice] = useState(course.price);

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    const updatedCourse = {
      title,
      courseId,
      type,
      description,
      price,
    };

    const res = updateCourse(updatedCourse);
    toast.success("Course added successfully");
    navigate("/courses");
    console.log(res);
  };

  const updateCourse = async (updatedCourse) => {
    const res = await fetch(`/api/courses/${courseId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCourse),
    });
    return res;
  };

  return (
    <>
      <section className="bg-white mb-20">
        <div className="container m-auto max-w-2xl py-2">
          <div className="bg-purple-100 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
            <form onSubmit={submitForm}>
              <h2 className="text-3xl text-purple-800 text-center font-semibold mb-6">
                Update Course
              </h2>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Course Name
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="eg. Certified Blockchain Associate"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="type"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Course Type
                </label>
                <select
                  id="type"
                  name="type"
                  className="border rounded w-full py-2 px-3"
                  required
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="Self-Paced">Self-Paced</option>
                  <option value="Instructor-Led">Instructor-Led</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="add a short course description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="type"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Price
                </label>
                <select
                  id="price"
                  name="price"
                  className="border rounded w-full py-2 px-3"
                  required
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                >
                  <option value="Rs.5000">Rs.5000</option>
                  <option value="Rs.3500">Rs.3500</option>
                  <option value="Rs.15000">Rs.15000</option>
                </select>
              </div>

              <div>
                <button
                  className="bg-purple-500 hover:bg-purple-600 my-10 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Update Course
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditCoursePage;
