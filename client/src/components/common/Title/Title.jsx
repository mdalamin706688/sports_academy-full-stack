import React, { Component } from "react";

export default class Title extends Component {
  render() {
    const { title, subtitle } = this.props;

    return (
      <div>
        <div className="w-[50%] flex justify-between">
          <h1 className="font-bold text-xl">{title}</h1>
          <h1 className="text-2xl">{subtitle}</h1>
        </div>
      </div>
    );
  }
}
