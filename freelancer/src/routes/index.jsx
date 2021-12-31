import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Application from '../containers/App/App';
import PortfolioContainer from '../containers/PorfolioContainer/PortfolioContainer';


export function AppRoutes() {
  return (
    <div>
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Application />} />
        <Route path="/portfolio" element={<PortfolioContainer />} />
      </Routes>
    </div>
  );
}