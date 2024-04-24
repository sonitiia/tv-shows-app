import { Navigate, Route, Routes } from "react-router-dom";
import {
  MAIN_ROUTE,
  TV_SHOWS_ROUTE,
  TV_SHOW_DETAILS_ROUTE,
  NOT_FOUND_ROUTE,
} from "./Routes";
import NotFoundRoute from "../routes/NotFoundRoute";
import TvShowsRoute from "../routes/TvShowsRoute";
import TvShowDetailsRoute from "../routes/TvShowDetailsRoute";
import FullWidthLayout from "../layouts/FullWidthLayout";

const Router = () => {
  return (
    <Routes>
      <Route>
        <Route path={MAIN_ROUTE} element={<FullWidthLayout />}>
          <Route index element={<Navigate to={TV_SHOWS_ROUTE} replace />} />
          <Route path={TV_SHOWS_ROUTE} element={<TvShowsRoute />} />
          <Route
            path={TV_SHOW_DETAILS_ROUTE}
            element={<TvShowDetailsRoute />}
          />
          <Route path={NOT_FOUND_ROUTE} element={<NotFoundRoute />} />
          <Route path="*" element={<Navigate to={NOT_FOUND_ROUTE} replace />} />
          <Route path="*" element={<NotFoundRoute />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
