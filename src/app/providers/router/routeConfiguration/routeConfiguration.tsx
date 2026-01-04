import { ErrorBoundaryFallback } from "@app/providers/ErrorBoundary";
import { RouteObject } from "react-router-dom";
import { MainPage } from "@/pages/MainPage";

export const routeConfiguration: RouteObject[] = [
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorBoundaryFallback />,
  },
];
