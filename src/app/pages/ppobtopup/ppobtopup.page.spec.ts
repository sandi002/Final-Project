import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PpobtopupPage } from './ppobtopup.page';

describe('PpobtopupPage', () => {
  let component: PpobtopupPage;
  let fixture: ComponentFixture<PpobtopupPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PpobtopupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
