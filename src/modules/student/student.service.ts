import { Student } from './student.interface';
import { StudentModel } from './student.model';

// create student
const createStudentToDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

// get all students
const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

// get single student
const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentToDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
