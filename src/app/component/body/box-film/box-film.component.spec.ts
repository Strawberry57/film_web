import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxFilmComponent } from './box-film.component';

describe('BoxFilmComponent', () => {
  let component: BoxFilmComponent;
  let fixture: ComponentFixture<BoxFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxFilmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
