import { collectionMock } from '../../../../mock-data/collection-mock';
import { CollectionsActions } from '../collections.actions';
import { ICollection } from '../../../interfaces/collection.interface';

describe('Collections Actions', () => {
  it('should create a loadCollections action', () => {
    const pageSize = 10;
    const page = 1;

    const action = CollectionsActions.loadCollections({ pageSize, page });

    expect(action.type).toBe('[Collections] Load Collections');
    expect(action.pageSize).toBe(pageSize);
    expect(action.page).toBe(page);
  });

  it('should create a loadCollectionsSuccess action', () => {
    const collections: ICollection[] = [collectionMock];
    const collectionsInTotal = 1;

    const action = CollectionsActions.loadCollectionsSuccess(collections, collectionsInTotal);

    expect(action.type).toBe('[Collections] Load Collections success');
    expect(action.collections).toBe(collections);
    expect(action.collectionsInTotal).toBe(collectionsInTotal);
  });

  it('should create a loadCollectionsFailure action', () => {
    const action = CollectionsActions.loadCollectionsFailure();

    expect(action.type).toBe('[Collections] Load Collections failure');
  });
});
