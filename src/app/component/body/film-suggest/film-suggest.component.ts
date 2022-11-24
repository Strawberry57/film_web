import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-film-suggest',
  templateUrl: './film-suggest.component.html',
  styleUrls: ['./film-suggest.component.scss']
})
export class FilmSuggestComponent implements OnInit {

  @Input() arrayFilm : any
  constructor() { }

  ngOnInit(): void {


  }


}
