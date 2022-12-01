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
  arrayFilmChange: any = []
  ngOnInit(): void {
  }
  handleNavigateInfor(e : any){
    localStorage.setItem("film",JSON.stringify(e))

    this.router.navigate(["/infor-film"])
  }
  ngOnChanges(){
    this.arrayFilmChange = this.arrayFilm?.splice(5,11)
  }
}
