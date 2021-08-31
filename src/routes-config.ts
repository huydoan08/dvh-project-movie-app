import {
  routeHomeBase,
  routeSigninBase,
  routeAdminBase,
  routeNewFilmBase,
  routeShortFilmBase,
  routeSeriesFilmBase,
  routeDetailBase,
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
    path: routeNewFilmBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/new-film"))),
  },
  {
    path: routeShortFilmBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/short-film"))),
  },
  {
    path: routeSeriesFilmBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/series-film"))),
  },
  {
    path: routeSigninBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/signin"))),
  },
  {
    path: routeAdminBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/admin"))),
  },
  {
    path: routeDetailBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/film-detail"))),
  },
];
