import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { CollectionsFacade } from './../../store';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { RedstorGalleryCardComponent } from '../../../../../../libs/redstor-components/src/public-api';
import { signal } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let routerMock: any;
  let collectionsFacadeMock: any;

  beforeEach(async () => {
    routerMock = {
      navigateByUrl: jasmine.createSpy('navigateByUrl')
    };
    collectionsFacadeMock = jasmine.createSpyObj('CollectionsFacade', ['loadCollections']);
    collectionsFacadeMock.isLoading$ = signal(false);
    collectionsFacadeMock.collections$ = signal([]);
    collectionsFacadeMock.collectionsInTotal$ = signal(0);

    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        CommonModule,
        RouterModule,
        MatProgressBarModule,
        RedstorGalleryCardComponent,
        MatPaginatorModule,
        BrowserAnimationsModule,
        HomeComponent
      ],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: CollectionsFacade, useValue: collectionsFacadeMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call loadCollections on ngOnInit', () => {
    component.ngOnInit();
    expect(collectionsFacadeMock.loadCollections).toHaveBeenCalledWith(10, 1);
  });

  it('should handle page events', () => {
    const pageEvent = { pageSize: 20, pageIndex: 1 } as PageEvent;
    component.handlePageEvent(pageEvent);
    expect(component.pageSize).toBe(20);
    expect(component.pageIndex).toBe(2);
    expect(collectionsFacadeMock.loadCollections).toHaveBeenCalledWith(20, 2);
  });

  it('should navigate to the collection on handleRouting', () => {
    const collection = { id: '12Q3e' };
    component.handleRouting(collection);
    expect(routerMock.navigateByUrl).toHaveBeenCalledWith('/collection/12Q3e');
  });
});
