import { useState, useEffect } from "react";
import firebase from "../../../firebase";
import { Link } from "react-router-dom";

export default function SidebarFilm() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection("short-film");
  console.log(ref);

  function getMovies() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setMovies(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getMovies();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  if (loading) {
    return <h1 className="text-white text-xl">Loading... </h1>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <div className="flex m-auto mb-10 ">
          <Link to={`detail/short-film/${movie.slug}`}>
            <img className="rounded-lg max-w-24 h-24 hover:opacity-90" src={movie.image} />
          </Link>
          <div>
            <a className="flex flex-wrap text-white text-lg font-medium ml-5 mr-4 capitalize ">
              {movie.name}
            </a>
            <div className="flex flex-wrap mt-6 ml-5">
              <img
                src="https://www.fullphimz.net/static/5fe2d564b3fa64a886a11cee/5fe2d564b3fa647446a11d19_tag.svg"
                className="h-4 w-4 mr-3 mt-1"
              />
              <a className="text-white underline text-gray-400 hover:text-white mr-1">
                {movie.category}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
