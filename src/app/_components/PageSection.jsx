export default function PageSection({
	children,
	customClass = "items-center w-full",
}) {
	return <div className={`flex flex-col ${customClass}`}>{children}</div>;
}
