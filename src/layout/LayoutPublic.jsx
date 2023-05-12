import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../componentes/Header";

const LayoutPublic = (props) => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default LayoutPublic;
