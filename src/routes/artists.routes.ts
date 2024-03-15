import express,{Request, Response} from 'express';
import { artistController } from '../controllers/artistController';

const router = express.Router();

//Artists
router.get('/',artistController.getAll);


export default router;