import Link from 'next/link';
import React from 'react';

export interface NavbarItemProps {
	className: string;
	href: string;
	content: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ content, href, className }) => {
	return (
		<Link href={href}>
			<span className={className}>{content}</span>
		</Link>
	);
};

export default NavbarItem;
