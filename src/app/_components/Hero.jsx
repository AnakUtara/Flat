"use client";
import heroImages from "../_lib/heroImages";
import { useEffect, useState } from "react";

export default function Hero() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
  const [isCounted, setIsCounted] = useState(false);
  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      count === heroImages.length - 1 ? setCount(0) : setCount(count + 1);
      count2 === heroImages.length - 1 ? setCount2(0) : setCount2(count2 + 1);
      setIsCounted(true);
    }, 10 * 1000);

    const timeout = setTimeout(() => {
      setIsCounted(false);
    }, 9000);

    //Clearing the interval
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [count]);
  return (
    <div className="hero min-h-dvh">
      {/* image slideshow */}
      <img
        className={`hero-overlay aspect-video object-cover`}
        src={`${heroImages[count2]}`}
        alt="works"
      />
      <img
        className={`hero-overlay aspect-video object-cover ${
          isCounted ? "" : "animate-fadeOut"
        }`}
        src={`${heroImages[count]}`}
        alt="works"
      />
      <div className="hero-overlay bg-gradient-to-br from-transparent border-t-orange-200 z-10"></div>
      <div className="hero-content max-w-[1440px] text-right text-neutral-content z-20">
        <div className="max-w-md">
          <h1 className="mb-5 text-3xl font-bold">
            Create Your Dream Flat:{" "}
            <span className="font-normal">
              Inspiring Interior Design Solutions
            </span>
          </h1>
          <p className="mb-5 font-light">
            We transform spaces into stunning and functional havens that reflect
            your unique style.
          </p>
          <button className="btn rounded-none btn-outline btn-primary">
            Discover Our Design Expertise
          </button>
        </div>
      </div>
    </div>
  );
}
