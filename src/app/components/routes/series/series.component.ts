import { Component, OnInit } from '@angular/core';
import { series } from 'src/app/interfaces/series';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
  providers: [MoviesService],
})
export class SeriesComponent implements OnInit {
  toSearch: string = '';
  series: series[] = [];
  series_buscar: series[] = [];
  series_mostrar: series[] = [];

  constructor(private _movieService: MoviesService) {
    this.series = [];
  }

  ngOnInit(): void {
    this.getSeries();
  }

  Search() {
    this.series_buscar = [];
    for (let prog of this.series_mostrar) {
      if (prog.name.toUpperCase().includes(this.toSearch.toUpperCase())) {
        this.series_buscar.push(prog);
      }
    }
    if (this.toSearch !== '') {
      this.series = this.series_buscar;
    } else {
      this.series = this.series_mostrar;
    }
  }

  count() {
    return this.series.length;
  }

  getSeries() {
    this._movieService.getSeries().subscribe({
      next: (data: any) => {
        this.series = data.results;
        this.series_mostrar = this.series;
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
