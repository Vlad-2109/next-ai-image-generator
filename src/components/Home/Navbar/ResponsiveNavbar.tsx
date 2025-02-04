'use client';
import { useState } from 'react';
import MobileNavbar from './MobileNavbar';
import Navbar from './Navbar';

const ResponsiveNavbar = () => {
	const [showNavbar, setShowNavbar] = useState<boolean>(false);

	const openNavbarHandler = () => {
		setShowNavbar(true);
	};

	const closeNavbarHandler = () => {
		setShowNavbar(false);
	};

	return (
		<div>
			<Navbar openNavbar={openNavbarHandler} />
			<MobileNavbar showNavbar={showNavbar} closeNavbar={closeNavbarHandler} />
		</div>
	);
};

export default ResponsiveNavbar;
