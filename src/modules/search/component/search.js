
export default function Search() {
  return (
    <div>
      <form className="flex mx-auto max-w-4xl mb-20">
        <input
          type="search"
          placeholder="What movie are you looking for?"
          className="bg-white w-full py-2 rounded-l-lg pl-4 border border-gray-200"
        />
        <input
          type="submit"
          value="Search"
          className="bg-blue-500 text-white px-3 py-2 font-medium rounded-r-lg cursor-pointer"
        />
      </form>
    </div>
  );
}
