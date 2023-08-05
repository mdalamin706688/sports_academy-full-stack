import React, { Component } from "react";
import Title from "../../common/Title/Title";

export default class Facilities extends Component {
  render() {
    const facilities = [
      {
        name: "SWIMMING COMPLEX",

        image:
          "https://static.honeykidsasia.com/wp-content/uploads/2018/03/jurong-east-swimming-complex-900x643.png",
      },
      {
        name: "Rest Room",

        image:
          "https://cdn.shrm.org/image/upload/c_crop%2Ch_1574%2Cw_2800%2Cx_0%2Cy_0/c_fit%2Cq_auto%2Cw_767/v1/Risk%20Management/iStock-182768607_zzxdq5.webp?databtoa=eyIxNng5Ijp7IngiOjAsInkiOjAsIngyIjoyODAwLCJ5MiI6MTU3NCwidyI6MjgwMCwiaCI6MTU3NH19",
      },
      {
        name: "HEALTHY FOOD CANTEEN",

        image:
          "https://www.healthhub.sg/sites/assets/Assets/Article%20Images/sch%20canteen.jpg?Width=970&Height=405",
      },
      {
        name: "Professional Coach",

        image:
          "https://i.insider.com/5a68afa600d0ef1c068b4804?width=600&format=jpeg&auto=webp",
      },
      {
        name: "The Gym",
        clubPosition: "Coach",
        image:
          "https://www.pontevedra.com/sites/default/files/styles/hero/public/2020-10/PVR%20Gym%20C.jpg?h=8b7966f8&itok=zID0W-h2",
      },
      {
        name: "Player Recovery",

        image:
          "https://riixo.com/wp-content/uploads/the-importance-of-recovery-after-sport-1024x449.jpeg",
      },
      {
        name: "Outdoor Pitched",

        image:
          "https://www.cardiffmet.ac.uk/about/sport/PublishingImages/Pages/Sports-Facilities/3G%20widescreen.jpg",
      },
      {
        name: "INDOOR PITCHES",

        image:
          "https://www.dura-sport.co.uk/assets/js/tinymce/plugins/moxiemanager/data/files/IMAGES%20-%20FOOTBALL/FOOTBALL%20CASE%20STUDIES/Lucozade%20Canary%20Wharf/Lucozade2%20-%20done.jpg",
      },
    ];
    return (
      <div className="w-[70%] mx-auto mt-9">
        <div>
          <Title title="FACILITIES" subtitle="Facilities Football Academy" />
        </div>
        <div className="grid grid-cols-4 gap-4 mx-auto mt-7 justify-center mt-9">
          {facilities.map((facility, index) => (
            <div key={index} className="relative">
              <img
                src={facility.image}
                alt={facility.name}
                className="w-[100%] h-[30vh] object-cover rounded-md"
              />
              <div className="absolute top-0 left-0 p-2">
                <p className="text-white font-bold">{facility.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
