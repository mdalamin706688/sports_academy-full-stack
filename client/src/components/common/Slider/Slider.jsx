import React, { Component } from "react";
import "./Slider.css"; // Import the CSS file with slider styles

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      direction: "left", // "left" or "right"
    };
  }

  componentDidMount() {
    this.startAutoSlideChange();
  }

  componentWillUnmount() {
    this.stopAutoSlideChange();
  }

  startAutoSlideChange = () => {
    this.slideInterval = setInterval(this.handleAutoSlideChange, 5000); // Change slide every 5 seconds (adjust the interval as needed)
  };

  stopAutoSlideChange = () => {
    clearInterval(this.slideInterval);
  };

  handleAutoSlideChange = () => {
    const { direction, currentSlide } = this.state;
    if (direction === "left") {
      this.handlePrevSlide();
    } else {
      this.handleNextSlide();
    }
  };

  handlePrevSlide = () => {
    this.setState((prevState) => ({
      currentSlide:
        (prevState.currentSlide - 1 + this.props.slides.length) %
        this.props.slides.length,
      direction: "right",
    }));
  };

  handleNextSlide = () => {
    this.setState((prevState) => ({
      currentSlide: (prevState.currentSlide + 1) % this.props.slides.length,
      direction: "left",
    }));
  };

  render() {
    const { slides } = this.props;
    const { currentSlide, direction } = this.state;
    const { leftImage, rightImage, textContent, playerName, playerRole } =
      slides[currentSlide];

    return (
      <div>
        <div className="p-7">
          <div className="">
            <div
              className={`flex justify-around items-center ${
                direction === "left" ? "slide-left" : "slide-right"
              }`}
            >
              {/* Left Image */}
              <div className="transform rotate-6">
                <img src={leftImage} className="h-[50vh] w-[30vh]" alt="Left" />
              </div>

              {/* Tilted Text */}
              <div className="w-[50%]">
                <p className="text-lg">{textContent}</p>
                <div className="mt-8">
                  <p>{playerName}</p>
                  <p className="text-sm ">{playerRole}</p>
                </div>
              </div>

              {/* Right Image */}
              <div className="transform -rotate-6">
                <img
                  src={rightImage}
                  className="h-[50vh] w-[30vh]"
                  alt="Right"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <button onClick={this.handlePrevSlide}>Previous</button>
          <button onClick={this.handleNextSlide}>Next</button>
        </div>
      </div>
    );
  }
}
