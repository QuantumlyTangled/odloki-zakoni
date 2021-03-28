import React from 'react';
import { Obcine } from 'utils/constants/Obcine';
import Obcina from '../components/Obcina';

export default function Home() {
	return (
		<>
			<div className="container">
				<div className="text-center dark:text-dark-text pb-8">
					<h1>Skupna Občinska uprava Maribor</h1>
					<br />
					<h2>Medobčinska inšpekcija</h2>
				</div>
				<div className="grid grid-cols-3">
					<Obcina obcina={Obcine.Maribor} />
					<Obcina obcina={Obcine.Benedikt} />
				</div>
			</div>
		</>
	);
}
