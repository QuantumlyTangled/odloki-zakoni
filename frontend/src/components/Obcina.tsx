import React from 'react';
import Image from 'next/image';

export interface ObcinaProps {
	ime: string;
	grb?: string;
}

const Obcina: React.FC<ObcinaProps> = ({ ime, grb }) => {
	return (
		<>
			<div className="p-6 max-w-sm mx-auto bg-white dark:bg-gray-700 rounded-xl shadow-md flex items-center space-x-4">
				<div className="flex-shrink-0">
					{grb ? (
						<Image //
							src={`/grbi/${grb}`}
							alt={`Grb ${ime}`}
							width={64}
							height={64}
							className="h-12 w-12"
						/>
					) : null}
				</div>
				<div>
					<div className="text-xl font-medium text-black dark:text-white">{ime}</div>
				</div>
			</div>
		</>
	);
};

export default Obcina;
