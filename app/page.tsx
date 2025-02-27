"use client"
import dynamic from "next/dynamic";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaAnchor, FaHome, FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { RiCalendarEventFill } from "react-icons/ri";
import { GoProjectRoadmap } from "react-icons/go";

// Dynamically import components with SSR disabled
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const Departments = dynamic(() => import("@/components/Departments"), { ssr: false });
const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            { name: "Home", link: "/", icon: <FaHome /> },
            { name: "Projects", link: "/projects", icon: <FaAnchor /> },
            { name: "Events", link: "/events", icon: <RiCalendarEventFill /> },
            { name: "Team", link: "/team", icon: <GoProjectRoadmap /> },
          ]}
        />
        <Hero />
        <Departments />
        <Grid />
      </div>

      <hr className="my-8 w-full border-t border-gray-200 dark:border-gray-700" />
      <div className="flex space-x-4 ">
        <p className="py-4 font-mono mb-5 ">
          Check out <span className="text-purple">@DJS Compute</span>
        </p>
        <div className="h-8 w-px bg-gray-200 dark:bg-gray-700 my-4"></div>

        {/* Social Icons */}
        <a href="https://www.instagram.com/djscompute/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-2xl text-purple hover:text-white mt-4" />
        </a>
        <a href="https://in.linkedin.com/company/djscompute" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="text-2xl text-purple hover:text-white mt-4" />
        </a>
        <a href="https://github.com/djscompute" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl text-purple hover:text-white mt-4" />
        </a>
      </div>
    </main>
  );
}
