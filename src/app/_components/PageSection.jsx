export default function PageSection({ children, bgColor = "bg-base-200" }) {
	return (
		<div className={`flex justify-center items-center p-8 w-full ${bgColor}`}>
			<div className="flex flex-col items-center w-full">{children}</div>
		</div>
	);
}
