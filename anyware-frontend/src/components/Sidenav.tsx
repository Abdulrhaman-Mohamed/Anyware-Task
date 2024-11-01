import * as React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";

import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import HomeIcon from "@mui/icons-material/Home";
import QuizIcon from "@mui/icons-material/Quiz";
import CampaignIcon from "@mui/icons-material/Campaign";
import { NavLink } from "react-router-dom";

const drawerWidth = 240;

const pages = [
  { path: "/dashboard", page: "Dasboard", icon: <HomeIcon /> },
  { path: "/quiz", page: "Quiz", icon: <QuizIcon /> },
  { path: "/announcement", page: "Announcement", icon: <CampaignIcon /> },
];

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

export default function Sidenav() {
  const [open, setOpen] = React.useState(true);

  const handleWindowSizeChange = () =>
    setOpen(window.innerWidth < 700 ? false : true);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const activeLinkHandler = ({ isActive }) => {
    return isActive ? "active-link" : 'text-white';
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          {open && (
            <Typography padding={3} variant="h5" fontWeight={700} color="white">
              Study.com
            </Typography>
          )}
          <IconButton onClick={() => setOpen((prev) => !prev)}>
            {open ? (
              <ChevronLeftIcon color="white" />
            ) : (
              <ChevronRightIcon color="white" />
            )}
          </IconButton>
        </DrawerHeader>
        <List>
          {pages.map((page, index) => (
            <NavLink
              className={activeLinkHandler}
              key={index}
              // style={{ textDecoration: "none", color: "white" }}
              to={page.path}
            >
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={[
                    {
                      minHeight: 48,
                      px: 2.5,
                      ".active-link &": {
                        color: "#15597E",
                        backgroundColor: "white !important",
                      },
                      ":hover": {
                        color: "#15597E !important",
                        backgroundColor: "white !important",
                      },
                      transition: "all ease-in-out 300ms",
                    },
                    open
                      ? {
                          justifyContent: "initial",
                        }
                      : {
                          justifyContent: "center",
                        },
                  ]}
                >
                  {page.icon}
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: "center",
                      },
                      open
                        ? {
                            mr: 3,
                          }
                        : {
                            mr: "auto",
                          },
                    ]}
                  ></ListItemIcon>
                  <ListItemText
                    primary={page.page}
                    sx={[
                      open
                        ? {
                            opacity: 1,
                          }
                        : {
                            opacity: 0,
                          },
                    ]}
                  />
                </ListItemButton>
              </ListItem>
            </NavLink>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
