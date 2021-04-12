import type { EleData } from 'pages/obcina/[id]';
import React, { useState } from 'react';
import Element from './Element';

export interface SeznamElementovProps {
	naslov: string;
	elementi: EleData[];
}

const SeznamElementov: React.FC<SeznamElementovProps> = ({ elementi, naslov }) => {
	const [show, setShow] = useState(false);

	return (
		<div className="flex-col">
			<div className="flex flex-col w-full p-4 bg-white dark:bg-dark-segment border border-dark-extra dark:border-dark-text">
				<button onClick={() => setShow(!show)}>
					<div className="flex justify-between w-full space-x-4 text-black dark:text-dark-text">
						<div className="font-bold leading-5 truncate w-full">
							<span className="inline truncate">{naslov}</span>
						</div>
					</div>
				</button>
			</div>
			{show ? (
				<>
					{elementi.map((ele) => (
						<Element //
							key={`${ele.naslov}-${ele.st}`}
							href={ele.href}
							naslov={ele.naslov}
							st={ele.st}
						/>
					))}
				</>
			) : null}
		</div>
	);
};

export default SeznamElementov;
