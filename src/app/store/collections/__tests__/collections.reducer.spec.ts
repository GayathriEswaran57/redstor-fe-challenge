import { reducer, initialState } from '../collections.reducer';
import { CollectionsActions } from '../collections.actions';
import { ICollection } from '@app/interfaces';
import { collectionMock } from 'src/mock-data/collection-mock';

describe('Collections Reducer', () => {
  
  it('should return the default state when no action is passed', () => {
    const result = reducer(undefined, { type: 'Unknown' });
    expect(result).toBe(initialState);
  });

  it('should set isLoading to true on loadCollections', () => {
    const result = reducer(initialState, CollectionsActions.loadCollections({ pageSize: 10, page: 1 }));
    expect(result.isLoading).toBeTrue();
  });

  it('should update collections and collectionInTotal on loadCollectionsSuccess', () => {
    const mockCollections: ICollection[] = [
    collectionMock
    ];

    const result = reducer(
      initialState, 
      CollectionsActions.loadCollectionsSuccess(mockCollections, mockCollections.length)
    );

    expect(result.collections).toEqual(mockCollections);
    expect(result.collectionInTotal).toBe(mockCollections.length);
    expect(result.isLoading).toBeFalse();
  });

  it('should set isLoading to false on loadCollectionsFailure', () => {
    const result = reducer(initialState, CollectionsActions.loadCollectionsFailure());
    expect(result.isLoading).toBeFalse();
  });
});
