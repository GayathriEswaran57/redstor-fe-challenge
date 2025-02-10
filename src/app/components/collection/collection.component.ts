import { ChangeDetectionStrategy, Component, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { BehaviorSubject, of, switchMap } from 'rxjs';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { IPhoto } from '@app/interfaces';
import { UnsplashService } from '@app/services';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectionComponent implements OnInit {
  private readonly unsplashService: UnsplashService = inject(UnsplashService);
  private readonly router: Router = inject(Router);
  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  
  readonly photos$: BehaviorSubject<IPhoto[]> = new BehaviorSubject<IPhoto[]>([]);
  // toDo Is there another way using new Angular features to replace rjxs
  isLoading$: WritableSignal<boolean> = signal(false);
  childActive$: WritableSignal<boolean> = signal(false);

  ngOnInit(): void {
    this.isLoading$.set(true);
    const collectionId = this.activatedRoute.snapshot.params['collectionId'];
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.childActive$.set(this.activatedRoute.children.length > 0);
        this.isLoading$.set(false);
      }
    });
    
    this.unsplashService.listCollectionPhotos(collectionId).subscribe(photos => {
      this.photos$.next(photos?.response?.results || []);
      this.isLoading$.set(false);
    });
  }

  handleGotoPhoto(photo: IPhoto) {
    const collectionId = this.activatedRoute.snapshot.params['collectionId'];
    return this.router.navigateByUrl(`/collection/${collectionId}/photo/${photo.id}`);
  }
}
