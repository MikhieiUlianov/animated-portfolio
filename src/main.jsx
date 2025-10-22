import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainPage from "./pages/MainPage.jsx";
import HistoryPage from "./pages/HistoryPage.jsx";
import RootLayout from "./pages/Root.jsx";
import MellstroyGames from "./pages/MellstroyGames.jsx";
import QuizPage from "./pages/QuizPage.jsx";
import { HelmetProvider } from "react-helmet-async";

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
        path: "/game",
        element: <QuizPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);
