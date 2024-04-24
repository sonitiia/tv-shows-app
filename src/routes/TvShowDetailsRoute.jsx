import { useParams } from "react-router-dom";
import TvShowDetails from "../components/tv-shows/TvShowDetails";
import { useEffect } from "react";
import { useTvShows } from "../hooks/useTvShows";

const TvShowDetailsRoute = () => {
  const { id } = useParams();
  const { fetchTvShowById, selectedTvShow } = useTvShows();

  useEffect(() => {
    if (id) fetchTvShowById(id);
  }, [id, fetchTvShowById]);

  return (
    <TvShowDetails
      image={selectedTvShow?.image?.original}
      name={selectedTvShow?.name}
      rating={selectedTvShow?.rating?.average}
      genres={selectedTvShow?.genres?.join(", ")}
      link={selectedTvShow?.url}
      scheduleTime={selectedTvShow?.schedule?.time}
      scheduleDays={selectedTvShow?.schedule?.days}
      status={selectedTvShow?.status}
      summary={selectedTvShow?.summary}
    />
  );
};

export default TvShowDetailsRoute;
