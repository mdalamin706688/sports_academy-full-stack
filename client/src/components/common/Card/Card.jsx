import React, { Component } from "react";

export default class Card extends Component {
  render() {
    const { imageSrc, title, description } = this.props;
    return (
      <div className="mx-auto">
        <div className="px-10 pt-10">
          <img
            src={imageSrc}
            alt="img"
            className="rounded-xl w-[30%] "
          />
        </div>
        <div className=" ">
          <h2 className="card-title mt-3">{title}</h2>
          <p className="mt-4">{description}</p>
        </div>
      </div>
    );
  }
}

