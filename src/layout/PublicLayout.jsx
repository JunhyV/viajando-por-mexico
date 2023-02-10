import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import '../styles/layout.css'

const PublicLayout = () => {
  return (
    <div className="layout">
      <Header />
      <div className="layout__outlet">
        <Outlet/>
      </div>
      <Footer />
    </div>
  );
};

export default PublicLayout;
