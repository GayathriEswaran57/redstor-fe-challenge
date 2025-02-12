import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'redstor-tool-bar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatSelectModule,],
  templateUrl: './redstor-tool-bar.component.html',
  styleUrl: './redstor-tool-bar.component.scss'
})
export class RedstorToolBarComponent {

  @Input () dynamicContent:any;
  @Input () languages:any;
  @Output() handleClick: EventEmitter<any> = new EventEmitter<any>();

  handleUserClick(e:any) {
    this.handleClick.emit(e);
  }

}
