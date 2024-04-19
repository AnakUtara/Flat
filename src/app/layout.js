import { hanken } from "./_utils/fonts";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import "./globals.css";

export const metadata = {
	title: "Flat.",
	description: "Inspiring Interior Design Solution",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${hanken.className}`}>
				<Navbar menu={["Home", "Services", "Teams", "About Us"]}>
					{children}
					<Footer />
				</Navbar>
			</body>
		</html>
	);
}
