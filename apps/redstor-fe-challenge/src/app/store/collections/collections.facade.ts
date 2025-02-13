import { Injectable, Signal, inject } from '@angular/core';
import { ICollection } from '../../interfaces';
import { Store } from '@ngrx/store';
import { CollectionsSelectors } from './collections.selectors';
import { CollectionsActions } from './collections.actions';

@Injectable({ providedIn: 'root' })
export class CollectionsFacade {
  private readonly store: Store = inject(Store);

  readonly collections$: Signal<ICollection[]> = this.store.selectSignal(CollectionsSelectors.selectCollections);
  readonly collectionsInTotal$: Signal<number> = this.store.selectSignal(CollectionsSelectors.selectCollectionsInTotal);
  readonly isLoading$: Signal<boolean> = this.store.selectSignal(CollectionsSelectors.selectIsLoading);

  loadCollections(pageSizeValue: number, pageIndex: number) {
    this.store.dispatch(CollectionsActions.loadCollections({ pageSize: pageSizeValue, page: pageIndex }));
  }
}
