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
			required: false,
		},
		duration: {
			type: String,
			required: false,
		},
		artwork: {
			type: String,
			required: false,
		},
		audio: {
			type: String,
			required: false,
		},
	},
	{
		timestamps: true,
	}
);
const Track = mongoose.model('Track', trackSchema);
export default Track;
