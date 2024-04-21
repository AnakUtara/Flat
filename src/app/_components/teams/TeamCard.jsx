import { FaMedal } from "react-icons/fa6";
import Image from "next/image";

export default function TeamCard({ userData, jobData }) {
	return (
		<div className="card card-compact w-full sm:w-[48%] md:w-[48.5%] lg:w-[48.89%] xl:w-[32.29%] bg-base-100 rounded-none shadow-black shadow-md">
			<div className="flex justify-between items-center p-5 bg-primary">
				<h2 className={`text-2xl text-base-100 card-title`}>
					{userData.name.title}.
					<br />
					{userData.name.first}
					<br />
					{userData.name.last}
				</h2>
				<figure className="size-28 border-[2.5px] border-accent rounded-lg">
					<Image
						width={112}
						height={112}
						src={userData.picture.large}
						alt={`${userData.name.first} ${userData.name.last}'s Avatar`}
					/>
				</figure>
			</div>
			<h3 className={`text-2xl bg-accent p-5 text-base-100 text-center`}>
				{jobData.title}
			</h3>
			<div className="p-5">
				<p className={`font-light leading-7 text-balance`}>
					{jobData.bio.replace("[Name]", userData.name.first)}
				</p>
				<div className="divider"></div>
				<h4 className="font-bold text-xl">Experience:</h4>
				<div className="divider"></div>
				<ul className="timeline timeline-compact timeline-snap-icon timeline-vertical">
					{jobData.experience.map((exp, i, self) => (
						<li key={i}>
							{i === 0 ? null : <hr className="bg-accent" />}
							<div
								className={`timeline-end timeline-box bg-accent border-emerald-900 text-base-100`}
							>
								{exp}
							</div>
							<div className="timeline-middle">
								<div className="p-2 rounded-full bg-accent my-1">
									<FaMedal className="fill-base-100" />
								</div>
							</div>
							{i === self.length - 1 ? null : <hr className="bg-accent" />}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
