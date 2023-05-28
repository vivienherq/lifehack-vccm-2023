import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <h1>Hello there!</h1>
      <Link to="/login">Log In</Link>.
    </>
  );
};

export default LandingPage;
