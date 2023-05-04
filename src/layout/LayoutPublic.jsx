import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../componentes/Header";

const LayoutPublic = (props) => {
  return (
    <>
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
      <div className="container">
        <Header />
        <Outlet />
      </div>
    </>
  );
};

export default LayoutPublic;
