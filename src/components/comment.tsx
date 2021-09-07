export function Comment() {
  return (
    <div>
      <div className="flex flex-col bg-white mx-96 pl-6 mt-10 pt-10 w-auto">
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
