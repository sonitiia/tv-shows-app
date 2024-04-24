import TextField from "@mui/material/TextField";
import { useTvShows } from "../hooks/useTvShows";

const TvShowsSearchInput = () => {
  const { setSearchValue, errorMessage } = useTvShows();

  const handleSearchChange = (event) => {
    event.stopPropagation();
    setSearchValue(event.target.value);
  };

  return (
    <TextField
      label="Search for shows.."
      variant="outlined"
      color="secondary"
      onChange={handleSearchChange}
      helperText={errorMessage}
      sx={{ maxWidth: "420px", width: 1 }}
    />
  );
};

export default TvShowsSearchInput;
