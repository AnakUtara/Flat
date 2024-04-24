import teams from "@/app/_lib/teams";
import fetchUser from "@/app/_lib/fetchUser";
import TeamCard from "./TeamCard";

export default async function TeamsSection() {
	const users = await fetchUser();
	return (
		<div className="w-full px-5 pb-5 md:px-8 md:pb-8">
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 w-full gap-x-5 gap-y-8">
				{users.map((user, i) => (
					<TeamCard key={i} userData={user} jobData={teams[i]} />
				))}
			</div>
		</div>
	);
}
