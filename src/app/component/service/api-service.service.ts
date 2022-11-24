import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concatMap, forkJoin, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  constructor(private http: HttpClient) {}
  slug: any;
  arrFilm: any;

}
