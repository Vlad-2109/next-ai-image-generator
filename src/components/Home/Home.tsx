import About from './About/About';
import Hero from './Hero/Hero';
import Price from './Price/Price';
import RecentImage from './RecentImage/RecentImage';
import Review from './Review/Review';

const Home = () => {
	return (
		<div className="overflow-hidden">
			<Hero />
			<RecentImage />
			<About />
			<Price />
			<Review />
		</div>
	);
};

export default Home;
