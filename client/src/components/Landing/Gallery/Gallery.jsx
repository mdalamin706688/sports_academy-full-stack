import React from "react";
import Coacing from "./Coacing/Coacing";

const Gallery = () => {
  return (
    <div className="bg-pink-100 rounded-md">
      <h1 className=" mb-5 text-2xl text-center">The Gallery Academy</h1>
      <div className="flex justify-center mt-8">
        <div className="flex flex-wrap">
          <div className="w-80 h-100 rounded-xl transform -rotate-12 m-2 overflow-hidden">
            <img
              src="https://cdn3.vectorstock.com/i/1000x1000/79/67/soccer-and-football-player-man-logo-silhouette-vector-23067967.jpg"
              alt="Image 1"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-80 h-100 rounded-xl transform rotate-6 m-2 overflow-hidden">
            <img
              src="https://st3.depositphotos.com/1424188/13888/i/600/depositphotos_138881430-stock-photo-soccer-player-man-isolated.jpg"
              alt="Image 2"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-80 h-100 rounded-xl transform -rotate-12 m-2 overflow-hidden">
            <img
              src="https://media.istockphoto.com/id/466169394/photo/soccer-player-in-action.jpg?s=612x612&w=0&k=20&c=bs_v9JWOVxc8oaPSsudGNpHNRPD-GXej4d4a7hCnGpA="
              alt="Image 3"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto flex justify-center mt-7">
      <button className="btn btn-outline ">view Matches</button>
      </div>
      <Coacing></Coacing>
    </div>
  );
};

export default Gallery;
