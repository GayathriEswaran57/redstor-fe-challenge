import { Component, OnInit, inject, ChangeDetectionStrategy, Signal } from '@angular/core';
import { ICollection } from '../../interfaces';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { Router, RouterModule } from '@angular/router';
import { CollectionsFacade } from './../../store';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { RedstorGalleryCardComponent } from '../../../../../../libs/redstor-components/src/public-api';

// toDo Transform this module in a standalone component
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, MatProgressBarModule, RedstorGalleryCardComponent, MatPaginatorModule],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  private readonly router: Router = inject(Router);
  pageSize: number = 10;
  pageIndex: number = 1;

  constructor(public collectionsFacade: CollectionsFacade) {}
  // toDo Why the changes are not reflected in the UI?
  isLoading: Signal<boolean> = this.collectionsFacade.isLoading$;
  collections: Signal<ICollection[]> = this.collectionsFacade.collections$;
  length: Signal<number> = this.collectionsFacade.collectionsInTotal$;

  ngOnInit(): void {
    // toDo Improve this call using the store (ngrx)
    this.collectionsFacade.loadCollections(this.pageSize, this.pageIndex);
    // toDo What's happening with this subscription in case the component is destroyed?
    // toDo Is there another way to do this operation?
    // toDo Could we add a pagination?
  }
  handlePageEvent(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex + 1;
    this.collectionsFacade.loadCollections(this.pageSize, this.pageIndex);
  }
  handleRouting(collection: any) {
    return this.router.navigateByUrl(`/collection/${collection.id}`);
  }
}
