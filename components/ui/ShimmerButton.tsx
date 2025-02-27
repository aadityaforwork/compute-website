import React from "react";

const ShimmerButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <div>
      <button onClick={handleClick} className="inline-flex my-10 md:my-0 w-full h-12 animate-shimmer items-center justify-center px-7 rounded-md border border-purple md:w-auto md:mt-10 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        {title}
      </button>
    </div>
  );
};

export default ShimmerButton;
