export interface Peliculas_series {
  backdrop_path:     string;
  first_air_date:    Date;
  genre_ids:         number[];
  id:                number;
  name:              string;
  origin_country:    string[];
  original_language: string;
  original_name:     string;
  overview:          string;
  poster_path:       string;
  vote_average:      number;
  vote_count:        number;
  popularity:        number;
  adult:             boolean;
  original_title:    string;
  release_date:      Date;
  title:             string;
  video:             boolean;
  media_type:        string;
}
