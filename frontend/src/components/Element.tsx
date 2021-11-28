import React from 'react';

export interface ElementProps {
	href: string;
	naslov: string;
}

const Element: React.FC<ElementProps> = (ele) => {
	return (
		<>
			<article className="flex flex-wrap flex-grow-0 flex-col p-4 bg-white dark:bg-dark-segment border border-dark-extra dark:border-dark-text overflow-x-hidden">
				<a href={ele.href} target="_blank" rel="noreferrer">
					<div className="space-x-4 flex-grow-0 text-black dark:text-dark-text">
						<div className="flex-grow-0 font-bold leading-5 truncate w-full">
							<span className="inline truncate overflow-ellipsis">{ele.naslov}</span>
						</div>
					</div>
				</a>
			</article>
		</>
	);
};

export default Element;
