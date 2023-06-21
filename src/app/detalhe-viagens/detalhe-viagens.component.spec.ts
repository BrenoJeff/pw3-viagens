import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheViagensComponent } from './detalhe-viagens.component';

describe('DetalheViagensComponent', () => {
  let component: DetalheViagensComponent;
  let fixture: ComponentFixture<DetalheViagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheViagensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheViagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
