import { Injectable } from '@angular/core';
import {Imovie} from './imovie';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }
  getMovies(movieId:string):Observable<Array<Imovie>> {
    return this.http.get<Array<Imovie>>('https://638492184ce192ac605bc39a.mockapi.io/Movie/'+movieId);
  }
}
