import { Carousel } from "flowbite-react";
import { anton, hanken } from "../../_utils/fonts";
import testimonialCarouselTheme from "../../_utils/testimonialCarouselTheme";

export default function Testimonials({ data }) {
	return (
		<div className="w-full relative lg:snap-start">
			<h2
				className={`${anton.className} hidden min-[425px]:block tracking-tight absolute w-full font-bold text-5xl z-30 top-0 right-0 text-right p-5 md:p-8 text-base-100 text-nowrap`}
			>
				Our
				<br />
				Clients
			</h2>
			<h2
				className={`${anton.className} min-[425px]:hidden tracking-tight absolute w-full font-bold text-5xl z-30 top-0 right-0 text-right p-5 md:p-8 text-base-100 text-nowrap`}
			>
				Our Clients
			</h2>
			<Carousel theme={testimonialCarouselTheme} slideInterval={6000}>
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
							<h2 className={`text-xl sm:text-3xl lg:text-4xl font-bold`}>
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
		</div>
	);
}
