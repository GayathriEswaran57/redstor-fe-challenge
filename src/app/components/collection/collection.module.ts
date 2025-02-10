import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CollectionComponent } from './collection.component';
import { RedstorGalleryCardComponent } from 'projects/redstor-gallery-card/src/public-api';

@NgModule({
  declarations: [CollectionComponent],
  imports: [CommonModule, RouterModule, MatProgressBarModule, RedstorGalleryCardComponent],
  exports: [CollectionComponent]
})
export class CollectionModule {}
