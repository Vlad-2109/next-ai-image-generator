import Link from 'next/link';
import { XIcon } from 'lucide-react';
import { Navlinks } from '@/constants/constants';
import { MobileNavbarProps } from '@/types/types';

const MobileNavbar: React.FC<MobileNavbarProps> = ({ showNavbar, closeNavbar }) => {

	const navbarOpen = showNavbar ? 'translate-y-0' : 'translate-y-[-200%]'

	return (
		<div>
			{/* Navlinks */}
			<div
				className={`text-white ${navbarOpen} fixed justify-center flex flex-col h-screen transform transition-all duration-1000 w-full bg-gray-950 space-y-6 z-[1050] top-0`}
			>
				{Navlinks.map((link) => (
					<Link key={link.id} href={link.url}>
						<p className="text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
							{link.label}
						</p>
					</Link>
				))}
				{/* Close icon */}
				<XIcon
					onClick={closeNavbar}
					className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 hover:cursor-pointer"
				/>
			</div>
		</div>
	);
};

export default MobileNavbar;
