import express from 'express';
import { createUser } from '../Controllers/userController';
export const userRouter = express.Router();

userRouter.post('/create', createUser);
