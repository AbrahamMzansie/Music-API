import request from 'supertest';
import server from '../src/app';
import { constructHeader } from '../src/config/supertest-config';

describe('HEALTH CHECK', () => {
	it('should get a 200 response', async () => {
		const response = await request(server)
			.get(`/api/track/health-check-status`)
			.set(constructHeader('212121'));
		console.log(response.error);
		expect(response.status).toBe(200);
	}, 50000);
});
