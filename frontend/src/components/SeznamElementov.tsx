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
		<div className="flex-col flex-grow-0">
			<div className="flex flex-col flex-grow-0 p-4 bg-white dark:bg-dark-segment border border-dark-extra dark:border-dark-text">
				<button onClick={() => setShow(!show)} className="h-full">
					<div className="flex-grow-0 font-bold leading-5 truncate text-black dark:text-dark-text">
						<span className="inline truncate">{naslov}</span>
					</div>
				</button>
			</div>
			{show ? (
				<>
					{elementi.map((ele) => (
						<Element //
							key={ele.naslov}
							href={ele.href}
							naslov={ele.naslov}
						/>
					))}
				</>
			) : null}
		</div>
	);
};

export default SeznamElementov;
