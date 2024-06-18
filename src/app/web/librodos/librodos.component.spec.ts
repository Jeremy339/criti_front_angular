import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrodosComponent } from './librodos.component';

describe('LibrodosComponent', () => {
  let component: LibrodosComponent;
  let fixture: ComponentFixture<LibrodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibrodosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibrodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
