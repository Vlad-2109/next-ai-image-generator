'use client';
import Link from 'next/link';
import { MenuIcon, SearchIcon, ShoppingCartIcon } from 'lucide-react';
import { Navlinks } from '@/constants/constants';
import { NavbarProps } from '@/types/types';
import { useEffect, useState } from 'react';

const Navbar: React.FC<NavbarProps> = ({ openNavbar }) => {
	const [navBg, setNavBg] = useState<boolean>(false);

	useEffect(() => {
		const handler = () => {
			if (window.scrollY >= 90) setNavBg(true);
			if (window.scrollY < 90) setNavBg(false);
		};

		window.addEventListener('scroll', handler);

		return () => window.removeEventListener('scroll', handler);
	}, []);

	const bg_style = navBg ? 'bg-gray-900 shadow-md' : '';

	return (
        <div className={`flex ${bg_style} items-center justify-between h-[12vh] fixed z-[100] w-full mx-auto transition-all duration-200`}>
			{/* LOGO */}
			<h1 className="text-3xl text-white font-bold ml-8 md:ml-16">IMGAI</h1>
			<div className="md:flex items-center space-x-10 hidden">
				{/* Navlink */}
				{Navlinks.map((link) => (
					<Link
						key={link.id}
						href={link.url}
						className="relative text-white text-base w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
					>
						<p>{link.label}</p>
					</Link>
				))}
			</div>
			{/* Buttons and icons */}
			<div className="flex items-center space-x-5 md:space-x-8 text-white mr-8 md:mr-16">
				<ShoppingCartIcon className="cursor-pointer w-6 h-6" />
				<SearchIcon className="cursor-pointer w-6 h-6" />
				<MenuIcon
					onClick={openNavbar}
					className="cursor-pointer w-6 h-6 md:hidden"
				/>
			</div>
		</div>
	);
};

export default Navbar;
