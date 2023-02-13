import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import '../styles/layout.css'

const PublicLayout = () => {
  return (
    <div className="layout">
      <Header />
      <div className="layout__outlet">
        <Outlet/>
      </div>
    </div>
  );
};

export default PublicLayout;
