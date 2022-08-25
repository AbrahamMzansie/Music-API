import { Request } from 'express';

import { Services } from '../interfaces/services-interface';
import { HTTPResponse } from '../interfaces/external-http.interface';
import Axios from './config';
import discoverURL from './url-discovery';

const toString = (data: unknown) => {
	return String(data).toString();
};

const writeHeaders = (req: Request | undefined) => {
	if (typeof req === 'undefined') {
		return undefined;
	}

	// Pass on Lang, systemId, SID and Timezone
	const { sid, lang, systemid, timezone, authorization } = req.headers;

	let dataObject:
		| {
				sid?: string;
				lang?: string;
				systemid?: string;
				authorization?: string;
				timezone?: string;
		  }
		| undefined;

	if (sid) {
		dataObject = {
			sid: toString(sid),
		};
	}

	if (systemid) {
		dataObject = {
			...dataObject,
			systemid: toString(systemid),
		};
	}

	if (authorization) {
		dataObject = {
			...dataObject,
			authorization: toString(authorization),
		};
	}

	if (dataObject) {
		if (lang) {
			const data = dataObject;

			dataObject = {
				...data,
				lang: toString(lang),
			};
		}

		if (timezone) {
			const data = dataObject;

			dataObject = {
				...data,
				timezone: toString(timezone),
			};
		}
	}

	if (typeof dataObject === 'undefined') {
		return undefined;
	}

	return {
		headers: dataObject,
	};
};

/**
 * HTTP GET request
 *
 * @param service Name of micro-service to use
 * @param url Endpoint on the specified micro-service
 * @param data Data to send
 * @returns Promise
 */
export const httpGET = async (
	service: Services,
	url: string,
	data?: Record<string, unknown>
): Promise<HTTPResponse> => {
	try {
		const inputData = data || {};

		const sourceURL = url || '';
		const result = await Axios().get(
			`${discoverURL(service)}${sourceURL}`,
			{
				params: inputData,
			}
		);
		const { data: resultData } = result;

		return resultData as HTTPResponse;
	} catch (error) {
		return {
			success: false,
			data: {},
			error: error as string | Record<string, unknown>,
		};
	}
};

/**
 * HTTP POST request
 *
 * @param service Name of micro-service to use
 * @param url Endpoint on the specified micro-service
 * @param data Data to send
 * @returns Promise
 */
export const httpPOST = async (
	service: Services,
	url: string,
	data?: Record<string, unknown>,
	request?: Request
): Promise<HTTPResponse> => {
	try {
		const inputData = data || {};

		const sourceURL = url || '';

		const result = await Axios().post(
			`${discoverURL(service)}${sourceURL}`,
			inputData,
			writeHeaders(request)
		);

		const { data: resultData } = result;

		return resultData as HTTPResponse;
	} catch (error) {
		return {
			success: false,
			data: {},
			error: error as string | Record<string, unknown>,
		};
	}
};

/**
 * HTTP DELETE request
 *
 * @param service Name of micro-service to use
 * @param url Endpoint on the specified micro-service
 * @param data Data to send
 * @returns Promise
 */
export const httpDELETE = async (
	service: Services,
	url: string,
	data?: Record<string, unknown>,
	request?: Request
): Promise<HTTPResponse> => {
	try {
		const inputData = data || {};

		const sourceURL = url || '';

		const result = await Axios().delete(
			`${discoverURL(service)}${sourceURL}`,
			{
				...writeHeaders(request),
				data: inputData,
			}
		);

		const { data: resultData } = result;

		return resultData as HTTPResponse;
	} catch (error) {
		return {
			success: false,
			data: {},
			error: error as string | Record<string, unknown>,
		};
	}
};

/**
 * HTTP UPDATE request
 *
 * @param service Name of micro-service to use
 * @param url Endpoint on the specified micro-service
 * @param data Data to send
 * @returns Promise
 */
export const httpUPDATE = async (
	service: Services,
	url: string,
	data?: Record<string, unknown>,
	request?: Request
): Promise<HTTPResponse> => {
	try {
		const inputData = data || {};

		const sourceURL = url || '';

		const result = await Axios().put(
			`${discoverURL(service)}${sourceURL}`,
			inputData,
			writeHeaders(request)
		);

		const { data: resultData } = result;

		return resultData as HTTPResponse;
	} catch (error) {
		return {
			success: false,
			data: {},
			error: error as string | Record<string, unknown>,
		};
	}
};
