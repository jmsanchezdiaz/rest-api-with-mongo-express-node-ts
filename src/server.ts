'use strict';
import * as dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import notesRouter from './notes/routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 1337;

app.use(express.json());
app.use('/api/', notesRouter);

mongoose.connect(process.env.MONGO_URI as string).then(() => {
  app.listen(PORT, () => console.log('Server on port ', PORT));
});
