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
				<div className="grid grid-cols-3 gap-4">
					<Obcina obcina={Obcine.Maribor} />
					<Obcina obcina={Obcine.Benedikt} />
					<Obcina obcina={Obcine.Cerkvenjak} />
					<Obcina obcina={Obcine.Duplek} />
					<Obcina obcina={Obcine.HoceSlivnica} />
					<Obcina obcina={Obcine.Kungota} />
					<Obcina obcina={Obcine.Lenart} />
					<Obcina obcina={Obcine.LovrencNaPohorju} />
					<Obcina obcina={Obcine.MiklavzNaDravskemPolju} />
				</div>
			</div>
		</>
	);
}
