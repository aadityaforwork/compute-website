"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import CodeLikeHer from "../../public/Code-like-her.png";
import Flutterverse from "../../public/flutterverse.png";
import DataEngineering from "../../public/Data-engineering.png";
import DataAnalysis from "../../public/da.png";
import MLbootcamp from "../../public/ml-bootcamp.png";

const cardData = [
  {
    title: "Code Like Her",
    description:
      "Hey there, tech-savvy ladies! 👩‍💻 Get ready to showcase your coding prowess and celebrate women in tech at this Women's Day Challenge! Dive into exciting challenges, connect, and inspire! ✨💻",
    bgColor: "bg-indigo-800",
    imageSrc: CodeLikeHer,
  },
  {
    title: "Data Engineering Seminar",
    description:
      "Unlock the secrets of data engineering with insights from Mr. Aakash Shah! 📊✨ Join us for a journey led by this DJSCE alumni and Assistant VP at J.P. Morgan Chase & Co. Connect with the future of data! 🚀",
    bgColor: "bg-gray-900",
    imageSrc: DataEngineering,
  },
  {
    title: "Flutterverse",
    description:
      "From inception to implementation! 🚀 Dive deep into the world of Flutter and turn ideas into reality. Whether you're just starting or enhancing your skills, this is your roadmap to success! 📱✨",
    bgColor: "bg-green-800",
    imageSrc: Flutterverse,
  },
  {
    title: "Data Analysis Seminar",
    description:
      "Discover how top companies leverage data for success! 📈💡 Uncover the world of data science, analytics, and machine learning, and learn about the real challenges in these fields! 🌐",
    bgColor: "bg-orange-800",
    imageSrc: DataAnalysis,
  },
  {
    title: "ML Bootcamp",
    description:
      "Master machine learning from start to finish! 🚀💻 Join our ML Bootcamp by DJS-Compute and DJS-S4DS, and unlock the true power of data with a carefully crafted roadmap! 📊🤖",
    bgColor: "bg-red-800",
    imageSrc: MLbootcamp,
  },
];



export function CardDemo() {
  return (
    <div className="p-8 px-2">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-12">
        Curating Excellence:{" "}
        <span className="text-purple">
          Our Club&apos;s Premier Events
        </span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={cn(
              "group relative h-96 w-full rounded-lg shadow-xl overflow-hidden cursor-pointer",
              "transition-all duration-500 ease-in-out",
              card.bgColor
            )}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 overflow-hidden z-5">
              <div 
                className="absolute inset-0 h-full w-[200%] -translate-x-1/2"
                style={{
                  background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 25%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0) 75%)',
                  animation: 'shimmerMove 4s infinite linear',
                }}
              />
            </div>

            {/* Background overlay */}
            <div className="absolute inset-0 bg-purple-800/50 transition-opacity duration-300 group-hover:opacity-0" />

            {/* Image */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
              <Image
                src={card.imageSrc}
                alt={card.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-4 flex flex-col justify-end">
              <div className="relative z-20 transition-opacity duration-300 group-hover:opacity-0">
                <h2 className="font-bold mb-4 text-xl md:text-3xl text-white">
                  {card.title}
                </h2>
                <p className="font-semibol  text-sm md:text-base text-white/90">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Shimmer keyframes */}
      <style jsx>{`
        @keyframes shimmerMove {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}




export default CardDemo; 

