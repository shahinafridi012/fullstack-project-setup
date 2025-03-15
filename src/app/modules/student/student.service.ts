import { StudentModel } from '../student.model';
import { Student } from './student.interface';

const createStudentDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentsFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const StudentService = {
  createStudentDB,
  getAllStudentsFromDB,
  getSingleStudentsFromDB,
};
