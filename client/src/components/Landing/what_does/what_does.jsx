import React, { Component } from "react";
import Title from "../../common/Title/Title";
import Card1 from "../../common/Card1/Card1";


export default class what_does extends Component {
  render() {
    return (
      <div className="w-[70%] mx-auto mt-9 bg-green-100 p-4 rounded-md">
        <div>
          <Title
            title="WHAT DOES"
            subtitle="Improve the Game by Focusing on Key Elements"
          />
        </div>
        <div className="flex gap-5 justify-around mt-8">
            <Card1
              imageSrc="http://shippo.imoodev.com/wp-content/uploads/2023/03/coach-football.png"
              title="Experience Coaching              "
              description="Lorem ipsum dolor consectetur adipiscing tempor labore dolore magna"
            />
            <Card1
              imageSrc="http://shippo.imoodev.com/wp-content/uploads/2023/03/heart.png"
              title="Mental Ability"
              description="Lorem ipsum dolor consectetur adipiscing tempor labore dolore magna"
            />
            <Card1
              imageSrc="http://shippo.imoodev.com/wp-content/uploads/2023/03/cross-shield-1.png"
              title="Controlled Recovery"
              description="Lorem ipsum dolor consectetur adipiscing tempor labore dolore magna"
            />
            <Card1
              imageSrc="http://shippo.imoodev.com/wp-content/uploads/2023/03/cross-shield-1.png"
              title="Cultural & Educational Activities"
              description="Lorem ipsum dolor consectetur adipiscing tempor labore dolore magna"
            />
        </div>
      </div>
    );
  }
}
