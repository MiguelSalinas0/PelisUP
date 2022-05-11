import { Component, OnInit } from '@angular/core';
import { movies } from 'src/app/interfaces/movies';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-pelis',
  templateUrl: './pelis.component.html',
  styleUrls: ['./pelis.component.css'],
  providers: [MoviesService],
})
export class PelisComponent implements OnInit {
  toSearch: string = '';
  pelis: movies[] = [];
  movies_buscar: movies[] = [];
  pelis_mostrar: movies[] = [];

  constructor(private _movieService: MoviesService) {
    this.pelis = [];
  }

  ngOnInit(): void {
    this.getMovies();
  }

  Search() {
    this.movies_buscar = [];
    for (let prog of this.pelis_mostrar) {
      if (prog.title.toUpperCase().includes(this.toSearch.toUpperCase())) {
        this.movies_buscar.push(prog);
      }
    }
    if (this.toSearch !== '') {
      this.pelis = this.movies_buscar;
    } else {
      this.pelis = this.pelis_mostrar;
    }
  }

  getMovies() {
    this._movieService.getMovies().subscribe({
      next: (data: any) => {
        this.pelis = data.results;
        this.pelis_mostrar = this.pelis;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  count() {
    return this.pelis.length;
  }
}
