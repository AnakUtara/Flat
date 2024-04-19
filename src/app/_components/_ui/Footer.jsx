import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { anton } from "../../_utils/fonts";
import services from "../../_lib/services";
import Link from "next/link";

export default function Footer() {
	return (
		<>
			<footer className="footer p-5 md:p-8 bg-teal-950 text-base-100">
				<aside>
					<h2 className={`${anton.className} text-4xl`}>Flat.</h2>
					<p className={`text-sm`}>Inspiring Interior Design Solutions.</p>
					<span className="flex gap-1 items-center">
						<FaLocationDot />
						<h2 className="font-bold text-md">Flat HQ Address:</h2>
					</span>
					<ul>
						<li>Nova City, Kepler-186f System Kepler-186f Prime,</li>
						<li>Kepler Sector Andromeda Galaxy, </li>
						<li>Local Group</li>
					</ul>
					<span className="flex gap-1 items-center">
						<FaPhone />
						<p className="">
							<span className="font-bold">: </span>1888-555-DESIGN (337446){" "}
						</p>
					</span>
				</aside>
				<nav>
					<h6 className="footer-title">Services</h6>
					{services.map((service) => (
						<Link key={service.id} href="/services" className="link link-hover">
							{service.title}
						</Link>
					))}
				</nav>
				<nav>
					<h6 className="footer-title">Company</h6>
					<a href="/services" className="link link-hover">
						Services
					</a>
					<a href="/teams" className="link link-hover">
						Teams
					</a>
					<a href="/aboutus" className="link link-hover">
						About us
					</a>
				</nav>
			</footer>
			<footer className="footer items-center py-4 px-5 md:px-8 bg-secondary text-neutral-content">
				<aside className="items-center grid-flow-col text-base-100">
					<p>Copyright © {new Date().getFullYear()} - All right reserved</p>
				</aside>
				<nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
					<a>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							className="fill-current"
						>
							<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
						</svg>
					</a>
					<a>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							className="fill-current"
						>
							<path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
						</svg>
					</a>
					<a>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							className="fill-current"
						>
							<path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
						</svg>
					</a>
				</nav>
			</footer>
		</>
	);
}
