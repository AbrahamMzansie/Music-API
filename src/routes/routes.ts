import { Router, Express } from 'express';

import * as Welcome from '../controllers/welcome.controller';

// Routes
import track from './trackRoutes';
import playList from './playListRoutes';

const router = Router();

const Routes = (app: Express) => {
	// System status
	app.use('/', router.get('/', Welcome.index));

	app.use('/api/track', track);
	app.use('/api/playList', playList);
};

export default Routes;
