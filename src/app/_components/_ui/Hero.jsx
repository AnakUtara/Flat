"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero({ children, data }) {
	const [count, setCount] = useState(0);
	const [count2, setCount2] = useState(1);
	const [isCounted, setIsCounted] = useState(false);
	useEffect(() => {
		//Implementing the setInterval method
		const interval = setInterval(() => {
			count === data.length - 1 ? setCount(0) : setCount(count + 1);
			count2 === data.length - 1 ? setCount2(0) : setCount2(count2 + 1);
			setIsCounted(true);
		}, 6 * 1000);

		const timeout = setTimeout(() => {
			setIsCounted(false);
		}, 5000);

		//Clearing the interval
		return () => {
			clearInterval(interval);
			clearTimeout(timeout);
		};
	}, [count]);
	return (
		<div className="hero h-[91dvh] relative">
			{/* image slideshow */}
			<Image
				className={`hero-overlay h-[91dvh] object-cover`}
				src={`${data[count2]}`}
				alt="works"
				fill={true}
				priority={true}
				placeholder="blur"
				blurDataURL={`${data[count2]}`}
			/>
			<Image
				className={`hero-overlay h-[91dvh] object-cover ${
					isCounted ? "" : "animate-fadeOut"
				}`}
				src={`${data[count]}`}
				alt="works"
				fill={true}
				priority={true}
				placeholder="blur"
				blurDataURL={`${data[count2]}`}
			/>
			<div className="hero-overlay h-[91dvh] bg-gradient-to-br from-transparent to-secondary/80 z-10"></div>
			{children}
		</div>
	);
}
