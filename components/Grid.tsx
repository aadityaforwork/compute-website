import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
  <section id="about">
    <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        About Us
      </h2>
    <BentoGrid className="w-full py-20">
        {gridItems.map(({id,title,description,className,img
          ,imgClassName,titleClassName,spareImg}) => (
            <BentoGridItem
              id={id}
              key={id}
              title = {title}
              description = {description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
        ))}
    </BentoGrid>
  </section>
  )
};

export default Grid;

//aaditya is testing
