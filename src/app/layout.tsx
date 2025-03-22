import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header.component";
import { RootProvider } from "@/provider/RootProvider.component";
const nunitoSans = Nunito({
	variable: "--font-nunito",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Mazaady store",
	description: "Mazaady store",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${nunitoSans.variable} antialiased`}>
				<RootProvider>
					<Header />
					<main className="container mx-auto p-4 lg:pt-8">{children}</main>
				</RootProvider>
			</body>
		</html>
	);
}
