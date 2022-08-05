import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movies } from 'src/app/interfaces/movies';
import { series } from 'src/app/interfaces/series';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-vistas',
  templateUrl: './vistas.component.html',
  styleUrls: ['./vistas.component.css'],
})
export class VistasComponent implements OnInit {
  id: string | null;
  media: string | null;
  movie!: movies;
  serie!: series;

  constructor(
    private _route: ActivatedRoute,
    private _movieService: MoviesService
  ) {
    this.id = this._route.snapshot.paramMap.get('id');
    this.media = this._route.snapshot.paramMap.get('media');
  }

  ngOnInit(): void {
    if (this.media == 'movie') {
      this.getMoviesDetails(this.id);
    }
    if (this.media == 'tv') {
      this.getSeriesDetails(this.id);
    }
  }

  getMoviesDetails(id: string | null) {
    this._movieService.getMoviesDetails(id).subscribe({
      next: (data: any) => {
        this.movie = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getSeriesDetails(id: string | null) {
    this._movieService.getSeriesDetails(id).subscribe({
      next: (data: any) => {
        this.serie = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  puntuacion(v: number){
    return v.toFixed(1)
  }
}
