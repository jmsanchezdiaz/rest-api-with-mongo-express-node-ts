'use strict';
import * as dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import notesRouter from './notes/routes';

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URI as string);

const PORT = 3001;

app.use(express.json());
app.use('/api/', notesRouter);

app.listen(PORT, () => console.log('Server on port ', PORT));
