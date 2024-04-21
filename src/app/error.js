"use client";
import { useEffect } from "react";
import { FaRotate } from "react-icons/fa6";

export default function Error({ error, reset }) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);
	return (
		<main className="bg-secondary h-dvh grid place-items-center">
			<div className="flex flex-col items-center gap-5">
				<h2 className="text-4xl text-base-100">
					Sorry, unable to fetch data. Please, try again later...
				</h2>
				<button
					type="button"
					className="btn btn-md btn-accent font-bold"
					onClick={() => reset()}
				>
					<FaRotate />
					Refresh
				</button>
			</div>
		</main>
	);
}
