import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCollections from './collections.reducer';

export namespace CollectionsSelectors {
  export const selectCollectionsFeature = createFeatureSelector<fromCollections.State>(fromCollections.collectionsFeatureKey);
  export const selectCollections = createSelector(selectCollectionsFeature, (state: fromCollections.State) => state.collections);
  export const selectCollectionsInTotal = createSelector(selectCollectionsFeature, (state: fromCollections.State) => state.collectionInTotal);
  export const selectIsLoading = createSelector(selectCollectionsFeature, (state: fromCollections.State) => state.isLoading);
}
