import { ListFilm } from "src/modules/list-film";
import { SidebarFilm } from "src/modules/sidebar";
import { MainTitle, SidebarTitle } from "src/components";

export default function Home() {
  return (
    <div>
      <div className="flex justify-evenly mt-20">
        <main className="h-auto w-8/12">
          <MainTitle />
          <ListFilm />
        </main>
        <aside className="w-2/12 xl:block lg:block md:hidden sm:hidden">
          <div>
            <SidebarTitle/>
          </div>
          <div className="h-screen sticky top-0 overflow-hidden">
            <SidebarFilm />
          </div>
        </aside>
      </div>
    </div>
  );
}
