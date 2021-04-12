import React from 'react';

export interface ElementProps {
	href: string;
	naslov: string;
	st: string;
}

const Element: React.FC<ElementProps> = (ele) => {
	return (
		<>
			<article className="flex flex-col w-full p-4 bg-white dark:bg-dark-segment border border-dark-extra dark:border-dark-text">
				<a href={ele.href} target="_blank" rel="noreferrer">
					<div className="flex justify-between w-full space-x-4 text-black dark:text-dark-text">
						<div className="font-bold leading-5 truncate w-full">
							<span className="inline truncate">{ele.naslov}</span>
						</div>
						<div className="flex-shrink-0">
							<div className="font-bold items-center">{ele.st}</div>
						</div>
					</div>
				</a>
			</article>
		</>
	);
};

export default Element;
