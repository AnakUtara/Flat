import { Carousel } from "flowbite-react";
import { anton, hanken } from "../_utils/fonts";
import PageSection from "./PageSection";

const customCarouselTheme = {
	root: {
		base: "relative h-svh w-full",
		leftControl:
			"absolute left-0 top-0 flex items-center justify-center focus:outline-none",
		rightControl:
			"absolute right-0 top-0 flex items-center justify-center focus:outline-none",
	},
	indicators: {
		base: "size-2 rounded-full",
	},
	control: {
		base: "inline-flex h-svh px-1 items-center justify-center rounded-none transition-color duration-300 bg-base-300/0 group-hover:bg-base-300/50",
		icon: "size-6 md:size-8 lg:size-10 text-base-100 lg:size-8",
	},
	scrollContainer: {
		base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-none",
		snap: "snap-x",
	},
};

export default function Testimonials({ data }) {
	return (
		<PageSection customClass="w-full lg:flex-row justify-between relative">
			<h2
				className={`${anton.className} tracking-tight absolute w-full font-bold text-5xl z-30 justify-end top-0 right-0 text-right p-5 md:p-8 text-base-100 text-nowrap`}
			>
				Our
				<br />
				Clients
			</h2>
			<Carousel theme={customCarouselTheme} slideInterval={5000} pauseOnHover>
				{data.map((t) => (
					<div
						key={t.id}
						className={`flex h-full items-center justify-center bg-center bg-cover bg-black/60 bg-blend-darken`}
						style={{
							backgroundImage: `url(${t.image})`,
						}}
					>
						<div
							className={`flex flex-col h-full items-start max-w-[640px] justify-center text-base-100 p-10 md:px-20 md:py-0`}
						>
							<h2
								className={`text-2xl sm:text-3xl lg:text-4xl font-bold drop-shadow-xl`}
							>
								{t.details}
							</h2>
							<div className="divider before:bg-base-100 after:bg-base-100 my-2"></div>
							<h3
								className={`${anton.className} text-xl md:text-2xl lg:text-3xl font-bold flex justify-between w-full items-center`}
							>
								{t.name}
								<span
									className={`badge badge-outline rounded-none p-3 ml-1 text-sm md:text-md lg:text-lg ${hanken.className} px-1`}
								>
									{t.job}
								</span>
							</h3>
						</div>
					</div>
				))}
			</Carousel>
		</PageSection>
	);
}
