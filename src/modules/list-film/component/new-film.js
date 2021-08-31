import { useState, useEffect } from "react";
import firebase from "../../../firebase";
import { Link } from "react-router-dom";

export default function NewFilm() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection("newfilm");
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
    <div className="flex flex-wrap">
      {movies.map((movie) => (
        <div className="flex justify-evenly m-auto mb-10 hover:scale-105 duration-300 ease-linear">
          <Link to={`/detail/${movie.id}`}>
            <img className="rounded-lg max-w-56 h-52" src={movie.image} />
          </Link>
        </div>
      ))}
    </div>
  );
}
