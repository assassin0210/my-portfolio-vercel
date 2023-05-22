import { useRoutes } from "react-router-dom";
import { LayoutContainer } from "./common/Layout";
import React from "react";
import { AboutMe } from "./components/AboutMe";
import { ContactMe } from "./components/ContactMe";
import { MyWorks } from "./components/MyWorks";
import { Resume } from "./components/Resume";

export const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <LayoutContainer />,
      children: [
        {
          index: true,
          element: <AboutMe />,
        },
        {
          path: "contacts",
          element: <ContactMe />,
        },
        {
          path: "my-works",
          element: <MyWorks />,
        },
        {
          path: "resume",
          element: <Resume />,
        },
      ],
    },
  ]);
};
