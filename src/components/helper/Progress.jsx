import React from "react";
import { useState, useEffect } from "react";

const CircleProgress = ({ percentage, skill }) => {
  const [progress, setProgress] = useState(0); // Start with 0% and animate to the desired percentage

  useEffect(() => {
    let timeout;
    if (progress < percentage) {
      timeout = setTimeout(() => setProgress(progress + 1), 10); // Increment progress smoothly
    }
    return () => clearTimeout(timeout); // Cleanup on component unmount
  }, [progress, percentage]);

  const radius = 50; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle

  // Calculate the stroke dashoffset based on the percentage
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center">
      <svg
        className="w-24 h-24"
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#e5e7eb" // Tailwind gray-200
          strokeWidth="10"
        />
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#14b8a6" // Tailwind Teal-500
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-300"
        />
        <text
          x="60"
          y="60"
          textAnchor="middle"
          dy=".3em"
          className="text-xl font-semibold fill-current text-teal-200"
        >
          {progress}%
        </text>
      </svg>
      <h1 className="text-white mt-3 ">{skill}</h1>
    </div>
  );
};

const ProgressBar = ({ percentage, skill }) => {
  return (
    <div className="p-4">
      <CircleProgress percentage={percentage} skill={skill} />
    </div>
  );
};

export default ProgressBar;

