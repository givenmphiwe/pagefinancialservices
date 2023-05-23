import React from "react";
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import { Home } from "./components/Home";

import ScrollToTop from "./ScrollToTop";


const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  );
};

export default AppWrapper;

// i think the part of complete the part of the complete and do more is great and is noo more greater tha this..
