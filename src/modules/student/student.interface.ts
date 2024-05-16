
// 1. Create an interface representing a document in MongoDB.

// gurdian
export type Gurdian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

// username
export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

//blood group
export type BloodGroup = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';

//local gurdian
export type LocalGurdian = {
  name: string;
  occupation: string;
  contact: string;
  address: string;
};

export type Student = {
  id: string;
  name: UserName;
  gender: 'male' | 'female';
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContact: string;
  bloodGroup?: BloodGroup;
  presentAddress: string;
  permanentAddress: string;
  gurdian: Gurdian;
  localGurdian?: LocalGurdian;
  profileImg?: string;
  isActive: 'active' | 'inactive';
};
