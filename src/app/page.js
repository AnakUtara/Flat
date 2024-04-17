import Hero from "./_components/Hero";
import services from "./_lib/services";
import testimonials from "./_lib/testimonials";
import AboutSection from "./_components/AboutSection";
import ServicesSection from "./_components/ServicesSection";
import Testimonials from "./_components/Testimonials";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between bg-base-200">
			<Hero />
			<AboutSection />
			<ServicesSection data={services} />
			<Testimonials data={testimonials} />
		</main>
	);
}
