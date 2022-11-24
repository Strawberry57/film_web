import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmOnePartComponent } from './film-one-part.component';

describe('FilmOnePartComponent', () => {
  let component: FilmOnePartComponent;
  let fixture: ComponentFixture<FilmOnePartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmOnePartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmOnePartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
