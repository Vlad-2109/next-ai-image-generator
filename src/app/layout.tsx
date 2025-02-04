import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const font = Roboto({
	weight: ['100', '300', '400', '500', '700', '900'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Ai Image Genaration',
	description: 'Ai Image Genaration using next js 15',
	icons: {
		icon: '/images/title.png',
	},
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
		<html lang="en">
			<body className={`${font.className} bg-gray-900 antialiased`}>
				Navbar
				{children}
				Footer
			</body>
		</html>
	);
}
