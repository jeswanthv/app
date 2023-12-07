import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Notary = () => {
  return (
    <>
      <Navbar color="gray.600" type="Notary" />

      <Outlet />
    </>
  );
};

export default Notary;
