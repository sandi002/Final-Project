import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CariprodukPage } from './cariproduk.page';

describe('CariprodukPage', () => {
  let component: CariprodukPage;
  let fixture: ComponentFixture<CariprodukPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CariprodukPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CariprodukPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
