import { writeFileSync } from 'fs';
import { join } from 'path';
import { Elementi } from '../src/utils/constants/Elementi';

writeFileSync(join(__dirname, '..', 'odloki-zakoni.json'), JSON.stringify(Object.fromEntries(Elementi)), { encoding: 'utf-8' });
