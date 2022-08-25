// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable import/first */
import express, { Request, Response } from 'express';
import compression from 'compression'; // compresses requests
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import path from 'path';
import * as dotenv from 'dotenv';
import middlewareLogger from './middleware/logger.middleware';

dotenv.config({ path: `${path.join(__dirname, '..')}/.env` });

import routes from './routes/routes';

const app = express();

// const corsOptions = require('./config/corsOptions');

const shouldCompress = (req: Request, res: Response) => {
	if (req.headers['x-no-compression']) {
		// don't compress responses with this request header
		return false;
	}

	// fallback to standard filter function
	return compression.filter(req, res);
};

app.use(cors());

app.use(compression({ filter: shouldCompress }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Security
app.use(helmet());

// Logger
app.use(middlewareLogger);

// Initialize routes

routes(app);

app.use((req, res) => {
	return res.status(404).send({
		status: 404,
		error: 'Resource not found',
	});
});

export default app;
