import { Request, Response } from 'express';
import Logger from '../../utils/console';
import PlayList from '../../models/playList';

/**
 * CREATE PLAYLIST
 */
const createPlayList = async (req: Request, res: Response) => {
	try {
		const { name, creator, playtime, trackList } = req.body;
		if (name === '' || name === undefined) {
			return res.status(400).json({
				success: true,
				message: 'Enter playList Name',
			});
		}
		const playList = new PlayList({
			name,
			creator,
			playtime,
			trackList,
		});
		const createdPlayList = await playList.save();

		return res.status(200).json({
			success: true,
			data: createdPlayList,
		});
	} catch (error) {
		Logger.error(error);

		return res.status(400).json({
			success: false,
			error: `Something went wrong, please try again`,
		});
	}
};

const addTrackToPlayList = async (req: Request, res: Response) => {
	try {
		const { trackList, id } = req.body;

		const playList = await PlayList.findOne({
			_id: id,
		});

		if (!playList) {
			return res.status(400).json({
				success: false,
				message: 'PlayList not found',
			});
		}
		if (trackList && trackList.length === 0) {
			return res.status(400).json({
				success: false,
				message: 'Add at least one track item',
			});
		}
		if (playList) {
			const productExist = playList.trackList.find((item) => {
				return item.track?.toJSON() === req.body.trackList.track;
			});

			if (productExist) {
				const cart = await PlayList.findOneAndUpdate(
					{
						_id: id,
						'trackList.track': req.body.trackList.track,
					},
					{
						$set: {
							'trackList.$': {
								...req.body.trackList,
							},
						},
					},
					{
						new: true,
					}
				);
				return res.status(200).json({
					success: true,
					data: cart,
				});
			}
			const cart = await PlayList.findOneAndUpdate(
				{ _id: id },
				{
					$push: {
						trackList: req.body.trackList,
					},
				},
				{
					new: true,
				}
			);
			return res.status(200).json({
				success: true,
				data: cart,
			});
		}

		return res.status(400).json({
			success: true,
			message: 'Failed to add track to playList',
		});
	} catch (error) {
		Logger.error(error);

		return res.status(400).json({
			success: false,
			error: `Something went wrong, please try again`,
		});
	}
};

/**
 * Get all cancelled subscription that have current_period_end 
  equal OR less than today's date
*/
const updatePlayList = async (req: Request, res: Response) => {
	try {
		const playList = await PlayList.findById(req.params.id);

		if (playList) {
			await playList.updateOne({ $set: req.body });
			return res.status(200).json({
				success: true,
				message: `PlayList updated successfully`,
			});
		}
		return res.status(400).json({
			success: false,
			error: `PlayList not found`,
		});
	} catch (error) {
		Logger.error(error);

		return res.status(400).json({
			success: false,
			error: `Something went wrong, please try again`,
		});
	}
};

/**
 * Get all cancelled subscription that have current_period_end 
  equal OR less than today's date
*/
const deletePlayList = async (req: Request, res: Response) => {
	try {
		const playList = await PlayList.findById(req.params.id);

		if (playList) {
			await playList.deleteOne();
			return res.status(200).json({
				success: true,
				message: `PlayList deleted successfully`,
			});
		}
		return res.status(400).json({
			success: false,
			error: `PlayList not found`,
		});
	} catch (error) {
		Logger.error(error);
		return res.status(400).json({
			success: false,
			error: `Something went wrong, please try again`,
		});
	}
};

/**
 * Get all cancelled subscription that have current_period_end 
  equal OR less than today's date
*/
const getAllPlayList = async (req: Request, res: Response) => {
	try {
		const playList = await PlayList.find({});

		if (playList) {
			return res.status(200).json({
				success: true,
				data: playList,
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

const getPlayList = async (req: Request, res: Response) => {
	try {
		const playList = await PlayList.findOne({ _id: req.params.id });

		if (playList) {
			return res.status(200).json({
				success: true,
				data: playList,
			});
		}
		return res.status(400).json({
			success: false,
			error: `PlayList not found`,
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
	createPlayList,
	addTrackToPlayList,
	updatePlayList,
	deletePlayList,
	getAllPlayList,
	getPlayList,
};
