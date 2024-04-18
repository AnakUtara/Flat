"use client";
import Link from "next/link";
import heroImages from "../_lib/heroImages";
import { useEffect, useState } from "react";
import { anton } from "../_utils/fonts";

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
			<div className="hero-overlay bg-gradient-to-br from-transparent to-gray-800 z-10"></div>
			<div className="hero-content p-8 w-full text-right text-neutral-content z-20">
				<div className="w-full flex flex-col items-end">
					<h1
						className={`text-3xl lg:text-5xl min-[425px]:text-nowrap font-bold mb-2`}
					>
						Create Your Dream Flat
					</h1>
					<p className="text-sm min-[425px]:text-lg md:text-xl lg:text-3xl mb-2">
						Inspiring Interior Design Solutions
					</p>
					<p className="text-xs min-[425px]:text-sm lg:text-lg mb-5 max-w-96 font-light">
						We transform spaces into stunning and functional havens that reflect
						your unique style.
					</p>
					<Link
						href={`/services`}
						className="btn btn-md lg:btn-lg rounded-none btn-accent"
					>
						Discover Our Design Expertise
					</Link>
				</div>
			</div>
		</div>
	);
}
