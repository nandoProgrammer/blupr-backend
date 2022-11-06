import { Router } from 'express';
import userController from '../controllers/userController';
const router = Router();

router.get('/get-user/:idUser', userController.getUser);
router.post('/create-user', userController.createUser);
router.post('/reset-password', userController.resetPassword);
router.put('/new-password', userController.newPassword);
router.put('/update-user/:idUser', userController.updateUser);

module.exports = router;