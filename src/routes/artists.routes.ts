import express,{Request, Response} from 'express';
import { artistController } from '../controllers/artistController';
import { authorizeMiddleware } from '../middlewares/authorize';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = express.Router();

//Rutas Artists
// get all artists
router.get('/',authMiddleware,artistController.getAll);

///Rutas de admin
//create artist
router.post('/create',authorizeMiddleware(["Admin"]),artistController.create);


export default router;