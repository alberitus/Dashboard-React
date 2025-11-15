import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import usersRouter from './routes/users.js';

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', usersRouter);

app.listen(3000, () => console.log('Backend running on port 3000'));
