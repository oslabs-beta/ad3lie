import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/pages/Homepage.jsx";
import dictionary from './app/dictionary.js'

export const RouteHook = () => {

  const Container = lazy(() => import(`./components/ChartComponents/JSX/Container.jsx`))

  // Programmatically creating unique routes for all charts in our dictionary
  // getting values from dictionary
  const routes = Object.values(dictionary)
    // create a callback function within reduce method passing passing in properties from dictionary
    .reduce((acc, { type, name, children, properties }) => {
      // for each chart, grab the type, name, children, and properties from dictionary to populate route and container
      acc.push(<Route
        key={type}
        path={type}
        exact element={<Container
          type={type}
          name={name}
          children={children}
          properties={properties} />}
      />);
      return acc;
    }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {routes}
      </Routes>
    </Suspense>
  );
};

export default RouteHook;