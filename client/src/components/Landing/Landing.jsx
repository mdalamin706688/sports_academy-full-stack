import React, { Component } from "react";
import Hero from "../common/Hero/Hero";
import About from "./About/About";
import Coach from "./Coach/Coach";
import Gallery from "./Gallery/Gallery";
import Academy from "./Academy/Academy";
import Facilities from "./Facilities/Facilities";
import What_does from "./what_does/what_does";
import Testimonials from "./Testimonials/Testimonials";
import Partner from "./Partner/Partner";
import Blogs from "./Blogs/Blogs";

export default class Landing extends Component {
  render() {
    return (
      <div className="bg-base-400 ">
        <Hero></Hero>
        <About></About>
        <Coach></Coach>
        <Academy></Academy>
        <Gallery></Gallery>
        <Facilities></Facilities>
        <What_does></What_does>
        <Testimonials></Testimonials>
        <Partner></Partner>
        <Blogs></Blogs>
      </div>
    );
  }
}
