import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { PriceCardProps } from '@/types/types';

const PriceCard: React.FC<PriceCardProps> = ({ price, type, user }) => {
	return (
		<div className="bg-black p-8 rounded-lg text-center">
			<p className="mt-12 mb-12 text-3xl text-white font-semibold">{type}</p>
			<p className="text-white">Great for private individuals</p>
			<Separator className="my-8 opacity-20" />
			<div className="text-white font-semibold text-2xl">
				<span className="text-5xl">${price}</span>/mo
			</div>
			<Separator className="my-8 opacity-20" />
			<div className="mt-6 space-y-3 text-white text-opacity-50">
				<p>{user} User</p>
				<p>Unlimited Projects</p>
				<p>Download Prototypes</p>
			</div>
			<div className="mt-6">
				<Button variant={'secondary'} size={'lg'}>
					Get Now
				</Button>
			</div>
		</div>
	);
};

export default PriceCard;
