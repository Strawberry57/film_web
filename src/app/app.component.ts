import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { ApiServiceService } from './component/service/api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;
  content: any;
  slug :any

  constructor(){}

  ngOnInit(){

  }
}
