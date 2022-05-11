import { Component, OnInit } from '@angular/core';
import { MovieSerie, MovieSerieBase } from 'src/app/interfaces/MovieSerieBase';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
  providers: [MoviesService],
})
export class AgregarComponent implements OnInit {
  filter: string = '';
  toSearch: string = '';
  movies: MovieSerie[] = [];
  movies_mostrar: MovieSerie[] = [];
  movies_buscar: MovieSerie[] = [];

  constructor(private _movieService: MoviesService) {}

  ngOnInit(): void {
    this.getTrending();
  }

  Search() {
    this.movies_buscar = [];
    for (let prog of this.movies_mostrar) {
      if (
        prog.media_type == 'movie' &&
        prog.title.toUpperCase().includes(this.toSearch.toUpperCase())
      ) {
        this.movies_buscar.push(prog);
      }
      if (
        prog.media_type == 'tv' &&
        prog.name.toUpperCase().includes(this.toSearch.toUpperCase())
      ) {
        this.movies_buscar.push(prog);
      }
    }
    if (this.toSearch !== '') {
      this.movies = this.movies_buscar;
    } else {
      this.movies = this.movies_mostrar;
    }
  }

  getTrending() {
    this._movieService.getTrending().subscribe({
      next: (data: any) => {
        this.movies = data.results;
        this.movies_mostrar = this.movies;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  addList(item: MovieSerieBase) {
    let user = JSON.parse(localStorage.getItem('usuario')!);
    this._movieService
      .addItem(user.uid, item)
      .then(() => {
        console.log('se agregó el item al usuario');
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
