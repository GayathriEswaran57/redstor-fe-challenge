import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPhoto } from '../../interfaces';
import { UnsplashService } from '../../services';
import { BehaviorSubject, Observable, map } from 'rxjs';

// toDo Is there a way to improve the rendering strategy in this component?
@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoComponent implements OnInit {
  private readonly unsplashService: UnsplashService = inject(UnsplashService);
  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  isloadingBool: boolean = true;

  constructor(private cdRef: ChangeDetectorRef) {}

  readonly photo$: BehaviorSubject<IPhoto> = new BehaviorSubject<IPhoto>({} as IPhoto);
  isLoading$: Observable<boolean> = this.photo$.pipe(map(p => !p));

  ngOnInit(): void {
    const photoId = this.activatedRoute.snapshot.params['photoId'];
    this.unsplashService.getPhoto(photoId).subscribe(photo => {
      // toDo Is there a better way to improve this object mapping?
      this.photo$.next(photo.response as any as IPhoto);
      this.isloadingBool = false;
      this.cdRef.detectChanges();
    });
  }
}
