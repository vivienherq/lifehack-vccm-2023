import React from "react";

import MainNavigation from "../components/ui/MainNavigation";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <MainNavigation />
      <h1>My Home Page</h1>
      <p>Welcome, NAME.</p>
    </>
  );
};

export default HomePage;
