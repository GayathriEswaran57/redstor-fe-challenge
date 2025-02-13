import { ICollection } from '../../interfaces';
import { createAction, props } from '@ngrx/store';

export namespace CollectionsActions {
  export const loadCollections = createAction('[Collections] Load Collections', props<{ pageSize: number; page: number }>());
  export const loadCollectionsSuccess = createAction(
    '[Collections] Load Collections success',
    (collections: ICollection[], collectionsInTotal: number) => ({
      collections,
      collectionsInTotal
    })
  );
  export const loadCollectionsFailure = createAction('[Collections] Load Collections failure');
}
