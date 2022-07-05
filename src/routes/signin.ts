import { Router, Request, Response } from 'express';
import express from 'express';

const router: Router = express.Router();

import data from '../data/users.json';

export const signinRoute = router.post('/signin', (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (email === null || email === undefined)
    res.status(400).json({
      type: 'error',
      code: 400,
      message: 'Bad request. Email address value sent from the client is null.',
    });
  else {
    const users = data.filter(user => user.email === email);

    if (users.length < 1)
      res.status(404).json({
        type: 'error',
        code: 404,
        message: 'Not found. No email address with such value provided by the client is found in the database.',
      });
    else {
      const user = users[0];

      if (password === null || password === undefined)
        res.status(400).json({
          type: 'error',
          code: 400,
          message: 'Bad request. Password value sent from the client is null.',
        });
      else if (password !== user.password)
        res.status(404).json({
          type: 'error',
          code: 404,
          message: 'Not found. Incorrect email or password provided by the client.',
        });
      else
        res.status(200).json({
          type: 'success',
          code: 200,
          message: 'Ok. User and password sent from the client found a match in the database. You are now logged in.',
        });
    }
  }
});
