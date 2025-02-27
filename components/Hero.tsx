import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import ShimmerButton from "./ui/ShimmerButton";
import { SparklesCore } from "./ui/Sparkles";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight className="-top-5 -right-20 md:-right-32 md:-top-20 h-screen" fill="blue" />
        <Spotlight className="-top-10 -left-full h-[80vh] w-[50vh]" fill="white" />
        <Spotlight className="top-28 left-40 h-[80vh] w-[50vh]" fill="indigo" />
        <Spotlight className="top-28 right-80 h-[80vh] w-[50vh]" fill="indigo" />
        <Spotlight className="top-10 right-10 md:right-31 md:top-20 h-screen" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.07] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
    
      <div className="relative flex flex-col items-center my-20 z-10">
        <div className="relative max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <div className="relative">
            <SparklesCore className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none" />
            <h2 className="relative uppercase tracking-widest text-lg text-center text-blue-100 max-w-80 z-10">
              DJS Compute
            </h2>
          </div>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="The official computing club of DJSCE powered by AWS."
          />

          <p className="text-center md:tracking-wider mt-4 text-sm md:text-lg lg:text-2xl">Hello welcome to the official page of DJS Compute!</p>
          <a href="/about">
            <ShimmerButton title="About us" icon={undefined} position={""} />
          </a>
        </div>

        {/* Boxes around the description section */}
        <div className="absolute inset-0 items-center justify-center md:block hidden">
          {/* Top-left box */}
          
          <div className="absolute top-[-10%] left-[10%] p-4 w-48 text-center font-bold bg-gray-300 text-purple rounded-lg shadow-md shadow-purple">
            Data Analysis
          </div>
          {/* Top-right box */}
          <div className="absolute top-[-10%] right-[10%] p-4 w-48 text-center font-bold bg-purple text-white rounded-lg shadow-md shadow-white-100">
            Web Development
          </div>
          {/* Bottom-left box */}
          <div className="absolute bottom-[-10%] left-[10%] p-4 w-48 text-center font-bold bg-purple text-white rounded-lg shadow-md shadow-white-100">
            Machine Learning
          </div>
          {/* Bottom-right box */}
          <div className="absolute bottom-[-10%] right-[10%] p-4 w-48 text-center font-bold bg-gray-300 text-purple rounded-lg shadow-md shadow-purple">
            Data Engineering
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
