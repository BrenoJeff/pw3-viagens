import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarViagensComponent } from './criar-viagens.component';

describe('CriarViagensComponent', () => {
  let component: CriarViagensComponent;
  let fixture: ComponentFixture<CriarViagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarViagensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarViagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
