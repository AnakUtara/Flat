import PageHeader from "../_components/_ui/PageHeader";
import { anton } from "../_utils/fonts";
import { CardSkeletons } from "../_components/teams/CardSkeleton";
import dynamic from "next/dynamic";

export default async function Teams() {
	const DynTeamsSection = dynamic(
		() => import("../_components/teams/TeamsSection"),
		{
			loading: () => <CardSkeletons />,
		}
	);
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
			<DynTeamsSection />
		</main>
	);
}
