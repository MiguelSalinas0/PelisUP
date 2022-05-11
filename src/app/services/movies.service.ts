import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { movies } from '../interfaces/movies';
import { MovieSerieBase, MovieSerieUser } from '../interfaces/MovieSerieBase';
import { Peliculas_series } from '../interfaces/Peliculas_series';
import { series } from '../interfaces/series';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private appID: string ='?api_key=6e23417f14bca07bb07e305123a7a55c&language=es';
  private baseURL: string = 'https://api.themoviedb.org/3/';

  constructor(private _http: HttpClient, private firestore: AngularFirestore) {}

  getTrending(): Observable<Peliculas_series[]> {
    return this._http.get<Peliculas_series[]>(this.baseURL + 'trending/all/week' + this.appID);
  }

  getMovies(): Observable<movies[]> {
    return this._http.get<movies[]>(this.baseURL + 'movie/popular' + this.appID);
  }

  getSeries(): Observable<series[]> {
    return this._http.get<series[]>(this.baseURL + 'tv/popular' + this.appID);
  }

  getMoviesDetails(id: string | null): Observable<movies[]> {
    return this._http.get<movies[]>(this.baseURL + 'movie/' + id + this.appID);
  }

  getSeriesDetails(id: string | null): Observable<series[]> {
    return this._http.get<series[]>(this.baseURL + 'tv/' + id + this.appID);
  }

  addUser(userID: MovieSerieBase): Promise <any> {
    return this.firestore.collection('usuarios').add(userID)
  }

  addItem(userId: MovieSerieUser, item: MovieSerieBase): Promise<any>{
    return this.firestore.collection('usuarios').doc(`${userId}`).collection('moviesSeries').add(item)
  }

  getList(userId: MovieSerieUser): Observable<any>{
    return this.firestore.collection('usuarios').doc(`${userId}`).collection('moviesSeries').snapshotChanges()
  }

  deleteItem(idUser: string, id: string): Promise<any>{
    return this.firestore.collection(`usuarios/${idUser}/moviesSeries`).doc(id).delete()
  }
}
