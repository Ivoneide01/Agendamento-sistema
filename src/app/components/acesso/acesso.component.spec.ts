import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessoComponent } from './acesso.component';

describe('AcessoComponent', () => {
  let component: AcessoComponent;
  let fixture: ComponentFixture<AcessoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcessoComponent]
    });
    fixture = TestBed.createComponent(AcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
