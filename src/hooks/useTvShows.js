import { useContext } from "react";
import { TvShowsContext } from "../contexts/TvShowsContext";

export const useTvShows = () => useContext(TvShowsContext);
