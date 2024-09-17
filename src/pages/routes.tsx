import { createBrowserRouter } from "react-router-dom";
import { LayoutUsers } from "./LayoutUsers";
import { UsersTable } from "./components/UsersTable";
import { Information } from "./components/Information";
import { ErrorPage } from "./components/ErrorPage";

export const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <LayoutUsers />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <UsersTable />,
        },
        {
          path: "/information/",
          element: <Information />,
        },
      ],
    },
  ],
  {
    basename: "/user-management/",
  }
);
