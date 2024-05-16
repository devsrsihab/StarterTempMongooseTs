import { Request, Response } from 'express';
import { StudentServices } from './student.service';

// student create controller
export const createStudent = async(req: Request, res: Response) => 
{
    try {
        const { student: studetnData } = req.body;

        const result = await StudentServices.createStudentToDB(studetnData);

        res.status(200).json({
          status: true,
          message: 'student created successfully',
          data: result,
        });
        
    } catch (error) {
        console.log(error)
    }   

}

export const StudentController = {
  createStudent
}
