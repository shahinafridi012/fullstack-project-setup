import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.route';
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

//when ever the user search api/v1/students then he will go the StudentRoutes//
//application routes
app.use('/api/v1/students', StudentRoutes);

const getAController = (req: Request, res: Response) => {
  const a = 10;
  res.send({ value: a });
};

app.get('/', getAController);

export default app;
