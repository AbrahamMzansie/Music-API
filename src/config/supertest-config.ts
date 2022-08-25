import path from 'path';
import * as dotenv from 'dotenv';

dotenv.config({ path: `${path.join(__dirname, '../..')}/.env` });

export const constructHeader = (authorization?: string) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let info: any = {
		'Content-Type': 'application/json',
		'ltz-device':
			'TimeZone=Africa/Johannesburg;Lang=en;SID=SID:jg4p1n1017l-1g17na-4k1ob-8q1h1d-91u1ul-k1b1p141gv61m1617281107800',
		systemid: '1',
		timezone: 'Africa/Johannesburg',
	};

	if (authorization) {
		info = {
			...info,
			authorization: `Bearer ${authorization}`,
		};
	}

	return info;
};

export const testLoginCredentials = {
	email: 'hanisikuhle@gmail.com',
	password: `c89n{FN\\Hu,rB~;C`,
	username: 'kuhle-hanisi',
};

export const GATEWAY_URL = process.env.GATEWAY_SERVICE;
