import React from "react";
import { Routes, Route } from "react-router-dom";
import Browse from "./pages/Browse";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/browse" element={<Browse />}></Route>
      </Routes>
    </>
  );
};

export default App;
