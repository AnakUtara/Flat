import services from "./_lib/services";
import testimonials from "./_lib/testimonials";
import Hero from "./_components/_ui/Hero";
import AboutSection from "./_components/AboutSection";
import ServicesSection from "./_components/ServicesSection";
import Testimonials from "./_components/_ui/Testimonials";

export default function Home() {
	return (
		<main className="bg-base-200">
			<Hero />
			<AboutSection />
			<ServicesSection data={services} />
			<Testimonials data={testimonials} />
		</main>
	);
}
