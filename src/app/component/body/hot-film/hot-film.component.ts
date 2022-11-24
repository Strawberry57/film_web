import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hot-film',
  templateUrl: './hot-film.component.html',
  styleUrls: ['./hot-film.component.scss']
})
export class HotFilmComponent implements OnInit {

  title : string = "Lời mời đến từ địa ngục";
  src : string ="../../../../assets/images/maxresdefault.jpg";
  status : string ="Full HD | Vietsub"
  constructor(private readonly router:Router) { }

  @Input() arrayFilm : any

  ngOnInit(): void {
  }
  handleNavigateInfor(){
    this.router.navigate(["/infor-film"])
  }
}
