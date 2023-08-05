import React, { Component } from "react";
import Title from "../../common/Title/Title";

export default class Partner extends Component {
  render() {
    return (
      <div className="mx-auto w-[80%] mt-7">
        <Title
          title="PARTNER"
          subtitle="Academy Partners Who Help Make It Possible."
        />
        <div className="mt-7 relative">
          <div className="h-[25vh] w-[100%] rounded-md shadow-md overflow-hidden">
            {/* Image */}
            <img
              className="h-full w-full object-fit transition-transform transform hover:scale-105"
              src="https://inside-markets.com/wp-content/uploads/2021/02/FAANG-Aktien-e1613470699802-1024x387.png"
              alt="Academy Partners"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 transition-opacity hover:opacity-40"></div>
          </div>
        </div>
      </div>
    );
  }
}
