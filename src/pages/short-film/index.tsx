import { ShortMovieTitle } from "src/components/title/short-movie-title";
import ShortFilm from "src/modules/list-film/component/short-film";

export default function ShortFilmPage() {
  return (
    <div className="h-screen w-9/12 m-auto mt-20">
      <ShortMovieTitle />
      <ShortFilm />
    </div>
  );
}
