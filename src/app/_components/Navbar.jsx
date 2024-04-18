"use client";
import Link from "next/link";
import { anton } from "../_utils/fonts";

export default function Navbar({ menu, children }) {
	return (
		<div className="drawer drawer-end">
			<input id="main-nav-drawer" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content flex flex-col">
				{/* Navbar */}
				<div className="w-full navbar justify-between bg-base-100 sticky top-0 z-40 shadow-lg">
					<Link
						href={"/"}
						className={`${anton.className} text-4xl px-2 mx-2 tracking-tight`}
					>
						Flat
					</Link>
					<div className="flex-none sm:hidden">
						<label
							htmlFor="main-nav-drawer"
							aria-label="open sidebar"
							className="btn btn-square btn-ghost"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								className="inline-block w-6 h-6 stroke-current"
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
					<div className="flex-none hidden sm:block">
						<ul className="menu menu-horizontal">
							{/* Navbar menu content here */}
							{menu.map((item, key) => (
								<li key={key} className="text-md lg:text-lg font-medium">
									<Link
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
				<ul className="menu menu-lg p-4 w-80 min-h-full bg-base-200">
					{menu.map((item, key) => (
						<li
							key={key}
							onClick={() =>
								(document.querySelector("#main-nav-drawer").checked = false)
							}
						>
							<Link
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
