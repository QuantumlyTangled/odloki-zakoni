import SeznamObcin from 'components/SeznamObcin';
import React from 'react';

export default function Home() {
	return (
		<>
			<div className="container">
				<div className="text-center dark:text-dark-text p-8">
					<h1>Skupna Občinska uprava Maribor</h1>
					<br />
					<h2>Medobčinska inšpekcija</h2>
				</div>
				<SeznamObcin />
			</div>
		</>
	);
}
