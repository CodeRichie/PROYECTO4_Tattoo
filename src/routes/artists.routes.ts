import express,{Request, Response} from 'express';
import { artistController } from '../controllers/artistController';
import { authorizeMiddleware } from '../middlewares/authorize';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = express.Router();

//Artist Routes
// get all artists
router.get('/',authMiddleware,artistController.getAll);

///Protected Routes
//create artist
router.post('/create',authorizeMiddleware(["Admin"]),artistController.create);


export default router;