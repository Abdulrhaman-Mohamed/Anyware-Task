import { Box } from "@mui/material";
import Sidenav from "../components/Sidenav";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <>
      <Box sx={{ display: "flex" , overflow:'hidden' }}>
        <Sidenav />
        <Box flexGrow={1}>
          <Navbar />
          <Box component={'main'} padding={3}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </>
  );
}
