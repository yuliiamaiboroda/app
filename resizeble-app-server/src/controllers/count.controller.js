import * as countService from '../services/count.service.js';

export const get = async(req, res) => {
  const counts = await countService.get();

  res.send({ counts });
};
