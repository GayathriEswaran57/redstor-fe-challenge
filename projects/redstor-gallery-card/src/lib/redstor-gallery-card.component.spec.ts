import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedstorGalleryCardComponent } from './redstor-gallery-card.component';

describe('RedstorGalleryCardComponent', () => {
  let component: RedstorGalleryCardComponent;
  let fixture: ComponentFixture<RedstorGalleryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedstorGalleryCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RedstorGalleryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
