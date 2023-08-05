import React, { useEffect, useState } from "react";
import Slider from "../../common/Slider/Slider";
import { get } from "../../../services/api"; // Import the get function

// Sample slide data (Replace with your actual slide content and images)
const slides = [
  {
    leftImage: "https://i.insider.com/5fbe52b350e71a00115574c4?width=700",
    rightImage:
      "https://images.sportsbrief.com/images/1120/14058f4741356dcc.jpeg?v=1",
    textContent:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    playerName: "Senior Player",
    playerRole: "Striker",
  },
  {
    leftImage:
      "https://www.backsportspage.com/wp-content/uploads/2023/01/88fe99e3-1715-4a72-8939-152716011b9f.jpg.webp",
    rightImage:
      "https://www.thesun.co.uk/wp-content/uploads/2016/06/adam-lallana-28-england-rexfeatures.jpg",
    textContent:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    playerName: "Junior Player",
    playerRole: "Defender",
  },
];

const User = () => {
  // State to store the top instructors and top classes data
  const [topInstructors, setTopInstructors] = useState([]);
  const [topClasses, setTopClasses] = useState([]);

  // Function to fetch data for top instructors and top classes
  const fetchData = async () => {
    try {
      // Get the token from localStorage (assuming you have stored it after login)
      const token = localStorage.getItem("token");

      // Fetch data for top instructors
      const instructorsData = await get("/users/popular-instructors", token);
      setTopInstructors(instructorsData);

      // Fetch data for top classes
      const classesData = await get("/users/popular-classes", token);
      setTopClasses(classesData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Welcome</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto bg-base-300 p-7 rounded-md">
        <Slider slides={slides} />
      </div>
      <div className="flex gap-10 w-[70%] mx-auto mt-7">
        {/* Display popular classes */}
        <div>
          <h2>Popular Classes</h2>
          <div className="grid grid-cols-3 gap-4 h-[62vh]">
            {topClasses.map((classItem) => (
              <div
                key={classItem._id}
                className="card w-96 bg-base-100 shadow-xl"
              >
                <figure>
                  <img
                    src="https://cartonsport.com/wp-content/uploads/2023/06/Samuel-Chukwueze.jpg"
                    alt="Class Image"
                    className="h-[35vh]"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {classItem.classDetails[0]?.name}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>Seats: {classItem.classDetails[0]?.seats}</p>
                  <p>Price: {classItem.classDetails[0]?.price}</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Display popular instructors */}
        <div>
          <h2>Popular Instructors</h2>
          <div className="grid grid-cols-3 gap-4 h-[62vh]">
            {topInstructors.map((instructorItem) => (
              <div
                key={instructorItem._id}
                className="card w-96 bg-base-100 shadow-xl"
              >
                <figure>
                  <img
                    src="https://assets-webp.khelnow.com/news/uploads/2021/06/Manchester-United-academy.jpg.webp"
                    alt="Instructor Image"
                    className="h-[35vh]"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {instructorItem.instructorDetails[0]?.name}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>Email: {instructorItem.instructorDetails[0]?.email}</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
