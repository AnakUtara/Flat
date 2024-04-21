import PageHeader from "../_components/_ui/PageHeader";
import { anton } from "../_utils/fonts";
import TeamsSection from "../_components/teams/TeamsSection";
import { Suspense } from "react";

export default async function Teams() {
	return (
		<main className="bg-secondary">
			<PageHeader
				title={
					<>
						Our
						<br />
						Team
					</>
				}
				desc={
					<>
						At <span className={`${anton.className}`}>Flat</span>, we believe
						that exceptional interior design is a collaborative effort. Our team
						is comprised of talented designers with diverse experience and
						expertise, ensuring a well-rounded approach to every project.
					</>
				}
				bgColor="bg-transparent"
				textColor="text-base-100"
			/>
			<Suspense
				fallback={
					<>
						<div className="grid place-items-center py-20 text-base-100">
							<span className="loading loading-bars loading-lg"></span>
						</div>
					</>
				}
			>
				<TeamsSection />
			</Suspense>
		</main>
	);
}
