import Link from "next/link";
import Hero from "./_components/Hero";
import services from "./_lib/services";
import ServiceCard from "./_components/ServiceCard";
import AboutSection from "./_components/AboutSection";
import PageSection from "./_components/PageSection";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between bg-base-200">
			<Hero />
			<AboutSection />
			<PageSection>
				<h2 className={`font-bold text-2xl text-center mb-5`}>
					Our
					<br />
					Services.
				</h2>
				<div className="flex justify-center max-w-[2560px] flex-wrap mb-5">
					{services.map((service) => (
						<Link
							key={service.id}
							href={`#${service.id}`}
							className="btn btn-outline h-fit min-h-fit py-2 rounded-full text-sm text-nowrap mr-2 mb-2"
						>
							{service.title}
						</Link>
					))}
				</div>
				<div className="carousel w-full">
					{services.map((service) => (
						<ServiceCard key={service.id} data={service} />
					))}
				</div>
			</PageSection>
			<PageSection></PageSection>
		</main>
	);
}
