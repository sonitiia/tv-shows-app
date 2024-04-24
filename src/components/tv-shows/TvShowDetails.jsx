import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const TvShowDetails = ({
  image,
  name,
  genres,
  rating,
  link,
  status,
  scheduleTime,
  scheduleDays,
  summary,
}) => {
  const createMarkup = (html) => ({ __html: html });

  return (
    <>
      <Stack flexDirection={{ xs: "column", md: "row" }} gap={10}>
        {image && (
          <Box
            component="img"
            src={image}
            alt={name}
            maxWidth="320px"
            width={1}
          />
        )}

        <Stack gap={2}>
          <Typography variant="h3" fontWeight="bold">
            {name}
          </Typography>
          <Typography>Genre: {genres}</Typography>
          {rating && <Typography>Rating: {rating}/10 ⭐️</Typography>}
          <Typography>Status: {status}</Typography>
          <Typography>
            Schedule: {scheduleDays}, {scheduleTime}
          </Typography>
          <Link href={link} color="secondary">
            {link}
          </Link>
        </Stack>
        <Stack gap={2} display={{ xs: "flex", md: "none" }}>
          <Typography variant="h5">Summary</Typography>
          <Typography dangerouslySetInnerHTML={createMarkup(summary)} />
        </Stack>
      </Stack>
      <Stack gap={2} display={{ xs: "none", md: "flex" }}>
        <Typography variant="h5">Summary</Typography>
        <Typography dangerouslySetInnerHTML={createMarkup(summary)} />
      </Stack>
    </>
  );
};

export default TvShowDetails;
