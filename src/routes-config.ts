import {
  routeHomeBase,
  routeSigninBase,
  routeHotFilmBase,
  routeSeriesFilmBase,
  routeShortFilmBase,
} from "./constants/routes";
import { lazy } from "react";
import { loadable } from "src/components/loadable";

export const routesConfig = [
  {
    path: routeHomeBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/home"))),
  },
  {
    path: routeSigninBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/signin"))),
  },
  {
    path: routeHotFilmBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/hot-film"))),
  },
  {
    path: routeSeriesFilmBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/series-film"))),
  },
  {
    path: routeShortFilmBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/short-film"))),
  },
];
