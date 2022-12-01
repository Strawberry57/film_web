import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './component/body/body.component';
import { BoxFilmComponent } from './component/body/box-film/box-film.component';
import { FilmOnePartComponent } from './component/body/film-one-part/film-one-part.component';
import { FilmSuggestComponent } from './component/body/film-suggest/film-suggest.component';
import { HotFilmComponent } from './component/body/hot-film/hot-film.component';
import { ListFilmComponent } from './component/body/list-film/list-film.component';
import { MultiEpisodeFilmComponent } from './component/body/multi-episode-film/multi-episode-film.component';
import { BreadcrumbComponent } from './component/common/breadcrumb/breadcrumb.component';
import { FooterComponent } from './component/common/footer/footer.component';
import { HeaderComponent } from './component/common/header/header.component';
import { SelectComponent } from './component/operation/select/select.component';
import { InforFilmComponent } from './component/body/infor-film/infor-film.component';
import { WatchComponent } from './component/body/watch/watch.component';



import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import vi from '@angular/common/locales/vi';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NZ_I18N, vi_VN } from 'ng-zorro-antd/i18n';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { IconsProviderModule } from './icons-provider.module';
import { NzPaginationModule } from 'ng-zorro-antd/pagination'
import { NzRateModule } from 'ng-zorro-antd/rate';
import { SafePipe } from './component/pipe/safePipe';



registerLocaleData(vi);



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FilmSuggestComponent,
    BoxFilmComponent,
    FilmOnePartComponent,
    MultiEpisodeFilmComponent,
    HotFilmComponent,
    ListFilmComponent,
    BodyComponent,
    SelectComponent,
    BreadcrumbComponent,
    InforFilmComponent,
    WatchComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzSelectModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule,
    IconsProviderModule,
    NzPaginationModule,
    NzRateModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: vi_VN }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
