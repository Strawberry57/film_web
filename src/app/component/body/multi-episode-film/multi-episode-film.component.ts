import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-multi-episode-film',
  templateUrl: './multi-episode-film.component.html',
  styleUrls: ['./multi-episode-film.component.scss']
})
export class MultiEpisodeFilmComponent implements OnInit {

  title : string = "Lời mời đến từ địa ngục";
  src : string ="../../../../assets/images/maxresdefault.jpg";
  status : string ="Full HD | Vietsub"
  constructor(private readonly router: Router) { }
  @Input() arrayFilm : any

  ngOnInit(): void {
  }
  handleNavigate(){
    this.router.navigate(["/list-film/abc"])
  }

}
