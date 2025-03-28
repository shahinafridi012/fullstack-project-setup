export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherOccupation: string;
  motherContactNo: string;
};
export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};
export type LocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
};
export type Student = {
  id: string;
  name: UserName;

  gender: 'male' | 'female';
  dateOfBirth?: string;
  email: string;
  contactNo: String;
  emergencyContactNo: string;
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-' | 'AB+' | 'AB-';
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImg?: string;
  isActive: 'active' | 'inActive';
};
