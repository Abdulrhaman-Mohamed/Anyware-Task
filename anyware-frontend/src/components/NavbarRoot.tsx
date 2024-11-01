import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";

import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const pages = [
  { path: "/sign-in", page: "Sign In" },
  { path: "/sign-up", page: "Sign Up" },
];

function NavbarRoot() {
  const [lang, setLang] = useState("English");
  const { i18n } = useTranslation();
  const langHandle = () => {
    if (lang === "English") {
      setLang("العربية");
      i18n.changeLanguage("ar");
      return;
    }
    setLang("English");
    i18n.changeLanguage("en");
  };

  return (
    <AppBar position="static" color="white">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              flexGrow: 1,
              fontWeight: 700,
            }}
          >
            <NavLink to={"/"}>Study.com</NavLink>
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Button color="success" variant="text" onClick={langHandle}>
              {lang}
            </Button>
            {pages.map((page) => (
              <NavLink
                to={page.path}
                style={{ textDecoration: "none", margin: "0 10px" }}
                key={page.page}
              >
                <Button color="secondary" variant="outlined">
                  {page.page}
                </Button>
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavbarRoot;
