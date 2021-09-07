import { MainTitle } from "src/components/main-title";
import { NewFilm } from "src/modules/list-film";
export default function NewFilmPage() {
  return (
    <div className="h-auto w-8/12 m-auto mt-20 ">
      <MainTitle />
      <NewFilm/>
    </div>
  );
}
