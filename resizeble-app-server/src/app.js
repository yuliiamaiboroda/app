/* eslint-disable no-console */
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { errorMiddleware } from './middlewares/errorMiddleware.js';
import { router as textRouter } from './routes/text.route.js';
import { router as countRouter } from './routes/count.route.js';

const PORT = process.env.PORT || 3005;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/text', textRouter);
app.use('/count', countRouter);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
