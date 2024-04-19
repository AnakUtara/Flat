import { anton } from "../_utils/fonts";
import Link from "next/link";
import {
	FaCompassDrafting,
	FaHandshake,
	FaAtom,
	FaCouch,
	FaKitchenSet,
	FaTrowelBricks,
	FaCube,
	FaPeopleRoof,
	FaTruckRampBox,
} from "react-icons/fa6";
import services from "../_lib/services";
import Testimonials from "../_components/_ui/Testimonials";
import testimonials from "../_lib/testimonials";
import PageHeader from "../_components/_ui/PageHeader";

export default function Services() {
	return (
		<main className="bg-base-200">
			<PageHeader
				title={
					<>
						Our
						<br />
						Services
					</>
				}
				desc={
					<>
						At <span className={`${anton.className}`}>Flat</span>, we believe
						your home should be a sanctuary that reflects your unique
						personality and lifestyle. We offer a comprehensive range of
						interior design services to transform your living space, from
						initial consultations to final installation. Let's explore how we
						can bring your dream home to life:
					</>
				}
			/>
			{services.map((service) => (
				<div
					key={service.id}
					className="group bg-base-200 odd:bg-primary odd:text-base-100"
				>
					<div
						className="w-full aspect-square md:aspect-[2/1] lg:aspect-[3/1] bg-fixed bg-cover bg-bottom relative"
						style={{ backgroundImage: `url(${service.imgUrl})` }}
					>
						<h2
							className={`font-bold p-5 text-4xl lg:text-6xl absolute top-0 flex size-full justify-center items-center text-base-100 bg-zinc-800/40 z-30 shadow-inner shadow-black`}
						>
							{service.title}
						</h2>
					</div>
					<article className="flex flex-wrap gap-5 justify-between p-5 md:p-8">
						<div className="w-96">
							<p className={`font-light leading-7`}>{service.details}</p>
						</div>
						<div className="w-72">
							<h2 className="font-bold text-2xl">Benefits:</h2>
							<ul className="steps steps-vertical font-light">
								{service.benefits.map((benefit, i) => (
									<li key={i} className="step step-accent after:font-bold">
										{benefit}
									</li>
								))}
							</ul>
						</div>
						<div>
							<h2 className="font-bold text-2xl mb-2">Process:</h2>
							<ul className="timeline timeline-compact timeline-vertical max-w-[425px]">
								{service.process.map((step, i, self) => (
									<li key={i}>
										<div className="timeline-start">{step.title}</div>
										<div className="timeline-middle">
											<div className="size-9 p-2 rounded-full bg-accent group-odd:bg-base-100 my-1">
												{step.title.includes("Consultation") && (
													<FaHandshake className="size-5 fill-base-100 group-odd:fill-accent" />
												)}
												{step.title.includes("Measurements") && (
													<FaCompassDrafting className="size-5 fill-base-100 group-odd:fill-accent" />
												)}
												{step.title.includes("Development") && (
													<FaAtom className="size-5 fill-base-100 group-odd:fill-accent" />
												)}
												{step.title.includes("Furniture") && (
													<FaCouch className="size-5 fill-base-100 group-odd:fill-accent" />
												)}
												{step.title.includes("Fixture") && (
													<FaKitchenSet className="size-5 fill-base-100 group-odd:fill-accent" />
												)}
												{step.title.includes("3D") && (
													<FaCube className="size-5 fill-base-100 group-odd:fill-accent" />
												)}
												{step.title.includes("Solutions") && (
													<FaPeopleRoof className="size-5 fill-base-100 group-odd:fill-accent" />
												)}
												{step.title.includes("Installation") ||
												step.title.includes("Implementation") ? (
													<FaTrowelBricks className="size-5 fill-base-100 group-odd:fill-accent" />
												) : null}
												{step.title.includes("Delivery") && (
													<FaTruckRampBox className="size-5 fill-base-100 group-odd:fill-accent" />
												)}
											</div>
										</div>
										<div className="timeline-end timeline-box text-wrap group-odd:bg-accent group-odd:border-emerald-800">
											{step.desc}
										</div>
										{i !== self.length - 1 && (
											<hr className="rounded-full bg-accent group-odd:bg-base-100" />
										)}
									</li>
								))}
							</ul>
						</div>
					</article>
				</div>
			))}
			<div className="w-full text-justify bg-[url('https://images.pexels.com/photos/1325761/pexels-photo-1325761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-fixed bg-top bg-cover">
				<div className="flex flex-col items-center w-full bg-black/60 p-5 md:p-8">
					<div className="sm:w-96">
						<p className="leading-7 text-balance text-base-100">
							Simply by choosing
							<br />
							<span className={`${anton.className} text-8xl tracking-tight `}>
								Flat
							</span>
							<br />
							for your interior design needs, you can rest assured that you're
							partnering with a team of passionate and experienced professionals
							who are dedicated to creating a beautiful and functional home that
							reflects your unique style and personality. We don't just design
							spaces, we craft havens that inspire you and elevate your everyday
							living.
						</p>
						<Link
							href={"/teams"}
							className="btn btn-block text-nowrap rounded-none mt-5 font-bold"
						>
							Meet Our Design Team
						</Link>
					</div>
				</div>
			</div>
			<Testimonials data={testimonials} />
		</main>
	);
}
