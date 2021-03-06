import { useState, useEffect } from "react";
import firebase from "../../../firebase";
import { MovieType } from "src/modules/admin-list-film";

export function AdminList() {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [nation, setNation] = useState("");
  const [video, setVideo] = useState("");
  const [director, setDirector] = useState("");
  const [slug, setSlug] = useState("");
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection("movies");

  // Realtime Get data function
  function getMovies() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items: MovieType[] = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data() as MovieType);
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

  // ADD function

  function addMovie(newMovie: MovieType) {
    setName("");
    setDescription("");
    setNation("");
    setCategory("");
    setSlug("");
    setDirector("");
    setImage("");
    setVideo("");
    ref
      .doc(newMovie.id as any)
      .set(newMovie)
      .catch((err) => {
        console.error(err);
      });
  }

  // Delete function

  function deleteMovie(movie: MovieType) {
    ref
      .doc(movie.id as any)
      .delete()
      .catch((err) => {
        console.error(err);
      });
  }
  // Edit funtion

  function editMovie(updateMovie: MovieType) {
    ref
      .doc(updateMovie.id as any)
      .update(updateMovie)
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <div className="flex text-white">
      <div className="w-4/12 ml-10 border-r pr-10">
        <h1 className="flex justify-center mb-7 text-4xl text-indigo-500 font-medium">
          Add Movie Here
        </h1>
        <div className="flex flex-col text-black ">
          <div className="flex">
            <h2 className="text-white w-24">Name: </h2>
            <input
              className="flex flex-1 mb-6 pl-4 ml-4"
              type="text"
              placeholder="Enter movie name here..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex ">
            <h2 className="text-white w-24">Category: </h2>
            <input
              className="flex flex-1 mb-6 pl-4 ml-4"
              type="text"
              placeholder="Enter movie category here..."
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="flex ">
            <h2 className="text-white w-24">Description: </h2>
            <input
              className="flex flex-1 mb-6 pl-4 ml-4"
              type="text"
              placeholder="Enter movie description here..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex ">
            <h2 className="text-white w-24">Image: </h2>
            <input
              className="flex flex-1 mb-6 pl-4 ml-4"
              type="text"
              placeholder="Enter movie Image URL here..."
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="flex ">
            <h2 className="text-white w-24">Nation: </h2>
            <input
              className="flex flex-1 mb-6 pl-4 ml-4"
              type="text"
              placeholder="Enter movie nation here..."
              value={nation}
              onChange={(e) => setNation(e.target.value)}
            />
          </div>
          <div className="flex ">
            <h2 className="text-white w-24">Video: </h2>
            <input
              className="flex flex-1 mb-6 pl-4 ml-4"
              type="text"
              placeholder="Enter movie video ID here..."
              value={video}
              onChange={(e) => setVideo(e.target.value)}
            />
          </div>
          <div className="flex ">
            <h2 className="text-white w-24">Director: </h2>
            <input
              className="flex flex-1 mb-6 pl-4 ml-4"
              type="text"
              placeholder="Enter movie director here..."
              value={director}
              onChange={(e) => setDirector(e.target.value)}
            />
          </div>
          <div className="flex ">
            <h2 className="text-white w-24">Slug: </h2>
            <input
              className="flex flex-1 mb-6 pl-4 ml-4"
              type="text"
              placeholder="Enter slug here..."
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
            />
          </div>
          <button
            className="px-4 bg-blue-500 rounded text-white w-20 py-1 ml-48"
            onClick={() =>
              addMovie({ description, name, category, image, nation, video, director, slug }as MovieType)
            }
          >
            Submit
          </button>
        </div>
      </div>
      <div className="w-8/12">
        {loading ? <h1>Loading...</h1> : null}
        <h1 className="flex justify-center text-4xl mb-5 text-indigo-500 font-medium">
          List Movie
        </h1>
        <div className="flex justify-between mx-8 capitalize font-medium text-lg mb-2">
          <p className="w-4/12 text-3xl">name movie</p>
          <p className="w-4/12 text-3xl">caterory</p>
          <p className="text-3xl"> do action</p>
        </div>
        {movies.map((movie) => (
          <div className="flex justify-around text-lg mb-2">
            <p className="w-4/12 capitalize">{movie.name}</p>
            <p className="w-4/12">{movie.category}</p>
            <div className="">
              <button className="text-red-600 mr-5 text-2xl" onClick={() => deleteMovie(movie)}>
                X
              </button>
              <button
                className="px-4 bg-blue-500 rounded"
                onClick={() => editMovie({ description, name, id: movie.id } as MovieType)}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
