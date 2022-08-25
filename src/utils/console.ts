import Logger from '@travsim/yootok-logger';
import path from 'path';
import * as dotenv from 'dotenv';

dotenv.config({ path: `${path.join(__dirname, '../..')}/.env` });

const accessId = process.env.LOGGER_ACCESS_KEY_ID || '';
const secretKey = process.env.LOGGER_SECRET_ACCESS_KEY || '';
const logGroup = process.env.LOG_GROUP || '';
const logStream = process.env.LOG_STREAM || '';
const isProd = process.env.NODE_ENV === 'production';

export default Logger(isProd, logGroup, logStream, accessId, secretKey);
