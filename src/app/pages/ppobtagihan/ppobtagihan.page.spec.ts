import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PpobtagihanPage } from './ppobtagihan.page';

describe('PpobtagihanPage', () => {
  let component: PpobtagihanPage;
  let fixture: ComponentFixture<PpobtagihanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PpobtagihanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
