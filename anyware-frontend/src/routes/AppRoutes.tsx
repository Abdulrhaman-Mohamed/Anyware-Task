import { useRoutes } from "react-router-dom";

import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import Quiz from "../pages/Quiz/Quiz";
import Announcement from "../pages/Announcement/Announcement";
import AuthLayout from "../layout/AuthLayout";
import RootLayout from "../layout/RootLayout";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import RequiredAuth from "../hoc/RequireAuth";

const AppRoutes = () => {
  const routes = useRoutes([
    {
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/sign-in",
          element: <SignIn />,
        },
        {
          path: "/sign-up",
          element: <SignUp />,
        },
      ],
    },
    {
      element: RequiredAuth({ component: AuthLayout }),
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/quiz",
          element: <Quiz />,
        },
        {
          path: "/announcement",
          element: <Announcement />,
        },
      ],
    },
  ]);
  return routes;
};

export default AppRoutes;
