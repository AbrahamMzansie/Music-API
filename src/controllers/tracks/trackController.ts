import { Request, Response } from 'express';
import Logger from '../../utils/console';
import Track from '../../models/track';


const createTrack = async (req: Request, res: Response) => {
	try {
		const { name, album, artist, duration, artwork, audio } = req.body;
		if (name === '' || name === undefined) {
			return res.status(400).json({
				success: true,
				message: 'Enter Track Name',
			});
		}
		const track = new Track({
			name,
			album,
			artist,
			duration,
			artwork,
			audio,
		});
		const createdTrack = await track.save();

		return res.status(200).json({
			success: true,
			data: createdTrack,
		});
	} catch (error) {
		Logger.error(error);
		return res.status(400).json({
			success: false,
			error: `Something went wrong, please try again`,
		});
	}
};


const updateTrack = async (req: Request, res: Response) => {
	try {
		const track = await Track.findById(req.params.id);

		if (track) {
			await track.updateOne({ $set: req.body });
			return res.status(200).json({
				success: true,
				error: `Post updated successfully`,
			});
		}
		return res.status(400).json({
			success: false,
			error: `Track not found`,
		});
	} catch (error) {
		Logger.error(error);

		return res.status(400).json({
			success: false,
			error: `Something went wrong, please try again`,
		});
	}
};


const deleteTrack = async (req: Request, res: Response) => {
	try {
		const track = await Track.findById(req.params.id);

		if (track) {
			await track.deleteOne();
			return res.status(200).json({
				success: true,
				error: `Track deleted successfully`,
			});
		}
		return res.status(400).json({
			success: false,
			error: `Track not found`,
		});
	} catch (error) {
		Logger.error(error);

		return res.status(400).json({
			success: false,
			error: `Something went wrong, please try again`,
		});
	}
};


const getAllTracks = async (req: Request, res: Response) => {
	try {
		const tracks = await Track.find({});

		if (tracks) {
			return res.status(200).json({
				success: true,
				data: tracks,
			});
		}
		return res.status(200).json({
			success: true,
			data: [],
		});
	} catch (error) {
		Logger.error(error);
		return res.status(400).json({
			success: false,
			error: `Something went wrong, please try again`,
		});
	}
};

const getTrack = async (req: Request, res: Response) => {
	try {
		Logger.info(req.params.id);
		const track = await Track.findOne({ _id: req.params.id });

		if (track) {
			return res.status(200).json({
				success: true,
				data: track,
			});
		}
		return res.status(401).json({
			success: false,
			error: `Track not found`,
		});
	} catch (error) {
		Logger.error(error);
		return res.status(400).json({
			success: false,
			error: `Something went wrong, please try again`,
		});
	}
};

const healthCheck = async (req: Request, res: Response) => {
	try {
		return res.status(200).json({
			success: true,
			message: 'All is well',
		});
	} catch (error) {
		Logger.error(error);
		return res.status(400).json({
			success: false,
			error: `Something went wrong, please try again`,
		});
	}
};

export default {
	createTrack,
	updateTrack,
	deleteTrack,
	getAllTracks,
	getTrack,
	healthCheck,
};
