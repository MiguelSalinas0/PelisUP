import { Component, OnInit } from '@angular/core';
import { MovieSerie } from 'src/app/interfaces/MovieSerieBase';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})

export class ListComponent implements OnInit {

  user: any
  movies: MovieSerie[] = []

  constructor(private _movieService: MoviesService) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('usuario')!);
    this.getMovies();
  }

  getMovies() {
    this._movieService.getList(this.user.uid).subscribe(
      response => {
        this.movies = [];
        response.forEach((element: any) => {
          this.movies.push({
            idGlobal: element.payload.doc.id,
            ...element.payload.doc.data(),
          })
        })
        console.log('peticion de peliculas: ', this.movies);
      },
      (error) => {
        console.log('falló la petición de peliculas', error);
      }
    );
  }

  deleteItem(id: string){
    this._movieService.deleteItem(this.user.uid, id).then(() => {
      console.log("se eliminó correctamente")
    }).catch(error => {
      console.log(error)
    })
  }
}
