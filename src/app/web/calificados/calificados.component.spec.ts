import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificadosComponent } from './calificados.component';

describe('CalificadosComponent', () => {
  let component: CalificadosComponent;
  let fixture: ComponentFixture<CalificadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalificadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalificadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
