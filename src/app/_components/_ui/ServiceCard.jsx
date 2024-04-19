export default function ServiceCard({ data }) {
	return (
		<div className="card card-compact w-full sm:w-[48.6%] md:w-[48.8%] xl:w-[23.8%] transition-transform duration-300 xl:hover:scale-[1.02] rounded-none bg-base-100 shadow-md">
			<figure>
				<img
					className="aspect-video object-cover"
					src={data.imgUrl}
					alt={`${data.title} Image Example`}
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">{data.title}</h2>
				<p className="text-sm md:text-base">{data.desc}</p>
			</div>
		</div>
	);
}
