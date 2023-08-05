import React, { Component } from "react";
import Card2 from "../../common/Card2/Card2";
import Title from "../../common/Title/Title";

export default class BlogSection extends Component {
  render() {
    return (
      <div className="w-[80%] mx-auto mt-9 bg-red-100 p-7 rounded-md">
        <div>
          <Title title="BLOGS" subtitle="Read Our Latest Blog" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-7">
          <Card2
            imageSrc="http://shippo.imoodev.com/wp-content/uploads/2023/03/swimmers-racing-in-pool-e1683723560450.jpg"
            altText="Swimmers Racing in Pool"
            title="Swimmers Racing"
            description="If a dog chews shoes, whose shoes does he choose?"
            timeData="3 hours ago"
            categoryText="Sports"
          />

          <Card2
            imageSrc="http://shippo.imoodev.com/wp-content/uploads/2023/05/crossfit-athlete-doing-exercise-with-a-barbell--e1683723563333.jpg"
            altText="Crossfit Athlete Doing Exercise"
            title="Crossfit Athlete"
            description="This is another example of a reusable card component."
            timeData="Today at 2 PM"
            categoryText="Fitness"
          />

          <Card2
            imageSrc="http://shippo.imoodev.com/wp-content/uploads/2023/05/female-soccer-team-and-their-coach-going-through-game-plan-on-football-pitch--e1683723572740.jpg"
            altText="Female Soccer Team and Coach"
            title="Female Soccer Team"
            description="If a dog chews shoes, whose shoes does he choose?"
            timeData="1 day ago"
            categoryText="Sports"
          />

          <Card2
            imageSrc="http://shippo.imoodev.com/wp-content/uploads/2023/05/female-football-players-celebrating-their-victory-e1683723569848.jpg"
            altText="Female Football Players Celebrating Victory"
            title="Female Football Players"
            description="This is another example of a reusable card component."
            timeData="2 days ago"
            categoryText="Sports"
          />
        </div>
      </div>
    );
  }
}
