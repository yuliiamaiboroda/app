import express from 'express';
import * as textController from '../controllers/text.controller.js';
import { catchError } from '../utils/catchError.js';

export const router = express.Router();

router.get('/', catchError(textController.get));
router.post('/', catchError(textController.post));
router.put('/:id', catchError(textController.update));
