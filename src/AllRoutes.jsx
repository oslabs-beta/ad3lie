import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/pages/Homepage.jsx";
import dictionary from './app/dictionary.js'

export const RouteHook = () => {

const Container = lazy(() => import(`./components/ChartComponents/JSX/Container.jsx`))

const routes = Object.values(dictionary).reduce((acc, { type, name, children, properties }) => {
          acc.push( <Route key={type} path={type} exact element={<Container type={type} name={name} children={children} properties={properties} />} /> );
          return acc;
        }, []);

console.log('hi from allroutes')

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={ <Homepage />} />
        {routes}
      </Routes>
    </Suspense>
  );
};

export default RouteHook;