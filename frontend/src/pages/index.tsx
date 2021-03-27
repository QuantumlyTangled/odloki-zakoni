import React from 'react';
import Obcina from '../components/Obcina';

export default function Home() {
	return (
		<>
			<div className="container">
				<div className="text-center pb-8">
					<h1>Skupna Občinska uprava Maribor</h1>
					<br />
					<h2>Medobčinska inšpekcija</h2>
				</div>
				<div className="grid grid-cols-3">
					<Obcina ime="Maribor" grb="maribor.svg" />
					<Obcina ime="Maribor" />
					<Obcina ime="Maribor" />
				</div>
			</div>
		</>
	);
}
