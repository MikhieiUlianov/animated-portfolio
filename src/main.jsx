import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainPage from "./pages/mainPage.jsx";
import HistoryPage from "./pages/HistoryPage.jsx";
import RootLayout from "./pages/Root.jsx";
import MellstroyGames from "./pages/MellstroyGames.jsx";
import SocialsPage from "./pages/SocialsPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <MainPage /> },
      {
        path: "/history",
        element: <HistoryPage />,
      },
      {
        path: "/mellstroy-games",
        element: <MellstroyGames />,
      },
      {
        path: "/socials",
        element: <SocialsPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
