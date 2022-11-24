import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotFilmComponent } from './hot-film.component';

describe('HotFilmComponent', () => {
  let component: HotFilmComponent;
  let fixture: ComponentFixture<HotFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotFilmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
