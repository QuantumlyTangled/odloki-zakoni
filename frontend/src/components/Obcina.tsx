import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { computeGrb } from 'utils/constants/Grbi';
import { Obcine } from 'utils/constants/Obcine';

export interface ObcinaProps {
	obcina: Obcine;
	fillColumn?: boolean;
}

const Obcina: React.FC<ObcinaProps> = ({ obcina, fillColumn }) => {
	const grbLokacija = computeGrb(obcina);

	return (
		<>
			<Link href={`/obcina/${Obcine[obcina]}`}>
				<div
					className={`p-6 max-w-sm mx-auto bg-white dark:bg-dark-segment rounded-xl shadow-md flex items-center space-x-4 select-none cursor-pointer ${
						fillColumn ? 'md:col-span-3' : ''
					}`}
				>
					<div className="flex-shrink-0">
						{grbLokacija ? (
							<div className="h-12 w-12 relative">
								<Image //
									src={`/grbi/${grbLokacija}`}
									alt={`Grb ${obcina}`}
									layout="fill"
									objectFit="contain"
								/>
							</div>
						) : null}
					</div>
					<div>
						<div className="text-xl font-medium text-black dark:text-dark-text">{obcina}</div>
					</div>
				</div>
			</Link>
		</>
	);
};

export default Obcina;
