import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { TV_SHOWS_ROUTE } from "../app/Routes";
import { useNavigate } from "react-router-dom";

const NotFoundRoute = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1, { replace: true });
  };

  const handleReturnHomeClick = () => {
    navigate(TV_SHOWS_ROUTE);
  };

  return (
    <Stack alignItems="center" width={1} gap={10} mt={20}>
      <Typography variant="h3">Page not found.</Typography>
      <Stack flexDirection="row" justifyContent="space-between" gap={4}>
        <Button variant="contained" color="primary" onClick={handleBackClick}>
          Go back ⬅
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleReturnHomeClick}
        >
          Home
        </Button>
      </Stack>
    </Stack>
  );
};

export default NotFoundRoute;
