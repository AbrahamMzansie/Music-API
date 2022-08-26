import request from 'supertest';
import server from '../src/app';
import { constructHeader } from '../src/config/supertest-config';
import mongoose from 'mongoose';

const mongoDB = {
	mongoose,
	connect: async () => {
		await process.nextTick(() => {});
		mongoose.Promise = Promise;
		mongoose.connect(`${process.env.MONGO_URI}`);
	},
	disconnect: (done) => {
		mongoose.disconnect(done);
	},
};

describe('GET ALL TRACKS FROM THE DATABASE', () => {
	beforeAll(() => {
		mongoDB.connect();
	});

	afterAll((done) => {
		mongoDB.disconnect(done);
	});

	it('should get a 200 response', async () => {
		const response = await request(server)
			.get(`/api/track/get-all-tracks`)
			.set(constructHeader('212121'));

		expect(response.status).toBe(200);
	}, 50000);
});
