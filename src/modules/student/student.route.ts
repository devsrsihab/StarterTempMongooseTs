import express from 'express';
import { StudentController } from './student.controller';

const router = express.Router();

router.post('/create-student', StudentController.createStudent);
router.get('/get-students', StudentController.getStudent);
router.get('/get-students/:id', StudentController.getSingleStudent);

export const StudentRoute = router;
