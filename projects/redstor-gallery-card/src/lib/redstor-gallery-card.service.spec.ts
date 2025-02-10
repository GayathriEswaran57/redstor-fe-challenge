import { TestBed } from '@angular/core/testing';

import { RedstorGalleryCardService } from './redstor-gallery-card.service';

describe('RedstorGalleryCardService', () => {
  let service: RedstorGalleryCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedstorGalleryCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
