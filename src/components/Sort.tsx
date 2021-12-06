import React from 'react';

export type ReactSortEntry = React.ReactChild | React.ReactFragment | React.ReactPortal;
export type Comparation = (a: ReactSortEntry, b: ReactSortEntry) => number;

export interface SortProps {
	comparator?: Comparation;
}

const Sort: React.FC<SortProps> = ({ children, comparator }) => {
	return <>{comparator ? React.Children.toArray(children).sort(comparator) : children}</>;
};

export default Sort;
