import { hanken } from "./_utils/fonts";
import Navbar from "./_components/_ui/Navbar";
import Footer from "./_components/_ui/Footer";
import "./globals.css";

export const metadata = {
	title: "Flat.",
	description: "Inspiring Interior Design Solution",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${hanken.className} overflow-y-hidden`}>
				<Navbar menu={["Home", "Services", "Teams", "About Us"]}>
					{children}
					<Footer />
				</Navbar>
			</body>
		</html>
	);
}
