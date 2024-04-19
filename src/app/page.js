import Link from "next/link";
import services from "./_lib/services";
import testimonials from "./_lib/testimonials";
import heroImages from "./_lib/heroImages";
import Hero from "./_components/_ui/Hero";
import AboutSection from "./_components/AboutSection";
import ServicesSection from "./_components/ServicesSection";
import Testimonials from "./_components/_ui/Testimonials";

export default function Home() {
	return (
		<main className="bg-base-200">
			<Hero data={heroImages}>
				<div className="hero-content p-8 w-full text-right text-base-100 z-20">
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
							We transform spaces into stunning and functional havens that
							reflect your unique style.
						</p>
						<Link
							href={`/services`}
							className="btn btn-md lg:btn-lg rounded-none btn-accent"
						>
							Discover Our Design Expertise
						</Link>
					</div>
				</div>
			</Hero>
			<AboutSection />
			<ServicesSection data={services} />
			<Testimonials data={testimonials} />
		</main>
	);
}
