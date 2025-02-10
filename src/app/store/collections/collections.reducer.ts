import { ICollection } from '@app/interfaces';
import { createReducer, on } from '@ngrx/store';
import { CollectionsActions } from './collections.actions';

export const collectionsFeatureKey = 'collections';

export interface State {
  collections: ICollection[];
  collectionInTotal: number;
  isLoading: boolean;
}

export const initialState: State = {
  collections: [],
  collectionInTotal: 0,
  isLoading: false
};

export const reducer = createReducer(
  initialState,
  on(CollectionsActions.loadCollectionsSuccess, (state, { collections, collectionsInTotal }) => ({ ...state, 
    collections,
    collectionInTotal: collectionsInTotal,
    isLoading: false})),
  on(CollectionsActions.loadCollections, (state) => ({ ...state, isLoading: true })),
  on(CollectionsActions.loadCollectionsFailure, (state) => ({ ...state, isLoading: false }))
);
