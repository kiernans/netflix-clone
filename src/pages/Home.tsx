import React, { FC } from "react";
import { Link } from "react-router-dom";

const Home: FC = () => {
  return (
    <Link to="browse" style={{ color: "white" }}>
      BROWSE
    </Link>
  );
};

export default Home;
