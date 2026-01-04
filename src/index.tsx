import React from "react";
import { appRouter } from "@app/providers/router";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "@/app/styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <React.Suspense fallback={<div>Loading:)</div>}>
      <RouterProvider router={appRouter} />
    </React.Suspense>
  </React.StrictMode>
);
