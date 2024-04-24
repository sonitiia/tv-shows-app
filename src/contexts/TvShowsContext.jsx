import { createContext, useEffect, useMemo, useReducer } from "react";
import TvShowsService from "../services/TvShowsService";
import tvShowsService from "../services/TvShowsService";

export const TvShowsContext = createContext();

const initialState = {
  tvShows: [],
  searchValue: "",
  isLoading: false,
  errorMessage: "",
  selectedTvShow: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TV_SHOWS":
      return { ...state, tvShows: action.payload };
    case "SET_SEARCH_VALUE":
      return { ...state, searchValue: action.payload };
    case "SET_IS_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_ERROR_MESSAGE":
      return { ...state, errorMessage: action.payload };
    case "SET_SELECTED_TV_SHOW":
      return { ...state, selectedTvShow: action.payload };
    default:
      return state;
  }
};

const TvShowsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { tvShows, searchValue, isLoading, errorMessage, selectedTvShow } =
    state;
  const abortController = useMemo(() => new AbortController(), []);

  const fetchTvShowById = useMemo(
    () => async (id) => {
      try {
        const tvShowData = await tvShowsService.getTvShowById(id);
        dispatch({ type: "SET_SELECTED_TV_SHOW", payload: tvShowData });
      } catch (error) {
        console.error("Error fetching TV show details:", error);
      }
    },
    [],
  );

  useEffect(() => {
    const fetchTvShows = async () => {
      if (searchValue.length < 2) {
        dispatch({ type: "SET_TV_SHOWS", payload: [] });
        dispatch({
          type: "SET_ERROR_MESSAGE",
          payload: "Type the show's name",
        });
        return;
      }

      dispatch({ type: "SET_IS_LOADING", payload: true });
      try {
        const tvShowsData = await TvShowsService.getTvShowsBySearchInput(
          searchValue,
          { signal: abortController.signal },
        );
        if (tvShowsData.length === 0) {
          dispatch({
            type: "SET_ERROR_MESSAGE",
            payload: "Sorry, nothing found with this search",
          });
        } else {
          dispatch({ type: "SET_TV_SHOWS", payload: tvShowsData });
          dispatch({ type: "SET_ERROR_MESSAGE", payload: "" });
        }
      } catch (error) {
        console.error("Error fetching TV shows:", error);
      } finally {
        dispatch({ type: "SET_IS_LOADING", payload: false });
      }
    };

    fetchTvShows();

    return () => {
      abortController.abort();
    };
  }, [searchValue, abortController]);

  return (
    <TvShowsContext.Provider
      value={{
        tvShows,
        setSearchValue: (value) =>
          dispatch({ type: "SET_SEARCH_VALUE", payload: value }),
        isLoading,
        errorMessage,
        selectedTvShow,
        fetchTvShowById,
      }}
    >
      {children}
    </TvShowsContext.Provider>
  );
};

export default TvShowsProvider;
