import React, { Component } from "react";

export default class Card2 extends Component {
  render() {
    const { imageSrc, altText, title, description, timeData, categoryText } = this.props;

    return (
      <div>
        <div className="card bg-base-100 shadow-xl relative h-[50vh]">
          <div className="absolute top-2 left-2 text-sm bg-primary text-white px-2 py-1 rounded-md">
            {categoryText}
          </div>
          <figure className="px-10 pt-10">
            <img src={imageSrc} alt={altText} className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <p className="text-sm text-gray-600">{timeData}</p>
          </div>
        </div>
      </div>
    );
  }
}
