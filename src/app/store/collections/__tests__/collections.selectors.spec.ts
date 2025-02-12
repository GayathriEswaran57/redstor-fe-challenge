import { Store, StoreModule } from '@ngrx/store';
import { CollectionsSelectors } from '../collections.selectors';
import { collectionMock } from 'src/mock-data/collection-mock';
import * as fromCollections from '../collections.reducer'; 

describe('Collections Selectors', () => {
  let store: Store<fromCollections.State>;
  
  const initialState: fromCollections.State = {
    collections: [
    collectionMock
    ],
    collectionInTotal: 2,
    isLoading: false
  };


  it('should select collections', () => {
    const result = CollectionsSelectors.selectCollections.projector(initialState);
    expect(result).toEqual(initialState.collections);
  });

  it('should select collectionInTotal', () => {
    const result = CollectionsSelectors.selectCollectionsInTotal.projector(initialState);
    expect(result).toBe(initialState.collectionInTotal);
  });

  it('should select isLoading', () => {
    const result = CollectionsSelectors.selectIsLoading.projector(initialState);
    expect(result).toBe(initialState.isLoading);
  });
});
