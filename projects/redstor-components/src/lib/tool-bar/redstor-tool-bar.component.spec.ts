import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedstorToolBarComponent } from './redstor-tool-bar.component';

describe('RedstorToolBarComponent', () => {
  let component: RedstorToolBarComponent;
  let fixture: ComponentFixture<RedstorToolBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedstorToolBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RedstorToolBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
