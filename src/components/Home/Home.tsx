import About from './About/About';
import Faq from './Faq/Faq';
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
			<Faq />
		</div>
	);
};

export default Home;
