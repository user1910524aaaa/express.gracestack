import type { Router, Request, Response } from 'express';
import express from 'express';
import data from '../data/users.json';
import { saveUserToDatabase } from '../utils/index';

const router: Router = express.Router();

export const signupRoute = router.post('/signup', (req: Request, res: Response) => {
  const { firstName, lastName, birthDate, email, password } = req.body;

  const isEmailAvailable: boolean = data.filter(user => user.email === email).length === 0;

  if (email === null || email === undefined)
    res.status(400).json({
      type: 'error',
      code: 400,
      message: 'Bad request. Email address value sent from the client is null.',
    });
  else if (!isEmailAvailable)
    res.status(409).json({
      type: 'error',
      code: 409,
      message: 'Conflict. The email address value provided by the client is already in the database.',
    });
  else {
    if (password === null || password === undefined)
      res.status(400).json({
        type: 'error',
        code: 400,
        message: 'Bad request. Password value sent from the client is null.',
      });
    else {
      saveUserToDatabase({ firstName, lastName, birthDate, email, password });
      res.status(201).json({
        type: 'success',
        code: 201,
        message: 'Created. New user successfully saved in the database.',
      });
    }
  }
});
