"use client";
import PageSection from "./PageSection";
import ServiceCard from "./ServiceCard";
import Link from "next/link";

export default function ServicesSection({ data }) {
	return (
		<PageSection customClass="w-full">
			<h2 className={`font-bold text-2xl text-center mb-5`}>
				Our
				<br />
				Services
			</h2>
			<div className="flex flex-wrap justify-between w-full gap-y-7">
				{data.map((service) => (
					<ServiceCard key={service.id} data={service} />
				))}
			</div>
			<Link
				href={"/services"}
				className="btn btn-outline btn-block lg:btn-lg text-nowrap rounded-none mt-5 font-bold"
			>
				More Details About Our Services
			</Link>
		</PageSection>
	);
}
