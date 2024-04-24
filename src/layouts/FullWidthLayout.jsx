import { Outlet } from "react-router-dom";
import Stack from "@mui/material/Stack";

const FullWidthLayout = () => {
  return (
    <Stack
      component="main"
      minHeight="100vh"
      maxWidth="xl"
      mx={4}
      my={8}
      gap={10}
    >
      <Outlet />
    </Stack>
  );
};

export default FullWidthLayout;
