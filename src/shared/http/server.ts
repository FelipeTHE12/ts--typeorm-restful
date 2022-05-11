import express, { Request, Response, NextFunction } from 'express';
import 'reflect-metadata';
import cors from 'cors';
import routes from './routes/mainRouter';
import AppError from '../errors/AppError';
import '@shared/typeorm';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Server error',
    });
  },
);

app.listen(3000, () => {
  console.log('Ola');
});
