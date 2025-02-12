import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';
import { CollectionComponent } from './collection.component';
import { UnsplashService } from '@app/services';
import { IPhoto } from '@app/interfaces';
import { mockPhotosResponse } from 'src/mock-data/photo-mock';

describe('CollectionComponent', () => {
  let component: CollectionComponent;
  let fixture: ComponentFixture<CollectionComponent>;
  let unsplashServiceMock: any;
  let routerMock: any;
  let activatedRouteMock: any;

  beforeEach(() => {
    unsplashServiceMock = {
      listCollectionPhotos: jasmine.createSpy('listCollectionPhotos').and.returnValue(of(
        { response: { results: mockPhotosResponse, total:mockPhotosResponse.length } }))
    };

    routerMock = {
      events: new BehaviorSubject(new NavigationEnd(0, '', '')),
      navigateByUrl: jasmine.createSpy('navigateByUrl')
    };

    activatedRouteMock = {
      snapshot: { params: { collectionId: '12Q3e' } },
      children: []
    };

    TestBed.configureTestingModule({
      declarations: [CollectionComponent],
      providers: [
        { provide: UnsplashService, useValue: unsplashServiceMock },
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useValue: activatedRouteMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CollectionComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set isLoading$ to true on ngOnInit', fakeAsync(() => {
    component.ngOnInit();
    component.isLoading$.set(true);
    expect(component.isLoading$()).toBeTrue();
  }));

  it('should set childActive$ based on router events', fakeAsync(() => {
    component.ngOnInit();
    activatedRouteMock.children.push({});
    routerMock.events.next(new NavigationEnd(0, '', ''));
    tick();
    expect(component.childActive$()).toBeTrue();
  }));

  it('should fetch photos on ngOnInit', fakeAsync(() => {
    component.ngOnInit();
    tick();
    expect(unsplashServiceMock.listCollectionPhotos).toHaveBeenCalledWith('12Q3e');
    expect(component.photos$.getValue().length).toBe(1);
    expect(component.isLoading$()).toBeFalse();
  }));

  it('should navigate to the photo on handleGotoPhoto', () => {
    const photo: IPhoto = mockPhotosResponse[0];
    component.handleGotoPhoto(photo);
    expect(routerMock.navigateByUrl).toHaveBeenCalledWith('/collection/12Q3e/photo/980');
  });
});
