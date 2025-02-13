import { ICollection } from '../app/interfaces';
import { mockPhotosResponse } from './photo-mock';

export const collectionMock: ICollection = {
  id: 123,
  title: 'nature',
  published_at: new Date('2025-09-12T09:00:00Z'),
  cover_photo: mockPhotosResponse[0],
  total_photos: 10
};
