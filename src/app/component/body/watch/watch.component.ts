import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { ApiServiceService } from '../../service/api-service.service';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss'],
})
export class WatchComponent implements OnInit {
  film: any;
  filmContent: string;
  link: any;
  episodes: any;
  isChangeEpisode: boolean = true;
  isActive: boolean = false;
  name: any;
  arrayFilm : any = []
  constructor(private readonly api: ApiServiceService) {}

  ngOnInit(): void {
    const films: any = localStorage.getItem('film');
    this.film = JSON.parse(films);
    this.filmContent = JSON.parse(films)
      .movie.content.replace('<p>', '')
      .replace('</p>', '');
    this.filmContent = this.filmContent.substring(
      0,
      this.filmContent.length - 1
    );

    this.link = JSON.parse(films).episodes[0].server_data[0].link_embed;

    this.episodes = JSON.parse(films).episodes[0].server_data;

    this.name = JSON.parse(films).episodes[0].server_data[0].name;

    this.arrayFilm = this.api.getslug().subscribe((e: any) => this.arrayFilm = e)
  }
  changeEpisode(e: any) {
    this.link = e.link_embed;
    this.name = e.name;
    this.isChangeEpisode = false;
    setTimeout(() => {
      this.isChangeEpisode = true;
    }, 2000);
  }
}
