import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './component/body/body.component';
import { InforFilmComponent } from './component/body/infor-film/infor-film.component';
import { ListFilmComponent } from './component/body/list-film/list-film.component';
import { WatchComponent } from './component/body/watch/watch.component';

const routes: Routes = [
  {
    path : "list-film/:id",
  component: ListFilmComponent
  },
  {
    path : "infor-film",
  component: InforFilmComponent
  },
  {
    path: "watch",
    component:WatchComponent
  },
  {
    path : "home",
  component: BodyComponent
  },
  {
    path : "",
  component: BodyComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
