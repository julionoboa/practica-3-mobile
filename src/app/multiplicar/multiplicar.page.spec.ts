import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultiplicarPage } from './multiplicar.page';

describe('MultiplicarPage', () => {
  let component: MultiplicarPage;
  let fixture: ComponentFixture<MultiplicarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplicarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
