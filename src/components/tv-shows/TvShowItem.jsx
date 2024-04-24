import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const TvShowItem = ({ image, name, rating, onClick }) => {
  return (
    <Stack
      onClick={onClick}
      maxWidth="320px"
      width={1}
      height="fit-content"
      gap={4}
    >
      {image && (
        <Box
          component="img"
          src={image}
          alt={name}
          width={1}
          height="max-content"
          sx={{ cursor: "pointer" }}
        />
      )}
      <Stack px={2}>
        <Typography>{name}</Typography>
        {rating && <Typography>{rating}/10 ⭐️</Typography>}
      </Stack>
    </Stack>
  );
};

export default TvShowItem;
