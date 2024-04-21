import { anton } from "../_utils/fonts";
import Link from "next/link";
import Hero from "../_components/_ui/Hero";
import aboutImages from "../_lib/aboutImages";

export default function AboutUs() {
	return (
		<main className="bg-base-200">
			<Hero data={aboutImages}>
				<div className="hero-content z-30">
					<article className="flex flex-col sm:flex-row items-start">
						<h2
							className={`${anton.className} text-6xl mb-4 sm:mb-0 sm:text-8xl tracking-tight text-base-100`}
						>
							Our
							<br />
							Story
						</h2>
						<div className="hidden sm:flex divider divider-horizontal after:bg-base-100 before:bg-base-100"></div>
						<div
							className={`font-light text-justify sm:w-80 lg:w-96 sm:leading-7 text-sm lg:text-base text-balance text-base-100`}
						>
							<p className="mb-5">
								<span className={`${anton.className}`}>Flat</span> was founded
								on the belief that everyone deserves to live in a beautiful and
								functional space. We are a team of passionate designers with a
								keen eye for detail and a commitment to creating spaces that
								inspire and uplift.
							</p>
							<p>
								Our mission is to partner with you to transform your house into
								a home. We believe in the power of good design to improve your
								quality of life and well-being. We take a collaborative approach
								to every project, working closely with you to understand your
								vision, budget, and lifestyle.
							</p>
							<Link
								href={"/teams"}
								className="btn btn-block btn-accent text-nowrap rounded-none mt-5 font-bold"
							>
								Meet Our Design Team
							</Link>
						</div>
					</article>
				</div>
			</Hero>
		</main>
	);
}
