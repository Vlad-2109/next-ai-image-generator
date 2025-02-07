import { CheckIcon } from 'lucide-react';
import PriceCard from './PriceCard';

const Price = () => {
	return (
		<div className="pt-16 pb-16 bg-gray-950">
			<div className="w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
				{/* Content */}
				<div>
					<h1 className="uppercase text-white mb-6 font-bold">
						Flexible & affortable
					</h1>
					<h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 text-white">
						Our Pricing Plans
					</h1>
					<p className="text-white font-medium text-opacity-70">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
						consequatur similique maxime sunt et, iure repudiandae doloribus
						numquam iusto quas!
					</p>
					<div className="mt-8">
						<div className="flex items-center space-x-3 mb-3">
							<CheckIcon className="w-6 h-6 text-green-500" />
							<p className="text-lg text-white font-semibold text-opacity-60">
								High Quality Services
							</p>
						</div>
						<div className="flex items-center space-x-3 mb-3">
							<CheckIcon className="w-6 h-6 text-green-500" />
							<p className="text-lg text-white font-semibold text-opacity-60">
								24/7 Customer support
							</p>
						</div>
						<div className="flex items-center space-x-3 mb-3">
							<CheckIcon className="w-6 h-6 text-green-500" />
							<p className="text-lg text-white font-semibold text-opacity-60">
								Affordable Rates
							</p>
						</div>
					</div>
				</div>
				{/* Price card content */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div>
						<PriceCard price="4" user="1" type="Silver Pack" />
					</div>
					<div>
						<PriceCard price="8" user="3" type="Golden Pack" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Price;
