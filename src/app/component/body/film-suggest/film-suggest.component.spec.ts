import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmSuggestComponent } from './film-suggest.component';

describe('FilmSuggestComponent', () => {
  let component: FilmSuggestComponent;
  let fixture: ComponentFixture<FilmSuggestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmSuggestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmSuggestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
