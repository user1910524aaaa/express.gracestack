import fs from 'fs';
import path from 'path';
import type { IUser } from '../interfaces';

import data from '../data/users.json';

export const saveUserToDatabase = (user: IUser) => {
  return new Promise((resolve, reject) => {
    data.push(user);
    fs.writeFile(path.resolve(__dirname, '../src/data/users.json'), JSON.stringify(data), err => {
      if (err) reject(err);
      else resolve('User Saved');
    });
  });
};
