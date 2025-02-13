import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'redstor-gallery-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './redstor-gallery-card.component.html',
  styleUrl: `./redstor-gallery-card.component.scss`
})
export class RedstorGalleryCardComponent {
  @Input() photos: any;
  @Input() ImgSrc: any;
  @Input() altDescription: any;
  @Input() likes?: any;
  @Input() dynamicContent?: any;
  @Output() handleClick: EventEmitter<any> = new EventEmitter<any>();

  handleUserClick(e: any) {
    this.handleClick.emit(e);
  }
}
