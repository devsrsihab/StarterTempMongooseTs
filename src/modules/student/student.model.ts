import { model, Schema } from 'mongoose';
import {  Gurdian, LocalGurdian, Student, UserName } from './student.interface';

// username schema
const UserNameSchema = new Schema<UserName>({
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },)

// gurdian schema
const GurdianSchema = new Schema<Gurdian>({
    fatherName: { type: String, required: true },
    fatherOccupation: { type: String, required: true },
    fatherContactNo: { type: String, required: true },
    motherName: { type: String, required: true },
    motherContactNo: { type: String, required: true },
    motherOccupation: { type: String, required: true },
  })  

// local gurdian schema
const LocalGurdianSchema = new Schema<LocalGurdian>({
    name: { type: String, required: true },
    occupation: { type: String, required: true },
    contact: { type: String, required: true },
    address: { type: String, required: true },
  })  

// Studdent schema
const studentSchmea = new Schema<Student>({
  id: { type: String },
  name: UserNameSchema,
  gender: ['male', 'female'],
  dateOfBirth: { type: String },
  email: { type: String, required: true },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  contactNo: { type: String, required: true },
  emergencyContact: { type: String, required: true },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  gurdian: GurdianSchema,
  localGurdian: LocalGurdianSchema,
  profileImg: { type: String },
  isActive: ['active', 'inactive'],
});

// Studen Model 
const Student = model<Student>('Student', studentSchmea);