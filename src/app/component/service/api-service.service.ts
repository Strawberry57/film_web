import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concatMap, forkJoin, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  constructor(private http: HttpClient) {}
  slug: any;
  arrFilm: any;
  getslug() {
    return this.http
      .get(environment.apiUrl)
      .pipe(
        concatMap((res: any) =>
          forkJoin(
            res.items.map((item: any) =>
              this.http.get('https://ophim1.com/phim/' + item.slug)
            )
          )
        ),
        tap(console.log)
      )
  }
}
