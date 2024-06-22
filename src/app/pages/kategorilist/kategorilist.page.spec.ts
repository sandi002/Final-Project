import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KategorilistPage } from './kategorilist.page';

describe('KategorilistPage', () => {
  let component: KategorilistPage;
  let fixture: ComponentFixture<KategorilistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategorilistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KategorilistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
