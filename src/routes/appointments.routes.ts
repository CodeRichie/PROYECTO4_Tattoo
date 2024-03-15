import express from 'express';
import { appointmentController } from '../controllers/appointmentController';
import { de } from '@faker-js/faker';
import { authMiddleware } from '../middlewares/authMiddleware';
const router = express.Router();

// APPOINTMENT


//get all appointments
router.get('/',authMiddleware, appointmentController.getAll);

//get appointmentbyid
router.get('/:id',authMiddleware, appointmentController.getById);

//create appointment
router.post('/create',authMiddleware, appointmentController.create);

//edit appointment
router.put('/:id',authMiddleware, appointmentController.update);

//delete date
router.delete('/:id',authMiddleware, appointmentController.delete);

//get appointment by client
router.get('/client/jobdates',authMiddleware, appointmentController.getByLogedClient);

//get appointment by artist
router.get('/artist/jobdates',authMiddleware, appointmentController.getByLogedArtist);

export default router;