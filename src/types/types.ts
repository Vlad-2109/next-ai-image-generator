export interface NavbarProps {
	openNavbar: () => void;
}

export interface MobileNavbarProps {
	showNavbar: boolean;
	closeNavbar: () => void;
}

export interface SectionHeadingProps {
	heading: string;
}

export interface PriceCardProps {
	price: string;
	user: string;
	type: string;
}

export interface ReviewCardProps {
	image: string;
	name: string;
	role: string;
}
