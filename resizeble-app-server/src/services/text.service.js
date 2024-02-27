import { Text } from '../models/text.js';
import { updateAddCount } from './count.service.js';

function normalize(task) {
  return { id: task.id, title: task.title };
}

export const getAll = async() => {
  const tasks = await Text.findAll();

  return tasks.map(normalize);
};

export const create = async(title) => {
  const task = await Text.create({ title });

  await updateAddCount();

  const normalized = normalize(task);

  return normalized;
};

export const update = async({ id, title }) => {
  await Text.update({ title }, {
    where: { id },
  });

  await updateAddCount();

  const updatedTask = await Text.findOne({
    where: { id },
  });

  return normalize(updatedTask);
};
