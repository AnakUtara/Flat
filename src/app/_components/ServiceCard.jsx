import Link from "next/link";

export default function ServiceCard({ data }) {
	return (
		<div className="carousel-item w-full">
			<div
				id={data.id}
				className="card lg:card-side bg-base-100 h-[480px] lg:h-96 rounded-none shadow-xl"
			>
				<figure>
					<img
						className="lg:aspect-[4/3] xl:aspect-[2/1] object-cover"
						src={data.imgUrl}
						alt="Album"
					/>
				</figure>
				<div className="card-body">
					<h2 className="card-title">{data.title}</h2>
					<p className="text-balance">{data.desc}</p>
					<div className="card-actions justify-end">
						<Link
							href="/services"
							className="btn btn-outline btn-block rounded-none"
						>
							More Details
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
