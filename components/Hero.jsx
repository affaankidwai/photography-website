import React from "react";

const Hero = ({ heading, message }) => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <div className="p-1 text-white z-[2] mt-[-5rem]">
        <h2 className="text-8xl font-bold">Hi, I'm Affaan Kidwai.</h2>
        <p className="py-5 text-xl">
          I capture the natural beauty of our world through my lens.
        </p>
        <button className=" px-8 py-2 border border-gray-400">Have a look around!</button>
      </div>
    </div>
  );
};

export default Hero;
