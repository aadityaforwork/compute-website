"use client"; 

import dynamic from "next/dynamic";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { CanvasRevealEffectDemo } from "@/components/ui/TeamCards";
import React from "react";
import { FaAnchor, FaHome, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Page = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            { name: "Home", link: "/", icon: <FaHome /> },
            { name: "Projects", link: "/projects", icon: <FaAnchor /> },
            { name: "Events", link: "/events", icon: <FaHome /> },
            { name: "Team", link: "/team", icon: <FaHome /> },
          ]}
        />
      </div>

      <CanvasRevealEffectDemo />
      <hr className="my-8 w-full border-t border-gray-200 dark:border-gray-700" />
      <p className="py-4 font-mono">
        Check out <span className="text-purple">@DJS Compute</span>
      </p>
      <div className="mb-[3vw] flex space-x-[2vw]">
        <a
          href="https://github.com/djscompute/compute-website"
          className="text-[3vh] border border-white rounded-full p-[1vh] hover:scale-90"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/company/djscompute/posts/?feedView=all"
          className="text-[2.8vh] hover:scale-90 border border-white rounded-full p-[1vh]"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/djscompute/"
          className="text-[3vh] border hover:scale-90 border-white rounded-full p-[1vh]"
        >
          <FaInstagram />
        </a>
      </div>
    </main>
  );
};

export default dynamic(() => Promise.resolve(Page), { ssr: false });
