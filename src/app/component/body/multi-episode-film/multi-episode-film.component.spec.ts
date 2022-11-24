import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiEpisodeFilmComponent } from './multi-episode-film.component';

describe('MultiEpisodeFilmComponent', () => {
  let component: MultiEpisodeFilmComponent;
  let fixture: ComponentFixture<MultiEpisodeFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiEpisodeFilmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiEpisodeFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
