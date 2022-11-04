import { Router } from 'express';

import DemonRouter from './routes/demons'

const Routes = Router();

Routes.use('/api/demons', DemonRouter);

export default Routes;
