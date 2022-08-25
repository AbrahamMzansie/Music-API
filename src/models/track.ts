import mongoose from 'mongoose';

const trackSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		album: {
			type: String,
			required: false,
		},
		artist: {
			type: String,
			required: true,
		},
		duration: {
			type: String,
			required: true,
		},
		artwork: {
			type: String,
			required: true,
		},
		audio: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);
const Track = mongoose.model('Track', trackSchema);
export default Track;
