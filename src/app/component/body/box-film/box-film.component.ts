import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-box-film',
  templateUrl: './box-film.component.html',
  styleUrls: ['./box-film.component.scss']
})
export class BoxFilmComponent implements OnInit {

  constructor(private router : Router) { }
  title : string = "Lời mời đến từ địa ngục";
  src : string ="../../../../assets/images/maxresdefault.jpg";
  status : string ="Tập 1 | Vietsub"
  @Input() filmBox: any
  ngOnInit(): void {

  }
  routerLink(e: any){
    localStorage.setItem("film",JSON.stringify(e))

    this.router.navigate(['/infor-film'])
  }

}
