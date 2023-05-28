import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to='/page'>Dummy Page</Link>.
      </p>
    </>
  );
};

export default HomePage;
