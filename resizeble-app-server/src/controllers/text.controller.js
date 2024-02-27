import { ApiError } from '../exeptions/api.error.js';
import * as textService from '../services/text.service.js';

export const get = async(req, res) => {
  const tasks = await textService.getAll();

  res.send(tasks);
};

export const post = async(req, res) => {
  const { title } = req.body;

  if (!title) {
    throw ApiError.badRequest('Text error', {
      text: 'Text is required',
    });
  }

  const task = await textService.create(title);

  res.send(task);
};

export const update = async(req, res) => {
  const { title } = req.body;
  const { id } = req.params;

  if (!title) {
    throw ApiError.badRequest('Text error', {
      text: 'Text is required',
    });
  }

  if (!id) {
    throw ApiError.badRequest('Text error', {
      id: 'Id is required',
    });
  }

  const task = await textService.update({ id, title });

  res.send(task);
};
