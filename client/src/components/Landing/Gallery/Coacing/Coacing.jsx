import React, { Component } from "react";
import Title from "../../../common/Title/Title";

export default class Coacing extends Component {
  render() {
    const coaches = [
      {
        name: "Brian",
        clubPosition: "Football Performance Director",
        image: "http://shippo.imoodev.com/wp-content/uploads/2023/03/head-and-shoulders-portrait-of-businessman-in-office-e1683722282790.jpg",
      },
      {
        name: "Edward",
        clubPosition: "Operations Director",
        image: "http://shippo.imoodev.com/wp-content/uploads/2023/03/outdoor-head-and-shoulders-portrait-of-smiling-mature-man-e1683722278504.jpg",
      },
      {
        name: "Leo",
        clubPosition: "Academy Director",
        image: "http://shippo.imoodev.com/wp-content/uploads/2023/03/bald-african-american-man-e1683723454711.jpg",
      },
      {
        name: "Dimitri",
        clubPosition: "Assistant Coach",
        image: "http://shippo.imoodev.com/wp-content/uploads/2023/03/portrait-of-a-man-travelling-the-lofoten-e1683722286143.jpg",
      },
      {
        name: "Stevan",
        clubPosition: "Coach",
        image: "http://shippo.imoodev.com/wp-content/uploads/2023/03/portrait-of-man--e1683722290126.jpg",
      },
      {
        name: "Abraham",
        clubPosition: "Assistant Coach",
        image: "http://shippo.imoodev.com/wp-content/uploads/2023/03/portrait-of-a-man-smiling-e1683723459884.jpg",
      },
      {
        name: "Alex",
        clubPosition: "Coach",
        image: "http://shippo.imoodev.com/wp-content/uploads/2023/03/man-with-beard.jpg",
      },
      {
        name: "Joni",
        clubPosition: "Coach",
        image: "http://shippo.imoodev.com/wp-content/uploads/2023/03/handsome-bearded-man-portrait-outdoors-e1683722294681.jpg",
      },
      {
        name: "Kevin",
        clubPosition: "Assistant Coach",
        image: "http://shippo.imoodev.com/wp-content/uploads/2023/03/handsome-man-e1683723467247.jpg",
      },
      {
        name: "Revaldo",
        clubPosition: "Coach",
        image: "http://shippo.imoodev.com/wp-content/uploads/2023/03/portrait-of-smiling-mature-man-e1683723463506.jpg",
      },
    ];

    return (
      <div className="w-[70%] mx-auto mt-9">
        <div>
          <Title title="Our Coaches" subtitle="Trained by a Reliable Coach" />
        </div>
        <div className="grid grid-cols-5 gap-4 mx-auto mt-7 justify-center mt-9">
          {coaches.map((coach, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={coach.image}
                alt={coach.name}
                className="w-[100%]  object-cover rounded-md"
              />
              <p className="text-center mt-2">{coach.name}</p>
              <p className="text-center">{coach.clubPosition}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
