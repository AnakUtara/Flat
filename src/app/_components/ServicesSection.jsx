"use client";
import { anton } from "../_utils/fonts";
import ServiceCard from "./ServiceCard";
import Link from "next/link";

export default function ServicesSection({ data }) {
	return (
		<div className="p-5 md:p-8">
			<h2
				className={`${anton.className} font-bold text-5xl text-center tracking-tight mb-5 md:mb-8`}
			>
				Our Services
			</h2>
			<div className="flex flex-wrap justify-between w-full gap-y-7">
				{data.map((service) => (
					<ServiceCard key={service.id} data={service} />
				))}
			</div>
			<Link
				href={"/services"}
				className="btn btn-accent btn-block lg:btn-lg text-nowrap rounded-none mt-5 font-bold"
			>
				More Details About Our Services
			</Link>
		</div>
	);
}
