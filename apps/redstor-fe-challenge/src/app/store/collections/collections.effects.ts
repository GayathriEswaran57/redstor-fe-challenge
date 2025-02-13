import { Injectable, inject } from '@angular/core';
import { UnsplashService } from '../../services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CollectionsActions } from './collections.actions';
import { map, switchMap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CollectionsEffects {
  private readonly actions$: Actions = inject(Actions);
  private readonly unsplash: UnsplashService = inject(UnsplashService);

  loadCollections$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CollectionsActions.loadCollections),
      switchMap(({ pageSize, page }) =>
        this.unsplash
          .listCollections(pageSize, page)
          .pipe(
            map(result =>
              result.type === 'success'
                ? CollectionsActions.loadCollectionsSuccess(result.response.results || [], result.response.total)
                : CollectionsActions.loadCollectionsFailure()
            )
          )
      )
    )
  );
}
