import React from "react";
import Navbar from "./navbar";
import Footer from "./footer"
import { Outlet } from "react-router-dom";
function Mainlayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Mainlayout;
