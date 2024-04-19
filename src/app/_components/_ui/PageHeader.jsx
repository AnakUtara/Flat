import { anton } from "@/app/_utils/fonts";

export default function PageHeader({
	title,
	desc,
	bgColor = "bg-primary",
	textColor = "text-base-100",
}) {
	return (
		<div
			className={`flex flex-col gap-3 lg:flex-row lg:justify-between sm:items-start justify-center lg:items-center w-full p-5 md:p-8 ${bgColor}`}
		>
			<h2
				className={`${anton.className} text-7xl sm:text-8xl tracking-tight ${textColor}`}
			>
				{title}
			</h2>
			<p
				className={`font-light text-left lg:text-right lg:w-72 leading-7 text-balance ${textColor}`}
			>
				{desc}
			</p>
		</div>
	);
}
