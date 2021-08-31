import { useState, useEffect } from "react";
import firebase from "../../../firebase";

export default function SidebarFilm() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection("movies");
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
    return <h1>Loading... </h1>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <div className="flex m-auto mb-10 ">
          <img className="rounded-lg max-w-24 h-24 hover:opacity-90" src={movie.image} />
          <a className="flex flex-wrap text-white text-lg font-medium ml-5 mr-4 capitalize ">
            {movie.name}
          </a>
        </div>
      ))}
    </div>
  );
}
