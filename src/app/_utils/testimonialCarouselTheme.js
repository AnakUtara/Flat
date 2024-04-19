const testimonialCarouselTheme = {
	root: {
		base: "relative h-[91dvh] w-full",
		leftControl:
			"absolute left-0 top-0 flex items-center justify-center focus:outline-none",
		rightControl:
			"absolute right-0 top-0 flex items-center justify-center focus:outline-none",
	},
	indicators: {
		base: "size-2 rounded-full",
	},
	control: {
		base: "inline-flex h-[90dvh] px-1 items-center justify-center rounded-none transition-color duration-300 bg-base-300/0 group-hover:bg-base-300/50",
		icon: "size-6 md:size-8 lg:size-10 text-base-100 lg:size-8",
	},
	scrollContainer: {
		base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-none",
		snap: "snap-x",
	},
};

export default testimonialCarouselTheme;
