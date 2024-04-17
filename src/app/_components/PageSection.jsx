export default function PageSection({
	children,
	bgColor = "bg-base-200",
	customClass = "items-center w-full",
}) {
	return (
		<div
			className={`flex justify-center items-center px-5 pt-5 md:px-8 md:pt-8 w-full ${bgColor}`}
		>
			<div className={`flex flex-col ${customClass}`}>{children}</div>
		</div>
	);
}
