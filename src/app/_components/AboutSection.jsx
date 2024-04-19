import Link from "next/link";
import { anton } from "../_utils/fonts";

export default function AboutSection() {
	return (
		<div className="bg-primary">
			<img
				className="w-full aspect-video object-cover lg:hidden"
				src="https://images.pexels.com/photos/2962135/pexels-photo-2962135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
				alt="Flat Team"
			/>
			<article className="flex flex-col min-[425px]:flex-row justify-between p-5 md:p-8">
				<h2
					className={`${anton.className} text-5xl mb-2 min-[425px]:mb-0 tracking-tight text-base-100`}
				>
					Our
					<br />
					Story
				</h2>
				<img
					className="hidden min-w-[320px] max-w-[480px] h-[300px] aspect-video object-cover mx-12 xl:mx-40 lg:block"
					src="https://images.pexels.com/photos/2962135/pexels-photo-2962135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
					alt="Flat Team"
				/>
				<div className="flex flex-col min-[425px]:w-60 md:w-96 lg:h-[300px] items-end justify-between">
					<p
						className={`font-light text-left min-[425px]:text-right leading-7 text-sm text-balance text-base-100 md:text-base`}
					>
						We are a passionate team of interior designers dedicated to crafting
						exceptional living spaces that are both beautiful and functional. We
						believe that your home should be a reflection of your personality
						and lifestyle. We work closely with you to understand your vision
						and create a space that you'll love coming home to.
					</p>
					<Link
						href={"/aboutus"}
						className="hidden rounded-none btn btn-wide btn-accent lg:inline-flex font-semibold"
					>
						Know Us More
					</Link>
				</div>
			</article>
			<div className="px-5 pb-5 md:px-8 md:pb-8 lg:hidden">
				<Link
					href={"/aboutus"}
					className="rounded-none btn btn-block btn-lg btn-accent font-semibold"
				>
					Know Us More
				</Link>
			</div>
		</div>
	);
}
