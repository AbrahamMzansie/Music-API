import app from './app';
import Logger from './utils/console';
import connectDB from './config/database';

/**
 * Error Handler. Provides full stack
 */
if (process.env.NODE_ENV === 'development') {
	// app.use(errorHandler());
}

const PORT = process.env.PORT || 3001;
const ENV = process.env.NODE_ENV || 'production';

// connect to the database
connectDB();

/**
 * Start Express server.
 */
const server = app.listen(PORT, () => {
	Logger.info(`App is running at http://localhost:${PORT} in ${ENV} mode`);
	Logger.info('\nPress CTRL-C to stop\n');
});

export default server;
