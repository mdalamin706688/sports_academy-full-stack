import React, { Component } from "react";

export default class Card1 extends Component {
  render() {
    const { imageSrc, title, description } = this.props;
    return (
      <div className="border border-3 p-3">
        <figure className="px-10 pt-10">
          <img
            src={imageSrc}
            alt="img"
            className="rounded-xl w-[30%] mx-auto"
          />
        </figure>
        <div className=" ">
          <h2 className="font-bold mt-3 text-center">{title}</h2>
          <p className="mt-4 text-center">{description}</p>
        </div>
      </div>
    );
  }
}

