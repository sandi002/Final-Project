import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CekoutppobPage } from './cekoutppob.page';

describe('CekoutppobPage', () => {
  let component: CekoutppobPage;
  let fixture: ComponentFixture<CekoutppobPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CekoutppobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
