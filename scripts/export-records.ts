import { writeFileSync } from 'fs';
import { join } from 'path';
import { Elementi } from '../src/utils/Elementi';

writeFileSync(join(__dirname, '..', 'odloki-zakoni.json'), JSON.stringify(Elementi, null, 2), { encoding: 'utf-8' });
