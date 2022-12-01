import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-infor-film',
  templateUrl: './infor-film.component.html',
  styleUrls: ['./infor-film.component.scss']
})
export class InforFilmComponent implements OnInit {

  film : any
  filmContent : string
  constructor(private readonly router: Router) { }

  ngOnInit(): void {
    const film: any = localStorage.getItem("film")
    this.film = JSON.parse(film);
    this.filmContent =JSON.parse(film).movie.content.replace("<p>","").replace("</p>","").replace( "\/","")
    this.filmContent =this.filmContent.substring(0, this.filmContent.length - 1)
  }
  handleNavigate(){
    this.router.navigate(["/watch"])
  }

}
