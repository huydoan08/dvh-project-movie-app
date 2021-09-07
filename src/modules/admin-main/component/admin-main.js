import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import firebase from "../../../firebase";
export function AdminMain() {
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
    return <h1 className="text-white text-xl">Loading... </h1>;
  }
  return (
    <div className="w-10/12 text-red-300 bg-gray-200">
      <div className="flex justify-between mx-8 mt-6">
        <h1 className="text-black text-xl font-bold">Home Page</h1>
        <h2 className="text-blue-700 font-medium">Home/Admin</h2>
      </div>
      <div className="flex flex-wrap">
        <div className="h-28 w-60 bg-yellow-400 mt-10 ml-8 rounded-lg text-white">
          <div className="flex justify-between">
            <div>
              <p className="flex justify-center font-bold mt-2 text-4xl">4</p>
              <p className="pl-3 text-xl">Category</p>
            </div>
            <div className="mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-16 w-16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
          </div>
          <a className="flex bg-yellow-600 justify-center mt-5	 rounded-b-lg">
            <p>Detail</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 pt-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
        <div className="h-28 w-60 bg-blue-400 mt-10 ml-8 rounded-lg text-white">
          <div className="flex justify-between">
            <div>
              <p className="flex justify-center font-bold mt-2 text-4xl">{movies.length}</p>
              <p className="pl-3 text-xl">Movie</p>
            </div>
            <div className="mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-16 w-16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
          <Link to="/adminlist">
            <a className="flex bg-blue-600 justify-center mt-5	 rounded-b-lg">
              <p>Detail</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 pt-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </Link>
        </div>
        <div className="h-28 w-60 bg-green-400 mt-10 ml-8 rounded-lg text-white">
          <div className="flex justify-between">
            <div>
              <p className="flex justify-center font-bold mt-2 text-4xl">2</p>
              <p className="pl-3 text-xl">User</p>
            </div>
            <div className="mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-16 w-16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
          </div>
          <a className="flex bg-green-600 justify-center mt-5	 rounded-b-lg">
            <p>Detail</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 pt-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
        <div className="h-28 w-60 bg-red-400 mt-10 ml-8 rounded-lg text-white">
          <div className="flex justify-between">
            <div>
              <p className="flex justify-center font-bold mt-2 text-4xl">102</p>
              <p className="pl-3 text-xl">Comment</p>
            </div>
            <div className="mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-16 w-16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            </div>
          </div>
          <a className="flex bg-red-600 justify-center mt-5	 rounded-b-lg">
            <p>Detail</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 pt-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
