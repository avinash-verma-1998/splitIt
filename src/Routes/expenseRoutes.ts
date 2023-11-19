import express from 'express';
import { createExpense } from '../Controllers/expenseController';
export const expenseRouter = express.Router();

expenseRouter.post('/create', createExpense);
