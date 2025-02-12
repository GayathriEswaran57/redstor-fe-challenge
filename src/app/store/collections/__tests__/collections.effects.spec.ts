import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { CollectionsEffects } from '../collections.effects';
import { CollectionsActions } from '../collections.actions';
import { UnsplashService } from '@app/services';
import { collectionMock } from 'src/mock-data/collection-mock';
import { mockPhotosResponse } from 'src/mock-data/photo-mock';

describe('CollectionsEffects', () => {
  let actions$: Observable<any>;
  let effects: CollectionsEffects;
  let unsplashServiceMock: any;

  beforeEach(() => {
    unsplashServiceMock = {
      listCollections: jasmine.createSpy('listCollections').and.returnValue(of(
        { response: { results: mockPhotosResponse, total:mockPhotosResponse.length } }))
    };
    TestBed.configureTestingModule({
      providers: [
        CollectionsEffects,
        provideMockActions(() => actions$),
        { provide: UnsplashService, useValue: unsplashServiceMock }
      ]
    });

    effects = TestBed.inject(CollectionsEffects);
  });

  describe('loadCollections$', () => {
    it('should dispatch loadCollectionsSuccess when the API call is successful', (done) => {
      const collections = [collectionMock];
      const total = 1;
      const action = CollectionsActions.loadCollections({ pageSize: 10, page: 1 });
      const successAction = CollectionsActions.loadCollectionsSuccess(collections, total);
      const mockResponse = {
        type: 'success',
        response: { results: collections, total:1 },
        originalResponse: {} as Response, 
        status: 200
      };

      unsplashServiceMock.listCollections.and.returnValue(of(mockResponse));

      actions$ = of(action);

      effects.loadCollections$.subscribe((resultAction) => {
        expect(resultAction).toEqual(successAction);
        done();
      });
    });

    it('should dispatch loadCollectionsFailure when the API call fails', (done) => {
      const action = CollectionsActions.loadCollections({ pageSize: 10, page: 1 });
      const failureAction = CollectionsActions.loadCollectionsFailure();

      unsplashServiceMock.listCollections.and.returnValue(of({
        response: null,
        type: 'error'
     }));
      actions$ = of(action); 

      effects.loadCollections$.subscribe((resultAction) => {
        expect(resultAction).toEqual(failureAction);
        done();
      });
    });
  });
});
