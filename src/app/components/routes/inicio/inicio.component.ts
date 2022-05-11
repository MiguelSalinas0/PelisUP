import { Component, OnInit } from '@angular/core';
import { Peliculas_series } from 'src/app/interfaces/Peliculas_series';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers: [MoviesService],
})
export class InicioComponent implements OnInit {
  filter: string = '';
  toSearch: string = '';
  contador = 0;
  movies: Peliculas_series[] = [];
  movies_mostrar: Peliculas_series[] = [];
  movies_buscar: Peliculas_series[] = [];

  constructor(private _movieService: MoviesService) {
    this.movies = [];
  }

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

  count() {
    let cont: number = 0;
    for (let p of this.movies) {
      if (p.media_type === this.filter) {
        cont++;
      }
      if ('todos' === this.filter || '' === this.filter) {
        cont = this.movies.length;
      }
    }
    return (this.contador = cont);
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
}
