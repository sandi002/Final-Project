import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PpoblistPage } from './ppoblist.page';

describe('PpoblistPage', () => {
  let component: PpoblistPage;
  let fixture: ComponentFixture<PpoblistPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PpoblistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
