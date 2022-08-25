import express from 'express';

// Controllers
import trackController from '../controllers/tracks/trackController';

// Middleware
import protect from '../middleware/authMiddleware';

const router = express.Router();

router.post('/create-track', protect, trackController.createTrack);

// router.get('/subscriptions', GetSubscriptionController.getUserSubscriptions);

router.put('/update-track/:id', protect, trackController.updateTrack);

router.get('/get-all-tracks', protect, trackController.getAllTracks);

router.get('/get-track/:id', protect, trackController.getTrack);

router.get('/health-check-status',  trackController.healthCheck);

// Update subscriptions Paypal
router.delete('/delete-track/:id', protect, trackController.deleteTrack);
export default router;
