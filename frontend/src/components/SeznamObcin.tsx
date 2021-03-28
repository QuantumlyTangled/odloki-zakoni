import React from 'react';
import { Obcine } from 'utils/constants/Obcine';
import Obcina from './Obcina';

const SeznamObcin: React.FC = () => {
	return (
		<>
			<div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 p-4">
				<Obcina obcina={Obcine.Maribor} />
				<Obcina obcina={Obcine.Benedikt} />
				<Obcina obcina={Obcine.Cerkvenjak} />
				<Obcina obcina={Obcine.Duplek} />
				<Obcina obcina={Obcine.HoceSlivnica} />
				<Obcina obcina={Obcine.Kungota} />
				<Obcina obcina={Obcine.Lenart} />
				<Obcina obcina={Obcine.LovrencNaPohorju} />
				<Obcina obcina={Obcine.MiklavzNaDravskemPolju} />
				<Obcina obcina={Obcine.Pesnica} />
				<Obcina obcina={Obcine.RaceFram} />
				<Obcina obcina={Obcine.Ruse} />
				<Obcina obcina={Obcine.SelnicaObDravi} />
				<Obcina obcina={Obcine.Starse} />
				<Obcina obcina={Obcine.SvetaTrojica} />
				<Obcina obcina={Obcine.SvetaAna} />
				<Obcina obcina={Obcine.SvetiJurijVSlovenskihGoricah} />
				<Obcina obcina={Obcine.Sentilj} />
			</div>
		</>
	);
};

export default SeznamObcin;
