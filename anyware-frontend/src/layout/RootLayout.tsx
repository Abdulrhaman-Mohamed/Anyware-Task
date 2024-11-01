import { Navigate, Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import useAuth from "../hooks/useAuth";
import NavbarRoot from "../components/NavbarRoot";

export default function RootLayout() {
  const { isAuth } = useAuth();
  return !isAuth() ? (
    <>
      {" "}
      <Box>
        <NavbarRoot />
        <Outlet />
      </Box>
    </>
  ) : (
    <Navigate to={"/dashboard"} />
  );
}
