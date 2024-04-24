import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import TvShowItem from "./TvShowItem";
import { useTvShows } from "../../hooks/useTvShows";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { TV_SHOW_DETAILS_ROUTE } from "../../app/Routes";

const TvShowsList = () => {
  const { tvShows, isLoading, fetchTvShowById } = useTvShows();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) fetchTvShowById(id);
  }, [id, fetchTvShowById]);

  const handleTvShowClick = (id) => {
    navigate(TV_SHOW_DETAILS_ROUTE.replace(":id", id));
  };

  if (isLoading) {
    return <CircularProgress />;
  }
  return (
    <Stack flexDirection="row" flexWrap="wrap" justifyContent="center" gap={10}>
      {tvShows.map((tvShow) => (
        <TvShowItem
          key={tvShow?.show?.id}
          image={tvShow?.show?.image?.original}
          name={tvShow?.show?.name}
          rating={tvShow?.show?.rating?.average}
          onClick={() => handleTvShowClick(tvShow?.show?.id)}
        />
      ))}
    </Stack>
  );
};

export default TvShowsList;
