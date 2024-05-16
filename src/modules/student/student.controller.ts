import { Request, Response } from 'express';
import { StudentServices } from './student.service';

// student create controller
const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studetnData } = req.body;

    const result = await StudentServices.createStudentToDB(studetnData);

    res.status(200).json({
      status: true,
      message: 'student created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

// get all student conroller
const getStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(200).json({
      status: true,
      message: 'student get successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

// get single student controller
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(id);
    res.status(200).json({
      status: true,
      message: 'student get successfully',
      data: result || 'no data found',
    });
  } catch (error) {
    console.log(error);
  }
};

export const StudentController = {
  createStudent,
  getStudent,
  getSingleStudent,
};
