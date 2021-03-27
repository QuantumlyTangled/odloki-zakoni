import React from 'react';

export interface ObcinaProps {
	ime: string;
}

const Obcina: React.FC<ObcinaProps> = ({ ime }) => {
	return (
		<>
			<div className="p-6 max-w-sm mx-auto bg-white dark:bg-gray-700 rounded-xl shadow-md flex items-center space-x-4">
				<div className="flex-shrink-0">
					{/* TODO: Dinamična slika grba */}
					<img className="h-12 w-12" src="/img/logo.svg" alt={`Grb ${ime}`} />
				</div>
				<div>
					<div className="text-xl font-medium text-black dark:text-white">{ime}</div>
				</div>
			</div>
		</>
	);
};

export default Obcina;
