import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirViagensComponent } from './excluir-viagens.component';

describe('ExcluirViagensComponent', () => {
  let component: ExcluirViagensComponent;
  let fixture: ComponentFixture<ExcluirViagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirViagensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirViagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
