import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaDeNotasComponent } from './entrada-de-notas.component';

describe('EntradaDeNotasComponent', () => {
  let component: EntradaDeNotasComponent;
  let fixture: ComponentFixture<EntradaDeNotasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntradaDeNotasComponent]
    });
    fixture = TestBed.createComponent(EntradaDeNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
