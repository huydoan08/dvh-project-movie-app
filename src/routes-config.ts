import {
  routeHomeBase,
  routeSigninBase,
  routeAdminBase,
  routeAdminListBase,
  routeNewFilmBase,
  routeShortFilmBase,
  routeSeriesFilmBase,
  routeSearchFilmBase,
  routeDetailBase,
  routeDetailNewFilmBase,
  routeDetailShortFilmBase,
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
    path: routeSearchFilmBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/search"))),
  },
  {
    path: routeSigninBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/sign-in"))),
  },
  {
    path: routeAdminBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/admin"))),
  },
  {
    path: routeAdminListBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/admin-list"))),
  },
  {
    path: routeDetailBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/detail-home"))),
  },
  {
    path: routeDetailNewFilmBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/detail-new-film"))),
  },
  {
    path: routeDetailShortFilmBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/detail-short-film"))),
  },
];
