import { Component, Input } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

   arrFilm : any
  constructor(private api : ApiServiceService) { }

  ngOnInit(): void {
    this.arrFilm =  this.api.getslug().subscribe(res => this.arrFilm = res)
  }

}
