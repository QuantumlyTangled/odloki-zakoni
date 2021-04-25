import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';
import NavbarItem from './NavbarItem';

// Based on https://tailwindui.com/components/application-ui/navigation/navbars
const Navbar: React.FC = () => {
	const linkStyle = '';
	const navItemStyle = `px-3 py-2 rounded-md text-sm font-medium select-none cursor-pointer ${linkStyle}`;
	const navItemMobileStyle = `block px-3 py-2 rounded-md text-base font-medium select-none cursor-pointer ${linkStyle}`;

	return (
		<div className="w-full fixed z-50">
			<Disclosure as="nav" className="mt-4 mx-4 rounded-lg shadow-xl bg-gray-400 text-white">
				{({ open }) => (
					<>
						<div className="w-full mx-auto px-2 md:px-6 xl:px-8">
							<div className="relative flex items-center justify-between h-16">
								<div className="absolute inset-y-0 left-0 flex items-center md:hidden">
									<Disclosure.Button
										className={`inline-flex items-center justify-center p-2 rounded-md ${linkStyle} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
									>
										<span className="sr-only">Open main menu</span>
										{open ? (
											<FontAwesomeIcon icon={faTimes} className="block h-6 w-6" aria-hidden="true" />
										) : (
											<FontAwesomeIcon icon={faBars} className="block h-6 w-6" aria-hidden="true" />
										)}
									</Disclosure.Button>
								</div>
								<div className="flex-1 flex items-center pl-4 md:pl-0 md:items-stretch justify-center md:justify-start">
									<div className="flex-shrink-0 flex items-center">
										{/* <div className="h-12 w-12 relative pr-4">
											<Image //
												src={`/grbi/${Grbi.Maribor}`}
												alt={`Grb Maribor`}
												layout="fill"
												loading="lazy"
											/>
										</div> */}
										<Link href="/">Odloki in Zakoni</Link>
									</div>
									<div className="hidden md:block md:ml-6">
										<div className="flex space-x-4 items-center">
											<NavbarItem href="/" className={`${navItemStyle}`} content="Domov" />
										</div>
									</div>
								</div>
							</div>
						</div>

						<Disclosure.Panel className="md:hidden">
							<div className="px-2 pt-2 pb-3 space-y-1 shadow-lg">
								<NavbarItem href="/" className={`${navItemMobileStyle}`} content="Domov" />
							</div>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</div>
	);
};

export default Navbar;
