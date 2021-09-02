import { SeriesMovieTitle } from "src/components/title/series-movie-title";
import SeriesFilm from "src/modules/list-film/component/series-film";

export default function SeriesFilmPage() {
  return (
    <div className="h-screen w-9/12 m-auto mt-20">
      <SeriesMovieTitle />
      <SeriesFilm />
    </div>
  );
}
