import React, { Component } from "react";

export default class Hero extends Component {
  render() {
    return (
      <div>
        <div
          className="hero min-h-screen max-w-screen-2xl mx-auto"
          style={{
            backgroundImage:
              "url(https://cutewallpaper.org/27/black-hd-wallpaper-staduim/302953723.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Visit Us!</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
