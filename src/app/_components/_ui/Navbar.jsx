"use client";
import Link from "next/link";
import { anton } from "../../_utils/fonts";

export default function Navbar({ menu, children }) {
	return (
		<div className="drawer drawer-end">
			<input id="main-nav-drawer" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content h-svh overflow-y-auto flex flex-col scroll-pt-16">
				{/* Navbar */}
				<div className="w-full navbar p-0 justify-between bg-base-100 sticky top-0 z-40 shadow-xl">
					<Link
						href={"/"}
						className={`${anton.className} text-4xl p-5 tracking-tight`}
					>
						Flat
					</Link>
					<div className="flex-none h-full sm:hidden">
						<label
							htmlFor="main-nav-drawer"
							aria-label="open sidebar"
							className="btn btn-square btn-ghost h-full rounded-none"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								className="inline-block w-6 h-full stroke-current"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h16"
								></path>
							</svg>
						</label>
					</div>
					<div className="flex-none hidden sm:block h-full">
						<ul className="menu menu-horizontal p-0 h-full">
							{/* Navbar menu content here */}
							{menu.map((item, key) => (
								<li key={key} className="text-lg font-medium">
									<Link
										className="rounded-none py-0 px-4 flex justify-center items-center h-full"
										href={`/${key === 0 ? "/" : item.toLowerCase().split(" ").join("")}`}
									>
										{item}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
				{/* Page content here */}
				{children}
			</div>
			<div className="drawer-side z-50">
				<label
					htmlFor="main-nav-drawer"
					aria-label="close sidebar"
					className="drawer-overlay"
				></label>
				<ul className="menu menu-lg px-0 py-5 w-64 bg-base-100 min-h-full">
					{menu.map((item, key) => (
						<li
							key={key}
							onClick={() =>
								(document.querySelector("#main-nav-drawer").checked = false)
							}
						>
							<Link
								className="rounded-none"
								href={
									key === 0 ? "/" : `/${item.toLowerCase().split(" ").join("")}`
								}
							>
								{item}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
