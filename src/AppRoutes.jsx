import React, { Fragment } from 'react'
import { HashRouter } from "react-router-dom";
import AllRoutes from "./AllRoutes";

export default () => (
  <Fragment>
    <HashRouter>
      <div>
        <AllRoutes />
      </div>
    </HashRouter>
  </Fragment>
);

