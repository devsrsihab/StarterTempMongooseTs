import { model, Schema } from 'mongoose';
import { Gurdian, LocalGurdian, Student, UserName } from './student.interface';

// username schema
const UserNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    maxlength: [20, 'First name should not exceed 20 characters'],
    trim: true, // remove extra spaces
  },
  middleName: {
    type: String,
    maxlength: [20, 'Middle name should not exceed 20 characters'],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    maxlength: [20, 'Last name should not exceed 20 characters'],
    trim: true,
  },
});

// guardian schema
const GurdianSchema = new Schema<Gurdian>({
  fatherName: {
    type: String,
    required: true,
    maxlength: [20, 'Father name should not exceed 20 characters'],
    trim: true,
  },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
    maxlength: [20, 'Mother name should not exceed 20 characters'],
    trim: true,
  },
  motherContactNo: {
    type: String,
    required: true,
  },
  motherOccupation: { type: String, required: true },
});

// local guardian schema
const LocalGurdianSchema = new Schema<LocalGurdian>({
  name: {
    type: String,
    required: true,
    maxlength: [20, 'Name should not exceed 20 characters'],
    trim: true,
  },
  occupation: { type: String, required: true },
  contact: {
    type: String,
    required: true,
  },
  address: { type: String, required: true },
});

// student schema
const studentSchema = new Schema<Student>({
  id: { type: String, required: true, unique: true },
  name: { type: UserNameSchema, required: true },
  gender: {
    type: String,
    required: true,
    enum: {
      values: ['male', 'female', 'other'],
      message: "{VALUE} is not valid. Allowed values are 'male', 'female', or 'other'",
    },
  },
  dateOfBirth: { type: String },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message:
        "{VALUE} is not valid. Allowed values are 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'",
    },
  },
  contactNo: {
    type: String,
    required: true,
  },
  emergencyContact: {
    type: String,
    required: true,
  },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: { type: GurdianSchema, required: true },
  localGuardian: { type: LocalGurdianSchema},
  profileImg: { type: String },
  isActive: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
  },
});

// student model
export const StudentModel = model<Student>('Student', studentSchema);
