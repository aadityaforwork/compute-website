"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import Image, { StaticImageData } from "next/image"; // Import the Image component
import Chairperson from "@/public/chairperson.png";
import Fiona from "@/public/fiona.png";
import Advait from "@/public/advait.png";

export function CanvasRevealEffectDemo() {
  return (
    <>
      <h1 className="md:text-6xl font-bold text-center mt-12">
        Meet the superstars:{" "}
        <span className="md:text-6xl font-bold text-center mb-8 text-purple">
          Our Team
        </span>{" "}
      </h1>

      <div className="py-20 my-10 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
        
        <Card title="Chairperson - Aaditya Malani" imageSrc={Chairperson}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-sky-600"
          />
        </Card>
        <Card title="Vice-Chairperson - Fiona Haria" imageSrc={Fiona}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-pink-900"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card title="Vice-Chairperson - Advait Sankhe" imageSrc={Advait}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-emerald-900"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>

      {/* This is trinity-coordinators */}
      <div className="py-20 my-10 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
        <Card title="Chairperson - Isha Solanki" imageSrc={Chairperson}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-red-600"
          />
        </Card>

        <Card title="Vice-Chairperson - Vipul Mhatre" imageSrc={Fiona}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-red-600"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>

        <Card title="Project Lead -  Aanshuvi Shah" imageSrc={Advait}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-red-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>

  {/* This is WebDev Leads */}
      <div className="py-20 my-10 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
        <Card title="Web Dev Lead - Krish Thacker" imageSrc={Chairperson}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-sky-600"
          />
        </Card>
        <Card title="Web Dev Lead- Taher Afsar" imageSrc={Fiona}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-pink-900"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>

        <Card title="Web Dev Lead - Vedant Naik" imageSrc={Advait}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-emerald-900"
            colors={[[125, 211, 252]]}
          />
        </Card>

        <Card title="Web Dev Lead - Kartikeya Pandey" imageSrc={Advait}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-emerald-900"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>

{/* 
      This is DAML Lead */}
      <div className="py-20 my-10 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
        <Card title="DA & ML Lead - Ananya Godse" imageSrc={Chairperson}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-sky-600"
          />
        </Card>
        <Card title="DA & ML Lead - Kartik Nambiar" imageSrc={Fiona}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-pink-900"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card title="DA & ML Lead -Aryan Chintakindi" imageSrc={Advait}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-emerald-900"
            colors={[[125, 211, 252]]}
          />
        </Card>

        <Card title="DA & ML Lead - Vaishanavi Shreedhar" imageSrc={Advait}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-emerald-900"
            colors={[[125, 211, 252]]}
          />
        </Card>


{/* This is DE Lead */}
      </div>
      <div className="py-20 my-10 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
        <Card title="Data Engineering Lead - Harshvardhan Pandey" imageSrc={Chairperson}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-sky-600"
          />
        </Card>
        <Card title="Data Engineering Lead - Vanshika Shah" imageSrc={Fiona}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-pink-900"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card title="Data Engineering Lead - Vanshika Shah" imageSrc={Advait}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-emerald-900"
            colors={[[125, 211, 252]]}
          />
        </Card>
        <Card title="Data Engineering Lead - Bhoomika Agarwal" imageSrc={Advait}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-emerald-900"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>

{/* This is Marketing Heads */}
      <div className="py-20 my-10 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
        <Card title="Marketing Lead - Parth Patel" imageSrc={Chairperson}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-sky-600"
          />
        </Card>
        <Card title="Marketing Lead - Delaine Rodrigues" imageSrc={Fiona}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-pink-900"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card title="Marketing Lead- Arya Mangaonkar" imageSrc={Advait}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-emerald-900"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>


     {/* This is Design Lead */}
      <div className="py-20 my-10 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
        <Card title="Design Lead - Meet Vaidya" imageSrc={Chairperson}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-sky-600"
          />
        </Card>
        <Card title="Design Lead- Vidhi Parmar" imageSrc={Fiona}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-pink-900"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card title="Design Lead - Charmi Panchal" imageSrc={Advait}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-emerald-900"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
{/* 
      This nss/trinity coordinator */}
      <div className="py-20 my-10 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
        <Card title="Social Representative - Archi Patel" imageSrc={Chairperson}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-sky-600"
          />
        </Card>
        <Card title="Social Representative - Vedanshu Muni" imageSrc={Fiona}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-pink-900"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card title="DJS Trinity Coordinator - Harshil Solanki" imageSrc={Advait}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-emerald-900"
            colors={[[125, 211, 252]]}
          />
        </Card>
        <Card title="DJS Trinity Coordinator - Farhan Mohammed" imageSrc={Advait}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-emerald-900"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </>
  );
}

const Card = ({
  title,
  imageSrc,
  children,
}: {
  title: string;
  imageSrc: string | StaticImageData;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex flex-col items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-[30rem]" // Fixed height for the card
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 text-center w-full h-full">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill" 
          objectFit="cover" 
          className="rounded-2xl mx-auto mb-4"
        />
        
        {/* Title section only visible on hover */}
        <div
          className={`absolute w-full left-1/2 transform -translate-x-1/2 rounded-lg p-2 bg-blue-900 bg-opacity-70 transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <h2 className="text-xl font-bold text-white">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
