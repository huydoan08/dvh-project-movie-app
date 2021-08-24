import axios from "axios";
import { SingleMovie } from "src/modules/components";
import { useState, useEffect } from "react";

interface Movie {
  adult: string;
  backdrop_path: string;
  genre_ids: object;
  original_language: string;
  original_title: string;
  poster_path: string;
  id: number;
  video: boolean;
  vote_average: number;
  overview: string;
  release_date: string;
  vote_count: number;
  title: string;
  popularity: number;
  media_type: string;
}

export const Home = () => {
  const [content, setContent] = useState<Movie[]>([]);

  const [searchText, setSearchText] = useState("panda");

  const fetchHome = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchText}&page=1&include_adult=false`,
      );
      setContent(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHome();
  }, []);

  return (
    <div>
      <form className="flex mx-auto max-w-4xl mb-10">
        <input
          type="search"
          placeholder="What movie are you looking for?"
          className="bg-white w-full py-2 rounded-l-lg pl-4 border border-gray-200"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <input
          type="submit"
          value="Search"
          className="bg-blue-500 text-white px-3 py-2 font-medium rounded-r-lg cursor-pointer"
          onClick={fetchHome}
        />
      </form>
      <div className="flex flex-wrap">
        {content.map((c) => (
          <SingleMovie poster={c.poster_path} />
        ))}
      </div>
    </div>
  );
};
