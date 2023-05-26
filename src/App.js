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
import { Accounting } from "./components/Accounting";
import { Payroll } from "./components/Payroll";
import { Tax } from "./components/Tax";
import { Financial } from "./components/FinancialStatm";
import { BusinessPlan } from "./components/BusinessPlan";
import { Share } from "./components/Share";
import { Companies } from "./components/Companies";
import { Letter } from "./components/Letter";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/ContactUs", element: <ContactUs />},
    { path: "/ProductsnSolutions", element: <ProductsnSolutions />},
    { path: "/About", element: <About />},
    { path: "/WebDev", element: <Webdev />},
    { path: "/Marketing", element: <Marketing/>},
    { path: "/Accounting", element: <Accounting/>},
    { path: "/payroll", element: <Payroll/>},
    { path: "/Tax", element: <Tax/>},
    { path: "/Financial", element: <Financial/>},
    { path: "/BusinessPlan", element: <BusinessPlan/>},
    { path: "/Share", element: <Share/>},
    { path: "/Companies", element: <Companies/>},
    { path: "/Letter", element: <Letter/>}

    





    
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
