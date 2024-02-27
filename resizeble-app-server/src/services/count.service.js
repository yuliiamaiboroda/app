import { ApiError } from '../exeptions/api.error.js';
import { Count } from '../models/count.js';

export const updateAddCount = async() => {
  let countRecord = await Count.findOne();

  if (!countRecord) {
    countRecord = await Count.create({});
  }

  countRecord.addCount += 1;

  await countRecord.save();
};

export const get = async() => {
  const countRecord = await Count.findOne();

  if (!countRecord) {
    throw ApiError.badRequest('Count error', {
      count: 'No counts yet',
    });
  }

  return countRecord.addCount;
};
