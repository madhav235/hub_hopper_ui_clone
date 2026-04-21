import React from "react";

const Section1 = () => {
  return (
    <div className="w-full relative">
      <img
        className="w-full h-full object-cover"
        src="https://files.hubhopper.com/studio-assets/images/2025-12-17/Hero-img.svg"
      ></img>
      <div className="absolute top-30 pl-35 flex flex-col justify-start h-fit w-full">
        <div className=" text-white font-extralight">
          <div className="flex">
            <div className="w-5.5 h-5.5 rounded-full bg-blue-500 border"></div>
            <div className="w-5.5 h-5.5 rounded-full bg-blue-500 -ml-2 border"></div>
            <div className="w-5.5 h-5.5 rounded-full bg-blue-500 -ml-2 border"></div>
            <p className="ml-1">
              Join our growing community of{" "}
              <span className="text-[#7983e7] font-medium">40k+ creators.</span>
            </p>
          </div>
        </div>
        <div className="mt-5">
          <p>
            <span className="text-white text-7xl">Best Platform To</span>
            <br></br>{" "}
            <span className="text-[#818cf8] text-7xl">
              Distribute Audio & Video <br />
              Podcast{" "}
            </span>{" "}
            <span className="text-white text-7xl">Effortlessly</span>
          </p>
        </div>
        <div className=" text-white text-xl font-extralight mt-5">
          Hubhopper helps you launch on 15+ platforms in just 5 minutes! <br />
          Build, track, and grow your podcast with the help of our easy-to-use{" "}
          <br /> free podcast software.
        </div>
        <div className="mt-5 flex gap-5 w-full">
          <button className="bg-[#6366f1] text-white px-20 py-2 rounded-md">Start Your 7-Day Trial</button>
          <button className="bg-white text-white px-30 py-2 rounded-md">
            <p className="text-[#6366f1]">Book a call</p>
            <p className="text-[#88888c]">20% Off Enterprise</p>
          </button>
        </div>
        <div className="text-md mt-2"><span className="text-white font-extralight">or </span><span className="text-[#6366f1] font-extralight">Get Started for Free</span></div>
      </div>
    </div>
  );
};

export default Section1;
