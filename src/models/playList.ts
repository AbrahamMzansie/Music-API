import mongoose from 'mongoose';

const playListSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		creator: {
			type: String,
			required: false,
		},
		playtime: {
			type: String,
			required: false,
		},
		trackList: [
			{
				track: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'Track',
					required: false,
				},
			},
		],
	},
	{
		timestamps: true,
	}
);
const PlayList = mongoose.model('PlayList', playListSchema);
export default PlayList;
