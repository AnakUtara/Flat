import axios from "axios";
import teams from "./_lib/teams";
import TeamCard from "./_components/TeamCard";
import PageHeader from "../_components/_ui/PageHeader";
import { anton } from "../_utils/fonts";

const apiUrl = "https://randomuser.me/api/";

export default async function Teams() {
	try {
		const res = await axios.get(`${apiUrl}?results=10`);
		const users = await res.data.results;
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
							that exceptional interior design is a collaborative effort. Our
							team is comprised of talented designers with diverse experience
							and expertise, ensuring a well-rounded approach to every project.
						</>
					}
					bgColor="bg-transparent"
					textColor="text-base-100"
				/>
				<div className="w-full px-5 pb-5 md:px-8 md:pb-8">
					<div className="flex flex-wrap w-full gap-x-5 gap-y-8">
						{users.map((user, i) => (
							<TeamCard key={i} userData={user} jobData={teams[i]} />
						))}
					</div>
				</div>
			</main>
		);
	} catch (error) {
		console.log(error.message);
		return (
			<main className="bg-secondary h-dvh grid place-items-center">
				<h2 className="text-4xl text-base-100">
					Sorry, unable to fetch data. Please, try again later...
				</h2>
			</main>
		);
	}
}
