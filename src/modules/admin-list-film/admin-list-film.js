import { useState, useEffect } from "react";
import firebase from "../../firebase";

export default function AdminListFilm() {
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
    <div className="h-screen">
      <table id="movies">
        <tbody>
          <tr>
            <th>id</th>
            <th>name</th>
          </tr>
        </tbody>
      </table>
      {movies.map((movie) => (
        <div className="text-red-300">
          <table id="movies">
            <tbody>
              <tr>
                <td>1</td>
                <td>{movie.name}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
