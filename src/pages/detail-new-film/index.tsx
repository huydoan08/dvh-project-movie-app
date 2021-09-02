import FilmDetailNew from "src/modules/detail-film/component/detail-film-new";
export default function FilmDetailNewPage() {
  return (
    <div>
      <FilmDetailNew />
      <div className="flex flex-col bg-white mx-96 pl-6 mt-10 pt-10 w-auto">
        <div
          className="fb-like"
          data-href="https://developers.facebook.com/docs/plugins/"
          data-width=""
          data-layout="standard"
          data-action="like"
          data-size="small"
          data-share="true"
        ></div>
        <div
          className="fb-comments"
          data-href="https://developers.facebook.com/docs/plugins/comments#configurator"
          data-width=""
          data-numposts="5"
        ></div>
      </div>
    </div>
  );
}
