import express from 'express';
import type { Express, Request, Response } from 'express';

const app: Express = express();
const port = 4000;

app.get('/', (_req: Request, res: Response) => {
  res.json({ salute: 'Hello Worlds!' });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
