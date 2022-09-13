import React from "react";
import Navbar from "../components/Navbar";
import Suggestion from "../components/Suggestion";

const Browse = () => {
  return (
    <>
      <Navbar />
      <Suggestion title={"Popular on Netflix"} />
      <Suggestion title={"Continue Watching for..."} />
      <Suggestion title={"Trending Now"} />
      <Suggestion title={"Animation"} />
    </>
  );
};

export default Browse;
