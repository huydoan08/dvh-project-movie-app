import { MainTitle } from "src/components/title/main-title";
import NewFilm from "src/modules/list-film/component/new-film";
export default function NewFilmPage() {
  return (
    <div className="h-auto w-8/12 m-auto mt-20 ">
      <MainTitle />
      <NewFilm />
    </div>
  );
}
