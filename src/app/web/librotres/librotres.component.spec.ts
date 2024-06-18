import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrotresComponent } from './librotres.component';

describe('LibrotresComponent', () => {
  let component: LibrotresComponent;
  let fixture: ComponentFixture<LibrotresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibrotresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibrotresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
