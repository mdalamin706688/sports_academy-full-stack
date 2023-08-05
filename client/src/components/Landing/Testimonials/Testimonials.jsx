import React from "react";
import Slider from "../../common/Slider/Slider";
import Title from "../../common/Title/Title";

const slideData = [
  {
    leftImage:
      "http://shippo.imoodev.com/wp-content/uploads/2023/03/young-soccer-player-e1683723479845.jpg",
    rightImage:
      "http://shippo.imoodev.com/wp-content/uploads/2023/03/player-sitting-on-a-ball-e1683723483105.jpg",
    textContent:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    playerName: "Abraham Movix",
    playerRole: "Junior Player",
  },
  {
    leftImage:
      "http://shippo.imoodev.com/wp-content/uploads/2023/03/sitting-football-player-e1683723476487.jpg",
    rightImage:
      "http://shippo.imoodev.com/wp-content/uploads/2023/03/football-player-kicking-a-ball.jpg",
    textContent:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text",
    playerRole: "Senior Player",
  },
  // Add more slide objects as needed
];

function App() {
  return (
    <div className="w-[80%] mx-auto bg-teal-900 text-white p-7 mt-4 rounded-md">
      <div className="mt-5">
        <Title
          title="TESTIMONIAL"
          subtitle="Developing Complete, Modern Players."
        />
      </div>

      <div className="mt-7">
        <Slider slides={slideData} />
      </div>
    </div>
  );
}

export default App;
