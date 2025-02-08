'use client';
import { useEffect } from 'react';
import About from './About/About';
import Faq from './Faq/Faq';
import Hero from './Hero/Hero';
import Price from './Price/Price';
import RecentImage from './RecentImage/RecentImage';
import Review from './Review/Review';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
	useEffect(() => {
		const initAOS = async () => {
			await import('aos');
			AOS.init({
				duration: 1000,
				easing: 'ease',
				once: true,
				anchorPlacement: 'top-bottom',
			});
		};
		initAOS();
	}, []);

	return (
		<div className="overflow-hidden">
			<Hero />
			<RecentImage />
			<About />
			<Price />
			<Review />
			<Faq />
		</div>
	);
};

export default Home;
