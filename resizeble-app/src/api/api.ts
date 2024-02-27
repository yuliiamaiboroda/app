import { client } from '../helpers/fetchMain';
import { Text } from '../types/Text';

export const createText = (title: string) => {
  return client.post<Text>('/text', { title });
};

export const updateText = (
  id: number,
  title: string
) => {
  return client.put<Text>(`/text/${id}`, { title });
};