import express from 'express';
import bodyParser from 'body-parser';

import type { Express } from 'express';

import { signinRoute } from './routes/signin';
import { signupRoute } from './routes/signup';

export const app: Express = express();
const port = 4000;

app.use(bodyParser.json());
app.use('/authentication', signinRoute);
app.use('/authentication', signupRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
