import React, { Suspense } from "react";
// import { setMenu, MenuItem } from "../store/slice";
import { useSelector } from 'react-redux'
import { Route, Switch } from "react-router-dom";

// import {BarChart} from './components/Charts/BarChart/JSX/BarChart'

export const RouteHook = () => {
  // Dispatch to fetch the menu object from the backend
  // const dispatch = useDispatch();
  // dispatch(setMenu());

  // Select the menu and items from Redux
  // const items = useSelector((state) => state.routes.items);
  const charts = useSelector((state) => state.charts);

  return (
    <Suspense fallback={<h1>~suspense~</h1>}>
      <Switch>
        {charts.map(({ type, name, children, properties }) => (
          <Route
            key={type}
            path={type}
            children={children}
            properties={properties}
            // element={React.lazy(() => import(`./components/Charts/${name}/JSX/${name}Container`))}
            element={React.lazy(() => import(`./components/ChartComponents/Container`))}
          />
        ))}
      </Switch>
    </Suspense>
  );
};

export default RouteHook;