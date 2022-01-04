import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import App from '../containers/App/App';
import PortfolioContainer from '../containers/PorfolioContainer/PortfolioContainer';


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/portfolio/:slug" element={<PortfolioContainer />} />
      <Route path="*" element={<h1>404 not found</h1>} />
    </Routes>
  );
}