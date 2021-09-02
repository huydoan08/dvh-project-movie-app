import ListFilm from "src/modules/list-film/component/home-film";
import Search from "src/modules/search/component/search";
import SidebarFilm from "src/modules/sidebar/component/sidebar";
import { MainTitle } from "src/components/title/main-title";
import { SidebarTitle } from "src/components/title/sidebar-title";

export default function Home() {
  return (
    <div>
      <Search />
      <div className="flex justify-evenly">
        <main className="h-auto w-8/12">
          <MainTitle />
          <ListFilm />
        </main>
        <aside className="w-2/12 ">
          <div>
            <SidebarTitle />
          </div>
          <div className="h-screen sticky top-0">
            <SidebarFilm />
          </div>
        </aside>
      </div>
    </div>
  );
}
