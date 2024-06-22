import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KategorippobPage } from './kategorippob.page';

describe('KategorippobPage', () => {
  let component: KategorippobPage;
  let fixture: ComponentFixture<KategorippobPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(KategorippobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
