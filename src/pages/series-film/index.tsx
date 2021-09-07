import { SeriesMovieTitle } from "src/components/series-movie-title";
import { SeriesFilm } from "src/modules/list-film";

export default function SeriesFilmPage() {
  return (
    <div className="h-auto w-8/12 m-auto mt-20">
      <SeriesMovieTitle />
      <SeriesFilm />
    </div>
  );
}
