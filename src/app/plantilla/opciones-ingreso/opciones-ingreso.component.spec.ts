import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesIngresoComponent } from './opciones-ingreso.component';

describe('OpcionesIngresoComponent', () => {
  let component: OpcionesIngresoComponent;
  let fixture: ComponentFixture<OpcionesIngresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpcionesIngresoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcionesIngresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
