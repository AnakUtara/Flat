export function CardSkeleton() {
	return <div className="card skeleton rounded-none bg-accent min-h-[722px]" />;
}

export async function CardSkeletons() {
	return (
		<div className="w-full px-5 pb-5 md:px-8 md:pb-8">
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 w-full gap-x-5 gap-y-8">
				{[...Array(10)].map((_, i) => (
					<CardSkeleton key={i} />
				))}
			</div>
		</div>
	);
}
