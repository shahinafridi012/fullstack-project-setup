import { Request, Response } from 'express';
import { StudentService } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  //   const student = req.body.student;
  const { student: StudentData } = req.body;

  try {
    //will call service func to send this data
    const result = await StudentService.createStudentDB(StudentData);

    //send response

    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentService.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'Student are retrieved succesfully',
      data: result,
    });
  } catch (err) {}
};
const getSingleStudents = async (req: Request, res: Response) => {
  try {
    const { StudentId } = req.params;

    const result = await StudentService.getSingleStudentsFromDB(StudentId);
    res.status(200).json({
      success: true,
      message: 'Student is retrieved succesfully',
      data: result,
    });
  } catch (err) {}
};
export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudents,
};
