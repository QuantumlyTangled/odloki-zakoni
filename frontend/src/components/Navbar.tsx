import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
	return (
		<>
			<div className="container mx-auto p-5 dark:text-dark-text">
				<nav className="flex justify-between">
					<div>
						<Link href="/">Odloki</Link>
					</div>

					<ul className="flex flex-row">
						<li>
							<a href="https://github.com/QuantumlyTangled/odloki-zakoni">Izvirna koda</a>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
};

export default Navbar;
