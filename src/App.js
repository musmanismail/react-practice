import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routerConfig } from "./routes/routerConfig";

import "bootstrap/dist/css/bootstrap.css";

const router = createBrowserRouter(routerConfig);

const App = () => {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <RouterProvider router={router} />
      </div>
    </React.Fragment>
  );
};

export default App;
