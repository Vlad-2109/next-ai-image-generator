import Image from 'next/image';
import { QuoteIcon } from 'lucide-react';
import { ReviewCardProps } from '@/types/types';

const ReviewCard: React.FC<ReviewCardProps> = ({ image, name, role }) => {
	return (
		<div className="flex flex-col items-center justify-center">
			<QuoteIcon className="w-10 h-10 text-yellow-300" />
			<p className="text-center mt-4 text-white text-base md:text-lg lg:text-xl font-semibold text-opacity-80">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat
				assumenda blanditiis sunt ducimus ab, dolores ut harum! Harum officiis
				placeat animi illum molestias odio eius tenetur possimus accusantium
				rerum.
			</p>
			<div className="mt-8">
				<h1 className="text-base md:text-2xl font-bold text-white text-center">
					{name}
				</h1>
				<p className="text-sm md:text-lg font-bold text-white text-center">
					{role}
				</p>
				<Image
					src={image}
					alt={name}
					height={80}
					width={80}
					className="mt-6 rounded-full mx-auto"
				/>
			</div>
		</div>
	);
};

export default ReviewCard;
