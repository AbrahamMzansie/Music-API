/**
 * URL Service discovery using environment variables
 * @param service Name of micro-service
 */
const discoverURL = (service: string) => {
	let url = '';

	if (service) {
		const ENV = `${service.toUpperCase()}_SERVICE`;
		url = process.env[ENV] || '';
	}

	return url;
};

export default discoverURL;
