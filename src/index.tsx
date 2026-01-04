import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Logo from "./black.svg";
import LogoUrl from "./black.svg?url";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Logo />
      <img src={LogoUrl} alt="User" width={50} height={50} />
    </BrowserRouter>
  </React.StrictMode>
);
