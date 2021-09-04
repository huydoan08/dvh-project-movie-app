import { Link } from "react-router-dom";
export function Header() {
  return (
    <div className=" flex justify-between mb-10 py-6 px-10 navbar-color ">
      <a className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-yellow-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
          />
        </svg>
        <span className="text-white font-bold ml-2 xl:text-2xl lg:text-2xl md:text-xl sm:text-lg">
          <Link to="/home">My Movie</Link>
        </span>
      </a>
      <nav>
        <ul className="flex">
          <li className="ml-12 xl:text-xl lg:text-xl md:text-lg sm:text-sm font-bold hover:text-white navbar-text-color hover:scale-105">
            <Link to="/newfilm">New Film</Link>
          </li>
          <li className="ml-12 xl:text-xl lg:text-xl md:text-lg sm:text-sm font-bold hover:text-white navbar-text-color hover:scale-105">
            <Link to="/shortfilm">Short Film</Link>
          </li>
          <li className="ml-12 xl:text-xl lg:text-xl md:text-lg sm:text-sm font-bold hover:text-white navbar-text-color hover:scale-105">
            <Link to="/seriesfilm">Series Film</Link>
          </li>
          <li className="ml-12 xl:text-xl lg:text-xl md:text-lg sm:text-sm font-bold hover:text-white navbar-text-color hover:scale-105">
            <Link to="/searchfilm">Search Film</Link>
          </li>
        </ul>
      </nav>
      <div>
        <button className="text-white px-3 py-1 xl:text-xl lg:text-xl md:text-lg sm:text-sm font-medium rounded btn-color hover:scale-105">
          <Link to="/admin">Admin</Link>
        </button>
      </div>
    </div>
  );
}
