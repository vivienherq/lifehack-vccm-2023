import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/landing/Banner";
import MainNavigation from "../components/ui/MainNavigation";

const LandingPage = () => {
  return (
    <>
      <MainNavigation />
      <Banner />
    </>
  );
};

export default LandingPage;
