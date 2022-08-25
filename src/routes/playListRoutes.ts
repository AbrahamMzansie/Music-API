import express from 'express';

// Controllers
import playListController from '../controllers/playList/playListController';

// middleware
import protect from '../middleware/authMiddleware';

const router = express.Router();

router.post('/create-playList', protect, playListController.createPlayList);

router.put('/update-playList/:id', protect, playListController.updatePlayList);

router.get('/get-all-playList', protect, playListController.getAllPlayList);

router.get('/get-playList/:id', protect, playListController.getPlayList);

router.delete(
	'/delete-playList/:id',
	protect,
	playListController.deletePlayList
);

router.post(
	'/add-track-to-playlist',
	protect,
	playListController.addTrackToPlayList
);
export default router;
