import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesRegistroComponent } from './opciones-registro.component';

describe('OpcionesRegistroComponent', () => {
  let component: OpcionesRegistroComponent;
  let fixture: ComponentFixture<OpcionesRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpcionesRegistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcionesRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
