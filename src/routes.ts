import { Router } from 'express';

import DemonRouter from './routes/demons'
import P5Router from './routes/p5'
import P4Router from './routes/p4'
import P3Router from './routes/p3'

const Routes = Router();

Routes.use('/api/demons', DemonRouter);
Routes.use('/api/p5/demons', P5Router);
Routes.use('/api/p4/demons', P4Router);
Routes.use('/api/p3/demons', P3Router);

export default Routes;
