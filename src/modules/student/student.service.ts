import { TStudent } from './student.interface';
import { Student } from './student.model';

// create student
const createStudentToDB = async (studentData: TStudent) => {
  // const result = await StudentModel.create(student);
  const student = new Student(studentData);

  // for custom static method
  if (await Student.isUserExist(studentData.id)) {
    throw new Error('student already exist');
  }


  // for custom instance method
  // if (await student.isUserExist(studentData.id)) {
  //   throw new Error('student already exist');
  // }
  
  const result = student.save();
  return result;
};

// get all students
const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

// get single student
const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentToDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
