import { Link } from "react-router-dom";
export default function AdminMain() {
  return (
    <div className="w-10/12 text-red-300 bg-gray-200">
      <div className="flex justify-between mx-8 mt-6">
        <h1 className="text-black text-xl font-bold">Home Page</h1>
        <h2 className="text-blue-700 font-medium">Home/Admin</h2>
      </div>
      <div className="flex flex-wrap">
        <div className="h-28 w-60 bg-yellow-400 mt-10 ml-8 rounded-lg text-white">
          <div className="flex justify-between">
            <p className="pt-1 pl-3 text-xl">Category</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </div>
          <a className="flex bg-yellow-600 justify-center mt-16 rounded-b-lg">
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
        <div className="h-28 w-60 bg-green-500 mt-10 ml-8 rounded-lg text-white">
          <div className="flex justify-between">
            <p className="pt-1 pl-3 text-xl">List Film</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </div>
          <Link to="/adminlist">
            <a className="flex bg-green-600 justify-center mt-16 rounded-b-lg">
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
        <div className="h-28 w-60 bg-blue-500 mt-10 ml-8 rounded-lg text-white">
          <div className="flex justify-between">
            <p className="pt-1 pl-3 text-xl">User</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </div>
          <a className="flex bg-blue-600 justify-center mt-16 rounded-b-lg">
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
        <div className="h-28 w-60 bg-red-500 mt-10 ml-8 rounded-lg text-white">
          <div className="flex justify-between">
            <p className="pt-1 pl-3 text-xl">Comment</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </div>
          <a className="flex bg-red-600 justify-center mt-16 rounded-b-lg">
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
