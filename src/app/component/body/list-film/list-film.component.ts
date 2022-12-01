import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../service/api-service.service';
@Component({
  selector: 'app-list-film',
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.scss']
})
export class ListFilmComponent implements OnInit {

  listFilm : any = []
  constructor(private readonly api : ApiServiceService) { }

  ngOnInit(): void {
    this.listFilm = this.api.getslug().subscribe((e:any) => this.listFilm = e)
  }

}
