import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import firebase from "../../../firebase";

export default function FilmDetail() {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection("movies");

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
    return <h1>Loading... </h1>;
  }
  return (
    <div className="h-screen">
      {movies
        .filter((movie) => movie.id === id)
        .map((movie) => (
          <div className="flex m-auto mt-20">
            <div className=" flex justify-end mr-20 w-4/12">
              <img className="rounded-lg max-w-96 h-80" src={movie.image} />
            </div>
            <div className="w-6/12">
              <p className="text-white text-8xl capitalize mb-4">{movie.name}</p>
              <div className="flex">
                <img
                  src="https://www.fullphimz.net/static/5fe2d564b3fa64a886a11cee/5fe2d564b3fa647446a11d19_tag.svg"
                  className="h-4 w-4 mr-3 mt-1"
                />
                <a className="text-white underline text-gray-400 hover:text-white mr-2">
                  {movie.category}
                </a>
                <img
                  src="https://www.fullphimz.net/static/5fe2d564b3fa64a886a11cee/5fe2d564b3fa647cf1a11d0b_clock.svg"
                  className="h-4 w-4 mr-3 mt-1"
                />
                <a className="text-white underline text-gray-400 hover:text-white ">31/8/2021</a>
              </div>
              <div className="flex mt-10">
                <button
                  className="text-white px-4 py-3 border-gray-300 bg-blue-400 rounded-md mr-4 font-medium"
                  href={`https://www.youtube.com/watch?v=${movie.video}`}
                  target="__blank"
                >
                  Trailer
                </button>
                <button
                  className="text-white px-4 py-2 border-gray-300 bg-red-400 rounded-md font-medium"
                  href={`https://www.youtube.com/watch?v=${movie.video}`}
                  target="__blank"
                >
                  Watch Movie
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
