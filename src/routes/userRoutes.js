import { Router } from 'express';
import userController from '../controllers/userController';
const router = Router();

router.post('/create-user', userController.createUser);
router.post('/reset-password', userController.resetPassword);
router.put('/new-password', userController.newPassword);
router.put('/update-user', userController.newPassword);

module.exports = router;