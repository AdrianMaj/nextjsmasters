import { Inter } from "next/font/google";

import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import ActiveLink from "@/ui/atoms/activeLink";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Next App Plus",
	description: "Generated from Next App Plus template",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pl">
			<body className={`${inter.className} bg-gray-50`}>
				<nav>
					<ul className="mt-2 flex justify-center space-x-4 p-4">
						<li>
							<ActiveLink href="/">Home</ActiveLink>
						</li>
						<li>
							<ActiveLink href="/products">Products</ActiveLink>
						</li>
					</ul>
				</nav>
				<section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
					{children}
				</section>
				<footer>
					<p className="text-center text-sm text-gray-500">&copy; {new Date().getFullYear()} Next App Plus</p>
				</footer>
			</body>
		</html>
	);
}
