import React, { Component } from "react";
import Card from "../../common/Card/Card";
import Title from "../../common/Title/Title";

export default class About extends Component {
  render() {
    return (
      <div className="w-[80%] mx-auto mt-7">
        <div>
          <Title
            title="ABOUT"
            subtitle="Total Europe Football Immersion."
          />
        </div>

        <div className="flex gap-10 mt-8">
          <Card
            imageSrc="./soccer-ball.png"
            title="World class academy coaches and player development team"
            description="Lorem ipsum dolor consectetur adipiscing tempor labore dolore magna aliqua lacus vitae congue

            "
          />
          <Card
            imageSrc="./soccer-player.png"
            title="World class / elite competition
            "
            description="Lorem ipsum dolor consectetur adipiscing tempor labore dolore magna aliqua lacus vitae congue

            "
          />
          <Card
            imageSrc="./stadium.png"
            title="Immersion with a Liga Europe Academy team
            "
            description="Lorem ipsum dolor consectetur adipiscing tempor labore dolore magna aliqua lacus vitae congue

            "
          />
          <Card
            imageSrc="./trophy.png"
            title="World class match, training and learning ecperiences
            "
            description="Lorem ipsum dolor consectetur adipiscing tempor labore dolore magna aliqua lacus vitae congue

            "
          />
        </div>
      </div>
    );
  }
}
