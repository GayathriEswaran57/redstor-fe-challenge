import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, CollectionComponent } from './components';

// toDo How could we improve this routing?
const routes: Routes = [
  { path: '', component: HomeComponent, data: { breadcrumb: 'Collections' } },
  {
    path: 'collection/:collectionId',
    component: CollectionComponent,
    data: { breadcrumb: 'Collection' },
    children: [
      {
        path: 'photo/:photoId',
        loadChildren: () => import('../app/components/photo/photo.module').then(m => m.PhotoModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
