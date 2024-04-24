import Stack from "@mui/material/Stack";
import TvShowsList from "../components/tv-shows/TvShowsList";
import TvShowsSearchInput from "../components/TvShowsSearchInput";

const TvShowsRoute = () => {
  return (
    <Stack gap={10} alignItems="center">
      <TvShowsSearchInput />
      <TvShowsList />
    </Stack>
  );
};

export default TvShowsRoute;
