import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { PhotoComponent } from './photo.component';
import { UnsplashService } from '../../services';
import { IPhoto } from '../../interfaces/photo.interface';
import { ChangeDetectionStrategy } from '@angular/core';
import { mockPhotosResponse } from '../../../mock-data/photo-mock';

describe('PhotoComponent', () => {
  let component: PhotoComponent;
  let fixture: ComponentFixture<PhotoComponent>;
  let unsplashServiceMock: any;
  let activatedRouteMock: any;

  beforeEach(async () => {
    unsplashServiceMock = {
      getPhoto: jasmine.createSpy('getPhoto').and.returnValue(of({ response: mockPhotosResponse[0] }))
    };
    activatedRouteMock = {
      snapshot: { params: { photoId: '980' } }
    };
    await TestBed.configureTestingModule({
      declarations: [PhotoComponent],
      providers: [
        { provide: UnsplashService, useValue: unsplashServiceMock },
        { provide: ActivatedRoute, useValue: activatedRouteMock }
      ]
    })
      .overrideComponent(PhotoComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default }
      })
      .compileComponents();

    fixture = TestBed.createComponent(PhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch photo on ngOnInit', fakeAsync(() => {
    const photo: IPhoto = mockPhotosResponse[0];
    fixture.detectChanges();
    tick();

    expect(unsplashServiceMock.getPhoto).toHaveBeenCalledWith('980');
    expect(component.photo$.getValue()).toEqual(photo);
    expect(component.isloadingBool).toBeFalse();
  }));

  it('should set isLoading$ to false after fetching photo', fakeAsync(() => {
    fixture.detectChanges();
    tick();

    component.isLoading$.subscribe(isLoading => {
      expect(isLoading).toBeFalse();
    });
  }));
});
