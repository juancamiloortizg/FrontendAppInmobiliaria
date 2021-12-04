import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoInmueblesComponent } from './listado-inmuebles.component';

describe('ListadoInmueblesComponent', () => {
  let component: ListadoInmueblesComponent;
  let fixture: ComponentFixture<ListadoInmueblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoInmueblesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoInmueblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
