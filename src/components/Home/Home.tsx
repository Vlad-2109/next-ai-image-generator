import About from './About/About';
import Hero from './Hero/Hero';
import Price from './Price/Price';
import RecentImage from './RecentImage/RecentImage';

const Home = () => {
	return (
		<div className="overflow-hidden">
			<Hero />
			<RecentImage />
			<About />
			<Price />
		</div>
	);
};

export default Home;
