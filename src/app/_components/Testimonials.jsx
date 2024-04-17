import { Carousel } from "flowbite-react";
import { anton } from "../_utils/fonts";
import PageSection from "./PageSection";

const customCarouselTheme = {
	root: {
		base: "relative h-[500px] md:h-[480px] w-full",
		leftControl:
			"absolute left-0 top-0 flex h-full items-center justify-center focus:outline-none",
		rightControl:
			"absolute right-0 top-0 flex h-full items-center justify-center focus:outline-none",
	},
	indicators: {
		base: "size-2 rounded-full",
	},
	control: {
		base: "inline-flex size-10 lg:size-12 items-center justify-center rounded-none transition-color duration-300 bg-base-300/0 group-hover:bg-base-300/80",
		icon: "size-6 md:size-8 text-base-100 lg:size-8",
	},
	scrollContainer: {
		base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-none",
		snap: "snap-x",
	},
};

export default function Testimonials({ data }) {
	return (
		<PageSection
			bgColor="pb-5 md:pb-8"
			customClass="w-full lg:flex-row justify-between relative"
		>
			<h2
				className={`absolute w-full flex font-bold text-2xl z-30 justify-center top-0 md:right-0 p-5 text-base-100 text-nowrap`}
			>
				What Our Clients Say
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
							className={`flex flex-col h-full items-center justify-center text-center text-base-100 p-10 md:px-20 md:py-0`}
						>
							<h2
								className={`${anton.className} text-2xl sm:text-3xl md:text-4xl mb-4`}
							>
								{t.details}
							</h2>
							<h3 className="text-md lg:text-xl font-bold">{t.name}</h3>
							<p className="text-sm lg:text-lg">{t.job}</p>
						</div>
					</div>
				))}
			</Carousel>
		</PageSection>
	);
}
