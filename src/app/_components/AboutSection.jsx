import Link from "next/link";
import PageSection from "./PageSection";

export default function AboutSection() {
	return (
		<PageSection>
			<img
				className="w-full aspect-video object-cover mb-5 transition-all duration-200 grayscale hover:grayscale-0 lg:hidden"
				src="https://images.pexels.com/photos/2962135/pexels-photo-2962135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
				alt="Flat Team"
			/>
			<article className="flex justify-between lg:items-center mb-5">
				<h2
					className={`font-bold text-2xl mr-10 sm:mr-16 lg:mr-0 lg:self-start`}
				>
					About Us.
				</h2>
				<img
					className="hidden max-w-[480px] aspect-video object-cover transition-all duration-200 grayscale hover:grayscale-0 mx-16 xl:mx-48 lg:block"
					src="https://images.pexels.com/photos/2962135/pexels-photo-2962135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
					alt="Flat Team"
				/>
				<div className="flex flex-col lg:h-[270px] justify-between">
					<p
						className={`font-light text-right leading-5 text-sm text-balance md:text-base`}
					>
						We are a passionate team of interior designers dedicated to crafting
						exceptional living spaces that are both beautiful and functional. We
						believe that your home should be a reflection of your personality
						and lifestyle. We work closely with you to understand your vision
						and create a space that you'll love coming home to.
					</p>
					<Link
						href={"/"}
						className="hidden self-end mt-5 rounded-none btn btn-wide lg:inline-flex btn-outline font-semibold"
					>
						Know Us More
					</Link>
				</div>
			</article>
			<Link
				href={"/"}
				className="mt-2 rounded-none btn btn-block btn-outline font-semibold lg:hidden"
			>
				Know Us More
			</Link>
		</PageSection>
	);
}
