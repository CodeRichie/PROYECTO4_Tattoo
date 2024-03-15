import express from 'express';
import { userController } from '../controllers/userController';
import { authMiddleware } from '../middlewares/authMiddleware';
const router = express.Router();

// profiles



//get all users
router.get('/all', authMiddleware, userController.getAll);

//create user
router.post('/create',authMiddleware, userController.create);

//edit user
router.put('/edit/:id',authMiddleware ,userController.update);

//delete user
router.delete('/delete/:id',authMiddleware, userController.delete);


//get loged user profile
router.get('/profile/',authMiddleware, userController.getLogedUser);

//Update loged user profile
router.put('/profile/update',authMiddleware, userController.updateLogedUser);


//get user id
router.get('/:id', authMiddleware, userController.getProfileById);

//PROTECTED routes

//edit user role
router.put('/edit/role/:id',authMiddleware, userController.editUserRole);






export default router;