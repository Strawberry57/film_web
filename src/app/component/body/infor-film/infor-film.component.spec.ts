import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InforFilmComponent } from './infor-film.component';

describe('InforFilmComponent', () => {
  let component: InforFilmComponent;
  let fixture: ComponentFixture<InforFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InforFilmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InforFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
