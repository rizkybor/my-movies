import React, { Fragment } from "react";

import MovieDetails from "../pages/movie-details";
import Home from "../pages/movie-list";

import { Routes, Route } from "react-router-dom";

export default function RouteIndex() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<MovieDetails />} />
      </Routes>
    </Fragment>
  );
}
