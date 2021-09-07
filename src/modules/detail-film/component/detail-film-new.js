import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import firebase from "../../../firebase";
import StarRating from "src/modules/rating/component/star-rating";
import { Share } from "src/modules/share";

export function FilmDetailNew() {
  const { slug } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection("newfilm");

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
    <div className="h-auto">
      {movies
        .filter((movie) => movie.slug === slug)
        .map((movie) => (
          <div>
            <div className="flex m-auto mt-20">
              <div className=" flex justify-end mr-20 w-4/12">
                <img className="rounded-lg max-w-96 h-80" src={movie.image} />
              </div>
              <div className="w-6/12">
                <p className="text-white text-8xl capitalize mb-4">{movie.name}</p>
                <div className="flex">
                  <StarRating />
                  <img
                    src="https://www.fullphimz.net/static/5fe2d564b3fa64a886a11cee/5fe2d564b3fa647446a11d19_tag.svg"
                    className="h-4 w-4 mr-3 mt-1 -ml-36"
                  />
                  <a className="text-white underline text-gray-400 hover:text-white mr-2">
                    {movie.category}
                  </a>
                  <img
                    src="https://www.fullphimz.net/static/5fe2d564b3fa64a886a11cee/5fe2d564b3fa647cf1a11d0b_clock.svg"
                    className="h-4 w-4 mr-3 mt-1"
                  />
                  <a className="text-white underline text-gray-400 hover:text-white ">
                    {movie.time}
                  </a>
                  <Share video={movie.video} />
                </div>
                <div className="flex mt-10">
                  <a
                    className="hotext-white px-4 py-3 border-gray-300 bg-blue-400 rounded-md mr-4 font-medium hover:opacity-90"
                    href="#trailer"
                  >
                    Trailer
                  </a>
                  <a
                    className="text-white px-4 py-3 border-gray-300 bg-red-400 rounded-md font-medium hover:opacity-90"
                    href={`https://www.youtube.com/watch?v=${movie.video}`}
                    target="__blank"
                  >
                    Watch Movie
                  </a>
                </div>
                <p className="text-white mt-4">Director: {movie.director}</p>
                <p className="text-white mt-4">Nation: {movie.nation}</p>
                <p className="text-white mt-4">Release Year: {movie.year}</p>
                <p className="text-white mt-4">Quality: {movie.quality}</p>
              </div>
            </div>
            <div className="m-auto w-8/12 mt-20">
              <p className="text-gray-400 text-lg">{movie.description}</p>
            </div>
            <p className="ml-80 text-yellow-400 text-2xl mt-10">Official Trailer</p>
            <div id="trailer" className="flex justify-center mt-10">
              <ReactPlayer
                controls={true}
                url={`https://www.youtube.com/watch?v=${movie.trailer}`}
              />
            </div>
          </div>
        ))}
    </div>
  );
}
