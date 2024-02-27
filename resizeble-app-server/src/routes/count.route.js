import express from 'express';
import * as countController from '../controllers/count.controller.js';
import { catchError } from '../utils/catchError.js';

export const router = express.Router();

router.get('/', catchError(countController.get));
