import { useState, useEffect } from "react";
import firebase from "../../../firebase";
import { Link } from "react-router-dom";

export default function ShortFilm() {
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
    <div className="flex flex-wrap">
      {movies.map((movie) => (
        <div className="flex justify-evenly m-auto mt-10 hover:scale-105 duration-300 ease-linear">
          <Link to={`/detail/newfilm/${movie.slug}`}>
            <img className="rounded-lg max-w-56 h-52" src={movie.image} />
            <div className="flex flex-wrap mt-6">
              <img
                src="https://www.fullphimz.net/static/5fe2d564b3fa64a886a11cee/5fe2d564b3fa647446a11d19_tag.svg"
                className="h-4 w-4 mr-3 mt-1"
              />
              <a className="text-white underline text-gray-400 hover:text-white mr-1">
                {movie.category}
              </a>
            </div>
            <p className="text-white w-40 font-bold text-xl capitalize hover:underline">
              {movie.name}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}
