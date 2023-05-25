import React from "react";
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from "./components/Home";
import ScrollToTop from "./ScrollToTop";
import { ContactUs } from "./components/ContactUs";
import {ProductsnSolutions} from "./components/ProductsnSolutions"
import { About } from "./components/About";
import { Webdev } from "./components/WebDev";
import { Marketing } from "./components/Marketing";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/ContactUs", element: <ContactUs />},
    { path: "/ProductsnSolutions", element: <ProductsnSolutions />},
    { path: "/About", element: <About />},
    { path: "/WebDev", element: <Webdev />},
    { path: "/Marketing", element: <Marketing/>}
    
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
