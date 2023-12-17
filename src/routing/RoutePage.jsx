import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Patient from './../pages/Patient';


function RoutePage() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/patient" element={<Patient />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RoutePage;
