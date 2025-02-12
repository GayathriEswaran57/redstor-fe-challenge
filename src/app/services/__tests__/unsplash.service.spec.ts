import { TestBed } from '@angular/core/testing';
import { UnsplashService } from '../unsplash.service';
import { createApi } from 'unsplash-js';

describe('UnsplashService', () => {
  let service: UnsplashService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UnsplashService,
        { provide: createApi},
      ],
    });
    service = TestBed.inject(UnsplashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should list collections with pagination', (done) => {
    service.listCollections(10, 1).subscribe((response: any) => {
      const collection = response.response.results[0];
      expect(response.response.results.length).toBe(10);
      expect(collection.id).toBeTruthy();
      expect(collection.title).toBeDefined;
      done();
    });
  });

  it('should list photos in a collection', (done) => {
    const collectionId = '123';
    service.listCollectionPhotos(collectionId).subscribe((response:any) => {
      const collection = response.response.results;
      if (collection.length > 0) {
        expect(collection[0].id).toBeTruthy();
        expect(collection[0].alt_description).toBeDefined;
        expect(collection[0].likes).toBeDefined;
      } else {
        expect(collection.length).toBe(0);
      }
      done();
    });
  });

  it('should get a specific photo', (done) => {
    const photoId = 'hpCHLFknc2s';
    service.getPhoto(photoId).subscribe((response:any) => {
      expect(response.response?.id).toBe('hpCHLFknc2s');
      expect(response.response?.alt_description).toBe('body of water');
      done();
    });
  });

});
