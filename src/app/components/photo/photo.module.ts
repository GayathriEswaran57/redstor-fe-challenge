import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoComponent } from './photo.component';
import { CapitalizePipe } from '@app/pipes/capatalize.pipe';

const routes: Routes = [
  {
    path: '',
    component: PhotoComponent,
    data: { breadcrumb: 'Photo' }
  }
]
@NgModule({
  declarations: [PhotoComponent,CapitalizePipe],
  imports: [CommonModule, RouterModule.forChild(routes), MatToolbarModule, MatProgressBarModule, MatCardModule, MatIconModule],
  exports: [PhotoComponent]
})
export class PhotoModule {}
