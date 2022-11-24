import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-film-one-part',
  templateUrl: './film-one-part.component.html',
  styleUrls: ['./film-one-part.component.scss']
})
export class FilmOnePartComponent implements OnInit {

  title : string = "Lời mời đến từ địa ngục";
  src : string ="../../../../assets/images/maxresdefault.jpg";
  status : string ="Full HD | Vietsub"
  constructor(private router : Router) { }
  @Input() arrayFilm : any
  arrayFilmChange: any =[]
  ngOnInit(): void {
  }
  handleNavigate(){
    this.router.navigate(["/list-film/abc"])
  }
  handleNavigateInfor(){
    this.router.navigate(["/infor-film"])
  }
  ngOnChanges(){
    this.arrayFilmChange = this.arrayFilm.splice(0,5)
  }

}
