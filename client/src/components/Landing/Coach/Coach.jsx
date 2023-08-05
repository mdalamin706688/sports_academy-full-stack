import React, { Component } from "react";

export default class Coach extends Component {
  render() {
    return (
      <div className="hero mt-7 rounded-md bg-[#042f2e] text-white">
        <div className="hero-content h-[450px] flex-col lg:flex-row justify-between">
          <div>
            <img
              src="https://media.licdn.com/dms/image/D5603AQEOqSRgNMW16g/profile-displayphoto-shrink_800_800/0/1676070253676?e=2147483647&v=beta&t=-VwdmP3d_sPczacrtZv8Hm1oCEnhIUibUJrMm6enkG4"
              className="w-[300px] max-w-sm rounded-xl transform -rotate-6 mb-6 lg:mb-0"
            />
          </div>

          <div className="lg:pl-8">
            <h1 className="text-2xl text-white mb-4">
              "On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble that are bound to ensue."
            </h1>
            <div className="border-2 border-red-700 mb-4"></div>

            <div className="text-white">
              <h1 className="text-lg">Andrew Yako</h1>
              <p className="text-md">Coach of Halland Football Academy</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
