"use client";
import Image from "next/image";
import React from "react";
import { Card, Carousel } from "./Apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full md:py-20 py-4">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Get to know the Departments.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const WebDevelopmentContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"web-dev-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Build, Deploy, and Scale.
              </span>{" "}
              Web development is at the core of the digital experience. From
              designing responsive websites to deploying scalable web
              applications, we cover everything from front-end to back-end
              development. Learn the latest technologies like React, Next.js,
              and Node.js, and turn your ideas into reality.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Web Development"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const DataAnalysisContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"data-analysis-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Uncover Insights from Data.
              </span>{" "}
              Data analysis allows us to make sense of vast amounts of
              information. Dive into the world of data analytics, where you will
              learn how to use Python, R, and tools like Power BI to extract
              insights from raw data. From exploratory data analysis to
              predictive modeling, we will teach you how to transform data into
              actionable decisions.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Data Analysis"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const MachineLearningContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"machine-learning-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Teach Machines to Learn.
              </span>{" "}
              Machine learning is revolutionizing industries by enabling systems
              to learn from data. Explore algorithms such as decision trees,
              neural networks, and deep learning models. Whether its building
              predictive models or implementing AI-powered solutions, you will
              gain hands-on experience with the most sought-after skills in tech
              today.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Machine Learning"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};


const DataEngineeringContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"machine-learning-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Converting data into actionable insights.
              </span>{" "}
              Data engineering is reshaping the way organizations manage and utilize their data. By designing robust data pipelines and architectures, data engineers ensure that data flows seamlessly from various sources to analytical tools. Explore essential technologies like ETL processes, data warehousing, and big data frameworks. From building scalable data infrastructures to optimizing data storage and retrieval,
              you will gain practical experience in the critical skills needed to drive data-driven decision-making in today&apos;s tech landscape.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Data Engineering"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Web Development",
    title: "You can build with us.",
    // src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    src: "/SiddhanthChanges/web development.webp",
    content: <WebDevelopmentContent />,
  },
  {
    category: "Data Analysis",
    title: "Enhance your data analytics skills.",
    // src: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   src: "/SiddhanthChanges/analytics.jpg",
    content: <DataAnalysisContent />,
  },
  {
    category: "Machine Learning",
    title: "We train and deploy models.",
    // src: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    src: "/SiddhanthChanges/MachineLearning.webp",
    content: <MachineLearningContent />,
  },

  {
    category: "Data Engineering",
    title: "Converting data into actionable insights.",
    // src: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    src: "/SiddhanthChanges/dataEngineering.avif",
    content: <DataEngineeringContent />,
  },
];
