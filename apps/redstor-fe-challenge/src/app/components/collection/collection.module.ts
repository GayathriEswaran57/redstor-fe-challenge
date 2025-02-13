import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CollectionComponent } from './collection.component';

import { TranslatePipe } from '@ngx-translate/core';
import { RedstorGalleryCardComponent } from '../../../../../../libs/redstor-components/src/public-api';

@NgModule({
  declarations: [CollectionComponent],
  imports: [CommonModule, RouterModule, MatProgressBarModule, RedstorGalleryCardComponent, TranslatePipe],
  exports: [CollectionComponent]
})
export class CollectionModule {}
